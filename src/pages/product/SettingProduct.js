import React from "react";
import { ChevronLeftIcon } from "@heroicons/react/solid";
import {
  AddShoppingCart,
  Refresh,
  CompareArrows,
  Newspaper,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function SettingProduct() {
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
      <Link to="/artaka/seller/product">
        <div className="py-3 h-24 hover:bg-gray-200 ">
          <Newspaper className="text-purple-700" fontSize="large" />
          <p class="text-2xl md:text-3xl font-normal leading-normal inline-block ml-5">
            Katalog Produk{" "}
          </p>
          <p class="mt-1 ml-14 text-sm font-extralight text-gray-500">
            Menambah, mengubah, dan menghapus produk/bahan baku yang sudah ada
          </p>
        </div>
      </Link>
      <Link to="/artaka/not-found">
        <div className="py-3 h-24 hover:bg-gray-200 ">
          <AddShoppingCart className="text-purple-700" fontSize="large" />
          <p class="text-2xl md:text-3xl font-normal leading-normal inline ml-5">
            Pembelian Persediaan{" "}
          </p>
          <p class="mt-1 ml-14 text-sm font-extralight text-gray-500">
            Menambah produk/bahan baku baru atau yang sudah ada dari pembelian
          </p>
        </div>
      </Link>
      <Link to="/artaka/not-found">
        <div className="py-3 h-24 hover:bg-gray-200 ">
          <CompareArrows className="text-purple-700" fontSize="large" />
          <p class="text-2xl md:text-3xl font-normal leading-normal inline ml-5">
            Penyesuaian Persediaan{" "}
          </p>
          <p class="mt-1 ml-14 text-sm font-extralight text-gray-500">
            Menambah atau mengurangi produk/bahan baku agar sesuai dengan fisik toko
          </p>
        </div>
      </Link>
      <Link to="/artaka/not-found">
        <div className="py-3 h-24 hover:bg-gray-200 ">
          <Refresh className="text-purple-700" fontSize="large" />
          <p class="text-2xl md:text-3xl font-normal leading-normal inline ml-5">
            Riwayat Retur Beli Persediaan{" "}
          </p>
          <p class="mt-1 ml-14 text-sm font-extralight text-gray-500">
            Riwayat transaksi pengembalian pembelian persediaan produk/bahan baku
          </p>
        </div>
      </Link>
    </div>
  );
}
