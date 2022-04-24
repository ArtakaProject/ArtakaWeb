import React, { useState, useEffect } from "react";
import { LockClosedIcon } from "@heroicons/react/solid";
import { useNavigate, useLocation } from 'react-router-dom';
import { useFormik } from "formik";
import * as Yup from "yup";
import "yup-phone";
import { useDispatch, useSelector } from "react-redux";
import { doSigninRequest } from "../redux/actions/User";
import { Link } from "react-router-dom";
import ArtakaClear from "../assets/ArtakaClear.png";
import ClipLoader from "react-spinners/ClipLoader";

export default function Login() {
  let navigate = useNavigate();
  let location = useLocation();
  let from = "/artaka/seller/cashier";

  const dispatch = useDispatch();
  const { message, isLoggedIn } = useSelector((state) => state.userState);

  useEffect(() => {
    if (isLoggedIn){
      navigate(from, { replace: true })
    }

  }, [isLoggedIn])

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

   const toggleVisibility = () => {
    setShowPassword(showPassword ? false : true);
  };
  
  const validationSchema = Yup.object().shape({
    user_id: Yup.string()
      .phone("ID",true,"Nomor Handphone Anda Tidak Sesuai")
      .required("Masukkan Nomor Handphone Anda"),
    secret_password: Yup.string().required("Masukkan Password Anda"),
  });

  const formik = useFormik({
    initialValues: {
      user_id: "",
      secret_password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log(values);
      setLoading(loading ? false : true);
      let payload = {
        user_id: values.user_id,
        secret_password: values.secret_password
      };

      let convert = (payload.user_id.slice(0,1) === "0") ? "+62" + payload.user_id.slice(1) : payload.user_id;

      payload = {
        user_id: convert,
        secret_password: values.secret_password
      };

      dispatch(doSigninRequest(payload)) 

      setTimeout(() => {
        setLoading(false)
      }, 500) ;   
    }
  });

  return (
    <>
      <div className="mt-20 sm:mt-14 lg:mt-0 lg:col-span-6">
        <div className="bg-white sm:max-w-md sm:w-auto sm:mx-auto sm:rounded-lg sm:overflow-hidden">
          <div className="px-4 py-8 sm:px-10">
            <div>
              <div className="mt-1 grid grid-cols-3 gap-3">
                <span className="sr-only">Workflow</span>
                <img
                  className="h-8 ml-32 w-auto sm:h-8 sm:items-center"
                  src={ArtakaClear}
                  alt=""
                />
              </div>
              <p className=" text-3xl pt-4 font-extrabold text-gray-700 text-center">
                Sign in to Your Account
              </p>
            </div>

            <div className="mt-8 relative">
              <form
                action="#"
                method="POST"
                className="space-y-6"
                onSubmit={formik.handleSubmit}
              >
                <div>
                  <label htmlFor="mobile-or-email" className="sr-only">
                    Handphone
                  </label>
                  <input
                    type="text"
                    name="user_id"
                    id="user_id"
                    autoComplete="off"
                    placeholder="Handphone"
                    value={formik.values.user_id}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-lg"
                  />
                  {formik.touched.user_id && formik.errors.user_id ? (
                    <div className="error -mb-4 text-xs text-red-600">
                      {formik.errors.user_id}
                    </div>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="secret_password"
                    name="secret_password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    autoComplete="current-password"
                    value={formik.values.secret_password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-lg"
                  />
                  {formik.touched.secret_password &&
                  formik.errors.secret_password ? (
                    <div className="error -mb-4 text-xs text-red-600">
                      {formik.errors.secret_password}
                    </div>
                  ) : null}
                   {message ? (
                  <div className="-mb-4 text-xs text-red-600">{message}</div>
                ) : null}
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
                      className="font-medium text-purple-700 hover:text-indigo-500"
                    >
                      Forgot your password?
                    </a>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-700 hover:bg-indigo-500 hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onSubmit={formik.handleSubmit}
                  >
                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                      <LockClosedIcon
                        className="h-5 w-5 text-indigo-500 group-hover:text-purple-700"
                        aria-hidden="true"
                      />
                    </span>
                    {loading ? <ClipLoader size={20} color={"#000000"} loading={loading}/> : "SIGN IN"}
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <p
                      className="ml-2 block text-sm text-gray-900"
                    >
                      Belum Punya Akun?
                    </p>
                  </div>

                  <div className="text-sm">
                    <Link
                      to="/artaka/signup"
                      className="font-medium text-purple-700 hover:text-indigo-500"
                    >
                      Daftar Sekarang
                    </Link>
                  </div>
                </div>
              </form>

              <button
                  className="bg-white text-purple-700 hover:text-indigo-500 text-xs font-semibold absolute bottom-40 right-4"
                  onClick={toggleVisibility}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
