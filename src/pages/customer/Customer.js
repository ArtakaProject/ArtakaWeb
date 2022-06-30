import React, { useEffect, Fragment, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { doGetCustomerRequest } from "../../redux/actions/Customer";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import {
  PencilAltIcon,
  TrashIcon,
  DotsVerticalIcon,
  SearchIcon
} from "@heroicons/react/solid";
import { Menu, Transition } from "@headlessui/react";
import { useNavigate, Link } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import { PlusIcon } from "@heroicons/react/outline";
import moment from 'moment';
import { useTable, useSortBy, useGlobalFilter, usePagination } from 'react-table'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// const userFromLocalStorage = JSON.parse(localStorage.getItem('@profile') || '[]')

export default function Customer() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const customer = useSelector((state) => state.customerState.customer);
  const isLoading = useSelector((state) => state.customerState.isLoading);
  //get data from local storage
 // const user = useState(userFromLocalStorage);
  let add = "/artaka/seller/customer/add";

  const columns = useMemo(() => [
    { Header: 'IMAGES', accessor: 'images' },
    { Header: 'NAMA PELANGGAN', accessor: 'name' },
    { Header: 'EMAIL', accessor: 'email' },
    { Header: 'KONTAK', accessor: 'phone' },
    { Header: 'TANGGAL LAHIR', accessor: 'datebirth' },
    { Header: 'ALAMAT', accessor: 'address' },
    { Header: 'JENIS KELAMIN', accessor: 'gender' },
    { Header: 'TANGGAL BERGABUNG', accessor: 'create_dtm' },
    { Header: 'KOTA', accessor: 'city' },
    { Header: 'PROVINSI', accessor: 'province' },
    { Header: 'AKSI', accessor: '' }
  ], [])


  useEffect(() => {
    fetchData();
  }, []);


  async function fetchData() {
    console.log(JSON.parse(localStorage.getItem('@profile')));
    let user = await JSON.parse(localStorage.getItem('@profile'));
    
    const payload = {
        user_id: user.user_id,
        outlet_id: user.outlet_id,
    };
    dispatch(doGetCustomerRequest(payload));
  }

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    state,
    prepareRow,
    setGlobalFilter,
  } = useTable({
    columns: columns,
    data: customer
  },
    useGlobalFilter,
    useSortBy,
    usePagination)

  const { pageIndex, pageSize } = state

  const onDelete = async (id) => { };

  const count = [1,2,3,4,5,6,7,8,9,0];

  return (
    <>
      <div className="flex w-full mb-5">
        <label className="text-black text-xl text-purple-900s ml-5 mr-5 mt-2">DAFTAR PELANGGAN</label>
        <div className="relative w-8/12 mr-1 mt-1">
          <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
            <SearchIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </div>
          <input
            id="search"
            name="search"
            className="block w-full bg-white border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-rose-500 focus:border-rose-500 sm:text-sm"
            placeholder="Search"
            type="search"
          />
        </div>
        <button onClick={() => navigate(add, { replace: true })}>
          <PlusIcon className="w-6 h-6 mr-5 ml-10 mt-1" />
        </button>
      </div>
      <div className="flex w-full mb-5">
        <button className="p-2 ml-3 mr-3 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-purple-900">Lunas</button>
        <button className="p-2 ml-3 mr-3 text-purple bg-gray-300 hover:bg-green-800 hover:text-white focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-purple-900">Belum Lunas</button>
      </div>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto min-h-full sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full  sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              {isLoading && (
                //<div className="flex items-center h-screen">
                //<CircularProgress className="mx-auto" />
                //</div>
                <>
                  <table className="min-w-full h-auto divide-gray-200">
                    <thead className="bg-gray-200">
                      <tr>
                        {/* {columns.map((col) => ( */}
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider"
                        >
                          NAMA PELANGGAN
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider"
                        >
                          KONTAK
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider"
                        >
                          TANGGAL LAHIR
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider"
                        >
                          ALAMAT
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider"
                        >
                          JENIS KELAMIN
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider"
                        >
                          TANGGAL BERGABUNG
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider"
                        >
                          AKSI
                        </th>
                        {/* ))} */}
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {
                        count.map(i => {
                          return (
                            <tr>
                              <td>
                                <div className="flex items-center">
                                  <div className="flex-shrink-0 h-10 w-10 ml-2">
                                    <Skeleton
                                      className="h-10 w-10 rounded-full"
                                      alt=""
                                    />
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <Skeleton className="text-sm text-gray-900" />
                                <Skeleton className="text-sm text-gray-900" />
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                <Skeleton />
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                <Skeleton />
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                <Skeleton />
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                <Skeleton />
                              </td>
                            </tr>
                          )
                        }
                      )}
                    </tbody>
                  </table>
                  <div className="flex flex-row min-h-screen justify-center items-center">
                    <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                      <button
                        onClick={() => previousPage()} disabled={!canPreviousPage}
                        className="relative inline-flex items-center px-2 py-2 bg-white text-sm font-medium text-gray-700"
                      >
                        <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                        <p>Previous</p>
                      </button>
                      <span className="relative inline-flex items-center px-2 py-2 bg-white text-sm font-medium text-gray-700">
                        Page{' '}
                        <strong>
                          {pageIndex + 1} of ?
                        </strong>{' '}
                      </span>
                      <button
                        onClick={() => nextPage()}
                        disabled={!canNextPage}
                        className=
                        "relative inline-flex items-center px-2 py-2 bg-white text-sm font-medium text-gray-700"
                      >
                        <p>Next</p>
                        <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                      </button>
                    </nav>
                  </div>
                </>
              )}
              {!isLoading && (
                <>
                  <table className="min-w-full h-auto divide-gray-200">
                    <thead className="bg-gray-200">
                      <tr>
                        {/* {columns.map((col) => ( */}
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider"
                        >
                          NAMA PELANGGAN
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider"
                        >
                          KONTAK
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider"
                        >
                          TANGGAL LAHIR
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider"
                        >
                          ALAMAT
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider"
                        >
                          JENIS KELAMIN
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider"
                        >
                          TANGGAL BERGABUNG
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider"
                        >
                          AKSI
                        </th>
                        {/* ))} */}
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {
                        page.map(row => {
                          prepareRow(row)
                          return (
                            <tr>
                              <td>
                                <div className="flex items-center">
                                  <div className="flex-shrink-0 h-10 w-10 ml-2">
                                    <img
                                      className="h-10 w-10 rounded-full"
                                      src={row.cells[0].value}
                                      alt=""
                                    />
                                  </div>
                                  <div className="ml-4">
                                    <div className="text-sm font-medium text-gray-900">
                                      {row.cells[1].value}
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">
                                  {row.cells[2].value}
                                </div>
                                <div className="text-sm text-gray-900">
                                  {row.cells[3].value}
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {row.cells[4].value}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {row.cells[5].value}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {row.cells[6].value}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {moment(row.cells[7].value).format('DD/MM/YYYY')}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium ">
                                <Menu
                                  as="div"
                                  className="relative flex justify-end items-center "
                                >
                                  {({ open }) => (
                                    <>
                                      <Menu.Button className="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                                        <span className="sr-only">
                                          Open options
                                        </span>
                                        <DotsVerticalIcon
                                          className="w-5 h-5"
                                          aria-hidden="true"
                                        />
                                      </Menu.Button>
                                      <Transition
                                        show={open}
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                      >
                                        <Menu.Items
                                          static
                                          className="mx-3 origin-top-right absolute right-7 top-0 w-48 mt-1 rounded-md shadow-lg z-10 bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none"
                                        >
                                          <div className="py-1">
                                            <Menu.Item>
                                              {({ active }) => (
                                                <Link
                                                  to={{
                                                    pathname: `/artaka/seller/customer/edit`,
                                                    state: {
                                                      images: row.cells[0].value,
                                                      name: row.cells[1].value,
                                                      email: row.cells[2].value,
                                                      phone: row.cells[3].value,
                                                      datebirth: row.cells[4].value,
                                                      gender: row.cells[6].value,
                                                      address: row.cells[5].value,
                                                      city: row.cells[8].value,
                                                      province: row.cells[9].value,
                                                    }
                                                  }}
                                                  className={classNames(
                                                    active
                                                      ? "bg-gray-100 text-gray-900"
                                                      : "text-gray-700",
                                                    "group flex items-center px-4 py-2 text-sm"
                                                  )}
                                                >
                                                  <PencilAltIcon
                                                    className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                                    aria-hidden="true"
                                                  />
                                                  Edit
                                                </Link>
                                              )}
                                            </Menu.Item>
                                          </div>
                                          <div className="py-1">
                                            <Menu.Item>
                                              {({ active }) => (
                                                <Link
                                                  to="#"
                                                  className={classNames(
                                                    active
                                                      ? "bg-gray-100 text-gray-900"
                                                      : "text-gray-700",
                                                    "group flex items-center px-4 py-2 text-sm"
                                                  )}
                                                >
                                                  <TrashIcon
                                                    className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                                    aria-hidden="true"
                                                  />
                                                  Delete
                                                </Link>
                                              )}
                                            </Menu.Item>
                                          </div>
                                        </Menu.Items>
                                      </Transition>
                                    </>
                                  )}
                                </Menu>
                              </td>
                            </tr>
                          )
                        })
                      }
                    </tbody>
                  </table>
                  <div className="flex flex-row min-h-screen justify-center items-center">
                    <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                      <button
                        onClick={() => previousPage()} disabled={!canPreviousPage}
                        className="relative inline-flex items-center px-2 py-2 bg-white text-sm font-medium text-gray-700"
                      >
                        <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                        <p>Previous</p>
                      </button>
                      <span className="relative inline-flex items-center px-2 py-2 bg-white text-sm font-medium text-gray-700">
                        Page{' '}
                        <strong>
                          {pageIndex + 1} of {pageOptions.length}
                        </strong>{' '}
                      </span>
                      <button
                        onClick={() => nextPage()}
                        disabled={!canNextPage}
                        className=
                        "relative inline-flex items-center px-2 py-2 bg-white text-sm font-medium text-gray-700"
                      >
                        <p>Next</p>
                        <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                      </button>
                    </nav>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}