<<<<<<< HEAD
import React, { Fragment, useRef, useState, useEffect } from 'react'
import { LockClosedIcon } from '@heroicons/react/solid';
import { useDispatch, useSelector } from 'react-redux';
import { doSignupRequest } from '../redux/actions/User';
import { toast } from 'react-toastify';
import { Redirect } from 'react-router-dom'

export default function SignUp(props) {
    const dispatch = useDispatch();
    const status = useSelector((state) => state.userState.status);


    const [values, setValues] = useState({
        username: undefined,
        user_firstname: "",
        user_lastname: "",
        user_password: "",
        email: '',
        user_phone: "",
        roletype: ""
    });

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
    }


    const onSubmit = async (e) => {
        e.preventDefault();
         const payload = {
           username: (values.username),
           user_firstname: (values.user_firstname).toUpperCase() || '',
           user_lastname: (values.user_lastname).toUpperCase() || '',
           user_password: values.user_password,
           email: values.email,
           user_phone: values.user_phone,
           role_type: values.roletype
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

            <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <img
                            className="mx-auto h-12 w-auto"
                            src="/icon.png"
                            alt="Workflow"
                        />
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign up</h2>
                    </div>
                    <form className="mt-8 space-y-6" action="#" method="POST">
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="username" className="sr-only">
                                    Username
                                </label>
                                <input
                                    type="text"
                                    value={values.username}
                                    onChange={handleChange('username')}
                                    autoComplete
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="User Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="firstname" className="sr-only">
                                    First Name
                                </label>
                                <input
                                    value={values.user_firstname}
                                    onChange={handleChange('user_firstname')}
                                    type="text"
                                    autoComplete
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="First Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="lastname" className="sr-only">
                                    Last Name
                                </label>
                                <input
                                    value={values.user_lastname}
                                    onChange={handleChange('user_lastname')}
                                    type="text"
                                    autoComplete
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Last Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    value={values.user_password}
                                    onChange={handleChange('user_password')}
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Password"
                                />
                            </div>
                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    value={values.email}
                                    onChange={handleChange('email')}
                                    type="email"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Email address"
                                />
                            </div>
                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    Phone
                                </label>
                                <input
                                    id="phone"
                                    value={values.user_phone}
                                    onChange={handleChange('user_phone')}
                                    type="text"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Phone"
                                />
                            </div>
                            <select
                                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                                defaultValue="User"
                                value={values.roletype}
                                onChange={handleChange('roletype')}
                            >
                                <option value="User">User</option>
                                <option value="Seller">Seller</option>
                            </select>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                onClick={onSubmit}
                            >
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                    <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                                </span>
                                Sign up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
=======
import React from "react";
import ArtakaClear from "../assets/ArtakaClear.png";
import ArtakaSignUp from "../assets/ArtakaSignUp.png";

export default function SignUp() {
  return (
    <div>
      <div class="flex items-center min-h-screen bg-gray-200">
        <div>
          <img
        //    src={ArtakaClear}
        //    className="w-36 h-8 m-auto mt-4 ml-16 bg-gray-400 align-top"
         //   alt="ArtakaClear"
          />
        
        </div>
        <div class="flex-1 h-full max-w-4xl mx-auto bg-white rounded-lg">
          <div class="flex flex-col md:flex-row">
            <div class="h-32 md:h-auto md:w-1/2 bg">
              <img
                class=" bg-gray-200 object-cover w-full h-full"
                src={ArtakaSignUp}
                alt="img"
              />
            </div>
            <div class="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
              <div class="w-full">
                <div class="flex justify-center"></div>
                <h1 class=" -mt-1 text-2xl font-bold text-center text-gray-700">
                 Daftar Akun Artaka
                </h1>
                <div>
                  <input
                    id="phone"
                    type="text"
                    //   value={values.user_name}
                    //   onChange={handleChange('user_name')}
                    required
                    className="w-full px-4 py-2 mt-4 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                    placeholder="Handphone"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    class="w-full px-4 py-2 mt-4 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                    placeholder="Name"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    class="w-full px-4 py-2  mt-4 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                    placeholder="Email (Tidak Wajib)"
                  />
                </div>

                <div>
                  <input
                    class="w-full px-4 py-2 mt-4 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                    placeholder="Buat Password"
                    type="password"
                  />
                </div>

                <div>
                  <input
                    class="w-full px-4 py-2 mt-4 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                    placeholder="Ulangi Password"
                    type="password"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    class="w-full px-4 py-2 mt-4 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                    placeholder="Kode Referral (Tidak Wajib)"
                  />
                </div>

                <div class="mt-4 text-left">
                  <p class="text-sm">
                    Kami Akan Mengirim SMS OTP Verifikasi{" "}
                  </p>
                </div>
                <button className=" block w-full px-4 py-2 -mb-6 mt-4 bg-purple-800 hover:bg-blue-700 text-white text-center text-xl rounded-full">
                Daftar Akun
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
>>>>>>> origin/chalid
}
