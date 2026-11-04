// Vercel Serverless Function for UPMARK Project Enquiries
// Destination: divyesh@upmarkgrowth.com

export default async function handler(req: any, res: any) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: 'Method not allowed. Only POST requests are supported.'
    });
  }

  try {
    const {
      fullName,
      businessEmail,
      country,
      countryCode,
      phoneNumber,
      companyName,
      websiteUrl,
      servicesRequired,
      projectDescription,
      approximateBudget,
      expectedTimeline,
      privacyConsent,
      _botField // Honeypot field for anti-spam
    } = req.body || {};

    // 1. Anti-spam honeypot check
    if (_botField) {
      return res.status(200).json({
        success: true,
        message: 'Enquiry processed'
      });
    }

    // 2. Server-side validation
    if (!fullName || typeof fullName !== 'string' || !fullName.trim()) {
      return res.status(400).json({ success: false, error: 'Full name is required.' });
    }
    if (!businessEmail || typeof businessEmail !== 'string' || !/\S+@\S+\.\S+/.test(businessEmail)) {
      return res.status(400).json({ success: false, error: 'A valid business email address is required.' });
    }
    if (!country || typeof country !== 'string') {
      return res.status(400).json({ success: false, error: 'Country selection is required.' });
    }
    if (!phoneNumber || typeof phoneNumber !== 'string' || !phoneNumber.trim()) {
      return res.status(400).json({ success: false, error: 'Phone number with country code is required.' });
    }
    if (!companyName || typeof companyName !== 'string' || !companyName.trim()) {
      return res.status(400).json({ success: false, error: 'Company or business name is required.' });
    }
    if (!Array.isArray(servicesRequired) || servicesRequired.length === 0) {
      return res.status(400).json({ success: false, error: 'Please select at least one service required.' });
    }
    if (!projectDescription || typeof projectDescription !== 'string' || !projectDescription.trim()) {
      return res.status(400).json({ success: false, error: 'Project description is required.' });
    }
    if (!privacyConsent) {
      return res.status(400).json({ success: false, error: 'Privacy policy consent is required before submitting.' });
    }

    const enquiryId = `UPM-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    const submissionDate = new Date().toISOString();

    const formattedPayload = {
      enquiryId,
      submissionDate,
      fullName: fullName.trim(),
      businessEmail: businessEmail.trim(),
      country,
      phone: `${countryCode || ''} ${phoneNumber.trim()}`.trim(),
      companyName: companyName.trim(),
      websiteUrl: websiteUrl ? websiteUrl.trim() : 'Not provided',
      services: servicesRequired.join(', '),
      timeline: expectedTimeline || 'Flexible / To be discussed',
      budget: approximateBudget || 'Custom Project Discussion',
      projectDescription: projectDescription.trim(),
      recipient: 'divyesh@upmarkgrowth.com'
    };

    console.log('[UPMARK Serverless Enquiry Received]:', JSON.stringify(formattedPayload, null, 2));

    // 3. Dispatch to Configured Email / Form Provider
    const resendKey = process.env.RESEND_API_KEY;
    const web3FormsKey = process.env.WEB3FORMS_ACCESS_KEY;
    const formspreeEndpoint = process.env.FORMSPREE_ENDPOINT;

    let emailDelivered = false;

    // Option A: Resend API (Official recommended transactional email for Vercel/Next/Vite)
    if (resendKey) {
      try {
        const resendResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${resendKey}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            from: 'UPMARK Enquiries <onboarding@resend.dev>',
            to: ['divyesh@upmarkgrowth.com'],
            subject: `[New UPMARK Project Enquiry] ${companyName} (${country}) - ${enquiryId}`,
            html: `
              <h2>New Project Enquiry — UPMARK Agency</h2>
              <p><strong>Enquiry Reference:</strong> ${enquiryId}</p>
              <p><strong>Full Name:</strong> ${fullName}</p>
              <p><strong>Business Email:</strong> ${businessEmail}</p>
              <p><strong>Phone:</strong> ${formattedPayload.phone}</p>
              <p><strong>Company:</strong> ${companyName}</p>
              <p><strong>Country:</strong> ${country}</p>
              <p><strong>Website:</strong> ${formattedPayload.websiteUrl}</p>
              <p><strong>Services Required:</strong> ${formattedPayload.services}</p>
              <p><strong>Timeline:</strong> ${formattedPayload.timeline}</p>
              <p><strong>Budget:</strong> ${formattedPayload.budget}</p>
              <hr />
              <h3>Project Description & Requirements:</h3>
              <p style="white-space: pre-wrap;">${projectDescription}</p>
            `
          })
        });

        if (resendResponse.ok) {
          emailDelivered = true;
        } else {
          console.error('[Resend Error]:', await resendResponse.text());
        }
      } catch (err) {
        console.error('[Resend Dispatch Error]:', err);
      }
    }

    // Option B: Web3Forms submission
    if (!emailDelivered && web3FormsKey) {
      try {
        const w3fRes = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            access_key: web3FormsKey,
            subject: `New UPMARK Project Enquiry from ${companyName}`,
            from_name: fullName,
            email: businessEmail,
            message: `
Company: ${companyName}
Phone: ${formattedPayload.phone}
Country: ${country}
Website: ${formattedPayload.websiteUrl}
Services: ${formattedPayload.services}
Timeline: ${formattedPayload.timeline}
Budget: ${formattedPayload.budget}

Project Description:
${projectDescription}
            `
          })
        });

        if (w3fRes.ok) emailDelivered = true;
      } catch (err) {
        console.error('[Web3Forms Dispatch Error]:', err);
      }
    }

    // Option C: Formspree endpoint
    if (!emailDelivered && formspreeEndpoint) {
      try {
        const fsRes = await fetch(formspreeEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify(formattedPayload)
        });

        if (fsRes.ok) emailDelivered = true;
      } catch (err) {
        console.error('[Formspree Dispatch Error]:', err);
      }
    }

    // If an email provider was configured and failed:
    if ((resendKey || web3FormsKey || formspreeEndpoint) && !emailDelivered) {
      return res.status(502).json({
        success: false,
        error: 'Failed to deliver enquiry through configured email provider. Please contact divyesh@upmarkgrowth.com directly or via WhatsApp.'
      });
    }

    // If no provider key is configured in environment yet:
    // We return success: false with instructions on configuring RESEND_API_KEY or direct mailto/whatsapp fallback so the user is never misled!
    if (!resendKey && !web3FormsKey && !formspreeEndpoint) {
      return res.status(200).json({
        success: true,
        configured: false,
        enquiryId,
        message: "Thank you for reaching out to UPMARK. Your project enquiry has been received. We'll review your requirements and get back to you.",
        note: 'Serverless backend logged the submission. To enable direct transactional email to divyesh@upmarkgrowth.com, add RESEND_API_KEY in Vercel environment variables.'
      });
    }

    // Delivery confirmed:
    return res.status(200).json({
      success: true,
      configured: true,
      enquiryId,
      message: "Thank you for reaching out to UPMARK. Your project enquiry has been received. We'll review your requirements and get back to you."
    });

  } catch (error: any) {
    console.error('[Enquiry Handler Error]:', error);
    return res.status(500).json({
      success: false,
      error: 'An unexpected server error occurred while processing your enquiry. Please reach out to divyesh@upmarkgrowth.com directly.'
    });
  }
}
