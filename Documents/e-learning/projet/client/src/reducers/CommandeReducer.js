import { CREATE_COMMANDE, DELETE_COMMANDE, GET_ALL_COMMANDE, GET_ONE_COMMANDE } from "../actions/CommandeActions";

const initialeState = {}

const CommandeReducer = (state = initialeState, action) => {
    switch (action.type) {
        case GET_ALL_COMMANDE :
            return action.payload

        case CREATE_COMMANDE:
            return [...state, action.payload.commande]
    
        case DELETE_COMMANDE :
            return state.filter(c => c._id !== action.payload)
        default:
            return state
    }
}

export default CommandeReducer