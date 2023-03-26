import { useState } from "react";
import { generateCaptcha } from "../utils/constants";
import { TbReload } from "react-icons/tb";

const Captcha = () => {
  const [captcha, changeCaptcha] = useState(generateCaptcha());

  return (
    <div>
      <div className="flex gap-4 text-2xl items-center">
        <div className="h-12 flex items-center px-4">
          <h3>{captcha}</h3>
        </div>
        <button onClick={() => changeCaptcha(generateCaptcha())}>
          <TbReload size={32} />
        </button>
      </div>
    </div>
  );
};
export default Captcha;
