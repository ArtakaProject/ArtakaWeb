import React from "react";
import { DocumentTextIcon } from "@heroicons/react/outline";
import { ViewGridIcon, SearchIcon, ViewListIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <div className="py-6 justify-center inline-block min-w-full sm:px-6 lg:px-8">
        <div class="container flex flex-col md:flex-row items-center justify-center px-3 text-gray-700">
          <div class="max-w-screen-lg">
            <div class="flex">
              <button class="flex items-center justify-center px-4 border-r">
                <SearchIcon
                  class="w-6 h-6 text-purple-700"
                  fill="currentColor"
                ></SearchIcon>
              </button>
              <input
                type="text"
                class="px-4 py-2 w-9/12 text-gray-700"
                placeholder="Search"
              />
              <ViewListIcon
                class="w-10 h-10 ml-20 text-purple-700"
                fill="currentColor"
              ></ViewListIcon>
              <ViewGridIcon
                class="w-10 h-10 ml-4 text-purple-700"
                fill="currentColor"
              ></ViewGridIcon>
            </div>
            <DocumentTextIcon className="text-purple-700 w-32 h-32 mt-8 mx-auto"></DocumentTextIcon>
            <div class=" my-1 text-2xl text-purple-700 text-center font-semibold">
              Katalog Produk Kosong
            </div>
            <p class="-ml-4 mt-2 mb-7 text-center justify-center">
              Pilih Tambahan Produk untuk menambahkan katalog produk atau pilih
              Manual untuk langsung berjualan. Anda juga bisa menambahkan
              katalog melalui website https://orderin.id/upload menggunakan
              login nomor handphone dan Password Artaka
            </p>
            <div className="flex items-center justify-between">
              <Link to="/artaka/seller/product/add">
                <button class="px-5 inline py-2 text-sm font-semibold  leading-5 shadow-2xl text-purple-700 transition-colors duration-150 border border-purple-700 focus:outline-none focus:shadow-outline-blue bg-transparent hover:bg-purple-700 hover:text-black hover:border-blue-500 rounded-full">
                  Tambah Produk
                </button>
              </Link>
              <Link to="/artaka/not-found">
                <button class="px-7 inline py-2 text-sm font-semibold leading-5 shadow-2xl text-purple-700 transition-colors duration-150 border border-purple-700 focus:outline-none focus:shadow-outline-blue bg-transparent hover:bg-purple-700 hover:text-black hover:border-blue-500 rounded-full">
                  Input Manual
                </button>
              </Link>
              <Link to="https://www.youtube.com/channel/UC_7HOM7ncze-MvYgwvxfpNA/videos">
                <button class="px-6 inline py-2 text-sm font-semibold leading-5 shadow-2xl text-purple-700 transition-colors duration-150 border border-purple-700 focus:outline-none focus:shadow-outline-blue bg-transparent hover:bg-purple-700 hover:text-black hover:border-blue-500 rounded-full">
                  Tutorial Youtube
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
