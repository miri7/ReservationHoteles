import {
    HOTELS_LISTAR,
    
    
} from './ProductoTypes';

const HotelsReducer = (state = { }, action) => {

    switch (action.type) {
        case HOTELS_LISTAR: 
            // return {loading: true, products:{}}
            
        
        default: {
			return action;
		}
    }
};

export default HotelsReducer;
// export const productListReducer = (state = {products:[]},action)=>{
//     switch(action.type){
//         case PRODUCTO_LISTAR:
//             return {loading:true,products:[]};
//     default:
//         return state;
//     }

// }