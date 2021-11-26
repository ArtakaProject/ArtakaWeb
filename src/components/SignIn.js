import React from "react";
import ArtakaClear from "../assets/ArtakaClear.png";
import { PhoneIcon, LockClosedIcon } from "@heroicons/react/solid";

export default function SignIn() {
  return (
    <div>
      <div className="flex flex-col h-screen">
        <div className=" bg-gray-400 align-middle justify-center w-full h-20">
          <img
            src={ArtakaClear}
            className="w-36 h-8 mt-3 ml-16 bg-gray-400"
            alt="ArtakaClear"
          />
        </div>
        <div className="bg-gray-200 w-full flex-1 items-center">
          <div className="bg-gray-200 w-full lg:w-2/4 mx-auto rounded-lg lg:my-20 px-4 py-4 text-center ">
            <img
              className="m-auto h-24 w-96 mb-6"
              src={ArtakaClear}
              alt="ArtakaClear"
            />
            <h2 className="mt-6 text-center text-2xl font-extrabold text-gray-900">
              Sign in to Your Account
            </h2>
            <form className="mt-8 space-y-6" action="#" method="POST">
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="username" className="sr-only">
                    Handphone
                  </label>
                  <input
                    id="phone"
                    type="text"
                    //   value={values.user_name}
                    //   onChange={handleChange('user_name')}
                    required
                    className="appearance-none rounded-none relative block w-4/5 px-3 py-2 ml-16 border-b-2 border-black placeholder-gray-500 text-gray-900 align-top focus:z-10 sm:text-sm"
                    placeholder="Handphone"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    //    value={values.user_password}
                    //    onChange={handleChange('user_password')}
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded-none relative block w-4/5 px-3 py-2 ml-16 mt-4 border-b-2 border-black placeholder-gray-500 text-gray-900 focus:z-10 sm:text-sm"
                    placeholder="Password"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center mt-3 ml-16">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-purple-700 focus:ring-indigo-600 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="remember-me"
                      className="ml-2 block text-sm text-gray-900"
                    >
                      Remember me
                    </label>
                  </div>

                  <div className="text-sm mr-16">
                    <a
                      href="#"
                      className="font-medium text-purple-700 hover:text-blue-700"
                    >
                      Forgot your password?
                    </a>
                  </div>
                </div>
              </div>
              <button className=" w-96 h-12 px-3 m-5 bg-purple-800 hover:bg-blue-700 text-white text-left rounded-md">
                <LockClosedIcon
                  className="w-9 py-1.5 mr-28  inline-block text-indigo-700"
                  aria-hidden="false"
                />
                Sign In
              </button>
              <div className="flex items-center justify-between">
                  <div className="flex items-center mt-1 ml-16">
                    <p
                      className="ml-2 block text-sm text-gray-900 font-semibold"
                    >
                      Belum Punya Akun?
                    </p>
                  </div>

                  <div className="text-sm mr-16">
                    <a
                      href="#"
                      className="font-medium text-purple-700 hover:text-blue-700 font-semibold"
                    >
                      Daftar Sekarang
                    </a>
                  </div>
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
