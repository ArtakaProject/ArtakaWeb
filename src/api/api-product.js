import axios from 'axios';
import config from '../config/config';

const findAll = async(payload)=>{
    try {
        const result = await axios.post(`${config.domain}/products/show`,payload); //post
        return result;    
    } catch (error) {
        return error;
    }
}

/* const findctgry = async(payload)=>{
    try {
        const result = await axios.post(`${config.domain}/products/show`,payload); //post
        return result;    
    } catch (error) {
        return error;
    }
}
 */

export default {
    findAll/* ,
    findctgry */
}