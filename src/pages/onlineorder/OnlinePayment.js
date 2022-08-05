import React from "react";
import { ChevronLeftIcon } from "@heroicons/react/solid";
import Switch from "@mui/material/Switch";
import { Link } from "react-router-dom";

export default function OnlinePayment() {
  return (
    <div>
      <div className="py-4 justify-center min-w-full sm:px-6 lg:px-8">
        <Link
          to="/artaka/seller/cashier"
          className="text-black hover:text-gray-400 text-sm font-medium justify-center"
        >
          <ChevronLeftIcon
            className="h-5 w-5 text-black hover:text-gray-400 inline-block"
            aria-hidden="true"
            href="/artaka/seller/cashier"
          />
          Kembali
        </Link>
      </div>

      <div className="relative py-3 h-24 hover:bg-gray-200 ">
        <p class="text-2xl md:text-3xl text-purple-700 font-normal leading-normal inline-block ml-5">
          Cash on Delivery (COD){" "}
        </p>
        <div className="absolute top-2 right-24">
          <Switch color="success" defaultChecked />
        </div>
        <p class="mt-2 ml-6 text-sm font-normal text-black">
          Terima tunai pada waktu pengantaran
        </p>
      </div>

      <div className=" relative py-3 h-24 hover:bg-gray-200 ">
        <p class="text-2xl md:text-3xl text-purple-700 font-normal leading-normal inline-block ml-5">
          BNI Virtual Account{" "}
        </p>
        <div className="absolute top-2 right-24">
          <Switch color="success" defaultChecked />
        </div>
        <p class="mt-2 ml-6 text-sm font-normal text-black">
          Dana ditransfer ke rekening penjual H+1. Notifikasi otomatis ketika
          pembayaran selesai. Biaya 4.950 dibebankan ke pembeli
        </p>
      </div>

      <div className="relative py-3 h-24 hover:bg-gray-200 ">
        <p class="text-2xl md:text-3xl text-purple-700 font-normal leading-normal inline-block ml-5">
          BCA Virtual Account{" "}
        </p>
        <div className="absolute top-2 right-24">
          <Switch color="success" defaultChecked />
        </div>
        <p class="mt-2 ml-6 text-sm font-normal text-black">
          Dana ditransfer ke rekening penjual H+1. Notifikasi otomatis ketika
          pembayaran selesai. Biaya 4.950 dibebankan ke pembeli
        </p>
      </div>

      <div className="relative py-3 h-24 hover:bg-gray-200 ">
        <p class="text-2xl md:text-3xl text-purple-700 font-normal leading-normal inline-block ml-5">
          BRI Virtual Account{" "}
        </p>
        <div className="absolute top-2 right-24">
          <Switch color="success" defaultChecked />
        </div>
        <p class="mt-2 ml-6 text-sm font-normal text-black">
          Dana ditransfer ke rekening penjual H+1. Notifikasi otomatis ketika
          pembayaran selesai. Biaya 4.950 dibebankan ke pembeli
        </p>
      </div>

      <div className="relative py-3 h-24 hover:bg-gray-200 ">
        <p class="text-2xl md:text-3xl text-purple-700 font-normal leading-normal inline-block ml-5">
          MANDIRI Virtual Account{" "}
        </p>
        <div className="absolute top-2 right-24">
          <Switch color="success" defaultChecked />
        </div>
        <p class="mt-2 ml-6 text-sm font-normal text-black">
          Dana ditransfer ke rekening penjual H+1. Notifikasi otomatis ketika
          pembayaran selesai. Biaya 4.950 dibebankan ke pembeli
        </p>
      </div>

      <div className="relative py-3 h-24 hover:bg-gray-200 ">
        <p class="text-2xl md:text-3xl text-purple-700 font-normal leading-normal inline-block ml-5">
          PERMATA Virtual Account{" "}
        </p>
        <div className="absolute top-2 right-24">
          <Switch color="success" defaultChecked />
        </div>
        <p class="mt-2 ml-6 text-sm font-normal text-black">
          Dana ditransfer ke rekening penjual H+1. Notifikasi otomatis ketika
          pembayaran selesai. Biaya 4.950 dibebankan ke pembeli
        </p>
      </div>

      <div className="relative py-3 h-24 hover:bg-gray-200 ">
        <p class="text-2xl md:text-3xl text-purple-700 font-normal leading-normal inline-block ml-5">
          Rekening Pribadi{" "}
        </p>
        <div className="absolute top-2 right-24">
          <Switch color="success" />
        </div>
        <p class="mt-2 ml-6 text-sm font-normal text-black">
          Dana langsung masuk ke rekening pribadi penjual. Pembeli mengirimkan
          bukti pembayaran dan penjual melakukan pengecekan
        </p>
      </div>
    </div>
  );
}
