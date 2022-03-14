import React, { useState, useEffect } from 'react'

export default function BalanceSheet() {

    return (<>
        <div className="flex w-full">
            <label className="text-black text-xl text-purple-900s ml-5 mr-5 mt-1">PERFORMANSI TOKO</label>
        </div>
        <hr />
        <div className="flex w-full mb-5 mt-5">
            <button className="p-2 ml-3 mr-3 text-purple bg-gray-300 hover:bg-green-800 hover:text-white focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-purple-900">Hari ini</button>
            <button className="p-2 ml-3 mr-3 text-purple bg-gray-300 hover:bg-green-800 hover:text-white focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-purple-900">Kemarin</button>
            <button className="p-2 ml-3 mr-3 text-purple bg-gray-300 hover:bg-green-800 hover:text-white focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-purple-900">Bulan ini</button>
            <button className="p-2 ml-3 mr-3 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-purple-900">Range Tanggal</button>
        </div>
        <div class="mt-10 sm:mt-0">
            <div class="md:grid md:grid-cols-3 md:gap-6  items-center">
                <div class="mt-5 md:mt-0 md:col-span-6">
                    <form action="#" method="POST">
                        <div class="shadow overflow-hidden sm:rounded-md">
                            <div class="px-4 py-5 bg-white sm:p-6 divide-y divide-gray-700">
                                <div>
                                    <div class="flex flex-row min-h-screen justify-center items-center font-bold text-xl">
                                        Ken Shop
                                    </div>
                                    <div class="flex flex-row min-h-screen justify-center items-center font-bold text-xl">
                                        Neraca
                                    </div>
                                    <div class="flex flex-row min-h-screen justify-center items-center mb-12">
                                        per 4 Juli 2021 - 22 November 2021
                                    </div>
                                    <div class="grid grid-cols-2 gap-2">
                                        <label class="block text-sm font-extrabold text-gray-700">TOTAL HARTA</label>
                                        <label class="block text-sm font-extrabold text-gray-700" style={{ textAlign: 'right' }}>Rp 2.496.051</label>
                                        <label class="block text-sm font-medium text-gray-700">Kas & Bank</label>
                                        <label class="block text-sm font-medium text-gray-700 mb-10" style={{ textAlign: 'right' }}>Rp 2.496.051</label>
                                        <label class="block text-sm font-extrabold text-gray-700">TOTAL HUTANG</label>
                                        <label class="block text-sm font-extrabold text-gray-700" style={{ textAlign: 'right' }}>Rp 0</label>
                                    </div>
                                </div>
                                <div>
                                    <div class="grid grid-cols-2 gap-2">
                                            <label class="block text-sm font-extrabold text-gray-700 mt-10">TOTAL MODAL</label>
                                            <label class="block text-sm font-extrabold text-gray-700" style={{ textAlign: 'right' }}>Rp 2.496.051</label>
                                            <label class="block text-sm font-medium text-gray-700">Laba/Rugi Bersih Berjalan</label>
                                            <label class="block text-sm font-medium text-gray-700" style={{ textAlign: 'right' }}>Rp 2.496.051</label>
                                    </div>
                                </div>
                                <div>
                                    <div class="grid grid-cols-2 gap-2">
                                            <label class="block text-sm font-extrabold text-gray-700 my-3">TOTAL HUTANG & MODAL</label>
                                            <label class="block text-sm font-extrabold text-gray-700 my-3" style={{ textAlign: 'right' }}>Rp 0</label>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
    )
}