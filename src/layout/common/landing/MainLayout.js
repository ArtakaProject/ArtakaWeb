import React from "react";
import {
  UserCircleIcon,
  UserIcon,
} from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import Artaka from "../assets/Artaka.png";

export default function landing() {
  return (
    <div>
      <div className="flex flex-col h-screen">
        <div className=" bg-purple-800 align-middle justify-center w-full h-16"></div>
        <div className="bg-gray-200 w-full flex-1 items-center">
          <div className="bg-white lg:w-2/4 m-auto my-20 text-center ">
            <img src={Artaka} className="w-72 h-16 m-auto mb-28" />
            <p className="mb-8"> Kelola Penjualan dan Pengeluaran Toko Anda </p>
            <button className=" w-96 h-12 px-3 m-5 bg-purple-800 hover:bg-blue-700 text-white text-left rounded-full">
              <UserIcon
                className="w-9 py-1.5 mr-28  inline-block text-white"
                aria-hidden="false"
              />
              Masuk Akun
            </button>
            <p className="my-0"> atau jika belum terdaftar </p>
            <button className=" w-96 h-12 px-3 m-5 bg-purple-800 hover:bg-blue-700 text-white text-left rounded-full">
              <UserCircleIcon
                className="w-9 py-1.5 mr-28  inline-block text-white"
                aria-hidden="false"
              />
              Daftar Akun
            </button>
            <p className="mx-32">
              {" "}
              Dengan melanjutkan registrasi ini, anda setuju dengan Ketentuan
              dan Kebijakan Privasi Kami{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}