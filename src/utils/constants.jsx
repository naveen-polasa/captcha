const generateNumber = (st, en) => {
  const random = Math.ceil(Math.random() * (en - st));
  return random + st;
};

export const generateCaptcha = () => {
  let captcha = "";
  for (let i = 0; i < 7; i++) {
    const data = [
      String(generateNumber(-1, 9)),
      String.fromCharCode(generateNumber(96, 122)),
      String.fromCharCode(generateNumber(66, 90)),
    ];
    const op = generateNumber(-1, 2);
    captcha += data[op];
  }
  return captcha;
};
