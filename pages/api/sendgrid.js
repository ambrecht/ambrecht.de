import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.NEXT_PUBLIC_API_KEY);

console.log('HIER', `${process.env.NEXT_PUBLIC_API_KEY}`);

async function sendEmail(req, res) {
  try {
    await sendgrid.send({
      to: 'tino-ambrecht@hotmail.de', // Your email where you'll receive emails
      from: `${req.body.email}`, // your website email address here
      subject: `${req.body.name} hat über das Formular geschrieben`,
      html: `<div>${req.body.message}</div>`,
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: '' });
}

export default sendEmail;
