import { CREATE_CATEGORY, DELETE_CATEGORY, GET_ALL_CATEGORY, UPDATE_CATEGORY } from "../actions/CategoryAction";

const initialeState = {}


const categoryReducer = (state = initialeState, action) => {
    switch (action.type) {
        case GET_ALL_CATEGORY:
            return action.payload
    
        case CREATE_CATEGORY : 
            return [action.payload, ...state];

        case UPDATE_CATEGORY :
            return state.map(category => {
                if(category._id === action.payload._id){
                    return {
                        ...category,
                        libelleCateg : action.payload.libelleCateg,
                        descCateg : action.payload.descCateg
                    }
                }else{
                    return category
                }
            })
        
        case DELETE_CATEGORY :
            return state.filter(c => c._id !== action.payload.id)
        
        default:
            return state
    }
}

export default categoryReducer;