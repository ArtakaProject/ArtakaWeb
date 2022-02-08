import React from 'react';
import { ChevronLeftIcon } from "@heroicons/react/solid";
import { LocalOffer,Percent } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function SettingPromoPoint() {
  return(
   <div>
       <div className="py-4 justify-center min-w-full sm:px-6 lg:px-8">
        <Link
          to="/artaka/seller/dashboard"
          className="text-black hover:text-gray-400 text-sm font-medium justify-center"
        >
          <ChevronLeftIcon
            className="h-5 w-5 text-black hover:text-gray-400 inline-block"
            aria-hidden="true"
            href="/artaka/seller/dashboard"
          />
          Kembali
        </Link>
      </div>
      <Link to="/artaka/not-found">
        <div className="py-3 h-24 hover:bg-gray-200 ">
          <Percent className="text-purple-700" fontSize="large"/>
          <p class="text-2xl md:text-3xl font-normal leading-normal inline-block ml-5">
            Diskon{" "}
          </p>
          <p class="mt-1 ml-14 text-sm font-extralight text-gray-500">
            Mengelola produk yang akan anda diskon
          </p>
        </div>
      </Link>
      <Link to="/artaka/not-found">
        <div className="py-3 h-24 hover:bg-gray-200 ">
          <LocalOffer className="text-purple-700" fontSize="large" />
          <p class="text-2xl md:text-3xl font-normal leading-normal inline ml-5">
            Program Loyalitas{" "}
          </p>
          <p class="mt-1 ml-14 text-sm font-extralight text-gray-500">
            Program menambah loyalitas pelanggan dengan pemberian poin yang bisa dibelanjakan
          </p>
        </div>
      </Link>
  </div>
  );
}
