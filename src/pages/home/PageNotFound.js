import React from 'react'
import { Link } from 'react-router-dom'

export default function PageNotFound() {
    return (
        <div class="h-screen w-screen bg-gray-100 flex items-center">
            <div class="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
                <div class="max-w-md">
                    <div class="text-5xl font-dark font-bold">404</div>
                    <p
                        class="text-2xl md:text-3xl font-light leading-normal"
                    >Mohon maaf, kami tidak menemukan halaman ini. </p>
                    <p class="mb-8">Jangan khawatir, Anda bisa kembali ke halaman Home kami.</p>
                        <Link to="/artaka/seller/cashier">
                            <button class="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700">
                                back to homepage
                            </button>
                        </Link>
                </div>
            </div>
        </div>
    )
}
