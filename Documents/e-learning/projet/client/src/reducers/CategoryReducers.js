import { GET_ALL_CATEGORY } from "../actions/CategoryAction";

const initialeState = {}


const categoryReducer = (state = initialeState, action) => {
    switch (action.type) {
        case GET_ALL_CATEGORY:
            return action.payload
    
        default:
            return state
    }
}

export default categoryReducer;