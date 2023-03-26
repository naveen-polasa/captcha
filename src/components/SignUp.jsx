import { useState } from "react";
import { BsFillMoonFill } from "react-icons/bs";
import Captcha from "./Captcha";
export const SignUp = () => {
  const [theme, toggleTheme] = useState("black");
  const handleTheme = () =>
    theme === "black" ? toggleTheme("white") : toggleTheme("black");
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
            className="mt-8 w-[80%] mx-auto  sm:w-[30rem]"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="font-medium">
                  Full Name
                </label>
                <div className="mt-2.5">
                  <input
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
                    className="flex h-12 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-lg placeholder:text-gray-400 "
                    type="password"
                    placeholder="Enter Your Password"
                  ></input>
                </div>
              </div>
              <div>
                <Captcha />
              </div>
              <div>
                <button className="w-full inline-flex items-center justify-center rounded-md bg-indigo-600 px-3.5 py-2.5 font-semibold  text-white hover:bg-indigo-500">
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
