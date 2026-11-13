// Vercel Serverless Function for UPMARK Project Enquiries

const escapeHtml = (unsafe: string): string => {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
};

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: 'Method not allowed. Only POST requests are supported.',
    });
  }

  try {
    const {
      fullName,
      businessEmail,
      companyName,
      websiteUrl,
      serviceRequired,
      servicesRequired,
      estimatedBudget,
      approximateBudget,
      projectDescription,
      _botField,
      companyWebsiteConfirm,
    } = req.body || {};

    // 1. Anti-spam honeypot check
    if (_botField || companyWebsiteConfirm) {
      return res.status(200).json({
        success: true,
        message: 'Enquiry processed',
      });
    }

    // 2. Server-side validation & length limits
    if (!fullName || typeof fullName !== 'string' || !fullName.trim() || fullName.length > 100) {
      return res.status(400).json({ success: false, error: 'Valid full name is required.' });
    }
    if (
      !businessEmail ||
      typeof businessEmail !== 'string' ||
      businessEmail.length > 150 ||
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(businessEmail.trim())
    ) {
      return res.status(400).json({ success: false, error: 'A valid business email address is required.' });
    }
    if (!companyName || typeof companyName !== 'string' || !companyName.trim() || companyName.length > 120) {
      return res.status(400).json({ success: false, error: 'Company or business name is required.' });
    }
    if (
      !projectDescription ||
      typeof projectDescription !== 'string' ||
      projectDescription.trim().length < 10 ||
      projectDescription.length > 2000
    ) {
      return res.status(400).json({ success: false, error: 'Project description is required.' });
    }

    const resolvedServices = Array.isArray(servicesRequired)
      ? servicesRequired.map(String).join(', ').slice(0, 200)
      : typeof serviceRequired === 'string' && serviceRequired.trim()
      ? serviceRequired.trim().slice(0, 100)
      : 'Website Development';

    const resolvedBudget =
      typeof estimatedBudget === 'string' && estimatedBudget.trim()
        ? estimatedBudget.trim().slice(0, 100)
        : typeof approximateBudget === 'string' && approximateBudget.trim()
        ? approximateBudget.trim().slice(0, 100)
        : 'Discuss a Custom Budget';

    const enquiryId = `UPM-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    const submissionDate = new Date().toISOString();

    const formattedPayload = {
      enquiryId,
      submissionDate,
      fullName: fullName.trim(),
      businessEmail: businessEmail.trim(),
      companyName: companyName.trim(),
      websiteUrl: typeof websiteUrl === 'string' && websiteUrl.trim() ? websiteUrl.trim().slice(0, 250) : 'Not provided',
      services: resolvedServices,
      budget: resolvedBudget,
      projectDescription: projectDescription.trim(),
      recipient: 'hello@upmarkgrowth.com',
    };

    const resendKey = process.env.RESEND_API_KEY;
    const web3FormsKey = process.env.WEB3FORMS_ACCESS_KEY;
    const formspreeEndpoint = process.env.FORMSPREE_ENDPOINT;

    let emailDelivered = false;

    if (resendKey) {
      try {
        const resendResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${resendKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'UPMARK Enquiries <onboarding@resend.dev>',
            to: ['divyesh@upmarkgrowth.com', 'hello@upmarkgrowth.com'],
            subject: `[UPMARK Project Enquiry] ${escapeHtml(formattedPayload.companyName)} - ${enquiryId}`,
            html: `
              <h2>New Project Enquiry | UPMARK Agency</h2>
              <p><strong>Enquiry Reference:</strong> ${escapeHtml(enquiryId)}</p>
              <p><strong>Full Name:</strong> ${escapeHtml(formattedPayload.fullName)}</p>
              <p><strong>Business Email:</strong> ${escapeHtml(formattedPayload.businessEmail)}</p>
              <p><strong>Company:</strong> ${escapeHtml(formattedPayload.companyName)}</p>
              <p><strong>Website:</strong> ${escapeHtml(formattedPayload.websiteUrl)}</p>
              <p><strong>Service Required:</strong> ${escapeHtml(formattedPayload.services)}</p>
              <p><strong>Budget:</strong> ${escapeHtml(formattedPayload.budget)}</p>
              <hr />
              <h3>Project Description &amp; Requirements:</h3>
              <p style="white-space: pre-wrap;">${escapeHtml(formattedPayload.projectDescription)}</p>
            `,
          }),
        });

        if (resendResponse.ok) {
          emailDelivered = true;
        }
      } catch (err) {
        console.error('[Resend Dispatch Error]:', err);
      }
    }

    if (!emailDelivered && web3FormsKey) {
      try {
        const w3fRes = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            access_key: web3FormsKey,
            subject: `New UPMARK Project Enquiry from ${formattedPayload.companyName}`,
            from_name: formattedPayload.fullName,
            email: formattedPayload.businessEmail,
            message: `Company: ${formattedPayload.companyName}\nWebsite: ${formattedPayload.websiteUrl}\nService: ${formattedPayload.services}\nBudget: ${formattedPayload.budget}\n\nProject Description:\n${formattedPayload.projectDescription}`,
          }),
        });

        if (w3fRes.ok) emailDelivered = true;
      } catch (err) {
        console.error('[Web3Forms Dispatch Error]:', err);
      }
    }

    if (!emailDelivered && formspreeEndpoint) {
      try {
        const fsRes = await fetch(formspreeEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(formattedPayload),
        });

        if (fsRes.ok) emailDelivered = true;
      } catch (err) {
        console.error('[Formspree Dispatch Error]:', err);
      }
    }

    if ((resendKey || web3FormsKey || formspreeEndpoint) && !emailDelivered) {
      return res.status(502).json({
        success: false,
        error: 'Failed to deliver enquiry through configured email provider. Please email hello@upmarkgrowth.com directly.',
      });
    }

    return res.status(200).json({
      success: true,
      configured: Boolean(resendKey || web3FormsKey || formspreeEndpoint),
      enquiryId,
      message:
        'Thank you for reaching out to UPMARK. Your project enquiry has been received. We will review your requirements and get back to you.',
    });
  } catch (error: any) {
    console.error('[Enquiry Handler Error]:', error);
    return res.status(500).json({
      success: false,
      error: 'An unexpected server error occurred while processing your enquiry. Please email hello@upmarkgrowth.com.',
    });
  }
}
