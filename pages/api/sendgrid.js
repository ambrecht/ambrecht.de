import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    await sendgrid.send({
      to: 'tino@ambrecht.de', // Your email where you'll receive emails
      from: 'tino-ambrecht@hotmail.de', // your website email address here
      subject: `${req.body.name} hat dir eine Nachricht geschickt`,
      html: `${req.body.message}`,
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: '' });
}

export default sendEmail;
