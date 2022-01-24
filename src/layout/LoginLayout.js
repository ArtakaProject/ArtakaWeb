import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import { PhoneIcon } from "@heroicons/react/solid";
import ArtakaClear from "../assets/ArtakaClear.png";

export default function LoginLayout(props) {
  return (
    <div className=" max-h-screen bg-gray-200 overflow-hidden">
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
                      className="mb-4 h-8 w-auto sm:h-10"
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
                <div className="hidden md:flex md:ml-10">
                  <PhoneIcon className="h-9 mt-1 text-purple-700 hover:text-indigo-500"></PhoneIcon>
                  <p className="mt-1 text-black text-lg font-semibold">
                    +6281122334455
                  </p>
                  <div className="ml-10 mb-3">
                    <Link
                      to="/artaka/signin"
                      className="inline-flex items-center px-10 py-2 border-4 border-purple-700 text-sm font-semibold rounded-xl text-black bg-transparent hover:bg-purple-700 hover:text-white hover:border-blue-500"
                    >
                      LOG IN
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
                    <Link
                      to="/artaka/signin"
                      className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
                    >
                      Sign in
                    </Link>
                  </div>
                </Popover.Panel>
              </Transition>
            </div>
          </>
        )}
      </Popover>
      <div className="relative pb-16 sm:pb-24">
        <main className="mt-16 sm:mt-24">
          <div className="mx-auto max-w-7xl">{props.children}</div>
        </main>
      </div>
    </div>
  );
}
