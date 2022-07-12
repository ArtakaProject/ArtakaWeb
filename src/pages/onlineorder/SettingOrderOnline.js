import React from "react";
import { ChevronLeftIcon } from "@heroicons/react/solid";
import { TwoWheeler, CreditCard } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function SettingOrderOnline() {
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
      <Link to="/artaka/seller/setting-online-order/courier">
        <div className="py-3 h-24 hover:bg-gray-200 ">
          <TwoWheeler className="text-purple-700" fontSize="large" />
          <p class="text-2xl md:text-3xl font-normal leading-normal inline-block ml-5">
            Kurir{" "}
          </p>
          <p class="mt-1 ml-14 text-sm font-extralight text-gray-500">
            Mengaktifkan dan menonaktifkan daftar kurir
          </p>
        </div>
      </Link>
      <Link to="/artaka/seller/setting-online-order/online-payment">
        <div className="py-3 h-24 hover:bg-gray-200 ">
          <CreditCard className="text-purple-700" fontSize="large" />
          <p class="text-2xl md:text-3xl font-normal leading-normal inline ml-5">
            Pembayaran Online{" "}
          </p>
          <p class="mt-1 ml-14 text-sm font-extralight text-gray-500">
          Mengaktifkan dan menonaktifkan daftar pembayaran online
          </p>
        </div>
      </Link>
    </div>
  );
}
