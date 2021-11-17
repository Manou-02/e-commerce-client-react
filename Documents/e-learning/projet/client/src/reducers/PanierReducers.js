import { GET_PANIER, REMOVE_LIGNE_PANIER } from "../actions/PanierAction";

const initialeState = {}

const PanierReducers = (state= initialeState , action) => {
    switch (action.type) {
        case GET_PANIER:
            return action.payload;
        
        case REMOVE_LIGNE_PANIER :
            return state.filter(p => p.produit._id !== action.payload)

        default:
            return state;
    }
}

export default PanierReducers