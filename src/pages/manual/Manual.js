import { React } from "react";
import { Link } from "react-router-dom";
import { PlusCircleIcon, MinusCircleIcon,BackspaceIcon } from "@heroicons/react/outline";

export default function Manual() {
  return (
    <div>
      <div className="py-6 justify-center inline-block min-w-full sm:px-6 lg:px-8">
        <form class="w-full max-w-lg">
          <div class="flex flex-wrap ml-60 mb-6">
            <div class="w-full px-3">
              <input
                class="appearance-none block w-96 bg-white text-gray-700 border-t-0 border-b-2 border-r-0 border-l-0 border-purple-700 py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white"
                id="jual"
                type="text"
                placeholder="Rp. "
              />
              <label
                class="block tracking-wide text-gray-700 text-xs ml-36 font-bold mb-2 "
                for="jual"
              >
                Isi Harga Jual
              </label>
            </div>
          </div>

          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label
                class="block tracking-wide text-gray-700 text-xs font-bold mb-0.5"
                for="keterangan"
              >
                Keterangan (Wajib diisi)
              </label>
              <input
                class="appearance-none block w-96 bg-white text-gray-700 border-t-0 border-b-2 border-r-0 border-l-0 border-purple-700 py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white"
                id="keterangan"
                type="text"
                placeholder="Misal: Nasi Timbel Empal"
              />
            </div>
          </div>
          
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block tracking-wide text-gray-700 text-xs font-bold mb-0.5"
                for="jumlah"
                defaultValue="0"
              >
                Jumlah
              </label>
              <input
                class="appearance-none block w-full bg-white text-gray-700 border-t-0 border-b-2 border-r-0 border-l-0 border-purple-700 py-3 px-4 mb-1  leading-tight focus:outline-none focus:bg-white"
                id="jumlah"
                type="text"
              />
              <PlusCircleIcon className="w-8 absolute bottom-80 ml-52 text-purple-700 " />
              <MinusCircleIcon className="w-8 absolute bottom-80 text-purple-700 " />
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label
                class="block tracking-wide text-gray-700 text-xs font-bold mb-0.5"
                for="modal"
              >
                Harga Modal
              </label>
              <input
                class="appearance-none block w-full bg-white text-gray-700 border-t-0 border-b-2 border-r-0 border-l-0 border-purple-700 py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white"
                id="modal"
                type="text"
                placeholder="0"
              />
            </div>
          </div>
        </form>
      </div>

      <div className="text-center mr-20">
        <div class="inline-flex rounded-md shadow-sm">
          <button
            type="button"
            class="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            1
          </button>
          <button
            type="button"
            class="py-2 px-4 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            2
          </button>
          <button
            type="button"
            class="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            3
          </button>
        </div>
      </div>

      <div className="text-center mr-20 py-6">
        <div class="inline-flex rounded-md shadow-sm">
          <button
            type="button"
            class="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            4
          </button>
          <button
            type="button"
            class="py-2 px-4 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            5
          </button>
          <button
            type="button"
            class="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
          >
           6
          </button>
        </div>
      </div>

      <div className="text-center mr-20">
        <div class="inline-flex rounded-md shadow-sm">
          <button
            type="button"
            class="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            7
          </button>
          <button
            type="button"
            class="py-2 px-4 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            8
          </button>
          <button
            type="button"
            class="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            9
          </button>
        </div>
      </div>

      <div className="text-center mr-20 py-6">
        <div class="inline-flex rounded-md shadow-sm">
          <button
            type="button"
            class="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            *
          </button>
          <button
            type="button"
            class="py-2 px-4 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
          >
           0
          </button>
          <button
            type="button"
            class="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            <BackspaceIcon class="w-3 text-black"/>
          </button>
        </div>
      </div>

      <button
        type="submit"
        className="group relative w-96 ml-72 flex-1 justify-center py-2 px-4 border border-transparent text-lg font-semibold rounded-2xl text-white bg-purple-700 hover:bg-indigo-500 hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        TAMBAH KE KERANJANG
      </button>
    </div>
  );
}
