import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

import MailerConfig from "./mailer.config";

const mailConfig =
    process.env.NODE_ENV === "production" ? MailerConfig.production : MailerConfig.development;

const transporter = nodemailer.createTransport(mailConfig);

const sendMailWrapper = async (mail: Mail.Options): Promise<void> => {
    try {
        await transporter.sendMail(mail);
    } catch (error) {
        console.log(error);
    }
};

export default sendMailWrapper;