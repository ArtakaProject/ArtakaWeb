
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
//import Datepicker from '@themesberg/tailwind-datepicker/Datepicker';


export default function AddCust() {
    let history = useHistory();

    const [uploaded, setUploaded] = useState(false);

    const [files, setFiles] = useState({
        file: undefined,
        imagePreviewUrl: undefined
    })

    const uploadOnChange = name => event => {
        let reader = new FileReader();
        let file = event.target.files[0];

        reader.onloadend = () => {
            setFiles({
                ...files,
                file: file,
                imagePreviewUrl: reader.result
            });
        }

        reader.readAsDataURL(file);
        setUploaded(true);
    }

    const onClearImage = event => {
        event.preventDefault();
        setUploaded(false);
        setFiles({
            file: undefined,
            imagePreviewUrl: undefined
        })
    }


    return (
        <>
            <div className="flex w-full mb-5">
                <label className="text-black text-xl text-purple-900s ml-5 mr-5 mt-1">TAMBAH PELANGGAN</label>
            </div>
            <div class="mt-10 sm:mt-0">
                <div class="md:grid md:grid-cols-3 md:gap-6  items-center">

                    <div class="mt-5 md:mt-0 md:col-span-6">
                        <form action="#" method="POST">
                            <div class="shadow overflow-hidden sm:rounded-md">
                                <div class="px-4 py-5 bg-white sm:p-6">
                                    <div class="grid grid-cols-6 gap-6">

                                        <div className="col-span-6 sm:col-span-1 flex justify-center rounded-md">
                                            <div className="space-y-2 text-center">
                                                <div className="text-gray-400">
                                                    {uploaded === false ?
                                                        <svg
                                                            className="mx-auto h-12 w-12 text-gray-400"
                                                            stroke="currentColor"
                                                            fill="none"
                                                            viewBox="0 0 48 48"
                                                            aria-hidden="true"
                                                        >
                                                            <path
                                                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                                strokeWidth={2}
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg> : <img src={files.imagePreviewUrl} alt='image' className="mx-auto h-48 w-48" />}
                                                </div>
                                                <div className="flex text-sm text-gray-600 justify-center ">
                                                    <label for="image" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                                        <span>Upload a file</span>
                                                        <input id="image" accept="image/*" name="image" onChange={uploadOnChange('file')} type="file" className="sr-only" />
                                                    </label>
                                                </div>
                                                <div className="flex text-sm text-gray-600 justify-center ">
                                                    <label for="image" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                                        <span >Remove</span>
                                                    </label>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="col-span-6 sm:col-span-5">
                                            <input type="text"
                                                class="hidden" />

                                            <label class="block text-sm font-medium text-gray-700">Nama Pelanggan(Wajib)</label>
                                            <input type="text"
                                                autocomplete="given-name"
                                                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div class="col-span-6 sm:col-span-3">
                                            <label class="block text-sm font-medium text-gray-700">Email(Opsional)</label>
                                            <input type="text"
                                                autocomplete="family-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>
                                        <div class="col-span-6 sm:col-span-3">
                                            <label class="block text-sm font-medium text-gray-700">Nomor Telpon(Wajib)</label>
                                            <input type="text"
                                                autocomplete="family-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>
                                        <div class="col-span-6 sm:col-span-3">
                                            <label class="block text-sm font-medium text-gray-700">Tanggal lahir(Opsional)</label>
                                            <input type="date"
                                                autocomplete="family-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>
                                        <div class="col-span-6 sm:col-span-3">
                                            <label for="gender" class="block text-sm font-medium text-gray-700">Jenis Kelamin</label>
                                            <select id="gender" type="text" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            >
                                                <option>Pilih jenis kelamin</option>
                                                <option value="Perempuan">Perempuan</option>
                                                <option value="Laki-laki">Laki-laki</option>

                                            </select>
                                        </div>
                                        <div class="col-span-6 sm:col-span-6">
                                            <label class="block text-sm font-medium text-gray-700">Alamat(Opsional)</label>
                                            <input type="text"
                                                autocomplete="family-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>
                                        <div class="col-span-6 sm:col-span-3">
                                            <label class="block text-sm font-medium text-gray-700">Kota(Opsional)</label>
                                            <input type="text"
                                                autocomplete="family-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>
                                        <div class="col-span-6 sm:col-span-3">
                                            <label class="block text-sm font-medium text-gray-700">Provinsi(Opsional)</label>
                                            <input type="text"
                                                autocomplete="family-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                    </div>
                                </div>
                                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">

                                    <button type="submit"
                                        onClick={() => {
                                            history.push("/artaka/seller/customer");
                                        }}
                                        class="inline-flex mr-3 justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        Batalkan
                                    </button>
                                    <button type="submit"
                                        class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        Simpan
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

