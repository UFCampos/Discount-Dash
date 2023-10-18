import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "federicofof305@gmail.com",
    pass: "R F M L YFEM CUX V AGVT",
  },
});

export const welcomeMail = (name: string, email: string) => {
  return transport
    .sendMail({
      subject: "✨🎉Bienvenido🎉✨",
      bcc: [`${email}`],
      html: `<h3>Bienvenido ${name}</h3>
            <p>¡Hola! ¡Bienvenido a nuestra tienda en línea! Estamos emocionados de tenerte aquí. Explora nuestra amplia gama de productos y encuentra lo que necesitas al mejor precio. ¡Feliz compra!</p>
          `,
    })
    .then((response) => {
      console.log("Aceptado => ", response.accepted);
      console.log("Rechazado => ", response.rejected);
      return true;
    })
    .catch((error) => error);
};
