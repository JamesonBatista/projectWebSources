var nodemailer = require("nodemailer");

// function EmailSend(to, subject, text) {
var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "batistadado@gmail.com",
    pass: "neo2015@123",
  },
});
var mailOptions = {
  from: ' "Fred Foo 👥"batistadado@gmail.com',
  to: "batistadado@gmail.com",
  subject: "SEND TEST",
  text: "Hello world 🐴", // plaintext body
  html: "<b>Hello world 🐴</b>",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("EMAIL SEND", info.response);
  }
});
