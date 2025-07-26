const nodemailer = require("nodemailer");

exports.handler = async (event) => {
  const data = JSON.parse(event.body);

  const { name, email, message } = data;

  const transporter = nodemailer.createTransport({
    host: "smtpout.secureserver.net", // GoDaddy SMTP
    port: 465,
    secure: true,
    auth: {
      user: "info@pelfilms.in",
      pass: "YOUR_APP_PASSWORD" // Replace with GoDaddy SMTP password or App Password
    },
  });

  const mailOptions = {
    from: '"PEL Films Contact" <info@pelfilms.in>',
    to: "info@pelfilms.in",
    subject: `New Contact from ${name}`,
    html: `
      <h3>New message from pelfilms.in</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong><br/>${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully!" }),
    };
  } catch (error) {
    console.error("Email sending failed:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to send email" }),
    };
  }
};
