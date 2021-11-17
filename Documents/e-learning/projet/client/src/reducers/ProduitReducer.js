import { CREATE_PRODUIT, DELETE_PRODUIT, GET_ALL_PRODUIT, UPDATE_PRODUIT } from "../actions/ProduitAction";

const initialeState = {}

const ProduitReducer = (state = initialeState, action) => {
    switch (action.type) {
        case GET_ALL_PRODUIT:
            return action.payload
        case CREATE_PRODUIT :
            return [action.payload, ...state]
        case UPDATE_PRODUIT :
            return state.map(p => {
                if(p._id === action.payload._id){
                    return {
                        ...p,
                        nomProd : action.payload.nomProd,
                        descProd : action.payload.descProd,
                        prixProd : action.payload.prixProd,
                        rateProd : action.payload.rateProd,
                        category : action.payload.category
                    }
                }else{
                    return p
                }
            })

        case DELETE_PRODUIT :
            return state.filter(p => p._id !== action.payload);

        default:
            return state
    }
}

export default ProduitReducer   