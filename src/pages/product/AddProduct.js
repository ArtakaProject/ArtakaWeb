
import React, { useState, useEffect } from 'react'
import { Redirect, Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { doCategoryStarted } from '../../redux/actions/Category';
import { doAddProductRequest } from '../../redux/actions/Product';

export default function AddProduct() {
    let history = useHistory();

    const dispatch = useDispatch();
    const categories = useSelector(state => state.categoryState.categories);
    const { redirect } = useSelector(state => state.productState);
    const { authUser } = useSelector(state => state.userState);

    const [uploaded, setUploaded] = useState(false);

    async function fetchData() {
        const payload = {}
        dispatch(doCategoryStarted(payload));
    }

    // load data category only once when page render
    useEffect(() => {
        fetchData();
    }, []);

    const [values, setValues] = useState({
        prod_id: undefined,
        product_url_image: undefined,
        product_name: undefined,
        category_name: undefined,
        product_satuan: undefined,
        price_sell: 0,
        product_code: undefined,
        price_modal: 0,
        weight: 0,
        product_stock: 0,
        minimum_stock: 0,
        product_decr_stock: false,
        product_varian: undefined,
        sub_varian: undefined,
        bundling: undefined,
        grocery_price: false,
        product_desc: undefined,
        outlet_sell: undefined,
        error: ""
    });

    const [files, setFiles] = useState({
        file: undefined,
        imagePreviewUrl: undefined
    })

    const handleOnChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
    }

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

    const onSubmit = (e) => {
        e.preventDefault();
        let payload = new FormData();
        payload.append('product_url_image', values.product_url_image);
        payload.append('product_name', values.product_name);
        payload.append('category_name', values.category_name);
        payload.append('product_satuan', values.product_satuan);
        payload.append('price_sell', values.price_sell);
        payload.append('product_code', values.product_code);
        payload.append('price_modal', values.price_modal);
        payload.append('weight', values.weight);
        payload.append('product_stock', values.product_stock);
        payload.append('minimum_stock', values.minimum_stock);
        payload.append('product_decr_stock', values.product_decr_stock);
        payload.append('product_varian', values.product_varian);
        payload.append('sub_varian', values.sub_varian);
        payload.append('bundling', values.bundling);
        payload.append('product_desc', values.product_desc);
        payload.append('outlet_sell', values.outlet_sell);
        const prodFile = files.file;
        prodFile && payload.append('uploadFile', prodFile);
        // add product via redux-saga
        dispatch(doAddProductRequest(payload));

    }

    if (redirect) {
        return (<Redirect to={'/artaka/seller/product'} />)
    }

    return (
        <div class="mt-10 sm:mt-0">
            <div class="md:grid md:grid-cols-3 md:gap-6  items-center">

                <div class="mt-5 md:mt-0 md:col-span-6">
                    <form action="#" method="POST">
                        <div class="shadow overflow-hidden sm:rounded-md">
                            <div class="px-4 py-5 bg-white sm:p-6">
                                <div class="grid grid-cols-6 gap-6">
                                    <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                                        <label /* class="block text-sm font-medium text-gray-700" */><b>Tambah Produk</b></label>
                                    </div>

                                    <div class="col-span-6 sm:col-span-2"></div>

                                    <div className="col-span-6 sm:col-span-2 lg:col-span-3 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                        <div className="space-y-2 text-center">
                                            <div className="mx-auto h-48 w-24 text-gray-400">
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
                                            <div className="flex text-sm text-gray-600">
                                                <label for="image" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                                    <span>Upload File</span>
                                                    <input id="image" accept="image/*" name="image" value={values.file} onChange={uploadOnChange('file')} type="file" className="sr-only" />
                                                </label>
                                            </div>
                                            <div className="flex text-sm text-gray-600">
                                                <label for="image" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                                    <span className='ml-4' onClick={onClearImage}>Hapus</span>
                                                </label>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="col-span-6 sm:col-span-2"></div>

                                    <div class="col-span-6 sm:col-span-2">
                                        <input type="text"
                                            onChange={handleOnChange('prod_id')}
                                            class="hidden"
                                            value={values.prod_id} />

                                        <label for="product_name" class="block text-sm font-medium text-gray-700">Nama Produk (Wajib)</label>
                                        <input type="text"
                                            onChange={handleOnChange('product_name')}
                                            value={values.product_name}
                                            autocomplete="given-name"
                                            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                    </div>

                                    <div class="col-span-6 sm:col-span-2 lg:col-span-3">
                                        <label for="department" class="block text-sm font-medium text-gray-700">Kategori (Wajib)</label>
                                        <select id="department" type="text" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            value={values.category_name}
                                            onChange={handleOnChange('category')}
                                        >
                                            <option>Pilih Kategori...</option>
                                            <option>Elektronik</option>
                                            <option>Sabun Mandi</option>
                                            <option>Pasta Gigi</option>
                                            <option>Alat Masak</option>
                                            {
                                                /* categories &&
                                               categories.map(row => {
                                                   return (<option value={row.cate_id}>{row.cate_name}</option>)
                                               }) */
                                            }
                                        </select>
                                        {/* <input type="text"
                                            onChange={handleOnChange('category_name')}
                                            value={values.category_name}
                                            autocomplete="given-name"
                                            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" /> */}
                                    </div>

                                    <div class="col-span-6 sm:col-span-2">
                                        <label for="product_satuan" class="block text-sm font-medium text-gray-700">Satuan (Wajib)</label>
                                        <input type="text" name="product_satuan"
                                            value={values.product_satuan}
                                            onChange={handleOnChange('product_satuan')}
                                            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                    </div>


                                    <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                                        <label for="price_sell" class="block text-sm font-medium text-gray-700">Harga Jual (Rp) (Wajib)</label>
                                        <input type="text" name="price_sell"
                                            value={values.price_sell}
                                            onChange={handleOnChange('price_sell')}
                                            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                    </div>

                                    <div class="col-span-6 sm:col-span-2">
                                        <label for="product_code" class="block text-sm font-medium text-gray-700">SKU / Kode Barang (Opsional)</label>
                                        <input type="text"
                                            value={values.product_code}
                                            onChange={handleOnChange('product_code')}
                                            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                    </div>

                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="price_modal" class="block text-sm font-medium text-gray-700">Harga Modal (Rp) (Opsional)</label>
                                        <input type="number" name="price_modal"
                                            value={values.price_modal}
                                            onChange={handleOnChange('price_modal')}
                                            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                    </div>

                                    <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                                        <label for="weight" class="block text-sm font-medium text-gray-700">Berat (gram) (Opsional)</label>
                                        <input type="text"
                                            value={values.weight}
                                            onChange={handleOnChange('weight')}
                                            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                    </div>

                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="prod_stock" class="block text-sm font-medium text-gray-700">Stok (Opsional)</label>
                                        <input type="number"
                                            value={values.prod_stock}
                                            onChange={handleOnChange('prod_stock')}
                                            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                    </div>

                                    <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                                        <label for="prod_stock" class="block text-sm font-medium text-gray-700">Minimum Stok (Opsional)</label>
                                        <input type="number"
                                            value={values.prod_stock}
                                            onChange={handleOnChange('prod_stock')}
                                            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                    </div>


                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="product_decr_stock" class="block text-sm font-medium text-gray-700">Penjualan Mengurangi Stok (Opsional)</label>
                                        <label class="switch">
                                        <input type="checkbox" value={values.product_decr_stock}/>
                                        <span class= "slider round"></span>
                                        </label>
                                    </div>

                                    <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                                        <label for="product_varian" class="block text-sm font-medium text-gray-700">Varian Produk (Opsional)</label>
                                        <input type="text"
                                            value={values.product_varian}
                                            onChange={handleOnChange('product_varian')}
                                            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                    </div>

                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="sub_varian" class="block text-sm font-medium text-gray-700">Sub Varian (Opsional)</label>
                                        <input type="text"
                                            value={values.sub_varian}
                                            onChange={handleOnChange('sub_varian')}
                                            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                    </div>

                                    <div class="col-span-6 sm:col-span-2">
                                        <label for="bundling" class="block text-sm font-medium text-gray-700"><i>Bundling</i> / Bahan Baku (Opsional)</label>
                                        <input type="text"
                                            value={values.bundling}
                                            onChange={handleOnChange('bundling')}
                                            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                    </div>

                                    <div class="col-span-6 sm:col-span-2">
                                        <label for="prod_stock" class="block text-sm font-medium text-gray-700">Harga Grosir</label>
                                        <label class="switch">
                                        <input type="checkbox" value={values.grocery_price}/>
                                        <span class= "slider round"></span>
                                        </label>
                                    </div>

                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="product_desc" class="block text-sm font-medium text-gray-700">Deskripsi (Opsional - Max 340 Karakter)</label>
                                        <input type="text"
                                            value={values.product_desc}
                                            onChange={handleOnChange('product_desc')}
                                            autocomplete="family-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                    </div>

                                    <div></div>

                                    <div class="col-span-6 sm:col-span-2">
                                        <label for="outlet_sell" class="block text-sm font-medium text-gray-700">Jual di Outlet</label>
                                        <input type="text"
                                            value={values.outlet_sell}
                                            onChange={handleOnChange('outlet_sell')}
                                            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                    </div>




                                </div>
                            </div>
                            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">

                                <button type="submit"
                                    onClick={() => {
                                        history.push("#");
                                    }}
                                    class="inline-flex mr-3 justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    Batal
                                </button>
                                <button type="submit"
                                    onClick={onSubmit}
                                    class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    Simpan
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
