import axios from 'axios';
import config from '../config/config';

const findAll = async(payload)=>{
    try {
        const result = await axios.post(`${config.domain}/api/product/show`,payload);
        return result;    
    } catch (error) {
        return error;
    }
}

/* const addProduct = async(payload)=>{
    try {
        const result = await axios.post(`${config.domain}/product/show`,payload);
        return result;    
    } catch (error) {
        return error;
    }
}

const editProduct = async(id, payload)=>{
    try {
        const result = await axios.put(`${config.domain}/product/show/${id}`,payload);
        return result;    
    } catch (error) {
        return error;
    }
}

const deleteProduct = async(id)=>{
    try {
        const result = await axios.delete(`${config.domain}/product/${id}`);
        return  result;
    } catch (error) {
        return error;
        
    }
} */


// eslint-disable-next-line import/no-anonymous-default-export
export default {
    findAll,
    //addProduct,
    //editProduct,
    //deleteProduct
}