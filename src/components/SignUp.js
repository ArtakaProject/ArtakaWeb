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
}
