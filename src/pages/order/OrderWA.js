import React from "react";
import { SearchIcon } from "@heroicons/react/solid";
import { DocumentTextIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

export default function OrderWA() {
  return (
    <>
      <div className="flex w-full bg-purple-800">
        <div className="relative w-8/12 mr-1 mt-1">
          <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
            <SearchIcon
              className="h-5 w-5 ml-5 text-gray-400"
              aria-hidden="true"
            />
          </div>
          <input
            id="search"
            name="search"
            className="block w-full bg-white border border-gray-300 rounded-md py-2 pl-10 pr-3 ml-5 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-rose-500 focus:border-rose-500 sm:text-sm"
            placeholder="Search"
            type="search"
          />
        </div>
      </div>
      <div className="flex flex-row bg-purple-800">
        <div className="basis-1/2 ml-48 mt-3 py-3">
          <Link to="/artaka/seller/order">
            <p className=" text-white font-bold text-xl hover:text-black hover:underline">
              Order Online
            </p>
          </Link>
        </div>
        <div className="basis-1/2 ml-96 mt-3 py-3">
          <Link to="/artaka/seller/orderWA">
            <p className=" text-white font-bold text-xl hover:text-black hover:underline">
              Order Kasir/WA
            </p>
          </Link>
        </div>
      </div>
      <div>
        <DocumentTextIcon className="text-purple-700 w-32 h-32 mt-32 mx-auto"></DocumentTextIcon>
        <div class=" my-1 text-2xl text-purple-700 text-center font-semibold">
          Order Kasir Tersimpan Kosong
        </div>
        <p class="-ml-4 mt-2 mb-7 text-center justify-center">
          Order kasir tersimpan akan muncul jika pembayaran order dilakukan
          setelah layanan selesai, misal di usaha rumah makan
        </p>
      </div>
    </>
  );
}
