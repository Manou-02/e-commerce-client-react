import { CREATE_COMMANDE, DELETE_COMMANDE, GET_ALL_COMMANDE, GET_COMMANDE_EFFECTUER, GET_COMMANDE_NON_EFFECTUER, GET_ONE_COMMANDE, MARQUER_EFFECTUER } from "../actions/CommandeActions";

const initialeState = {}

const CommandeReducer = (state = initialeState, action) => {
    switch (action.type) {
        case GET_ALL_COMMANDE :
            return action.payload

        case CREATE_COMMANDE:
            return [...state, action.payload.commande]
    
        case DELETE_COMMANDE :
            return state.filter(c => c._id !== action.payload)
        
        case MARQUER_EFFECTUER :
            return state.map(c => {
                if(c._id === action.payload){
                    return {
                        ...c,
                        status : 1
                    }
                }else{
                    return c;
                }
            })
        case GET_COMMANDE_EFFECTUER : 
            return action.payload

        case GET_COMMANDE_NON_EFFECTUER :
            return action.payload
        
        default:
            return state
    }
}

export default CommandeReducer