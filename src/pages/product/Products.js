import React, { useEffect, Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { doGetProductRequest } from '../../redux/actions/Product';
import PageHeading from '../../components/PageHeading';
import {
    PencilAltIcon, TrashIcon, DotsVerticalIcon, PhotographIcon
} from '@heroicons/react/solid';
import { Menu, Transition } from '@headlessui/react';
import config from '../../config/config';
import { useHistory, Link } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import ReactPaginate from 'react-paginate';
/* import axios from 'axios';
import { Posts } from '../../components/Posts'; */
import Pagination from '../../components/navigation/Pagination';


const columns = [
    { column: 'NAMA PRODUK' },
    { column: 'HARGA' },
    { column: 'STOK BARANG' },
    { column: 'STATUS' },
    { column: 'EDIT' }
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


export default function Products() {
    let history = useHistory();
    const dispatch = useDispatch();
    const {products, isLoading} = useSelector((state) => state.productState);
    //const [currentItems, setCurrentItems] = useState(null);
    //const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const [endOffset, setEndOffset] = useState(5);
    let data = []
    const [productSlice, setProductSlice] = useState([]);

    /* let payload = {
        user_id: "+6287813841133",
        outlet_id: "OTL-001",
        category: "Semua",
        is_active: "All"
    } */

    useEffect(() => {
        setProductSlice(products.slice(itemOffset, endOffset));
    }, [itemOffset, endOffset]);

    useEffect(() => {
        fetchData()
    }, [])

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

    const handlePageClick = (event) => {
        const newOffset = (event.selected * 5) % products.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    /* const onDelete = async (id) => {} */

    return (
        <>
            <PageHeading actionTitle={"Tambah Produk"} onNewClick={() => history.push('/seller/product/add')} />
            <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto min-h-full sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full  sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            {isLoading && (
                                <div className="flex items-center h-screen">
                                    <CircularProgress className="mx-auto" />
                                </div>
                            )}
                            {isLoading && (
                                <>
                                </>
                            )}
                            <table className="min-w-full h-auto divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        {columns.map(col => (
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
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
                                                        <div className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{prod.desc}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-black">Rp. {new Intl.NumberFormat('ID').format(prod.sell_cost)}</div>
                                            </td>
                                            <td>
                                                <div className="text-sm text-black">Terjual : {prod.quantity}</div>
                                                <div className="text-sm text-gray-700">Sisa    : {prod.minimum_quantity}</div>
                                            </td>
                                            <td>
                                                <input type="checkbox" />
                                                <label class="switch toggle">
                                                    <span class="slider round"></span>
                                                </label>
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

                        <>
                        {/* <ReactPaginate
                                className="grid grid-rows-1 grid-flow-col"
                                breakLabel="..."
                                nextLabel="next >"
                                onPageChange={handlePageClick}
                                pageRangeDisplayed={1}
                                pageCount={pageCount}
                                previousLabel="< previous"
                                renderOnZeroPageCount={null}
                            /> */}

                            <Pagination/>
                    </>

                    </div>
                </div>
            </div>
        </>

    )
}
