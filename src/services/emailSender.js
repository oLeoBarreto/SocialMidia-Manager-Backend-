require('dotenv/config');
const nodemailer = require('nodemailer');

const emailUser = process.env.EMAIL_USER;
const emailPassword = process.env.EMAIL_PASS;

async function SendEmail(userMail) {

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: emailUser,
            pass: emailPassword,
        },
        tls: {
            rejectUnauthorized: false,
        },
    });

    transporter.verify((error, success) => {
        if (error) {
            console.error(error);
        } else {
            console.info("Email server is ready to use!");
        }
    });

    const info = await transporter.sendMail({
        from: 'Suport - Social Midia Manager',
        to: userMail,
        subject: "Seja Bem-Vindo!!",
        text: "Você acabou de se registrar em nossa plataforma! Muito obrigado por nos apoiar!!"
    });

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

}

module.exports = SendEmail;