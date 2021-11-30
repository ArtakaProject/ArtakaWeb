import React, { Fragment, useRef, useState, useEffect } from "react";
import { LockClosedIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { doSignupRequest } from "../redux/actions/User";

export default function Register(props) {
    const dispatch = useDispatch();
    const status = useSelector((state) => state.userState.status);


    const [values, setValues] = useState({
        user_id: "",
        outlate_name: "",

        secret_password: "",

        
        
    });

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
    }


    const onSubmit = async (e) => {
        e.preventDefault();
         const payload = {
           user_id: values.user_id,
           outlate_name: values.outlate_name,
           secret_password: values.secret_password
       }

       dispatch(doSignupRequest(payload));  
    }


    const { from } = props.location.state || {
        from: {
            pathname: '/signin/'
        }
    }

    if (status) {
        //console.log('redirect : ' || { from })
        return (<Redirect to={from} />)
    }

  return (
    <>
      <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
        <div className="bg-white sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden">
          <div className="px-4 py-10 sm:px-10">
            <p className=" text-2xl font-semibold text-gray-700 text-center">
              Daftar Akun Artaka
            </p>
            <div className="mt-6">
              <form action="#" method="POST" className="space-y-6">
                <div>
                  <label htmlFor="mobile-or-email" className="sr-only">
                    Handphone
                  </label>
                  <input
                    type="text"
                    name="handphone"
                    id="handphone"
                    autoComplete="phone"
                    placeholder="Handphone"
                    value={values.user_id}
                    onChange={handleChange("user_id")}
                    required
                    className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
             
                <div>
                  <label htmlFor="name" className="sr-only">
                    Nama
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    placeholder="Nama"
                    value={values.outlate_name}
                    onChange={handleChange("outlate_name")}
                    required
                    className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    placeholder="Email (Tidak Wajib)"
                  //  value={values.user_id}
                  //  onChange={handleChange("user_id")}
                    required
                    className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Buat Password"
                    autoComplete="current-password"
                    value={values.secret_password}
                    onChange={handleChange("secret_password")}
                    required
                    className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Ulangi Password"
                    autoComplete="current-password"
                  //  value={values.secret_password}
                  //  onChange={handleChange("secret_password")}
                    required
                    className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div>
                  <label htmlFor="name" className="sr-only">
                    Kode Referral
                  </label>
                  <input
                    type="text"
                    name="referral"
                    id="referral"
                    autoComplete="name"
                    placeholder="Kode Referral (Tidak Wajib)"
                    required
                    className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Create your account
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
