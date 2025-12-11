const nodemailer = require('nodemailer');

async function sendMail ({ name, email, subject, text}) {

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: { user: process.env.MAIL_USER, pass: process.env.MAIL_PASS,}
    });

    const mailOptions = {
        from: email,
        to: process.env.MAIL_USER,
        subject: `Contact form: ${subject}`,
        text: `
        Name: ${name}
        Email: ${email}
        Message:
        ${text}
        `
    };

    return transporter.sendMail(mailOptions);
}

module.exports = sendMail