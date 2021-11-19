import { DELETE_USER, GET_ALL_USER, REGISTER_USER, UPDATE_USER } from "../actions/UserAction";

const initialeState = {}

const UserReducer = (state = initialeState, action) => {
    switch (action.type) {
        case GET_ALL_USER:
            return action.payload    

        case REGISTER_USER :
            return [action.payload, ...state]
            
        case UPDATE_USER :
            return state.map(u => {
                if(u._id === action.payload._id){
                    return {
                        ...u,
                        nameUser : action.payload.nameUser,
                        emailUser : action.payload.emailUser
                    }
                }else{
                    return u
                }
            })

        case DELETE_USER : 
            return state.filter(u => u._id !== action.payload)

        default:
            return state;
    }
}

export default UserReducer