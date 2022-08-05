import React from "react";
import { ChevronLeftIcon } from "@heroicons/react/solid";
import Switch from "@mui/material/Switch";
import { Link } from "react-router-dom";

export default function Courier() {
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

      <div className=" relative py-3 h-24 hover:bg-gray-200 ">
        <p class="text-2xl md:text-3xl text-purple-700 font-normal leading-normal inline-block ml-5">
          Diantar Oleh Penjual{" "}
        </p>
        <div className="absolute top-2 right-24">
          <Switch color="success" defaultChecked />
        </div>
        <p class="mt-2 ml-6 text-sm font-normal text-black">
          Penjual mengantar langsung ke pembeli
        </p>
      </div>

      <div className=" relative py-3 h-24 hover:bg-gray-200 ">
        <p class="text-2xl md:text-3xl text-purple-700 font-normal leading-normal inline-block ml-5">
          Pembeli Pick-Up{" "}
        </p>
        <div className="absolute top-2 right-24">
          <Switch color="success" defaultChecked />
        </div>
        <p class="mt-2 ml-6 text-sm font-normal text-black">
          Pembeli mengambil langsung pesanan di penjual
        </p>
      </div>

      <div className="relative py-3 h-24 hover:bg-gray-200 ">
        <p class="text-2xl md:text-3xl text-purple-700 font-normal leading-normal inline-block ml-5">
          TIKI{" "}
        </p>
        <div className="absolute top-2 right-24">
          <Switch color="success" defaultChecked />
        </div>
        <p class="mt-2 ml-6 text-sm font-normal text-black">
          Kurir online via TIKI
        </p>
      </div>

      <div className="relative py-3 h-24 hover:bg-gray-200 ">
        <p class="text-2xl md:text-3xl text-purple-700 font-normal leading-normal inline-block ml-5">
          JNE{" "}
        </p>
        <div className="absolute top-2 right-24">
          <Switch color="success" defaultChecked />
        </div>
        <p class="mt-2 ml-6 text-sm font-normal text-black">Kurir online via JNE</p>
      </div>

      <div className="relative py-3 h-24 hover:bg-gray-200 ">
        <p class="text-2xl md:text-3xl text-purple-700 font-normal leading-normal inline-block ml-5">
          SiCepat{" "}
        </p>
        <div className="absolute top-2 right-24">
          <Switch color="success" defaultChecked />
        </div>
        <p class="mt-2 ml-6 text-sm font-normal text-black">
          Kurir online via SiCepat
        </p>
      </div>

      <div className="relative py-3 h-24 hover:bg-gray-200 ">
        <p class="text-2xl md:text-3xl text-purple-700 font-normal leading-normal inline-block ml-5">
          Ojek Online{" "}
        </p>
        <div className="absolute top-2 right-24">
          <Switch color="success" defaultChecked />
        </div>
        <p class="mt-2 ml-6 text-sm font-normal text-black">Gojek dan Grab</p>
      </div>

      <div className="relative py-3 h-24 hover:bg-gray-200 ">
        <p class="text-2xl md:text-3xl text-purple-700 font-normal leading-normal inline-block ml-5">
          J&T{" "}
        </p>
        <div className="absolute top-2 right-24">
          <Switch color="success" defaultChecked />
        </div>
        <p class="mt-2 ml-6 text-sm font-normal text-black">Kurir online via J&T</p>
      </div>

      <div className="relative py-3 h-24 hover:bg-gray-200 ">
        <p class="text-2xl md:text-3xl text-purple-700 font-normal leading-normal inline-block ml-5">
          Wahana{" "}
        </p>
        <div className="absolute top-2 right-24">
          <Switch color="success" defaultChecked />
        </div>
        <p class="mt-2 ml-6 text-sm font-normal text-black">
          Kurir online via Wahana
        </p>
      </div>

      <div className="relative py-3 h-24 hover:bg-gray-200 ">
        <p class="text-2xl md:text-3xl text-purple-700 font-normal leading-normal inline-block ml-5">
          Ninja{" "}
        </p>
        <div className="absolute top-2 right-24">
          <Switch color="success" defaultChecked />
        </div>
        <p class="mt-2 ml-6 text-sm font-normal text-black">
          Kurir online via Ninja
        </p>
      </div>

      <div className="relative py-3 h-24 hover:bg-gray-200 ">
        <p class="text-2xl md:text-3xl text-purple-700 font-normal leading-normal inline-block ml-5">
          Pahala{" "}
        </p>
        <div className="absolute top-2 right-24">
          <Switch color="success" defaultChecked />
        </div>
        <p class="mt-2 ml-6 text-sm font-normal text-black">
          Kurir online via Pahala
        </p>
      </div>

      <div className="relative py-3 h-24 hover:bg-gray-200 ">
        <p class="text-2xl md:text-3xl text-purple-700 font-normal leading-normal inline-block ml-5">
          Lion Parcel{" "}
        </p>
        <div className="absolute top-2 right-24">
          <Switch color="success" defaultChecked />
        </div>
        <p class="mt-2 ml-6 text-sm font-normal text-black">
          Kurir online via Lion Parcel
        </p>
      </div>

      <div className="relative py-3 h-24 hover:bg-gray-200 ">
        <p class="text-2xl md:text-3xl text-purple-700 font-normal leading-normal inline-block ml-5">
          POS Indonesia{" "}
        </p>
        <div className="absolute top-2 right-24">
          <Switch color="success" defaultChecked />
        </div>
        <p class="mt-2 ml-6 text-sm font-normal text-black">
          Kurir online via Pos Indonesia
        </p>
      </div>
    </div>
  );
}
