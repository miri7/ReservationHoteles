import axios from 'axios';
import {
    HOTELS_LISTAR,
    
} from './HotelsTypes';


export const listarHotels= () => async dispatch => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/hotels`);
        
        
        return dispatch({
            type: HOTELS_LISTAR,
            status: response.status,
            productos: response.data
           
        })
    } catch (error) {
        return dispatch(" ESTA FALLANDO");
    }
}

