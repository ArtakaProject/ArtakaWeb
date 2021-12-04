import React, { useEffect, Fragment, useState } from "react";
import Axios from "axios";
import { useDispatch, useSelector, connect } from "react-redux";
import { doGetCustomerRequest } from "../../redux/actions/Customer";
import PageHeading from "../../components/PageHeading";
import {
  PencilAltIcon,
  TrashIcon,
  DotsVerticalIcon,
  PhotographIcon,
} from "@heroicons/react/solid";
import { Menu, Transition } from "@headlessui/react";
import config from "../../config/config";
import { useHistory, Link } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";

const columns = [
  { column: "Nama" },
  { column: "Kontak" },
  { column: "Keterangan" },
  { column: "Tanggal Bergabung" },
  { column: "Aksi" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Customer() {
  let history = useHistory();
  const dispatch = useDispatch();
  const customer = useSelector((state) => state.customerState.customer.data);
  const isLoading = useSelector((state) => state.customerState.isLoading);

  /*const [customer, setCustomer] = useState([]);
  let payload = {
    user_id: "+6281282187515",
    outlet_id: "OTL-001",
  };

  useEffect(() => {
    let config = {
      method: "POST",
      url: "https://artaka-api.com/api/customers/show",
      data: payload,
    };

    Axios(config)
      .then((response) => {
        setCustomer(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });

    return () => {
      setCustomer("");
    };
  }, []); */

  useEffect(() => {
    const payload = {
      user_id: "+6281282187515",
      outlet_id: "OTL-001"
  }
  dispatch(doGetCustomerRequest(payload));
    // fetchData();
  }, []);

  

  async function fetchData() {
      const payload = {
          user_id: "+6281282187515",
          outlet_id: "OTL-001"
      }
      dispatch(doGetCustomerRequest(payload));
  }

  const onDelete = async (id) => {};

  return (
    <>
      <PageHeading
        actionTitle={"Add Customer"}
        onNewClick={() => history.push("/customer/add")}
      />
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto min-h-full sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full  sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
               {isLoading && (
                <div className="flex items-center h-screen">
                  <CircularProgress className="mx-auto" />
                </div>
              )} 
               {!isLoading && ( 
                <table className="min-w-full h-auto divide-gray-200">
                  <thead className="bg-gray-200">
                    <tr>
                      {columns.map((col) => (
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          {col.column}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {customer && customer.map((cust) => (
                        <tr key={cust.id}>
                          <td>
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10">
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
               )} 
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
