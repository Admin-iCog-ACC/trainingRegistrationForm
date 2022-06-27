// Next.js API route support: https://nextjs.org/docs/api-routes/introduction




// const mail = require('@sendgrid/mail');
// mail.setApiKey(process.env.SENDGRID_API_KEY);

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}



// export default function handler (req, res) {
//   res.status(200).json({message:"dsds"});
//   const body = JSON.parse(req.body);
//   // console.log(body);

  const message = `
  Thank you for Registering! Please fill out the following form: \r\n \r\n
  www.google.com \r\n
  
`;

// mail.send(
//   {
//     to: body.emailAddress,
//     from: 'info@icogacc.com',
//     subject: 'Thank you for Registering!',
//     text: "Thank you for Registering! Please fill out the following form",
//     html: message.replace(/\r\n/g, '<br>'),
//   }
// );

//   res.status(200).json({status: 'Ok'});
// } 

