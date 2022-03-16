import React from "react";
import { ChevronLeftIcon } from "@heroicons/react/solid";
import { LiveHelp,Forum } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Bantuan() {
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
      <Link to="https://www.youtube.com/channel/UC_7HOM7ncze-MvYgwvxfpNA/videos">
        <div className="py-3 h-24 hover:bg-gray-200 ">
          <LiveHelp className="text-purple-700" fontSize="large"/>
          <p class="text-2xl md:text-3xl font-normal leading-normal inline-block ml-5">
            Panduan Aplikasi{" "}
          </p>
          <p class="mt-1 ml-14 text-sm font-extralight text-gray-500">
            Panduan cara penggunaan aplikasi Artaka
          </p>
        </div>
      </Link>
      <Link to="/artaka/not-found">
        <div className="py-3 h-24 hover:bg-gray-200 ">
          <Forum className="text-purple-700" fontSize="large" />
          <p class="text-2xl md:text-3xl font-normal leading-normal inline ml-5">
            WhatsApp Kami{" "}
          </p>
          <p class="mt-1 ml-14 text-sm font-extralight text-gray-500">
            Kontak Kami Melalui WhatsApp untuk info dan pertanyaan lainnya
          </p>
        </div>
      </Link>
    </div>
  );
}
