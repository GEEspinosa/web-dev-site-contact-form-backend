const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendMail({ name, email, subject, text }) {
  return await resend.emails.send({
    from: "Portfolio Contact Form <onboarding@resend.dev>", // Safe default
    to: "gabiespinosa138@gmail.com", // Your inbox
    subject: `Contact form: ${subject}`,
    text: `
Name: ${name}
Email: ${email}

Message:
${text}
    `,
  });
}

module.exports = sendMail;

