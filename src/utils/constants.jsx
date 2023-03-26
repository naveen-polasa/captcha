const generateNumber = (st, en) => {
  const random = Math.ceil(Math.random() * (en - st));
  return random + st;
};

export const generateCaptcha = () => {
  let captcha = "";
  for (let i = 0; i < 9; i++) {
    if (i >= 3 && i < 6) {
      captcha += String(generateNumber(-1, 9));
    }
    if (i >= 0 && i < 3) {
      captcha += String.fromCharCode(generateNumber(96, 122));
    }
    if (i >= 6 && i < 9) {
      captcha += String.fromCharCode(generateNumber(66, 90));
    }
  }
  return captcha;
};
