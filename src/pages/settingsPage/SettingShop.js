import React from "react";
import { ChevronLeftIcon } from "@heroicons/react/solid";
import {
  AccountBalance,
  CloudDownload,
  DeleteForever,
  LocalDining,
  Store,
  Badge,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function SettingShop() {
  return (
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
          <Store className="text-purple-700" fontSize="large" />
          <p class="text-2xl md:text-3xl font-normal leading-normal inline-block ml-5">
            Toko{" "}
          </p>
          <p class="mt-1 ml-14 text-sm font-extralight text-gray-500">
            Menambah dan mengelola semua toko anda, mengisi nomor rekening bank
            dan data awal kas, hutang dan piutang toko
          </p>
        </div>
      </Link>
      <Link to="/artaka/not-found">
        <div className="py-3 h-24 hover:bg-gray-200 ">
          <Badge className="text-purple-700" fontSize="large" />
          <p class="text-2xl md:text-3xl font-normal leading-normal inline ml-5">
            Karyawan{" "}
          </p>
          <p class="mt-1 ml-14 text-sm font-extralight text-gray-500">
            Mengelola semua karyawan yang bekerja di toko anda
          </p>
        </div>
      </Link>
      <Link to="/artaka/not-found">
        <div className="py-3 h-24 hover:bg-gray-200 ">
          <LocalDining className="text-purple-700" fontSize="large" />
          <p class="text-2xl md:text-3xl font-normal leading-normal inline-block ml-5">
            Pengaturan Meja{" "}
          </p>
          <p class="mt-1 ml-14 text-sm font-extralight text-gray-500">
            Mengelola meja di resto anda
          </p>
        </div>
      </Link>
      <Link to="/artaka/not-found">
        <div className="py-3 h-24 hover:bg-gray-200 ">
          <AccountBalance className="text-purple-700" fontSize="large" />
          <p class="text-2xl md:text-3xl font-normal leading-normal inline ml-5">
            Pajak & Service Charge{" "}
          </p>
          <p class="mt-1 ml-14 text-sm font-extralight text-gray-500">
            Tentukan jenis Pajak dan Service Charge
          </p>
        </div>
      </Link>
      <Link to="/artaka/not-found">
        <div className="py-3 h-24 hover:bg-gray-200 ">
          <CloudDownload className="text-purple-700" fontSize="large" />
          <p class="text-2xl md:text-3xl font-normal leading-normal inline-block ml-5">
            Download Excel Transaksi{" "}
          </p>
          <p class="mt-1 ml-14 text-sm font-extralight text-gray-500">
            Download data transaksi toko dalam file excel
          </p>
        </div>
      </Link>
      <Link to="/artaka/not-found">
        <div className="py-3 h-24 hover:bg-gray-200 ">
          <DeleteForever className="text-purple-700" fontSize="large" />
          <p class="text-2xl md:text-3xl font-normal leading-normal inline ml-5">
            Hapus Data Transaksi{" "}
          </p>
          <p class="mt-1 ml-14 text-sm font-extralight text-gray-500">
            Hapus data transaksi toko
          </p>
        </div>
      </Link>
    </div>
  );
}
