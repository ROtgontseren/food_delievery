
import nodemailer from"nodemailer";


const transport = nodemailer.createTransport({
  service:"gmail",
  host:"smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "rotgontseren@gmail.com",
    pass: "bkkcqoqdxscyfzkj",
  },
});

export const sendEmail =async (email: string, subject: string) => {
    console.log(process.env.EMAIL_PASSWORD)
    console.log(process.env.EMAIL_USER)
    const info = await transport.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: generateTemplate(email), // html body
      });
 }


 const generateTemplate = (name: string) => {
    return`
    <div>
       <h1>${name}</h1>
       <p>hello</p>
       <a href="http://www.google.com">b1</a>
    <div>
    `
 }