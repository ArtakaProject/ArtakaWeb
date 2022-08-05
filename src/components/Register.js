import React, { Fragment, useRef, useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "yup-phone";

export default function Register(props) {
  const [showPassword, setShowPassword] = useState(false);
  const [showRepassword, setShowRepassword] = useState(false);

  const toggleVisibility = () => {
    setShowPassword(showPassword ? false : true);
  };

  const toggleRepassword = () => {
    setShowRepassword(showRepassword ? false : true);
  };

  const formik = useFormik({
    initialValues: {
      user_id: "",
      employee_name: "",
      email: "",
      secret_password: "",
      repassword: "",
      referral: "",
    },
    validationSchema: Yup.object().shape({
      user_id: Yup.string()
        .required("Masukkan Nomor Handphone Anda")
        .phone("ID", true, "Nomor Handphone Tidak Sesuai"),
      employee_name: Yup.string()
      .required("Masukkan Nama Lengkap Anda"),
      secret_password: Yup.string()
        .required("Masukkan Password Anda")
        .min(6, "Panjang Password Minimal 6 Karakter")
        .matches(/[a-z]/g, "Password Minimal Harus Ada 1 Karakter Kecil")
        .matches(/[A-Z]/g, "Password Minimal Harus Ada 1 Karakter Besar")
        .matches(/[0-9]/g, "Password Minimal Harus Ada 1 Angka")
        .matches(/^\S*$/, "Password Tidak Boleh Mengandung Spasi"),
      repassword: Yup.string()
        .required("Masukkan Konfirmasi Password Anda")
        .oneOf([Yup.ref("secret_password")], "Password Harus Sesuai")
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
        <div className="bg-white -mt-14 sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden">
          <div className="px-4 py-2 sm:px-10">
            <p className=" text-2xl mt-1 font-semibold text-gray-700 text-center">
              Daftar Akun Artaka
            </p>
            <div className="mt-6 relative">
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
                    autoComplete="phone"
                    placeholder="Handphone"
                    value={formik.values.user_id}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="block w-full shadow-sm sm:text-sm border-t-0 border-b-1 border-r-0 border-l-0"
                  />
                   {formik.touched.user_id && formik.errors.user_id ? (
                  <div className="error -mb-4 text-xs text-red-600">
                    {formik.errors.user_id}
                  </div>
                ) : null}
                </div>
               

                <div>
                  <label htmlFor="name" className="sr-only">
                    Nama
                  </label>
                  <input
                    type="text"
                    name="employee_name"
                    id="employee_name"
                    autoComplete="name"
                    placeholder="Nama"
                    value={formik.values.employee_name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="block w-full shadow-sm sm:text-sm border-t-0 border-b-1 border-r-0 border-l-0"
                  />
                    {formik.touched.employee_name && formik.errors.employee_name ? (
                  <div className="error -mb-4 text-xs text-red-600">
                    {formik.errors.employee_name}
                  </div>
                ) : null}
                </div>
              

                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    placeholder="Email (Tidak Wajib)"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="block w-full shadow-sm sm:text-sm border-t-0 border-b-1 border-r-0 border-l-0"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="secret_password"
                    name="secret_password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Buat Password"
                    autoComplete="current-password"
                    value={formik.values.secret_password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="block w-full shadow-sm sm:text-sm border-t-0 border-b-1 border-r-0 border-l-0"
                  />
                  

                  {formik.touched.secret_password &&
                formik.errors.secret_password ? (
                  <div className="error -mb-4 text-xs text-red-600">
                    {formik.errors.secret_password}
                  </div>
                ) : null}
                </div>

                <div>
                  <label htmlFor="password" className="sr-only">
                    RePassword
                  </label>
                  <input
                    id="repassword"
                    name="repassword"
                    type={showRepassword ? "text" : "password"}
                    placeholder="Ulangi Password"
                    autoComplete="current-password"
                    value={formik.values.repassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="block w-full shadow-sm sm:text-sm border-t-0 border-b-1 border-r-0 border-l-0"
                  />
                                    
                  {formik.touched.repassword && formik.errors.repassword ? (
                  <div className="error -mb-4 text-xs text-red-600">
                    {formik.errors.repassword}
                  </div>
                ) : null}
                </div>

                <div>
                  <label htmlFor="name" className="sr-only">
                    Kode Referral
                  </label>
                  <input
                    type="text"
                    name="referral"
                    id="referral"
                    autoComplete="name"
                    placeholder="Kode Referral (Tidak Wajib)"
                    value={formik.values.referral}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="block w-full shadow-sm sm:text-sm border-t-0 border-b-1 border-r-0 border-l-0"
                  />
                </div>

                <div className="flex items-center">
                  <p className="ml-2 block text-xs font-semibold text-gray-900">
                    Kami akan Mengirim SMS OTP Verifikasi
                  </p>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-2xl shadow-sm text-sm font-medium text-white bg-purple-700 hover:bg-indigo-500 hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Daftar Akun
                  </button>
                </div>
              </form>

              <button
                    className="bg-white text-purple-700 hover:text-indigo-500 text-xs font-semibold absolute top-48 right-4 "
                    onClick={toggleVisibility}
                  >
                    {showPassword ? "Hide" : "Show"}
             </button>

             <button
                    className="bg-white text-purple-700 hover:text-indigo-500 text-xs font-semibold absolute top-64 right-4 "
                    onClick={toggleRepassword}
                  >
                    {showRepassword ? "Hide" : "Show"}
            </button>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
