<<<<<<< HEAD

import React, { Fragment, useState, useEffect } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { MenuIcon, SearchIcon, ShoppingBagIcon, XIcon } from '@heroicons/react/outline';
import { Redirect, Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { doSignoutRequest } from '../redux/actions/User'



const navigation = {
    categories: [
        {
            id: 'Semua',
            name: 'Semua',
        },
        {
            id: 'Sabun Mandi',
            name: 'Sabun Mandi',
        },
        {
            id: 'Pasta Gigi',
            name: 'Pasta Gigi',
        },
    ],
    pages: [
        { name: 'Seller', href: '/artaka/seller/dashboard' },
        { name: 'Mulai Jual', href: '/artaka/seller/product' },
    ],
}


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function MainLayout(props) {
    const { children } = props;
    const [open, setOpen] = useState(false);
    const [isLogout, setIsLogout] = useState(false);
    const dispatch = useDispatch();
    const { authUser, profile } = useSelector(state => state.userState);

    const totalProduct = useSelector(state => state.cartState.totalProduct)

    const onLogout = () => {
        const payload = {}
        dispatch(doSignoutRequest(payload));
        setIsLogout(true)
    }


    return (

        <div className="bg-purple">
            {/* Mobile menu */}
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="fixed inset-0 flex z-40 lg:hidden" onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <Transition.Child
                        as={Fragment}
                        enter="transition ease-in-out duration-300 transform"
                        enterFrom="-translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition ease-in-out duration-300 transform"
                        leaveFrom="translate-x-0"
                        leaveTo="-translate-x-full"
                    >
                        <div className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
                            <div className="px-4 pt-5 pb-2 flex">
                                <button
                                    type="button"
                                    className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                                    onClick={() => setOpen(false)}
                                >
                                    <span className="sr-only">Tutup</span>
                                    <XIcon className="h-6 w-6" aria-hidden="true" />
                                </button>
                            </div>

                            {/* Links */}


                            <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                                {navigation.pages.map((page) => (
                                    <div key={page.name} className="flow-root">
                                        <a href={page.href} className="-m-2 p-2 block font-medium text-gray-900">
                                            {page.name}
                                        </a>
                                    </div>
                                ))}
                            </div>

                            <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                                <div className="flow-root">

                                    <a href="#" className="-m-2 p-2 block font-medium text-gray-900">
                                        {isLogout ? "Sign in" : "Logout"}
                                    </a>
                                </div>
                                <div className="flow-root">
                                    <a href="#" className="-m-2 p-2 block font-medium text-gray-900">
                                        Buat Akun
                                    </a>
                                </div>
                            </div>

                            <div className="border-t border-gray-200 py-6 px-4">
                                <a href="#" className="-m-2 p-2 flex items-center">

                                    <span className="ml-3 block text-base font-medium text-gray-900">CAD</span>
                                    <span className="sr-only">, change currency</span>
                                </a>
                            </div>
                        </div>
                    </Transition.Child>
                </Dialog>
            </Transition.Root>

            <header className="relative bg-white">
                <nav aria-label="Top" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="border-b border-gray-200">
                        <div className="h-16 flex items-center">
                            <button
                                type="button"
                                className="bg-white p-2 rounded-md text-gray-400 lg:hidden"
                                onClick={() => setOpen(true)}
                            >
                                <span className="sr-only">Buka Menu</span>
                                <MenuIcon className="h-6 w-6" aria-hidden="true" />
                            </button>

                            {/* Logo */}
                            <div className="ml-4 flex lg:ml-0">
                                <span className="flex min-w-0 items-center justify-between space-x-3">
                                    <img alt="icon" className="h-8 w-auto" src="http://localhost:3000/icon.png" />
                                    {/* <span className="flex-1 flex flex-col min-w-0">
                                        <span className="text-gray-900 text-xl font-medium truncate">.</span>
                                    </span> */}
                                </span>
                            </div>

                            {/* Flyout menus */}
                            <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                                <div className="h-full flex space-x-8">

                                    {navigation.pages.map((page) => (
                                        <Link
                                            key={page.name}
                                            to={page.href}
                                            className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                                        >
                                            {page.name}
                                        </Link>
                                    ))}


                                </div>


                            </Popover.Group>
                            <div className="ml-auto flex items-center">
                                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                                    {
                                        isLogout === true?
                                            (<Link to="/artaka/signin" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                                                Sign in
                                            </Link>) :
                                            (<Link to="#" onClick={onLogout} className="text-sm font-medium text-gray-700 hover:text-gray-800">
                                                Logout
                                            </Link>)

                                    }

                                    <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                                    <Link to="/artaka/signup" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                                        Sign Up
                                    </Link>
                                </div>

                                {/* Cart */}
                                <div className="ml-4 flow-root lg:ml-6">
                                    <a href="#" className="group -m-2 p-2 flex items-center">
                                        <ShoppingBagIcon
                                            className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                            aria-hidden="true"
                                        />
                                        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">{totalProduct}</span>
                                        <span className="sr-only">items in cart, view bag</span>
                                    </a>
                                </div>
                                <div className="ml-4 flow-root lg:ml-6">
                                    <a href="#" className="group -m-2 p-2 flex items-center">
                                        <img
                                            className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"
                                            src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                                            alt=""
                                        />
                                        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">{profile ? profile.username : ""}</span>

                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            {/* main section */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {children}
            </main>
        </div>

    )
}



=======

>>>>>>> origin/chalid
