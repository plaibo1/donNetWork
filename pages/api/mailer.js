const nodemailer = require('nodemailer');




export default async (req, res) => {

  try {

    const transporter = nodemailer.createTransport({
      host: 'smtp.mail.ru',
      port: 465,
      secure: true,
        auth: {
          user: 'lyskov.2000@mail.ru',
          pass: 'ZrvGxqkZbWCxyhMUGbUa'
        },
      },
      {
        from: '«ООО» Донтехсвязь🌐 <lyskov.2000@mail.ru>'
      }
    );

    const {phone} = JSON.parse(req.body);

    const msg = null

    const emailRes = await transporter.sendMail({
      to: 'lyskov.2000@mail.ru',
      subject: `🖖 Оставил заявку`,
      html: `
              <p style='font-size: 35px; font-wight: bold; margin-bottom: 10px'>You have a new contact form submission</p>
              <p><strong>Name: </strong> ${phone} 👾</p>
              <p><strong>Phone: </strong> ${phone} 📞</p>
              <p><strong>Message: </strong> ${msg || '---'} 💬</p>
            `,
    });

    res.status(200).json({phone, status: 'ok'})
  }
  catch(err) {
    console.log(err)
    return res.status(400).json({err})
  }
  
}