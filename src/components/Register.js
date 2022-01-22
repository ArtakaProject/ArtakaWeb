import React, { Fragment, useRef, useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "yup-phone";
import { LockClosedIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import CircularProgress from "@material-ui/core/CircularProgress";
import { doSignupRequest } from "../redux/actions/User";
import { Password } from "@mui/icons-material";

export default function Register(props) {
   const formik = useFormik({
    initialValues:{
      phone:"",
      nama:"",
      email:"",
      password:"",
      repassword:"",
      referral:""
    },
    validationSchema:Yup.object().shape({
      phone: Yup.string().required("Masukkan Nomor Handphone Anda").phone(null, true, "Nomor Handphone Tidak Sesuai"),
      nama:Yup.string().required("Masukkan Nama Lengkap Anda"),
      password:Yup.string().required("Masukkan Password Anda").min(6,"Panjang Password Minimal 6 Karakter"),
      repassword:Yup.string().required("Masukkan Konfirmasi Password Anda").oneOf([Yup.ref("password")],"Password Harus Sesuai"),
    }),
    onSubmit:values=>{
      alert(JSON.stringify(values,null,2))
    }
  })

  return (
    <>
      <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
        <div className="bg-white -mt-14 sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden">
          <div className="px-4 py-2 sm:px-10">
            <p className=" text-2xl mt-1 font-semibold text-gray-700 text-center">
              Daftar Akun Artaka
            </p>
            <div className="mt-6">
              <form action="#" method="POST" className="space-y-6" onSubmit={formik.handleSubmit}>
                <div>
                  <label htmlFor="mobile-or-email" className="sr-only">
                    Handphone
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    autoComplete="phone"
                    placeholder="Handphone"
                    value={formik.values.handphone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    required
                    className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                {formik.touched.phone && formik.errors.phone ? (
                  <span className="error text-xs text-red-600">
                    {formik.errors.phone}
                  </span>
                ) : null}

                <div>
                  <label htmlFor="name" className="sr-only">
                    Nama
                  </label>
                  <input
                    type="text"
                    name="nama"
                    id="nama"
                    autoComplete="name"
                    placeholder="Nama"
                    value={formik.values.nama}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    required
                    className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                {formik.touched.nama && formik.errors.nama ? (
                  <span className="error text-xs text-red-600">
                    {formik.errors.nama}
                  </span>
                ) : null}

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
                    placeholder="Buat Password"
                    autoComplete="current-password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    required
                    className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                {formik.touched.password && formik.errors.password ? (
                  <span className="error text-xs text-red-600">
                    {formik.errors.nama}
                  </span>
                ) : null}
                
                <div>
                  <label htmlFor="password" className="sr-only">
                    RePassword
                  </label>
                  <input
                    id="repassword"
                    name="repassword"
                    type="password"
                    placeholder="Ulangi Password"
                    autoComplete="current-password"
                    value={formik.values.repassword}
                    onChange={formik.handleChange}
                    required
                    className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                {formik.touched.repassword && formik.errors.repassword ? (
                  <span className="error text-xs text-red-600">
                    {formik.errors.nama}
                  </span>
                ) : null}

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
                    className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
