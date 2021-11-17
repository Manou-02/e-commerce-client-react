import { ADD_CLIENT } from "../actions/ClientAction";

const initialeState = {}
const ClientReducer = (state = initialeState, action) => {
    switch (action.type) {
        case ADD_CLIENT:
            return action.payload;
    
        default:
            return state
    }
}

export default ClientReducer