import React from "react";
import { DocumentTextIcon } from "@heroicons/react/outline";
import { PlusCircleIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

export default function Printer() {
  return (
    <>
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
        <div>
          <DocumentTextIcon className="text-purple-700 w-32 h-32 mt-32 mx-auto"></DocumentTextIcon>
          <div class=" my-1 text-2xl text-purple-700 text-center font-semibold">
            Koneksi Printer Kosong
          </div>
          <p class="-ml-4 mt-2 mb-7 text-center justify-center">
            Silahkan klik tombol plus untuk menambahkan koneksi printer
            bluetooth
          </p>
        </div>
        <div>
          <PlusCircleIcon className=" absolute bottom-28 right-40 h-20 w-20 text-red-600 hover:text-purple-800" />
        </div>
      </div>
    </>
  );
}
