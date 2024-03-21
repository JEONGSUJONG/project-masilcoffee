const nodemailer = require("nodemailer");
require("dotenv").config();

const NAVER_EMAIL = process.env.NAVER_EMAIL;
const NAVER_PASSWORD = process.env.NAVER_PASSWORD;

const smtpTransporter = nodemailer.createTransport({
  pool: true,
  maxConnections: 1,
  service: "naver",
  host: "smtp.naver.com",
  port: 587,
  auth: {
    user: NAVER_EMAIL,
    pass: NAVER_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

const sendMail = async (to, num) => {
  if (!to || typeof to !== "string" || !to.includes("@")) {
    return {
      success: false,
      message: "수신자 이메일 주소가 유효하지 않습니다.",
    };
  }

  const expireTime = 300000; // 5분, ms
  const sentTime = new Date();

  const mailOptions = {
    from: NAVER_EMAIL,
    to,
    subject: "MASILCOFFEE: 인증 관련 메일 입니다.",
    html: `
<div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #8B4513; padding: 30px;">
  <div style="background-color: #fff; border-radius: 10px; padding: 20px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); border: 2px solid #8B4513;">
    <h1 style="color: #333; text-align: center;">MASILCOFFEE</h1>
    <p style="color: #555; text-align: center;">아래 인증번호를 입력해주세요</p>
    <div style="text-align: center; padding: 20px 0;">
      <h2 style="color: #ff0000; font-size: 36px; margin: 0;">[ ${num} ]</h2>
    </div>
  </div>
</div>

  `,
  };

  try {
    const result = await smtpTransporter.sendMail(mailOptions);
    return {
      success: true,
      message: "이메일이 발송 되었습니다.",
      sentTime,
      expireTime,
    };
  } catch (error) {
    console.error("이메일 발송 실패:", error);
    return { success: false, message: "이메일 발송 실패" };
  }
};

module.exports = { sendMail };
