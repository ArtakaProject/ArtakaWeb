import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import ArtakaClear from "../assets/ArtakaClear.png";
import ArtakaLanding from "../assets/ArtakaLanding.png";

const navigation = [
  { name: "Why Open Enterprise", href: "#" },
  { name: "Features", href: "#" },
  { name: "Contribute", href: "#" },
];

export default function LandingLayout(props) {
  return (
    <div className=" max-h-full bg-gray-200 overflow-hidden">
      <div
        className="hidden sm:block sm:absolute sm:inset-0"
        aria-hidden="true"
      ></div>
      <Popover>
        {({ open }) => (
          <>
            <div className="relative bg-white h-16 justify-center shadow-2xl">
              <nav
                className="relative pt-3 max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
                aria-label="Global"
              >
                <div className="flex items-center flex-1">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <span className="sr-only">Workflow</span>
                    <img
                      className="h-8 w-auto sm:h-10"
                      src={ArtakaClear}
                      alt=""
                    />
                    <div className="-mr-2 flex items-center md:hidden">
                      <Popover.Button className="bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
                        <span className="sr-only">Open main menu</span>
                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="hidden space-x-7 md:flex md:ml-10">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="font-medium text-black hover:text-purple-700"
                    >
                      {item.name}
                    </a>
                  ))}
                  <div>
                    <Link
                      to="#"
                      className="font-medium text-purple-800 hover:text-indigo-500"
                    >
                      Request Early Access
                    </Link>
                  </div>
                </div>
              </nav>

              <Transition
                show={open}
                as={Fragment}
                enter="duration-150 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Popover.Panel
                  focus
                  static
                  className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                >
                  <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="px-5 pt-4 flex items-center justify-between">
                      <div>
                        <img className="h-8 w-auto" src="./codeid.png" alt="" />
                      </div>
                      <div className="-mr-2">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                          <span className="sr-only">Close menu</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="px-2 pt-2 pb-3 space-y-1">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                    <div>
                      <Link
                        to="#"
                        className="font-medium ml-5 text-purple-800 hover:text-indigo-500"
                      >
                        Request Early Access
                      </Link>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </div>
          </>
        )}
      </Popover>
      <div className="relative pb-16 sm:pb-24">
        <main className="mt-16 sm:mt-24">
          <div className="mx-auto max-w-7xl">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
                <div className="bg-gray-200 sm:mt-10 sm:w-full sm:overflow-hidden">
                  <div className="px-4 py-8 sm:px-10">
                    <p className=" text-5xl font-bold font-serif text-left text-black">
                      Hitung Penjualan Anda Dengan Tepat dan Mudah
                    </p>
                    <div className="mt-3">
                      <p className="text-sm text-left font-bold font-serif text-black">
                        Bersama ARTAKA kami siap membantu para umkm untuk
                        memudahkan para pemilik umkm untuk melakukan pembukuan
                        penjualannya
                      </p>
                    </div>
                    <div className="mt-6 text-center">
                      <Link to="/artaka/signin">
                        <button class="px-9 inline py-2 text-sm font-medium leading-8 text-white transition-colors duration-150 focus:outline-none focus:shadow-outline-blue bg-purple-800 active:bg-blue-600 hover:bg-indigo-600 hover:text-black">
                          LOGIN
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-4 pt-6 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
                <div>
                  <img
                    className="mx-auto h-96 w-full pl-10"
                    src={ArtakaLanding}
                    alt="Workflow"
                  />
                </div>
              </div>

              {props.children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
