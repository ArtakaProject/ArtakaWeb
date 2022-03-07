import React, { useState, useEffect } from 'react'

export default function ProfitNLoss() {

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
                                        Laba/Rugi
                                    </div>
                                    <div class="flex flex-row min-h-screen justify-center items-center mb-12">
                                        per 4 Juli 2021 - 22 November 2021
                                    </div>
                                    <div class="grid grid-cols-2 gap-2">
                                            <label class="block text-sm font-extrabold text-gray-700">PENDAPATAN</label>
                                            <label class="block text-sm font-extrabold text-gray-700" style={{ textAlign: 'right' }}>Rp 3.677.000</label>
                                            <label class="block text-sm font-medium text-gray-700">Penjualan</label>
                                            <label class="block text-sm font-medium text-gray-700" style={{ textAlign: 'right' }}>Rp 3.613.000</label>
                                            <label class="block text-sm font-medium text-gray-700 mb-5">Penjualan Online</label>
                                            <label class="block text-sm font-medium text-gray-700mb-5" style={{ textAlign: 'right' }}>Rp 64.000</label>
                                            <label class="block text-sm font-extrabold text-gray-700">BIAYA</label>
                                            <label class="block text-sm font-extrabold text-gray-700" style={{ textAlign: 'right' }}>Rp 2.794.994</label>
                                            <label class="block text-sm font-medium text-gray-700">Harga Pokok Penjualan</label>
                                            <label class="block text-sm font-medium text-gray-700" style={{ textAlign: 'right' }}>Rp 2.794.994</label>
                                    </div>
                                </div>
                                <div>
                                    <div class="grid grid-cols-2 gap-2">
                                            <label class="block text-sm font-extrabold text-gray-700 mb-5">LABA/RUGI KOTOR</label>
                                            <label class="block text-sm font-extrabold text-gray-700 mb-5" style={{ textAlign: 'right' }}>Rp 882.006</label>
                                            <label class="block text-sm font-extrabold text-gray-700">BIAYA OPERASIONAL</label>
                                            <label class="block text-sm font-extrabold text-gray-700" style={{ textAlign: 'right' }}>Rp 200.000</label>
                                            <label class="block text-sm font-medium text-gray-700 mb-5">Bayar Listrik/PAM</label>
                                            <label class="block text-sm font-medium text-gray-700 mb-5" style={{ textAlign: 'right' }}>Rp 200.000</label>
                                            <label class="block text-sm font-extrabold text-gray-700">PENDAPATAN LAIN-LAIN</label>
                                            <label class="block text-sm font-extrabold text-gray-700" style={{ textAlign: 'right' }}>Rp 800.000</label>
                                            <label class="block text-sm font-medium text-gray-700">Modal</label>
                                            <label class="block text-sm font-medium text-gray-700" style={{ textAlign: 'right' }}>Rp 500.000</label>
                                            <label class="block text-sm font-medium text-gray-700 mb-5">Urunan</label>
                                            <label class="block text-sm font-medium text-gray-700 mb-5" style={{ textAlign: 'right' }}>Rp 300.000</label>
                                            <label class="block text-sm font-extrabold text-gray-700">BIAYA LAIN-LAIN</label>
                                            <label class="block text-sm font-extrabold text-gray-700" style={{ textAlign: 'right' }}>Rp 6.450.000</label>
                                            <label class="block text-sm font-medium text-gray-700">Pariwisata</label>
                                            <label class="block text-sm font-medium text-gray-700" style={{ textAlign: 'right' }}>Rp 5.000.000</label>
                                            <label class="block text-sm font-medium text-gray-700">Bayar PPL</label>
                                            <label class="block text-sm font-medium text-gray-700" style={{ textAlign: 'right' }}>Rp 200.000</label>
                                            <label class="block text-sm font-medium text-gray-700">Sedakah</label>
                                            <label class="block text-sm font-medium text-gray-700" style={{ textAlign: 'right' }}>Rp 100.000</label>
                                            <label class="block text-sm font-medium text-gray-700">Bayar Vaksin</label>
                                            <label class="block text-sm font-medium text-gray-700" style={{ textAlign: 'right' }}>Rp 1.000.000</label>
                                            <label class="block text-sm font-medium text-gray-700">Bayar Pulsa HP</label>
                                            <label class="block text-sm font-medium text-gray-700" style={{ textAlign: 'right' }}>Rp 150.000</label>
                                    </div>
                                </div>
                                <div class="grid grid-cols-6 gap-6">
                                    <div class="col-span-6 sm:col-span-3">
                                        <label class="block text-sm font-extrabold text-gray-700">LABA/RUGI BERSIH</label>
                                    </div>
                                    <div class="col-span-6 sm:col-span-3">
                                        <label class="block text-sm font-extrabold text-red-600" style={{ textAlign: 'right' }}>(Rp 4.967.994)</label>
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