
export default function MenuDropdown() {
  return (
    //
    <div class="group inline-block">
      <button
        class="outline-none focus:outline-none border px-3 py-1 bg-white rounded-sm flex items-center min-w-32"
      >
        <span class="pr-1 font-semibold flex-1">Menu</span>
        <span>
          <svg
            class="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
            />
          </svg>
        </span>
      </button>
      <ul
        class="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top min-w-32"
      >
        <li class="rounded-sm px-3 py-1 hover:bg-gray-100">Bantuan</li>
        <li class="rounded-sm px-3 py-1 hover:bg-gray-100">Kelola Produk</li>
        <li class="rounded-sm px-3 py-1 hover:bg-gray-100">Pengaturan Promo dan Poin</li>
        <li class="rounded-sm px-3 py-1 hover:bg-gray-100">Pengaturan Toko</li>
        <li class="rounded-sm px-3 py-1 hover:bg-gray-100">Pengaturan Order Online</li>
        <li class="rounded-sm px-3 py-1 hover:bg-gray-100">Pelanggan</li>
        <li class="rounded-sm px-3 py-1 hover:bg-gray-100">Mitra</li>
        <li class="rounded-sm px-3 py-1 hover:bg-gray-100">Pemasukan Non-Kasir</li>
        <li class="rounded-sm px-3 py-1 hover:bg-gray-100">Pengeluaran Non-Persediaan</li>
        <li class="rounded-sm px-3 py-1 hover:bg-gray-100">Riwayat Retur Penjualan</li>
        <li class="rounded-sm px-3 py-1 hover:bg-gray-100">Printer dan Struk</li>
        <li class="rounded-sm px-3 py-1 hover:bg-gray-100">Inbox</li>

        {/* <li class="rounded-sm relative px-3 py-1 hover:bg-gray-100">
          <button
            class="w-full text-left flex items-center outline-none focus:outline-none"
          >
            <span class="pr-1 flex-1">Langauges</span>
            <span class="mr-auto">
              <svg
                class="fill-current h-4 w-4 transition duration-150 ease-in-out"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                />
              </svg>
            </span>
          </button>
          <ul
            class="bg-white border rounded-sm absolute top-0 right-0 transition duration-150 ease-in-out origin-top-left min-w-32"
          >
            <li class="px-3 py-1 hover:bg-gray-100">Javascript</li>
            <li class="rounded-sm relative px-3 py-1 hover:bg-gray-100">
              <button
                class="w-full text-left flex items-center outline-none focus:outline-none"
              >
                <span class="pr-1 flex-1">Python</span>
                <span class="mr-auto">
                  <svg
                    class="fill-current h-4 w-4 transition duration-150 ease-in-out"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                    />
                  </svg>
                </span>
              </button>
              <ul
                class="bg-white border rounded-sm absolute top-0 right-0 transition duration-150 ease-in-out origin-top-left min-w-32"
              >
                <li class="px-3 py-1 hover:bg-gray-100">2.7</li>
                <li class="px-3 py-1 hover:bg-gray-100">3+</li>
              </ul>
            </li>
            <li class="px-3 py-1 hover:bg-gray-100">Go</li>
            <li class="px-3 py-1 hover:bg-gray-100">Rust</li>
          </ul>
        </li> */}
        {/* <li class="rounded-sm px-3 py-1 hover:bg-gray-100">Testing</li> */}
      </ul>
    </div>
    //
  )
}
