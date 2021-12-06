import React, { Fragment, useRef, useState, useEffect } from "react";
import { LockClosedIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { doSigninRequest } from "../redux/actions/User";
import { toast } from "react-toastify";
import { Redirect } from "react-router-dom";
import ArtakaClear from "../assets/ArtakaClear.png";

export default function Login(props) {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.userState.status);

  const [values, setValues] = useState({
    user_id: "",
    secret_password: "",
  });

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      user_id: values.user_id,
      secret_password: values.secret_password,
    };

    dispatch(doSigninRequest(payload));
  };

  if (status) {
    return <Redirect to={"/"} />;
  }
  return (
    <>
      <div className=" mt-32 sm:mt-24 lg:mt-0 lg:col-span-6">
        <div className=" bg-white sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden">
          <div className="px-4 py-8 sm:px-10">
            <div>
              <div className="mt-1 grid grid-cols-3 gap-3">
                <a href="#">
                  <span className="sr-only">Workflow</span>
                  <img
                    className="h-8 ml-32 w-auto sm:h-8"
                    src={ArtakaClear}
                    alt=""
                  />
                </a>
              </div>
              <p className=" text-3xl pt-4 font-extrabold text-gray-700 text-center">
                Sign in to Your Account
              </p>
            </div>

            <div className="mt-6">
              <form action="#" method="POST" className="space-y-6">
                <div>
                  <label htmlFor="mobile-or-email" className="sr-only">
                    Handphone
                  </label>
                  <input
                    type="text"
                    name="handphone"
                    id="handphone"
                    autoComplete="phone"
                    placeholder="Handphone"
                    value={values.user_id}
                    onChange={handleChange("user_id")}
                    required
                    className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    autoComplete="current-password"
                    value={values.secret_password}
                    onChange={handleChange("secret_password")}
                    required
                    className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="remember-me"
                      className="ml-2 block text-sm text-gray-900"
                    >
                      Remember me
                    </label>
                  </div>

                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Forgot your password?
                    </a>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={onSubmit}
                  >
                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                      <LockClosedIcon
                        className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                        aria-hidden="true"
                      />
                    </span>
                    Sign in
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    
                    <p
                      htmlFor="remember-me"
                      className="ml-2 block text-sm text-gray-900"
                    >
                      Belum Punya Akun?
                    </p>
                  </div>

                  <div className="text-sm">
                    <Link
                      to="/eshopay/signup"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                        Daftar Sekarang
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
