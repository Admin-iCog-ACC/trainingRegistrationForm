import nodemailer from 'nodemailer';
import { ErrorResponse } from './errorResponse.js';

export const sendEmail = async ({ subject, email }) => {
  const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  const message = `
  <p>Hello! <br />

  Thank you for submitting an application for your child/children for the ICog-ACC 2022
  coding summer camp. <br />

  Please fill out <a href="http://"> this form</a> to finalize your registration. <br />

  If you have any questions you are welcome to contact us at info@icogacc.com.

  Regards.

  </p>
   \r\n
  
`;
  const mailOptions = {
    from: process.env.EMAIL_SENDER,
    to: email,
    subject: subject,
    html: message,
  };

  try {
    const mailInfo = await transporter.sendMail(mailOptions);
    return mailInfo;
  } catch (error) {
    throw new ErrorResponse(error, 400);
  }
};