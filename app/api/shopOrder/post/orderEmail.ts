import { FieldValue } from "firebase/firestore";
import { ProductOrder } from "@/utils/types";

const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "discountdash000@gmail.com",
    pass: "nwob niky qwpn maqr",
  },
});

interface orderData {
  products: ProductOrder[];
  orderDate: FieldValue;
  userId: string;
  shopId: string;
  totalPrice: number;
  orderStatus: string;
}

export const orderEmail = async (userId: string, order: orderData) => {
  console.log("Datos de la order DENTRO:", order);
  const response = await fetch(`http://localhost:3000/api/users/${userId}`);
  const { email } = await response.json();

  const { totalPrice, products } = order;

  let productsHtml = products
    .map((product) => {
      return `<li>${product.name}: ${product.price} (Cantidad: ${product.quantity})</li>`;
    })
    .join("");

  return transport
    .sendMail({
      subject: "Payment Completed",
      bcc: [email],
      html: `<h3>Saludos!!!</h3>
            <p>Tu compra fue realizada con exito</p>
            <p>--------------------------------------</p>
            <h4>Datos de Compra</h4>
            <p>Productos Comprados:</p>
            <ul>
            ${productsHtml}
            </ul>
            <p>--------------------------------------</p>
            <p>Total Price:${totalPrice}</p>
          `,
    })
    .then((response: any) => {
      console.log("Aceptado => ", response.accepted);
      console.log("Rechazado => ", response.rejected);
      return true;
    })
    .catch((error: any) => error);
};

// {
//     products: [
//       {
//         productId: 'VWDrCwNoBJHHAEhWdTYA',
//         name: 'Gatorade G ZERO Berry Sports Drink - 28 fl oz Bottle',
//         price: 170,
//         image: 'https://target.scene7.com/is/image/Target/GUEST_09ec86fc-127a-4c60-955e-40d9f13d6db7?wid=1200&hei=1200&qlt=80&fmt=webp',
//         quantity: 1,
//         total: 170
//       }
//     ],
//     orderDate: ServerTimestampFieldValueImpl { _methodName: 'serverTimestamp' },
//     userId: '62i2BGgGoJYICKzGr0MH9hNjDV82',
//     shopId: 'PzIu22SMpIcQGQpcZqF0D92Pvym1',
//     totalPrice: 170,
//     orderStatus: 'Order placed'
//   }
