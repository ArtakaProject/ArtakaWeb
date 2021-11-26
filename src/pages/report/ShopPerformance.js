import React, { useState, useEffect } from 'react'

export default function ShopPerformance() {

    return (
        <div class="mt-10 sm:mt-0">
            <div class="md:grid md:grid-cols-3 md:gap-6  items-center">

                <div class="mt-5 md:mt-0 md:col-span-6">
                    <form action="#" method="POST">
                        <div class="shadow overflow-hidden sm:rounded-md">
                            <div class="px-4 py-5 bg-white sm:p-6">
                                
                                <div class="grid grid-cols-6 gap-6">
                                    
                                    <div class="col-span-6 sm:col-span-3">
                                    <label class="block text-sm font-extrabold text-gray-700">PENDAPATAN</label>
                                    </div>
                                    <div class="col-span-6 sm:col-span-3">
                                    <label class="block text-sm font-extrabold text-gray-700" style={{textAlign: 'right'}}>Rp 3.677.000</label>
                                    </div>

                                    <div class="col-span-6 sm:col-span-3">
                                    <label class="block text-sm font-medium text-gray-700">Penjualan</label>
                                    </div>
                                    <div class="col-span-6 sm:col-span-3">
                                    <label class="block text-sm font-medium text-gray-700" style={{textAlign: 'right'}}>Rp 3.613.000</label>
                                    </div>

                                    <div class="col-span-6 sm:col-span-3">
                                    <label class="block text-sm font-medium text-gray-700">Penjualan Online</label>
                                    </div>
                                    <div class="col-span-6 sm:col-span-3">
                                    <label class="block text-sm font-medium text-gray-700" style={{textAlign: 'right'}}>Rp 64.000</label>
                                    </div>

                                    <div class="col-span-6 sm:col-span-3">
                                    <label class="block text-sm font-extrabold text-gray-700">BIAYA</label>
                                    </div>
                                    <div class="col-span-6 sm:col-span-3">
                                    <label class="block text-sm font-extrabold text-gray-700" style={{textAlign: 'right'}}>Rp 2.794.994</label>
                                    </div>

                                    <div class="col-span-6 sm:col-span-3">
                                    <label class="block text-sm font-medium text-gray-700">Harga Pokok Penjualan</label>
                                    </div>
                                    <div class="col-span-6 sm:col-span-3">
                                    <label class="block text-sm font-medium text-gray-700" style={{textAlign: 'right'}}>Rp 2.794.994</label>
                                    </div>

                                    <div class="col-span-6 sm:col-span-3">
                                    <label class="block text-sm font-extrabold text-gray-700">LABA/RUGI KOTOR</label>
                                    </div>
                                    <div class="col-span-6 sm:col-span-3">
                                    <label class="block text-sm font-extrabold text-gray-700" style={{textAlign: 'right'}}>Rp 882.006</label>
                                    </div>

                                    <div class="col-span-6 sm:col-span-3">
                                    <label class="block text-sm font-extrabold text-gray-700">BIAYA OPERASIONAL</label>
                                    </div>
                                    <div class="col-span-6 sm:col-span-3">
                                    <label class="block text-sm font-extrabold text-gray-700" style={{textAlign: 'right'}}>Rp 200.000</label>
                                    </div>

                                    <div class="col-span-6 sm:col-span-3">
                                    <label class="block text-sm font-medium text-gray-700">Bayar Listrik/PAM</label>
                                    </div>
                                    <div class="col-span-6 sm:col-span-3">
                                    <label class="block text-sm font-medium text-gray-700" style={{textAlign: 'right'}}>Rp 200.000</label>
                                    </div>

                                    <div class="col-span-6 sm:col-span-3">
                                    <label class="block text-sm font-extrabold text-gray-700">PENDAPATAN LAIN-LAIN</label>
                                    </div>
                                    <div class="col-span-6 sm:col-span-3">
                                    <label class="block text-sm font-extrabold text-gray-700" style={{textAlign: 'right'}}>Rp 800.000</label>
                                    </div>

                                    <div class="col-span-6 sm:col-span-3">
                                    <label class="block text-sm font-medium text-gray-700">Modal</label>
                                    </div>
                                    <div class="col-span-6 sm:col-span-3">
                                    <label class="block text-sm font-medium text-gray-700" style={{textAlign: 'right'}}>Rp 500.000</label>
                                    </div>

                                    <div class="col-span-6 sm:col-span-3">
                                    <label class="block text-sm font-medium text-gray-700">Urunan</label>
                                    </div>
                                    <div class="col-span-6 sm:col-span-3">
                                    <label class="block text-sm font-medium text-gray-700" style={{textAlign: 'right'}}>Rp 300.000</label>
                                    </div>

                                    <div class="col-span-6 sm:col-span-3">
                                    <label class="block text-sm font-extrabold text-gray-700">BIAYA LAIN-LAIN</label>
                                    </div>
                                    <div class="col-span-6 sm:col-span-3">
                                    <label class="block text-sm font-extrabold text-gray-700" style={{textAlign: 'right'}}>Rp 6.450.000</label>
                                    </div>

                                    <div class="col-span-6 sm:col-span-3">
                                    <label class="block text-sm font-medium text-gray-700">Pariwisata</label>
                                    </div>
                                    <div class="col-span-6 sm:col-span-3">
                                    <label class="block text-sm font-medium text-gray-700" style={{textAlign: 'right'}}>Rp 5.000.000</label>
                                    </div>
                                    <div class="col-span-6 sm:col-span-3">
                                    <label class="block text-sm font-medium text-gray-700">Bayar PPL</label>
                                    </div>
                                    <div class="col-span-6 sm:col-span-3">
                                    <label class="block text-sm font-medium text-gray-700" style={{textAlign: 'right'}}>Rp 200.000</label>
                                    </div>
                                    <div class="col-span-6 sm:col-span-3">
                                    <label class="block text-sm font-medium text-gray-700">Sedakah</label>
                                    </div>
                                    <div class="col-span-6 sm:col-span-3">
                                    <label class="block text-sm font-medium text-gray-700" style={{textAlign: 'right'}}>Rp 100.000</label>
                                    </div>
                                    <div class="col-span-6 sm:col-span-3">
                                    <label class="block text-sm font-medium text-gray-700">Bayar Vaksin</label>
                                    </div>
                                    <div class="col-span-6 sm:col-span-3">
                                    <label class="block text-sm font-medium text-gray-700" style={{textAlign: 'right'}}>Rp 1.000.000</label>
                                    </div>
                                    <div class="col-span-6 sm:col-span-3">
                                    <label class="block text-sm font-medium text-gray-700">Bayar Pulsa HP</label>
                                    </div>
                                    <div class="col-span-6 sm:col-span-3">
                                    <label class="block text-sm font-medium text-gray-700" style={{textAlign: 'right'}}>Rp 150.000</label>
                                    </div>

                                    <div class="col-span-6 sm:col-span-3">
                                    <label class="block text-sm font-extrabold text-gray-700">LABA/RUGI BERSIH</label>
                                    </div>
                                    <div class="col-span-6 sm:col-span-3">
                                    <label class="block text-sm font-extrabold text-red-600" style={{textAlign: 'right'}}>(Rp 4.967.994)</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}