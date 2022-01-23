import React from "react";
import { DocumentTextIcon } from "@heroicons/react/outline";

export default function Dashboard() {
  return (
    <div>
      <div class="h-screen w-screen bg-gray-100 flex items-center">
        <div class="container flex flex-col md:flex-row items-center justify-center px-3 text-gray-700">
          <div class="max-w-md">
            <DocumentTextIcon className="text-purple-700 w-32 h-32 align-middle mb-2 ml-36"></DocumentTextIcon>
            <div class=" mb-2 text-2xl text-purple-700 text-center font-semibold">
              Katalog Produk Kosong
            </div>
            <p class="-ml-4 mt-2 mb-7 text-center justify-center">
              Pilih Tambahan Produk untuk menambahkan katalog produk atau pilih
              Manual untuk langsung berjualan. Anda juga bisa menambahkan
              katalog melalui website https://orderin.id/upload menggunakan
              login nomor handphone dan Password Artaka
            </p>
            <div className=" flex items-center justify-between mb-48">
              <button class="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent focus:outline-none focus:shadow-outline-blue bg-purple-700 active:bg-blue-600 hover:bg-blue-700 rounded-full">
                Tambah Produk
              </button>
              <button class="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent focus:outline-none focus:shadow-outline-blue bg-purple-700 active:bg-blue-600 hover:bg-blue-700 rounded-full">
                Input Manual
              </button>
              <button class="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent focus:outline-none focus:shadow-outline-blue bg-purple-700 active:bg-blue-600 hover:bg-blue-700 rounded-full">
                Tutorial Youtube
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
