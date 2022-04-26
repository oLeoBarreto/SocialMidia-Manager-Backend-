require('dotenv/config');
const nodeMailer = require('nodemailer');

//const emailUser = c;
//const emailPassword = process.env.EMAIL_PASSOWRD;

async function SendEmail(user, response) {
    let testAccount = await nodeMailer.createTestAccount();

    const transporter = nodeMailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: testAccount.user, // generated ethereal user
            pass: testAccount.pass, // generated ethereal password
        },
    });


    await transporter.sendMail({
        from: 'leobcontato@gmail.com',
        to: user,
        subject: "Seja Bem-Vindo!!",
        text: "Você acabou de se registrar em nossa plataforma! Muito obrigado por nos apoiar!!"
    }).then(info => {
        response.send({ OK: "Email enviado com sucesso para o usuario!" });
        console.log(info);
    }).catch(err => {
        console.error(err);
        response.send({ Erro: err });
    });
}

module.exports = SendEmail;