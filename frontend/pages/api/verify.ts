const sgMail = require('@sendgrid/mail')

export default async function(req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  const { email } = req.body

  const verifyEmail = {
    to: 'info@accipitersystems.com',
    from: 'info@accipitersystems.com',
    subject: `New Login! Please verify email.`,
    html: `
      <h3>New Email Login</h3>
      <p>There was a new email login on Accipiter.com: ${email}</p>
      <br/>
      <p>In order to whitelist this email for PDF access, go to:</p>
      <a href="https://accipiter.sanity.studio/desk/emails">https://accipiter.sanity.studio/desk/emails</a>
      <br/>
      <p>On that page, just click the "Create new emails" button on the top-right, add the new email to the title, click "generate" for the slug, then hit "publish".</p>
      <br/>
      <p>If you are having trouble whitelisting emails, please contact <a href="mailto:Elliott@coopallc.com">Elliott@coopallc.com</a>.</p>
    `
  }

  try {
    await sgMail.send(verifyEmail)
    res.status(200).send('Message sent successfully.')
  } catch (error) {
    console.log('ERROR', error)
    res.status(400).send('Message not sent.')
  }
}
