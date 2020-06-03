import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';

import { smtpUsername, smtpPassword, smtpHost, smtpPort } from './config.js';

const router = express.Router();

const transport = {
    host: smtpHost,
    port: smtpPort,
    auth: {
        user: smtpUsername,
        pass: smtpPassword
    }
};

const transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Server is ready to accept messages.');
    }
});

router.post('/mail/send', (req, res, next) => {
    transporter.sendMail({
        from: req.body.name,
        to: smtpUsername,
        subject: 'New message from colin@perepelken.ca contact form',
        text: `Name: ${req.body.name}\nEmail address: ${req.body.email}\nMessage: ${req.body.message}`
    }, (err, data) => {
        if (err) {
            res.json({status: 'fail'});
        } else {
            res.json({status: 'success'});
        }
    })
});

const app = express();
app.use(cors());
app.use(express.json());
app.use('/', router);
app.listen(3002);