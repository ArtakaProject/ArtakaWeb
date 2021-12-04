import axios from "axios";
import config from "../config/config";

const findAll = async(payload)=>{
    try {
        const result = await axios.post(`${config.domain}/customers/show`,payload);
        return result;    
    } catch (error) {
        return error;
    }
}
export default {
    findAll
}