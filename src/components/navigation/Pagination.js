import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'

export default function Pagination(props) {
  return (
    <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          {/* <p className="text-sm text-gray-700">
            Daftar ke <span className="font-medium">1</span> sampai <span className="font-medium">5</span> dari{' '}
            <span className="font-medium">20</span> hasil.
          </p> */}
        </div>
        <div>
          <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
            <a
              href="#!"
              className="relative inline-flex items-center px-2 py-2 border border-indigo-300 bg-white text-sm font-medium text-gray-700 hover:bg-indigo-50"
            >
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              <p>Previous</p>
            </a>
            {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
            <a
              href="#"
              aria-current="page"
              className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
            >
              1
            </a>
            <a
              href="#"
              className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
            >
              2
            </a>
            <a
              href="#"
              className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
            >
              3
            </a>

            <a
              href="#"
              className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
            >
              4
            </a>
            <a
              href="#"
              className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
            >
              5
            </a>

            <a
              onClick={() => props.onNextPage()}
              href="#!"
              className=
              "relative inline-flex items-center px-2 py-2 border border-indigo-300 bg-white text-sm font-medium text-gray-700 hover:bg-indigo-50"
            >
              <p>Next</p>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          </nav>
        </div>
      </div>
    </div>
  )
}
