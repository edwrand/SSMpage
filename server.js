const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
app.use(bodyParser.json());

app.post('/send', async (req, res) => {
    let testAccount = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
            user: testAccount.user,
            pass: testAccount.pass,
        },
    });

    let info = await transporter.sendMail({
        from: '"Contact Form" <form@yourdomain.com>',
        to: "your_email@yourdomain.com",
        subject: `Message from ${req.body.firstName} ${req.body.lastName}`,
        text: `${req.body.message}\n\nReply to: ${req.body.email}`,
    });

    console.log("Message sent: %s", info.messageId);

    res.json({ status: 'ok' });
});

app.listen(3000, () => console.log('Server started on port 3000'));
