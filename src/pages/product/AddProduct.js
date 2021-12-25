import React, { useState, useEffect } from 'react'
import { Redirect, Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { doCategoryStarted } from '../../redux/actions/Category';
import { doAddProductRequest, doAddProductSucceed, doGetProductRequest } from '../../redux/actions/Product';
import { handleAddProduct } from '../../redux/sagas/ProductSaga';
import { ToggleSwitch } from '../../components/navigation/ToggleSwitch';

export default function AddProduct() {
    let history = useHistory();

    const dispatch = useDispatch();
    const { redirect } = useSelector(state => state.productState);

    const [uploaded, setUploaded] = useState(false);

    async function fetchData() {
        const payload = {}
        dispatch(doGetProductRequest(payload));
    }

    // load data category only once when page render
    useEffect(() => {
        fetchData();
    }, []);

    const [values, setValues] = useState({
        id: undefined,
        create_dtm: undefined,
        sku_id: undefined,
        user_id: undefined,
        outlet_id: undefined,
        name: undefined,
        category: undefined,
        variant: undefined,
        units: undefined,
        weight: 0,
        quantity: 0,
        minimum_quantity: 0,
        description: undefined,
        buy_cost: 0,
        sell_cost: 0,
        modifiers_id: undefined,
        images: [],
        rawmaterial: [],
        is_stock_tracked: undefined,
        number_sold: 0,
        outlets: [],
        buy_cost_discounted: 0,
        is_active: undefined,
        wholesaler_cost: []
        //,error: undefined
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
        payload.append('id', values.id);
        payload.append('images', values.images);
        payload.append('name', values.name);
        payload.append('category', values.category);
        payload.append('units', values.units);
        payload.append('sell_cost', values.sell_cost);
        payload.append('sku_id', values.sku_id);
        payload.append('buy_cost', values.buy_cost);
        payload.append('quantity', values.quantity);
        payload.append('minimum_quantity', values.minimum_quantity);
        payload.append('weight', values.weight);
        payload.append('variant', values.variant);
        payload.append('rawmaterial', values.rawmaterial);
        payload.append('description', values.description);
        payload.append('outlets', values.outlets);
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
                                        <label class="font-large text-indigo-700"><b>Tambah Produk</b></label>
                                    </div>

                                    <div class="col-span-6 sm:col-span-3">
                                    </div>

                                    {/* <label for="file" class="block text-sm font-medium text-gray-700">Foto Produk</label> */}

                                    <div className="col-span-6 sm:col-span-2 lg:col-span-3 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 rounded-md">
                                    
                                        <div className="space-y-2 text-center">
                                            <div className="mx-auto h-48 w-24 text-gray-400">
                                                {uploaded === false ?
                                                    <svg
                                                        className="mx-auto h-15 w-15 text-gray-400"
                                                        stroke="currentColor"
                                                        fill="none"
                                                        viewBox="6 0 48 48"
                                                        aria-hidden="true"
                                                    >
                                                        <path
                                                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg> : <img src={files.imagePreviewUrl} alt='image' className="mx-auto h-30 w-30" />}
                                            </div>
                                            <div className="flex text-sm text-gray-600">
                                                <label for="image" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                                    <span>Unggah File</span>
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

                                    <div class="col-span-6 sm:col-span-3">
                                        <input type="text"
                                            onChange={handleOnChange('id')}
                                            class="hidden"
                                            value={values.id} />

                                        <label for="name" class="block text-sm font-medium text-gray-700">Nama Produk (Wajib)</label>
                                        <input type="text"
                                            onChange={handleOnChange('name')}
                                            value={values.name}
                                            autocomplete="given-name"
                                            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                    </div>

                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="department" class="block text-sm font-medium text-gray-700">Kategori (Wajib)</label>
                                        <input type="text"
                                            onChange={handleOnChange('category')}
                                            value={values.category}
                                            autocomplete="given-name"
                                            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                    </div>

                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="units" class="block text-sm font-medium text-gray-700">Satuan (Wajib)</label>
                                        <input type="text" name="units"
                                            value={values.units}
                                            onChange={handleOnChange('units')}
                                            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                    </div>

                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="sell_cost" class="block text-sm font-medium text-gray-700">Harga Jual (Rp) (Wajib)</label>
                                        <input type="text" name="sell_cost"
                                            value={values.sell_cost}
                                            onChange={handleOnChange('sell_cost')}
                                            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                    </div>

                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="sku_id" class="block text-sm font-medium text-gray-700">SKU / Kode Barang (Opsional)</label>
                                        <input type="text"
                                            value={values.sku_id}
                                            onChange={handleOnChange('sku_id')}
                                            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" /></svg>
                                    </div>

                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="buy_cost" class="block text-sm font-medium text-gray-700">Harga Modal (Rp) (Opsional)</label>
                                        <input type="number" name="buy_cost"
                                            value={values.buy_cost}
                                            onChange={handleOnChange('buy_cost')}
                                            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                    </div>

                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="weight" class="block text-sm font-medium text-gray-700">Berat (gram) (Opsional)</label>
                                        <input type="text"
                                            value={values.weight}
                                            onChange={handleOnChange('weight')}
                                            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                    </div>

                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="quantity" class="block text-sm font-medium text-gray-700">Stok (Opsional)</label>
                                        <input type="number"
                                            value={values.quantity}
                                            onChange={handleOnChange('quantity')}
                                            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                    </div>

                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="minimum_quantity" class="block text-sm font-medium text-gray-700">Minimum Stok (Opsional)</label>
                                        <input type="number"
                                            value={values.minimum_quantity}
                                            onChange={handleOnChange('minimum_quantity')}
                                            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                    </div>


                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="is_stock_tracked" class="block text-sm font-medium text-gray-700">Penjualan Mengurangi Stok (Opsional)</label>
                                        <ToggleSwitch/>

                                    </div>

                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="variant" class="block text-sm font-medium text-gray-700">Varian Produk (Opsional)</label>
                                        <input type="text"
                                            value={values.variant}
                                            onChange={handleOnChange('variant')}
                                            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                    </div>

                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="sub_varian" class="block text-sm font-medium text-gray-700">Sub Varian (Opsional)</label>
                                        <input type="text"
                                            value={values.sub_varian}
                                            onChange={handleOnChange('sub_varian')}
                                            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                    </div>

                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="rawmaterial" class="block text-sm font-medium text-gray-700"><i>Bundling</i> / Bahan Baku (Opsional)</label>
                                        <input type="text"
                                            value={values.rawmaterial}
                                            onChange={handleOnChange('rawmaterial')}
                                            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                    </div>

                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="is_active" class="block text-sm font-medium text-gray-700">Harga Grosir</label>
                                        <ToggleSwitch/>
                                    </div>

                                    <div class="col-span-6 sm:col-span-6">
                                        <label for="description" class="block text-sm font-medium text-gray-700">Deskripsi (Opsional - Max 340 Karakter)</label>
                                        <input type="text"
                                            value={values.description}
                                            onChange={handleOnChange('description')}
                                            autocomplete="family-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                    </div>


                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="outlets" class="block text-sm font-medium text-gray-700">Jual di Outlet</label>
                                        <input type="text"
                                            value={values.outlets}
                                            onChange={handleOnChange('outlets')}
                                            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                    </div>

                                </div>
                            </div>
                            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">

                                <button type="submit"
                                    onClick={() => {
                                        history.push("/artaka/seller/product");
                                    }}
                                    class="inline-flex mr-3 justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
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
