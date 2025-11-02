const sgMail = require("@sendgrid/mail");

export default async function (req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const { name, email, phone, message, file, recaptchaToken } = req.body;

  if (!recaptchaToken) {
    return res.status(400).send("reCAPTCHA token is missing.");
  }

  try {
    const recaptchaResponse = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
      }
    );

    const recaptchaData = await recaptchaResponse.json();

    if (!recaptchaData.success) {
      console.log("reCAPTCHA verification failed:", recaptchaData);
      return res.status(400).send("reCAPTCHA verification failed.");
    }
  } catch (error) {
    console.log("reCAPTCHA verification error:", error);
    return res.status(500).send("reCAPTCHA verification error.");
  }

  const confirmationEmail = {
    to: email,
    from: "info@accipitersystems.com",
    subject: `Application was successful!`,
    html: `
      <p>Thank you for applying! View your application details below.</p>
      <br/>
      <h3>Your submission:</h3>
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
      <p>Message: ${message}</p>
    `,
    attachments: [
      {
        content: file,
        filename: "attachment.pdf",
        type: "application/pdf",
        disposition: "attachment",
      },
    ],
  };

  const notificationEmail = {
    to: "info@accipitersystems.com",
    from: "info@accipitersystems.com",
    subject: `New Application Form Submission - ${email}`,
    html: `
      <p>New application form submission from ${name}.</p>
      <br/>
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
      <p>Message: ${message}</p>
    `,
    attachments: [
      {
        content: file,
        filename: "attachment.pdf",
        type: "application/pdf",
        disposition: "attachment",
      },
    ],
  };

  try {
    await sgMail.send(confirmationEmail);
    await sgMail.send(notificationEmail);
    return res.status(200).send("Message sent successfully.");
  } catch (error) {
    console.log("ERROR", error);
    return res.status(400).send("Message not sent.");
  }
}
