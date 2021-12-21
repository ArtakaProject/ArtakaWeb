import React, { useEffect, Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { doGetCustomerRequest } from "../../redux/actions/Customer";
import {
  PencilAltIcon,
  TrashIcon,
  DotsVerticalIcon,
  SearchIcon,
} from "@heroicons/react/solid";
import { Menu, Transition } from "@headlessui/react";
import { useHistory, Link } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import { FilterIcon, PlusIcon } from "@heroicons/react/outline";
import Pagination from '../../components/navigation/Pagination';

const columns = [
  { column: "NAMA" },
  { column: "KONTAK" },
  { column: "KETERANGAN" },
  { column: "TANGGAL BERGABUNG" },
  { column: "AKSI" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Customer() {
  let history = useHistory();
  const dispatch = useDispatch();
  const customer = useSelector((state) => state.customerState.customer.data);
  const isLoading = useSelector((state) => state.customerState);
  const [itemOffset, setItemOffset] = useState(0);
  const [endOffset, setEndOffset] = useState(5);
  let data = []
  const [customerSlice, setCustomerSlice] = useState([]);

  useEffect(() => {
      console.log(customer);
      if(customer != null){
      setCustomerSlice(customer.slice(itemOffset, endOffset));
      }
  }, [itemOffset, endOffset]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const payload = {
      user_id: "+6281282187515",
      outlet_id: "OTL-001",
    };
    dispatch(doGetCustomerRequest(payload));
    console.log(customerSlice);
    if(customer != null){
    setCustomerSlice(customer.slice(itemOffset, endOffset));
    }
  }

  const handlePageClick = (event) => {
    const newOffset = (event.selected * 5) % customer.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  const onDelete = async (id) => { };

  return (
    <>
      {/* <PageHeading
        actionTitle={"Add Customer"}
        onNewClick={() => history.push("/customer/add")}
      ></PageHeading> */}
      <div className="flex w-full mb-5">
        <label className="text-black text-xl text-purple-900s mr-5">DAFTAR PELANGGAN</label>
        <div className="relative w-7/12">
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
        <PlusIcon className="w-6 h-6">

        </PlusIcon>
        <FilterIcon className="w-6 h-6">

        </FilterIcon>
      </div>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto min-h-full sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full  sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              {customer == null && (
                <div className="flex items-center h-screen">
                  <CircularProgress className="mx-auto" />
                </div>
              )}
              { customer != null && (
                <>
                  <table className="min-w-full h-auto divide-gray-200">
                    <thead className="bg-gray-200">
                      <tr>
                        {columns.map((col) => (
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider"
                          >
                            {col.column}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {customerSlice &&
                        customerSlice.map((cust) => (
                          <tr key={cust.id}>
                            <td>
                              <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10 ml-2">
                                  <img
                                    className="h-10 w-10 rounded-full"
                                    src={cust.images}
                                    alt=""
                                  />
                                </div>
                                <div className="ml-4">
                                  <div className="text-sm font-medium text-gray-900">
                                    {cust.name}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">
                                {cust.email}
                              </div>
                              <br />
                              <div className="text-sm text-gray-900">
                                {cust.phone}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {cust.create_dtm}
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
                                                to={`/customer/edit`}
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
                        ))}
                    </tbody>
                  </table>
                  <Pagination />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
