import { React, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  PlusCircleIcon,
  MinusCircleIcon,
  BackspaceIcon,
} from "@heroicons/react/outline";

export default function Manual() {
  // const [count, setCount] = useState(0);

  // const tambah = () => {
  //   setCount(count + 1);
  // };

  // const kurang = () => {
  //   setCount(count - 1);
  // };

  const validationSchema = Yup.object().shape({
    jual: Yup.number()
      .positive("Harga Jual Tidak Boleh Kurang Dari 0")
      .required("Masukkan Harga Jual"),
    keterangan: Yup.string().required("Masukkan Keterangan atau Nama Barang"),
    jumlah: Yup.number()
      .positive("Jumlah Tidak Boleh Kurang Dari 0")
      .required("Masukkan Jumlah"),
  });

  const formik = useFormik({
    initialValues: {
      jual: null,
      keterangan: "",
      jumlah: null,
      modal: null,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <div className="py-6 justify-center inline-block min-w-full sm:px-6 lg:px-8">
        <form
          action="#"
          method="POST"
          class="w-full max-w-lg"
          onSubmit={formik.handleSubmit}
        >
          <div class="flex flex-wrap ml-60 mb-6">
            <div class="w-full px-3">
              <label
                class="block tracking-wide text-gray-700 text-xs ml-36 font-bold mb-2 "
                for="jual"
              >
                Isi Harga Jual
              </label>
              <input
                class="appearance-none block w-96 bg-white text-gray-700 border-t-0 border-b-2 border-r-0 border-l-0 border-purple-700 py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white placeholder: text-center"
                id="jual"
                name="jual"
                type="number"
                placeholder="Rp. "
                value={formik.values.jual}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.jual && formik.errors.jual ? (
                <div className="error -mb-4 text-xs text-red-600">
                  {formik.errors.jual}
                </div>
              ) : null}
            </div>
          </div>

          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label
                class="block tracking-wide text-gray-700 text-xs font-bold mb-0.5"
                for="keterangan"
              >
                Keterangan (Wajib diisi)
              </label>
              <input
                class="appearance-none block w-96 bg-white text-gray-700 border-t-0 border-b-2 border-r-0 border-l-0 border-purple-700 py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white"
                id="keterangan"
                name="keterangan"
                type="text"
                placeholder="Misal: Nasi Timbel Empal"
                value={formik.values.keterangan}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.keterangan && formik.errors.keterangan ? (
              <div className="error -mb-4 text-xs text-red-600">
                {formik.errors.keterangan}
              </div>
            ) : null}
          </div>

          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block tracking-wide text-gray-700 text-xs font-bold mb-0.5"
                for="jumlah"
                defaultValue="0"
              >
                Jumlah
              </label>
              <input
                class="appearance-none block w-full bg-white text-gray-700 border-t-0 border-b-2 border-r-0 border-l-0 border-purple-700 py-3 px-4 mb-1  leading-tight focus:outline-none focus:bg-white placeholder: text-center"
                id="jumlah"
                name="jumlah"
                type="number"
                placeholder="0"
                value={formik.values.jumlah}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.jumlah && formik.errors.jumlah ? (
                <div className="error -mb-4 text-xs text-red-600">
                  {formik.errors.jumlah}
                </div>
              ) : null}

              {/* <PlusCircleIcon
                className="w-8 absolute bottom-80 ml-52 text-purple-700 hover:text-black"
                onClick={tambah}
              />
              <MinusCircleIcon
                className="w-8 absolute bottom-80 text-purple-700 hover:text-black"
                onClick={kurang}
              /> */}
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label
                class="block tracking-wide text-gray-700 text-xs font-bold mb-0.5"
                for="modal"
              >
                Harga Modal
              </label>
              <input
                class="appearance-none block w-full bg-white text-gray-700 border-t-0 border-b-2 border-r-0 border-l-0 border-purple-700 py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white"
                id="modal"
                name="modal"
                type="text"
                value={formik.values.modal}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
          </div>
        </form>
      </div>

      <div className="text-center mr-20">
        <div class="h-56 grid grid-cols-3 gap-4 content-evenly">
          <button className="hover:text-white hover:bg-purple-700 text-xl py-3 rounded-2xl">
            1
          </button>
          <button className="hover:text-white hover:bg-purple-700 text-xl py-3 rounded-2xl">
            2
          </button>
          <button className="hover:text-white hover:bg-purple-700 text-xl py-3 rounded-2xl">
            3
          </button>
          <button className="hover:text-white hover:bg-purple-700 text-xl py-3 rounded-2xl">
            4
          </button>
          <button className="hover:text-white hover:bg-purple-700 text-xl py-3 rounded-2xl">
            5
          </button>
          <button className="hover:text-white hover:bg-purple-700 text-xl py-3 rounded-2xl">
            6
          </button>
          <button className="hover:text-white hover:bg-purple-700 text-xl py-3 rounded-2xl">
            7
          </button>
          <button className="hover:text-white hover:bg-purple-700 text-xl py-3 rounded-2xl">
            8
          </button>
          <button className="hover:text-white hover:bg-purple-700 text-xl py-3 rounded-2xl">
            9
          </button>
          <button className="hover:text-white hover:bg-purple-700 text-xl py-3 rounded-2xl">
            *
          </button>
          <button className="hover:text-white hover:bg-purple-700 text-xl py-3 rounded-2xl">
            0
          </button>
          <button className="hover:text-white hover:bg-purple-700 text-xl py-3 rounded-2xl">
            <BackspaceIcon className="ml-32 h-10" />
          </button>
        </div>
      </div>

      <button
        type="submit"
        className="group relative w-96 ml-72 mt-12 flex-1 justify-center py-2 px-4 border border-transparent text-lg font-semibold rounded-2xl text-white bg-purple-700 hover:bg-indigo-500 hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onSubmit={formik.handleSubmit}
      >
        TAMBAH KE KERANJANG
      </button>
    </div>
  );
}
