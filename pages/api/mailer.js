/* eslint-disable import/no-anonymous-default-export */
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport(
  {
    host: process.env.NEXT_PUBLIC_EMAIL_HOST,
    port: process.env.NEXT_PUBLIC_EMAIL_PORT,
    secure: true,
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL_LOGIN,
      pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
    },
  },
  {
    from: `«ООО» Донтехсвязь🌐 <${process.env.NEXT_PUBLIC_EMAIL_LOGIN}>`,
  }
);

export default async (req, res) => {
  const { phone, userFrom, email, address } = JSON.parse(req.body);

  if (!phone) res.status(400).json({ status: "no phone" });
  if (!userFrom) res.status(400).json({ status: "no userFrom" });

  try {
    await transporter.sendMail({
      to: "playboi.2000@mail.ru",
      subject: `🖖 Новая заявка`,
      html: `
              <p style='font-size: 25px; margin-bottom: 10px'>
                Заявка из: <br/> <strong>${userFrom}</strong>
              </p>
              <p><strong>📞Телефон: </strong> ${phone}</p>
              <p><strong>Email: </strong> ${email || "не указан"}</p>
              <p><strong>Адрес: </strong> ${address || "не указан"}</p>
            `,
    });

    res.status(200).json({ phone, status: "ok" });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ ...err, customInfo: "mailer failed" });
  }
};
