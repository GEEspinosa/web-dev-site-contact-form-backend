// const nodemailer = require("nodemailer");

// async function sendMail({ name, email, subject, text }) {
//   const transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 465,
//     secure: true,
//     auth: { user: process.env.MAIL_USER, pass: process.env.MAIL_PASS },
//   });

//   const mailOptions = {
//     from: email,
//     to: process.env.MAIL_USER,
//     subject: `Contact form: ${subject}`,
//     text: `
//         Name: ${name}
//         Email: ${email}
//         Message:
//         ${text}
//         `,
//   };

//   return transporter.sendMail(mailOptions);
// }

// module.exports = sendMail;


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

