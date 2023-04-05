import { useState } from "react";
import { BsFillMoonFill } from "react-icons/bs";
import { TbReload } from "react-icons/tb";
import { generateCaptcha } from "../utils/constants";

export const SignUp = () => {
  const [theme, toggleTheme] = useState("black");
  const handleTheme = () =>
    theme === "black" ? toggleTheme("white") : toggleTheme("black");
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
  const handleSubmit = (e) => {
    e.preventDefault();
    validate();
    if (result?.res) return;
    const data = new FormData(e.currentTarget);
    const formData = Object.fromEntries(data);
    const values = Object.values(formData);
    if (values.includes("")) {
      newResult({ msg: "All fields should be non empty", res: false });
      return;
    }
    e.currentTarget.reset();
    newResult({ msg: "Form Submission Successful", res: true });
  };
  return (
    <div
      className={`flex items-center justify-center min-h-screen pb-20 ${
        theme === "black" ? "bg-black  text-white" : "bg-white  text-black"
      }  `}
    >
      <div
        className="absolute top-7 right-7 h-11 w-11 rounded-full hover:scale-105 duration-200 bg-white border-2"
        onClick={handleTheme}
      >
        <BsFillMoonFill
          size={30}
          className="relative left-1.5 top-1.5 text-black"
        />
      </div>
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 lg:px-8 sm:py-16 lg:py-24">
        <div className="">
          <h2 className="text-xl sm:text-3xl text-center font-bold  ">
            Sign Up Form with Captcha
          </h2>
          <form
            className="mt-8 w-[85vw] mx-auto  sm:w-[30rem]"
            onSubmit={handleSubmit}
          >
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="font-medium">
                  Full Name
                </label>
                <div className="mt-2.5">
                  <input
                    name="fullname"
                    className="flex h-12 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-lg placeholder:text-gray-400 "
                    type="text"
                    placeholder="Enter You Full Name"
                  ></input>
                </div>
              </div>

              <div>
                <label htmlFor="email" className="font-medium">
                  Email address
                </label>
                <div className="mt-2.5">
                  <input
                    name="email"
                    className="flex h-12 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-lg placeholder:text-gray-400 "
                    type="email"
                    placeholder="Enter Your Email"
                  ></input>
                </div>
              </div>

              <div>
                <label htmlFor="password" className="font-medium ">
                  Password
                </label>
                <div className="mt-2.5">
                  <input
                    name="password"
                    className="flex h-12 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-lg placeholder:text-gray-400 "
                    type="password"
                    placeholder="Enter Your Password"
                  ></input>
                </div>
              </div>
              <div>
                <div>
                  <div className="flex gap-4 text-2xl items-center">
                    <div className="h-12 w-40 font-semibold bg-red-300 flex items-center justify-center">
                      <h3 className="underline decoration-wavy ">{captcha}</h3>
                    </div>
                    <button type="button" onClick={() => changeCaptcha(generateCaptcha())}>
                      <TbReload size={32} />
                    </button>
                  </div>
                  <div className="flex gap-x-2 items-center mt-2.5">
                    <input
                      name="captcha"
                      className="flex h-12 w-40 sm:w-52 rounded-md border border-gray-300 bg-transparent py-2 px-3 text-lg placeholder:text-gray-400 "
                      type="text"
                      placeholder="Enter Captcha"
                      value={userVal}
                      onChange={(e) => setUserVal(e.target.value)}
                    ></input>
                  </div>
                  <p
                    className={`${
                      result?.res ? "bg-green-400" : "bg-red-400"
                    } px-1 rounded-md break-words w-24 sm:w-full text-center my-2`}
                  >
                    {result?.msg}
                  </p>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center rounded-md bg-indigo-600 px-3.5 py-2.5 font-semibold  text-white hover:bg-indigo-500"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
