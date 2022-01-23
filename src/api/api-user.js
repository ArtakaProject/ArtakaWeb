import axios from 'axios';
import config from '../config/config';

const signup = async(data)=>{
    try {
        const result = await axios.post(`${config.domain}/signup`,data);
        return result;    
    } catch (error) {
        return error;
    }
}

const signin = async(data)=>{
    try {
        const result = await axios.post(`${config.login}/login`,data);
        return result.data;    
    } catch (error) {
        return error;
    }
}


// eslint-disable-next-line import/no-anonymous-default-export
export default {
    signin,
    signup
}