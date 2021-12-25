import React, { useEffect, Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { doGetProductRequest } from '../../redux/actions/Product';
import PageHeading from '../../components/PageHeading';
import {
    PencilAltIcon, TrashIcon, DotsVerticalIcon, PhotographIcon, SearchIcon
} from '@heroicons/react/solid';
import { Menu, Transition } from '@headlessui/react';
import { useHistory, Link } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import Pagination from '../../components/navigation/Pagination';
import { FilterIcon, PlusIcon } from '@heroicons/react/outline';
import { ToggleSwitch } from '../../components/navigation/ToggleSwitch';


const columns = [
    { column: 'NAMA PRODUK' },
    { column: 'HARGA' },
    { column: 'STOK BARANG' },
    { column: 'STATUS' },
    { column: 'OPSI' }
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


export default function Products() {
    let history = useHistory();
    const dispatch = useDispatch();
    const { products, isLoading } = useSelector((state) => state.productState);
    //const [currentItems, setCurrentItems] = useState(null);
    //const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const [endOffset, setEndOffset] = useState(5);
    //let data = []
    const [productSlice, setProductSlice] = useState([]);

    /* let payload = {
        user_id: "+6287813841133",
        outlet_id: "OTL-001",
        category: "Semua",
        is_active: "All"
    } */

    async function fetchData() {
        const payload = {
            user_id: "+6287813841133",
            outlet_id: "OTL-001",
            category: "Semua",
            is_active: "All"
        }
        dispatch(doGetProductRequest(payload));
        setProductSlice(products.slice(itemOffset, endOffset));
    };

    /* useEffect(() => {
        fetchData();
        setProductSlice(products.slice(itemOffset, endOffset));

    }, [itemOffset, endOffset]); */

    useEffect(() => {
        fetchData()
    }, []);

    /*const handlePageClick = (event) => {
           const newOffset = (event.selected * 5) % products.length;
           console.log(
               `User requested page number ${event.selected}, which is offset ${newOffset}`
           );
           setItemOffset(newOffset);
       }; */

    /* const onDelete = async (id) => {} */

    return (
        <>
            {/* <PageHeading actionTitle={"Tambah Produk"} onNewClick={() => history.push('/seller/product/add')} /> */}
            <div className="flex w-full mb-3">
                <label className="text-indigo text-xl text-purple-900s ml-5 mr-5 mt-1"><b>DAFTAR PRODUK</b></label>
                <div className="relative w-7/12 mr-10">
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
                <PlusIcon className="w-6 h-6 mr-5 ml-10 mt-2" onClick={() => history.push("/artaka/seller/product/add")} />
                <FilterIcon className="w-6 h-6 mt-2">

                </FilterIcon>
            </div>
            <div className="flex w-full mb-2">
                <button type="button" class="p-2 ml-3 mr-3 text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-purple-900"><b>Semua</b></button>
                <button type="button" class="p-2 ml-3 mr-3 text-purple bg-gray-300 hover:bg-indigo-800 hover:text-white focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-purple-900"><b>Pembalut</b></button>
                <button type="button" class="p-2 ml-3 mr-3 text-purple bg-gray-300 hover:bg-indigo-800 hover:text-white focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-purple-900"><b>Make Up</b></button>
                <button type="button" class="p-2 ml-3 mr-3 text-purple bg-gray-300 hover:bg-indigo-800 hover:text-white focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-purple-900"><b>Pakaian Wanita</b></button>
                <button type="button" class="p-2 ml-3 mr-3 text-purple bg-gray-300 hover:bg-indigo-800 hover:text-white focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-purple-900"><b>Pakaian Pria</b></button>
                {/* <button className="rounded-full bg-indigo-600 text-white p-2 ml-3 mr-3">Semua</button>
                <button className="rounded-full bg-gray-300 p-2 ml-3 mr-3">Pembalut</button>
                <button className="rounded-full bg-gray-300 p-2 ml-3 mr-3">Make Up</button>
                <button className="rounded-full bg-gray-300 p-2 ml-3 mr-3">Pakaian Wanita</button>
                <button className="rounded-full bg-gray-300 p-2 ml-3 mr-3">Pakaian Pria</button> */}
            </div>
            {/* <CategoryHeading/> */}
            <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto min-h-full sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full  sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            {/* {isLoading && (
                                <div className="flex items-center h-screen">
                                    <CircularProgress className="mx-auto" />
                                </div>
                            )}
                            {isLoading && (
                                <>
                                </>
                            )} */}
                            <table className="min-w-full h-auto divide-gray-200">
                                <thead className="bg-gray-200">
                                    <tr>
                                        {columns.map(col => (
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider"
                                            >
                                                <b>{col.column}</b>
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {productSlice && productSlice.map((prod) => (
                                        <tr key={prod.id}>
                                            <td>
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 h-12 w-12">
                                                        <img className="h-10 w-10 rounded-full"
                                                            src={prod.images}
                                                            alt="" />
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-black">{prod.name}</div>
                                                        <div className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{prod.desc}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-black">Rp{new Intl.NumberFormat('ID').format(prod.sell_cost)},00</div>
                                            </td>
                                            <td>
                                                <div className="text-sm text-black">Terjual {prod.quantity}</div>
                                                <div className="text-sm text-gray-700">Sisa {prod.minimum_quantity}</div>
                                            </td>
                                            <td>
                                                {/* <ToggleSwitch /> */}
                                                <div className="w-12 h-6 flex items-center bg-gray-300 rounded-full mx-3 px-1" >
                                                    <div className="bg-white w-4 h-4 rounded-full shadow-md transform" ></div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium ">
                                                <Menu as="div" className="relative flex justify-end items-center ">
                                                    {({ open }) => (
                                                        <>
                                                            <Menu.Button className="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                                                                <span className="sr-only">Opsi</span>
                                                                <DotsVerticalIcon className="w-5 h-5" aria-hidden="true" />
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
                                                                                <Link to={`/seller/product/edit/`}
                                                                                    className={classNames(
                                                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                                        'group flex items-center px-4 py-2 text-sm'
                                                                                    )}>

                                                                                    <PencilAltIcon
                                                                                        className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                                                                        aria-hidden="true"
                                                                                    />
                                                                                    Edit Produk
                                                                                </Link>
                                                                            )}
                                                                        </Menu.Item>

                                                                        <Menu.Item>
                                                                            {({ active }) => (
                                                                                < Link to='#'
                                                                                    className={classNames(
                                                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                                        'group flex items-center px-4 py-2 text-sm'
                                                                                    )}
                                                                                >
                                                                                    <PhotographIcon
                                                                                        className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                                                                        aria-hidden="true"
                                                                                    />
                                                                                    Unggah File Gambar
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
                                                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                                        'group flex items-center px-4 py-2 text-sm'
                                                                                    )}
                                                                                /* onClick={() => {
                                                                                    if (window.confirm('Anda yakin menghapus produk ini ?'))
                                                                                        onDelete(prod.prod_id)
                                                                                }} */
                                                                                >
                                                                                    <TrashIcon
                                                                                        className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                                                                        aria-hidden="true"
                                                                                    />
                                                                                    Hapus
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
                        </div>

                            <Pagination />

                    </div>
                </div>
            </div >
        </>

    )
}
