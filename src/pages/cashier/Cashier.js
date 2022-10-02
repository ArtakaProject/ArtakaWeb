import React, { useEffect } from "react";
import { DocumentTextIcon } from "@heroicons/react/outline";
import { ViewGridIcon, SearchIcon, ViewListIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { doGetProductRequest } from "../../redux/actions/Product";
import ProductList from "../product/ProductList";

export default function Cashier() {

  return (
    <div>
      <div className="py-6 justify-center inline-block min-w-full sm:px-6 lg:px-8">
        <div class="container flex flex-col md:flex-row items-center justify-center px-3 text-gray-700">
          <div class="max-w-screen-lg">
            <div class="flex">
              <button class="flex items-center justify-center px-4 border-r">
                <SearchIcon
                  class="w-6 h-6 text-purple-700"
                  fill="currentColor"
                ></SearchIcon>
              </button>
              <input
                type="text"
                class="px-4 py-2 w-9/12 text-gray-700"
                placeholder="Search"
              />
              <ViewListIcon
                class="w-10 h-10 ml-20 text-purple-700"
                fill="currentColor"
              ></ViewListIcon>
              <ViewGridIcon
                class="w-10 h-10 ml-4 text-purple-700"
                fill="currentColor"
              ></ViewGridIcon>
            </div>
            <ProductList/>
          </div>
        </div>
      </div>
    </div>
  );
  }

 

