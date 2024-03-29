const sgMail = require('@sendgrid/mail')

export default async function(req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  const { name, email, phone, message, file } = req.body


  const confirmationEmail = {
    to: email,
    from: 'info@accipitersystems.com',
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
        disposition: "attachment"
      }
    ]
  }

  const notificationEmail = {
    to: 'info@accipitersystems.com',
    from: 'info@accipitersystems.com',
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
        disposition: "attachment"
      }
    ]
  }

  try {
    await sgMail.send(confirmationEmail)
    await sgMail.send(notificationEmail)
    return res.status(200).send('Message sent successfully.')
  } catch (error) {
    console.log('ERROR', error)
    return res.status(400).send('Message not sent.')
  }
}