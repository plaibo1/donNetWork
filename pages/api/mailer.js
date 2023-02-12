const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.mail.ru',
  port: 465,
  secure: true,
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL_LOGIN,
      pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD
    },
  },
  {
    from: '«ООО» Донтехсвязь🌐 <lyskov.2000@mail.ru>'
  }
);


export default async (req, res) => {
  
  const {phone, userFrom} = JSON.parse(req.body);

  if (!phone) res.status(400).json({status: 'no phone'})
  if (!userFrom) res.status(400).json({status: 'no userFrom'})

  console.log(userFrom)

  try {
    const emailRes = await transporter.sendMail({
      to: 'lyskov.2000@mail.ru',
      subject: `🖖 Новая заявка`,
      html: `
              <p style='font-size: 25px; margin-bottom: 10px'>
                Заявка из: <br/> <strong> ${userFrom}</strong>
              </p>
              <p><strong>📞Телефон: </strong> ${phone}</p>
            `,
    });

    res.status(200).json({phone, status: 'ok'})
  }
  catch(err) {
    console.log(err)
    return res.status(400).json({err})
  }
  
}