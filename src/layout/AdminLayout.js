import { Fragment, useState } from "react";
import { Menu, Popover, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { ChevronDownIcon, BellIcon } from "@heroicons/react/solid";
import { HomeIcon, MenuIcon, XIcon, DocumentReportIcon, BookOpenIcon, ShoppingCartIcon, CashIcon} from "@heroicons/react/outline";

// please fetch from redux
const user = {
  name: "Chelsea Hagon",
  email: "chelseahagon@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

const navigation = [
  {
    name: "Dashboard",
    href: "/artaka/seller/dashboard",
    icon: HomeIcon,
    current: true,
  },

  {
    name: "Laporan",
    href: "/artaka/seller/report",
    icon: DocumentReportIcon,
    current: false,
  },

  {
    name: "Kasir",
    href: "/artaka/seller/cashier",
    icon: CashIcon,
    current: false,
  },

  {
    name: "Manual",
    href: "/artaka/not-found",
    icon: BookOpenIcon,
    current: false,
  }, 

  {
    name: "Pesanan",
    href: "/artaka/not-found",
    icon: ShoppingCartIcon,
    current: false,
  },
  
  {
    name: "Menu",
    href: "/artaka/not-found",
    icon: MenuIcon,
    current: false,
  },
];

const subLaporan = [
  { name: "Laba / Rugi", href: "/artaka/seller/report" },  
  { name: "Arus Kas", href: "/artaka/not-found" },
  { name: "Neraca", href: "/artaka/not-found" },
  { name: "Transaksi Kasir", href: "/artaka/not-found" },
  { name: "Transaksi Online", href: "/artaka/not-found" },
  { name: "Transaksi Non Kasir", href: "/artaka/not-found" },
]

const subMenu = [
  { name: "Bantuan", href: "/artaka/not-found" },
  { name: "Kelola Produk", href: "/artaka/not-found" },
  { name: "Pengaturan Promo & Poin", href: "/artaka/not-found" },
  { name: "Pengaturan Toko", href: "/artaka/not-found" },
  { name: "Pengaturan Order Online", href: "/artaka/not-found" },
  { name: "Pelanggan", href: "/artaka/seller/customer" },
  { name: "Mitra", href: "/artaka/not-found" },
  { name: "Pemasukan Non Kasir", href: "/artaka/not-found" },
  { name: "Pengeluaran Non Persediaan", href: "/artaka/not-found" },
  { name: "Riwayat Retur Penjualan", href: "/artaka/not-found" },
  { name: "Printer & Struk", href: "/artaka/not-found" },
  { name: "Inbox", href: "/artaka/not-found" },
];

const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "/artaka/signin" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}


export default function AdminLayout(props) {
  const [menuCollapse, setMenuCollapse] = useState(false);
  const [subnav, setSubnav] = useState(false);

  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  const showSubnav = () => setSubnav(!subnav);

  return (
    <div className="min-h-screen">
      {/* When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars */}
      <Popover
        as="header"
        className={({ open }) =>
          classNames(
            open ? "fixed inset-0 z-40 overflow-y-auto" : "",
            "bg-white shadow-sm lg:static lg:overflow-y-visible"
          )
        }
      >
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative flex justify-between xl:grid xl:grid-cols-12 lg:gap-8">
                <div className="flex md:absolute md:left-0 md:inset-y-0 lg:static xl:col-span-2">
                  <div className="flex-shrink-0 flex items-center">
                    <a href="#">
                      <img
                        className="block h-8 w-auto"
                        src="/icon.png"
                        alt="artaka"
                      />
                    </a>
                  </div>
                </div>
                <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
                  <div className="flex items-center px-6 py-4 h-14 md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0"></div>
                </div>
                <div className="flex items-center md:absolute md:right-0 md:inset-y-0 lg:hidden">
                  {/* Mobile menu button */}
                  <Popover.Button className="-mx-2 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-500">
                    <span className="sr-only">Open menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Popover.Button>
                </div>
                <div className="hidden lg:flex lg:items-center lg:justify-end xl:col-span-4">
                  {/* Profile dropdown */}
                  <Menu as="div" className="relative inline-block text-left">
                    {({ open }) => (
                      <>
                        <div>
                          <Menu.Button className="inline-flex justify-center w-full rounded-md px-4 py-2 bg-white text-sm font-medium text-purple-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                            Ken Shop {/* nama toko */}
                            <ChevronDownIcon
                              className="-mr-1 ml-2 h-5 w-5"
                              aria-hidden="true"
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
                            className="origin-top-right absolute z-10 right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 focus:outline-none"
                          >
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <Link
                                    to={item.href}
                                    className={classNames(
                                      active ? "bg-gray-100" : "",
                                      "block py-2 px-4 text-sm text-gray-700"
                                    )}
                                  >
                                    {item.name}
                                  </Link>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </>
                    )}
                  </Menu>
                  <Link
                    to="#"
                    className="ml-5 flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon
                      className="h-6 w-6 text-purple-700"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </div>
            </div>

            <Popover.Panel as="nav" className="lg:hidden" aria-label="Global">
              <div className="max-w-3xl mx-auto px-2 pt-2 pb-3 space-y-1 sm:px-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      item.current
                        ? "bg-gray-100 text-gray-900"
                        : "hover:bg-gray-50",
                      "block rounded-md py-2 px-3 text-base font-medium"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
                <div>
                  <ul className="flex flex-col pl-2 text-black border-gray-700">
                    {subMenu.map((item) => (
                      <li>
                        <Link key={item.name} to={item.href}>
                          <span className="inline-block w-full px-4 py-0.5 text-sm rounded hover:text-purple-700 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:text-white">
                            {item.name}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="border-t border-gray-200 pt-4 pb-3">
                <div className="max-w-3xl mx-auto px-4 flex items-center sm:px-6">
                  <div className="flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={user.imageUrl}
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-gray-800">
                      {user.name}
                    </div>
                    <div className="text-sm font-medium text-gray-500">
                      {user.email}
                    </div>
                  </div>
                  <button
                    type="button"
                    className="ml-auto flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-3 max-w-3xl mx-auto px-2 space-y-1 sm:px-4">
                  {userNavigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </>
        )}
      </Popover>

      {/* {sidebar} */}
      <div className="py-2 h-screen w-screen">
        <div className="max-w-3xl mx-auto sm:px-6 lg:max-w-7xl lg:ml-0 lg:grid lg:grid-cols-12 lg:gap-4">
          {menuCollapse ? (
            <div className="lg:block lg:col-span-3 xl:col-span-1 w-10">
              <nav
                aria-label="Sidebar"
                className="sticky top-4 divide-y divide-gray-300"
              >
                <div className="group flex items-center px-3 py-2 rounded-md">
                  <MenuIcon
                    className="block h-6 w-6 text-purple-900"
                    aria-hidden="true"
                    onClick={menuIconClick}
                  />
                </div>
                <div className="pb-3 space-y-1">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={classNames(
                        item.current
                          ? "text-purple-900"
                          : "text-gray-600 hover:bg-gray-50",
                        "group flex items-center px-3 py-2 text-sm font-medium rounded-md"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      <item.icon
                        className={classNames(
                          item.current
                            ? "text-purple-500"
                            : "text-purple-400 group-hover:text-purple-500",
                          "flex-shrink-0 -ml-1 mr-3 h-6 w-6"
                        )}
                        aria-hidden="true"
                      />
                    </Link>
                  ))}
                </div>
              </nav>
            </div>
          ) : (
            <div className="lg:block lg:col-span-3 xl:col-span-2">
              <nav
                aria-label="Sidebar"
                className="sticky top-4 divide-y divide-gray-300"
              >
                <div className="group flex items-center px-3 py-2 rounded-md">
                  <p className="text-xl w-40 text-purple-900">Ken Shop</p>
                  <MenuIcon
                    className="block h-6 w-6 text-purple-900"
                    aria-hidden="true"
                    onClick={menuIconClick}
                  />
                </div>

                <div className="pb-3 space-y-1">
                  <Link
                    to="/artaka/seller/dashboard"
                    className="hover:bg-gray-50 text-purple-900 group flex items-center px-3 py-1 text-sm font-medium rounded-md"
                    aria-current="page"
                  >
                    <HomeIcon className="text-purple-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6"></HomeIcon>
                    <span className="truncate text-purple-700">
                     Dashboard
                    </span>
                  </Link>

                  <Link
                    to="/artaka/seller/report"
                    className="hover:bg-gray-50 text-purple-900 group flex items-center px-3 py-1 text-sm font-medium rounded-md"
                    aria-current="page"
                  >
                    <DocumentReportIcon className="text-purple-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6"></DocumentReportIcon>
                    <span className="truncate text-purple-700">
                     Laporan
                    </span>
                  </Link>
                  <div className="pl-4">
                    <ul className="flex flex-col pl-2 text-black border-gray-700">
                      {subLaporan.map((item) => (
                        <li>
                          <Link key={item.name} to={item.href}>
                            <span className="inline-block w-full px-4 py-0.5 text-sm rounded hover:text-purple-700 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:text-white">
                              {item.name}
                            </span>
                          </Link>
                        </li>
                      ))} 
                    </ul>
                  </div>

                  <Link
                    to="/artaka/seller/cashier"
                    className="hover:bg-gray-50 text-purple-900 group flex items-center px-3 py-1 text-sm font-medium rounded-md"
                    aria-current="page"
                  >
                    <CashIcon className="text-purple-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6"></CashIcon>
                    <span className="truncate text-purple-700">
                     Kasir
                    </span>
                  </Link>

                  <Link
                    to="/artaka/not-found"
                    className="hover:bg-gray-50 text-purple-900 group flex items-center px-3 py-1 text-sm font-medium rounded-md"
                    aria-current="page"
                  >
                    <BookOpenIcon className="text-purple-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6"></BookOpenIcon>
                    <span className="truncate text-purple-700">
                     Manual
                    </span>
                  </Link>

                  <Link
                    to="/artaka/not-found"
                    className="hover:bg-gray-50 text-purple-900 group flex items-center px-3 py-1 text-sm font-medium rounded-md"
                    aria-current="page"
                  >
                    <ShoppingCartIcon className="text-purple-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6"></ShoppingCartIcon>
                    <span className="truncate text-purple-700">
                     Pesanan
                    </span>
                  </Link>

                  <Link
                    to="/artaka/not-found"
                    className="hover:bg-gray-50 text-purple-900 group flex items-center px-3 py-1 text-sm font-medium rounded-md"
                    aria-current="page"
                  >
                    <MenuIcon className="text-purple-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6"></MenuIcon>
                    <span className="truncate text-purple-700">
                     Menu
                    </span>
                  </Link>
                  <div className="pl-4">
                    <ul className="flex flex-col pl-2 text-black border-gray-700">
                      {subMenu.map((item) => (
                        <li>
                          <Link key={item.name} to={item.href}>
                            <span className="inline-block w-full px-4 py-0.5 text-sm rounded hover:text-purple-700 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:text-white">
                              {item.name}
                            </span>
                          </Link>
                        </li>
                      ))} 
                    </ul>
                  </div>
                  

              {/*    {navigation.map((item) => {
                    return (
                      <>
                        <Link
                          key={item.name}
                          to={item.href}
                          className={classNames(
                            item.current
                              ? "text-purple-900 hover:bg-gray-200"
                              : "text-gray-600 hover:bg-gray-200",
                            "group flex items-center px-3 py-2 text-sm font-medium rounded-md"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          <item.icon
                            className={classNames(
                              item.current
                                ? "text-purple-500"
                                : "text-purple-400 group-hover:text-purple-500",
                              "flex-shrink-0 -ml-1 mr-3 h-6 w-6"
                            )}
                            aria-hidden="true"
                          />
                          <span className="truncate text-purple-700">
                            {item.name}
                          </span>  
                        </Link>
                      </>
                    );
                  })} */}

                </div>
              </nav>
            </div>
          )}

          <main className="lg:col-span-10 xl:col-span-10">
            <div className="px-4 sm:px-0">{props.children}</div>
          </main>
        </div>
      </div>
    </div>
  );
}
