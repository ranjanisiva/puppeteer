import registerAllureReporter from 'jest-puppeteer-allure/src/registerAllureReporter';

var nodemailer = require("nodemailer");
 
var sender = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'puppeteerlogin23@gmail.com',
    pass: 'gmail@123'
  }
});
 
var mail = {
  from: "puppeteerlogin23@gmail.com",
  to: "puppeteerlogin23@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
  attachments: [
    {
      filename: 'app.csv',
      path: __dirname+ '/app.csv',
      cid: 'uniq-mailtrap.png' 
    }
  ]
};
 
sender.sendMail(mail, function(error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent successfully: "
                 + info.response);
  }
});