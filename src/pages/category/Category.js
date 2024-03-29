import React, { useEffect, useState, } from 'react';
import { PencilIcon } from '@heroicons/react/solid'
import { connect, useDispatch, useSelector } from 'react-redux';
import { doCategoryStarted, doDeleteCategoryRequest } from '../../redux/actions/Category'
import AddCategory from './AddCategory';
import EditCategory from './EditCategory'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Category(props) {

    //const [isRefresh, setIsRefesh] = useState(false);
    let [isOpen, setIsOpen] = useState(false);
    let [isEditOpen, setIsEditOpen] = useState(false);
    const [action, setAction] = useState({
        id: undefined,
        actionType: undefined
    });


    useEffect(() => {

        fetchData();

    }, []);

    /* useEffect(() => {

        fetchData();
        setIsRefesh(false);

    }, [isRefresh]); */


    const dispatch = useDispatch()
    const { status } = useSelector(state => state.categoryState);

    async function fetchData() {
        // You can await here
        const payload = {}
        //props.getCategories(payload);
        dispatch(doCategoryStarted(payload));

    }

    const onEdit = (id) => {
       /*  setAction({
            id: id,
            actionType: "edit"
        });
        setIsEditOpen(true); */

    }

    const onDelete = async (id) => {

        /* dispatch(doDeleteCategoryRequest(id));
        props.deleteCategory(id);
        toast.success("record has been delete")
 */
    }

    return (
        <div>
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Nomor ID
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Kategori Produk
                                </th>
                                <th scope="col" className="relative px-8 py-3 text-right">
                                    <button
                                        type="button"
                                        className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        onClick={() => setIsOpen(true)}
                                    >
                                        <PencilIcon className="-ml-1 mr-2 h-5 w-5 text-gray-500" aria-hidden="true" />
                                        New Category
                                    </button>
                                </th>
                            </tr>
                        </thead>

                        <tbody className="bg-white divide-y divide-gray-200">
                            {
                                props.categories /* && props.categories.map((data) => (
                                    <tr key={data.cate_id}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{data.cate_id}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{data.cate_name}</td>

                                        <div className='flex flex-row-reverse space-x-0 space-x-reverse'>

                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">


                                                <div className="flex flex-row space-x-4 mt-4">
                                                    <button
                                                        type="button"
                                                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-indigo-900 bg-indigo-200 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                                        onClick={() => {
                                                            onEdit(data.cate_id)
                                                        }}
                                                    >
                                                        Edit
                                                    </button>
                                                    <button type="button"
                                                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-red-100 bg-red-400 border border-transparent rounded-md hover:bg-red-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                                        onClick={() => {
                                                            if (window.confirm("Delete record ?"))
                                                                onDelete(data.cate_id)
                                                        }}>Delete</button>
                                                </div>
                                            </td>
                                        </div>

                                    </tr>
                                )) */
                            }

                        </tbody>
                    </table>
                    <ToastContainer autoClose={2000} />
                </div>
            </div>
            {
                isOpen ? <AddCategory
                    isOpen={isOpen}
                    closeModal={() => setIsOpen(false)}
                    action={action} /> : null
            }

            {isEditOpen ? <EditCategory
                isEditOpen={isEditOpen}
                closeModal={() => setIsEditOpen(false)}
                action={action} /> : null
            }

        </div>

    )
}

const mapStateToProps = state => ({
    category: state.categoryState,
    categories: state.categoryState.categories,
    succeed: state.categoryState.succeed,
    status: state.categoryState.status,
});

const mapDispatchToProps = (dispatch) => ({
    getCategories: payload => dispatch(doCategoryStarted(payload)),
    deleteCategory: payload => dispatch(doDeleteCategoryRequest(payload)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Category);
