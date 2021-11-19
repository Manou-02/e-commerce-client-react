import { ADD_PANIER, GET_PANIER, REMOVE_LIGNE_PANIER, UPDATE_PANIER } from "../actions/PanierAction";

const initialeState = {}

const PanierReducers = (state= initialeState , action) => {
    switch (action.type) {
        case GET_PANIER:
            return action.payload;
        
        case ADD_PANIER :
            return [action.payload, ...state]
        
        case REMOVE_LIGNE_PANIER :
            return state.filter(p => p.produit._id !== action.payload)
        
        case UPDATE_PANIER :
            return action.payload

            // return state.map(pan => {
            //     if(pan.produit._id === action.payload.id){
            //         return {
            //             ...pan,
            //             qte : action.payload.qte
            //         }
            //     }else{
            //         return pan;
            //     }
            // })

        default:
            return state;
    }
}

export default PanierReducers