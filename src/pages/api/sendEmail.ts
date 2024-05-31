import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { name, email, reason, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER, // Cambia esto a otro email si es necesario
    subject: `Mensaje de contacto: ${reason}`,
    text: `Nombre: ${name}\nEmail: ${email}\nMensaje:\n${message}`,
  };

  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      console.log('Error al enviar el correo:', error); // Agrega este log para imprimir el error
      return res.status(500).json({ error: error.message });
    } else {
      console.log('Correo enviado con éxito'); // Agrega este log para indicar que el correo se envió correctamente
      return res.status(200).json({ message: 'Email enviado con éxito' });
    }
  });
}
