import React from "react";
import { Link } from "react-router-dom";

export default function Receipt() {
  return (
    <>
      <div>
        <div className="py-6 justify-center inline-block min-w-full sm:px-6 lg:px-8">
          <div className="flex flex-row bg-purple-800">
            <div className="basis-1/2 ml-60 mt-3 py-3">
              <Link to="/artaka/seller/printer">
                <p className=" text-white font-bold text-xl hover:text-black hover:underline">
                  Printer
                </p>
              </Link>
            </div>
            <div className="basis-1/2 ml-96 mt-3 py-3">
              <Link to="/artaka/seller/receipt">
                <p className=" text-white font-bold text-xl hover:text-black hover:underline">
                  Struk
                </p>
              </Link>
            </div>
          </div>
          <p className="py-3 px-2 text-3xl font-semibold">Detail Struk</p>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label
                class="block tracking-wide text-gray-700 text-xs font-bold mb-0.5"
                for="ckb1"
              >
                Catatan Kaki Baris 1
              </label>
              <input
                class="appearance-none block w-96 bg-white text-gray-700 border-t-0 border-b-2 border-r-0 border-l-0 border-purple-700 py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white"
                id="keterangan"
                name="keterangan"
                type="text"
                placeholder="Terima Kasih Sudah Berbelanja"
              />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label
                class="block tracking-wide text-gray-700 text-xs font-bold mb-0.5"
                for="ckb2"
              >
                Catatan Kaki Baris 2
              </label>
              <input
                class="appearance-none block w-96 bg-white text-gray-700 border-t-0 border-b-2 border-r-0 border-l-0 border-purple-700 py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white"
                id="keterangan"
                name="keterangan"
                type="text"
                placeholder="Silahkan Datang Kembali"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
