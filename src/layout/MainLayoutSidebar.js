import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import { BookOpenIcon, ClockIcon, DocumentReportIcon, HomeIcon, MenuAlt1Icon, UserIcon, ViewListIcon, XIcon } from '@heroicons/react/outline'
import {
    ClipboardListIcon,
    SearchIcon,
    BellIcon,
    SelectorIcon,
    ChatIcon,
    CollectionIcon,
    CreditCardIcon,
    ViewGridAddIcon,
    CashIcon,
    ShoppingCartIcon,
    StarIcon, CogIcon
} from '@heroicons/react/solid';
import { Route, Link, useHistory , Outlet } from 'react-router-dom'
import MainSidebar from './MainSidebar';
import { useDispatch, useSelector } from 'react-redux';
import { doSignoutRequest } from '../redux/actions/User'

const navigation = [
    { name: 'Dashboard', href: '/artaka/seller/dashboard', icon: HomeIcon, current: true },
    { name: 'Produk', href: '/artaka/seller/product', icon: ViewGridAddIcon, current: false },
    { name: 'Laporan', href: '/report/profitnloss', icon: DocumentReportIcon, current: false },
    { name: 'Customer', href: '/customer', icon: UserIcon, current: false },
    { name: 'Pesanan', href: '/artaka/seller/order', icon: CollectionIcon, current: false },
    { name: 'Manual', href: '/', icon: BookOpenIcon, current: false },
    { name: 'Akun Bayar', href: '/artaka/seller/account', icon: CreditCardIcon, current: false },
    { name: 'Transaksi Bayar', href: '/artaka/seller/payment', icon: CashIcon, current: false },
    //
    { name: 'Menu', href: '#', icon: CogIcon, current: false },
]



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function MainLayoutSidebar(props) {
   // let history = useHistory();
    const { children } = props
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const dispatch = useDispatch();

    const [redirect, setRedirect] = useState(false)

    const onLogout = () => {
        const payload = {}
        dispatch(doSignoutRequest(payload));
        setRedirect(true)
    }

    if (redirect) {
        return  <Route path="/"/>
    }


    return (
        <div className="h-screen flex overflow-hidden bg-white">
            <Transition.Root show={sidebarOpen} as={Fragment}>
                <Dialog
                    as="div"
                    static
                    className="fixed inset-0 flex z-40 lg:hidden"
                    open={sidebarOpen}
                    onClose={setSidebarOpen}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
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
                        <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-in-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in-out duration-300"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="absolute top-0 right-0 -mr-12 pt-2">
                                    <button
                                        className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                        onClick={() => setSidebarOpen(false)}
                                    >
                                        <span className="sr-only">Close sidebar</span>
                                        <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </button>
                                </div>
                            </Transition.Child>
                            <div className="flex-shrink-0 flex items-center px-4">
                                <Link to="/artaka/">
                                    <img
                                        className="h-8 w-auto"
                                        src="https://artaka-api.com/icon.png"
                                        alt="artaka"
                                    />
                                </Link>
                            </div>
                            <div className="mt-5 flex-1 h-0 overflow-y-auto">
                                <nav className="px-2">
                                    <div className="space-y-1">
                                        {navigation.map((item) => (
                                            <Link
                                                key={item.name}
                                                to={item.href}
                                                className={classNames(
                                                    item.current
                                                        ? 'bg-gray-100 text-purple-900'
                                                        : 'text-purple-600 hover:text-purple-900 hover:bg-gray-50',
                                                    'group flex items-center px-2 py-2 text-base leading-5 font-medium rounded-md'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                <item.icon
                                                    className={classNames(
                                                        item.current ? 'text-purple-700' : 'text-purple-500 group-hover:text-purple-700',
                                                        'mr-3 flex-shrink-0 h-6 w-6'
                                                    )}
                                                    aria-hidden="true"
                                                />
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </Transition.Child>
                    <div className="flex-shrink-0 w-14" aria-hidden="true">
                        {/* Dummy element to force sidebar to shrink to fit close icon */}
                    </div>
                </Dialog>
            </Transition.Root>

            {/* Static sidebar for desktop */}
            <div className="hidden lg:flex lg:flex-shrink-0" >
                <div className="flex flex-col w-64 border-r border-gray-200 pt-5 pb-4" style={{ background: '#D2B4DE' }}>
                    <div className="flex items-center flex-shrink-0 px-6">
                        <span className="flex min-w-0 items-center justify-between space-x-3">
                            <Link to="/" >
                                <img
                                    alt=""
                                    src="/icon.png"
                                    width="100"
                                    height="100"
                                />
                            </Link>
                        </span>
                    </div>


                    {/* Sidebar component, swap this element with another sidebar if you like */}
                    <div className="h-0 flex-1 flex flex-col overflow-y-auto">
                        {/* Navigation */}
                        <nav className="px-3 mt-6">
                            <div className="space-y-1">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.href}
                                        className={classNames(
                                            item.current ? 'hover:bg-gray-50 text-purple-900' : 'text-purple-500 hover:text-purple-700 hover:bg-gray-50',
                                            'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                                        )}
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        <item.icon
                                            className={classNames(
                                                item.current ? 'text-purple-900' : 'text-purple-900 group-hover:text-purple-700',
                                                'mr-3 flex-shrink-0 h-6 w-6'
                                            )}
                                            aria-hidden="true"
                                        />
                                        {item.name}
                                    </Link>
                                ))}

                                //
                                <div class="group inline-block">
                                    <button
                                        class="outline-none focus:outline-none border px-3 py-1 bg-white rounded-sm flex items-center min-w-32"
                                    >
                                        <span class="pr-1 font-semibold flex-1">Dropdown</span>
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
                                        <li class="rounded-sm px-3 py-1 hover:bg-gray-100">Programming</li>
                                        <li class="rounded-sm px-3 py-1 hover:bg-gray-100">DevOps</li>
                                        <li class="rounded-sm relative px-3 py-1 hover:bg-gray-100">
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
                                        </li>
                                        <li class="rounded-sm px-3 py-1 hover:bg-gray-100">Testing</li>
                                    </ul>
                                </div>

                                {/* <style>
  li>ul                 {transform: translatex(100%) scale(0) }
  li:hover>ul           {transform: translatex(101%) scale(1) }
  li > button svg       {transform: rotate(-90deg) }
  li:hover > button svg {transform: rotate(-270deg) }

                                    .group:hover .group-hover\:scale-100 {transform: scale(1) }
                                    .group:hover .group-hover\:-rotate-180 {transform: rotate(180deg) }
                                    .scale-0 {transform: scale(0) }
                                    .min-w-32 {min - width: 8rem }
                                </style> */}

                            </div>

                        </nav>
                    </div>
                </div>
            </div>
            {/* Main column */}
            <div className="flex flex-col w-0 flex-1 overflow-hidden">
                {/* Search header */}
                <div className="relative z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200 lg:hidden">
                    <button
                        className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 lg:hidden"
                        onClick={() => setSidebarOpen(true)}
                    >
                        <span className="sr-only">Open sidebar</span>
                        <MenuAlt1Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                    <div className="flex-1 flex justify-between px-4 sm:px-6 lg:px-8">

                        <div className="flex items-center">
                            {/* Profile dropdown */}
                            <Menu as="div" className="ml-3 relative">
                                {({ open }) => (
                                    <>
                                        <div>
                                            <Menu.Button className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                                                <span className="sr-only">Open user menu</span>
                                                <img
                                                    className="h-8 w-8 rounded-full"
                                                    src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                    alt=""
                                                />
                                            </Menu.Button>
                                        </div>
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
                                                className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none"
                                            >
                                                <div className="py-1">
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <a
                                                                href="#"
                                                                className={classNames(
                                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                    'block px-4 py-2 text-sm'
                                                                )}
                                                            >
                                                                View profile
                                                            </a>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <a
                                                                href="#"
                                                                className={classNames(
                                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                    'block px-4 py-2 text-sm'
                                                                )}
                                                            >
                                                                Settings
                                                            </a>
                                                        )}
                                                    </Menu.Item>

                                                </div>

                                                <div className="py-1">
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <Link
                                                                to="#"
                                                                onClick={onLogout}
                                                                className={classNames(
                                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                    'block px-4 py-2 text-sm'
                                                                )}
                                                            >
                                                                Logout
                                                            </Link>
                                                        )}
                                                    </Menu.Item>
                                                </div>
                                            </Menu.Items>
                                        </Transition>
                                    </>
                                )}
                            </Menu>
                        </div>
                    </div>
                </div>
               { /*
                 <MainSidebar pageTitle={props.pageTitle} onShopping={() => history.push('/')}>
                    {children}
                </MainSidebar>
                                                                */}
            </div>
            <Outlet/>
        </div>
    )
}
