const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();

// Middleware para analizar los datos del formulario
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configuración de Nodemailer
const transporter = nodemailer.createTransport({
  service: 'Gmail', // Cambia esto por el servicio de correo que desees utilizar
  auth: {
    user: 'tucorreo@gmail.com',
    pass: 'tucontraseña',
  },
});

// Ruta para manejar el envío del formulario
app.post('/enviar-correo', (req, res) => {
  const { nombre, correo, mensaje } = req.body;

  const mailOptions = {
    from: 'tucorreo@gmail.com',
    to: 'destinatario@gmail.com',
    subject: 'Nuevo mensaje de contacto',
    text: `Nombre: ${nombre}\nEmail: ${correo}\nMensaje: ${mensaje}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error al enviar el correo electrónico:', error);
      res.status(500).send('Error al enviar el correo electrónico');
    } else {
      console.log('Correo electrónico enviado:', info.response);
      res.status(200).send('Correo electrónico enviado con éxito');
    }
  });
});

// Iniciar el servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor Node.js escuchando en el puerto ${port}`);
});
