import React, { useEffect, useMemo } from "react";
import { DocumentTextIcon } from "@heroicons/react/outline";
import { ViewGridIcon, SearchIcon, ViewListIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import { doGetProductRequest } from "../../redux/actions/Product";
import { useGlobalFilter, useSortBy, useTable } from "react-table";
import { useDispatch, useSelector } from "react-redux";
import Skeleton from "react-loading-skeleton";
import { Switch } from "@material-ui/core";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Dashboard() {

  //let navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productState.products);
  const isLoading = useSelector((state) => state.productState.isLoading);

  const columns = useMemo(
    () => [
      { Header: "ID", accessor: "id" },
      { Header: "GAMBAR", accessor: "images" },
      { Header: "NAMA PRODUK", accessor: "name" },
      { Header: "KATEGORI PRODUK", accessor: "category" },
      { Header: "DESKRIPSI", accessor: "description" },
      { Header: "HARGA", accessor: "sell_cost" },
      { Header: "STOK BARANG (TERJUAL)", accessor: "quantity" },
      { Header: "STOK BARANG (SISA)", accessor: "minimum_quantity" },
      { Header: "STATUS", accessor: "is_stock_tracked" },
      { Header: "OPSI", accessor: "" },
    ],
    []
  );

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    console.log(JSON.parse(localStorage.getItem("@profile")));
    console.log(JSON.parse(localStorage.getItem("@product")));

    let user = await JSON.parse(localStorage.getItem("@profile"));
    //let prdct = console.log(JSON.parse(localStorage.getItem('@product')));

    const payload = {
      user_id: user.user_id, // +6287813841133
      outlet_id: user.outlet_id, // OTL-001
      category: "Semua",  //
      is_active: "All",
    };

    dispatch(doGetProductRequest(payload));
  };

  const {
    state,
    page,
    prepareRow
  } = useTable(
    {
      columns: columns,
      data: products,
    },
    useGlobalFilter,
    useSortBy
  );

  const { pageIndex, pageSize } = state;

  /* function handleCategoryChange(event) {
    handleChecked(event.value);
  } */

  const onDelete = async (id) => { };

  const count = [...Array(10).keys()];


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
            {/* <DocumentTextIcon className="text-purple-700 w-32 h-32 mt-8 mx-auto"></DocumentTextIcon>
            <div class=" my-1 text-2xl text-purple-700 text-center font-semibold">
              Katalog Produk Kosong
            </div>
            <p class="-ml-4 mt-2 mb-7 text-center justify-center">
              Pilih Tambahan Produk untuk menambahkan katalog produk atau pilih
              Manual untuk langsung berjualan. Anda juga bisa menambahkan
              katalog melalui website https://orderin.id/upload menggunakan
              login nomor handphone dan Password Artaka
            </p> */}
            <div className="flex w-full mb-5">
              <Link to="/artaka/seller/product/add">
                <button class="px-5 inline py-2 text-sm font-semibold  leading-5 shadow-2xl text-purple-700 transition-colors duration-150 border border-purple-700 focus:outline-none focus:shadow-outline-blue bg-transparent hover:bg-purple-700 hover:text-black hover:border-blue-500 rounded-full">
                  Tambah Produk
                </button>
              </Link>
              <Link to="/artaka/seller/manual">
                <button class="px-7 inline py-2 text-sm font-semibold leading-5 shadow-2xl text-purple-700 transition-colors duration-150 border border-purple-700 focus:outline-none focus:shadow-outline-blue bg-transparent hover:bg-purple-700 hover:text-black hover:border-blue-500 rounded-full">
                  Input Manual
                </button>
              </Link>
              <a href="https://www.youtube.com/channel/UC_7HOM7ncze-MvYgwvxfpNA/videos">
                <button class="px-6 inline py-2 text-sm font-semibold leading-5 shadow-2xl text-purple-700 transition-colors duration-150 border border-purple-700 focus:outline-none focus:shadow-outline-blue bg-transparent hover:bg-purple-700 hover:text-black hover:border-blue-500 rounded-full">
                  Tutorial Youtube
                </button>
              </a>
            </div>
            {isLoading && (
              /* <div className="flex items-center h-screen">   <CircularProgress className="mx-auto" /> </div> */
              <>
                <tbody className="bg-white divide-y divide-gray-200">
                  {count.map((i) => {
                    return (
                      <tr>
                        <td>
                          <div class="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                            <a>
                              <Skeleton class="p-8 rounded-t-lg" alt="" />
                            </a>
                            <div class="px-5 pb-5">
                              <a>
                                <Skeleton class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white" />
                              </a>
                              <div class="flex items-center mt-2.5 mb-5">
                                <Skeleton />
                              </div>
                              <div class="flex justify-between items-center">
                                <span class="text-3xl font-bold text-gray-900 dark:text-white">
                                  <Skeleton />
                                </span>
                                <Skeleton />
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </>
            )}
            {!isLoading && (
              <>
                {page.map((row) => {
                  prepareRow(row);
                  return (
                    <tr key={row.cells[0].value}>
                      <td>
                        <div class="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                          <a >
                            <img class="p-8 rounded-t-lg" src={row.cells[1].value} alt="" />
                          </a>
                          <div class="px-5 pb-5">
                            <a >
                              <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{row.cells[2].value}</h5>
                            </a>
                            <div class="flex items-center mt-2.5 mb-5">
                              {row.cells[3].value}
                            </div>
                            <div class="flex justify-between items-center">
                              <span class="text-3xl font-bold text-gray-900 dark:text-white">
                                Rp{new Intl.NumberFormat("ID").format(row.cells[5].value)},00
                              </span>
                              {row.cells[8].value}
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </>
            )};
          </div>
        </div>
      </div>
    </div>
  );
}