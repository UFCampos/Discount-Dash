const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "discountdash000@gmail.com",
    pass: "nwob niky qwpn maqr",
  },
});

export const welcomeMail = (name: string, email: string) => {
  return transport
    .sendMail({
      subject: "account created",
      bcc: [email],
      html: `<h3>✨🎉Welcome ${name}✨🎉</h3>
            <p>Hello! Welcome to our online store! We are excited to have you here. Explore our wide range of products and find what you need at the best price. Happy shopping!</p>
          `,
    })
    .then((response: any) => {
      console.log("Aceptado => ", response.accepted);
      console.log("Rechazado => ", response.rejected);
      return true;
    })
    .catch((error: any) => error);
};
