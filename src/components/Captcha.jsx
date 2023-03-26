import { useState } from "react";
import { generateCaptcha } from "../utils/constants";
import { TbReload } from "react-icons/tb";

const Captcha = () => {
  const [captcha, changeCaptcha] = useState(generateCaptcha());
  const [userVal, setUserVal] = useState("");
  const [result, newResult] = useState(null);

  const validate = () => {
    if (!userVal) return;
    newResult(
      String(userVal) === captcha
        ? { msg: "Validation Passed", res: true }
        : { msg: "Validation Failed", res: false }
    );
    setUserVal("");
    changeCaptcha(generateCaptcha());
    const timeout = setTimeout(() => {
      newResult(null);
    }, 3000);
    return () => clearTimeout(timeout);
  };

  return (
    <div>
      <div className="flex gap-4 text-2xl items-center">
        <div className="h-12 w-40 font-semibold bg-red-300 flex items-center justify-center">
          <h3 className="underline decoration-wavy ">{captcha}</h3>
        </div>
        <button onClick={() => changeCaptcha(generateCaptcha())}>
          <TbReload size={32} />
        </button>
      </div>
      <div className="flex gap-x-2 items-center mt-2.5">
        <input
          className="flex h-12 w-40 sm:w-52 rounded-md border border-gray-300 bg-transparent py-2 px-3 text-lg placeholder:text-gray-400 "
          type="text"
          placeholder="Enter Captcha"
          value={userVal}
          onChange={(e) => setUserVal(e.target.value)}
        ></input>
        <button
          className="m-2 border-2 rounded-lg px-3 py-1 font-mono"
          onClick={validate}
        >
          Validate
        </button>
        <p
          className={`${
            result?.res ? "bg-green-400" : "bg-red-400"
          } px-1 rounded-md break-words w-24 sm:w-full text-center`}
        >
          {result?.msg}
        </p>
      </div>
    </div>
  );
};
export default Captcha;
