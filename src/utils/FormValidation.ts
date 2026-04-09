// FormValidation.ts

import nodemailer from 'nodemailer';
import sendgridTransport from 'nodemailer-sendgrid-transport';
import mailgunTransport from 'nodemailer-mailgun-transport';

// Define an interface for the form fields
interface FormFields {
    name: string;
    email: string;
    company: string;
    message: string;
}

// Function to validate form fields
const validateFields = (fields: FormFields): string[] => {
    const errors: string[] = [];
    
    if (!fields.name) {
        errors.push('Name is required.');
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!fields.email || !emailRegex.test(fields.email)) {
        errors.push('Valid email is required.');
    }
    
    if (!fields.company) {
        errors.push('Company is required.');
    }
    
    if (!fields.message) {
        errors.push('Message is required.');
    }
    
    return errors;
};

// Function to send email.
const sendEmail = (fields: FormFields) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com',
            pass: 'your-email-password',
        }
    });

    const mailOptions = {
        from: fields.email,
        to: 'recipient@example.com',
        subject: `New message from ${fields.name}`,
        text: fields.message,
        html: `<p>Name: ${fields.name}</p><p>Company: ${fields.company}</p><p>Message: ${fields.message}</p>`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log('Error occurred:', error);
        }
        console.log('Email sent successfully:', info.response);
    });
};

// SendGrid example integration.
const sendGridTransportConfig = {
    auth: {
        api_key: 'SENDGRID_API_KEY'
    }
};
const sendGridTransporter = nodemailer.createTransport(sendgridTransport(sendGridTransportConfig));

// Mailgun example integration.
const mailgunTransportConfig = {
    auth: {
        api_key: 'MAILGUN_API_KEY',
        domain: 'MAILGUN_DOMAIN'
    }
};
const mailgunTransporter = nodemailer.createTransport(mailgunTransport(mailgunTransportConfig));


export { validateFields, sendEmail };