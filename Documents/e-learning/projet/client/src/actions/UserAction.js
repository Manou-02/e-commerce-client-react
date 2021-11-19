import axios from 'axios';

export const LOGIN_USER = "LOGIN_USER"
export const REGISTER_USER = "REGISTER_LOGIN"
export const GET_ALL_USER = "GET_ALL_USER"
export const GET_ONE_USER = "GET_ONE_USER"
export const UPDATE_USER = "UPDATE_USER"
export const DELETE_USER = 'DELETE_USER'

const BASE_URI = "http://localhost:5000/api/user"

const token =  localStorage.getItem('token'); 

export const loginUser = (data) => {
    return dispatch => {
        axios({
            method: 'POST',
            baseURL : BASE_URI + '/login',
            data : data
        }).then(docs => {
            dispatch({type : LOGIN_USER, payload : docs.data})
        }).catch(err => {
            console.log(err);
        })
    }

}
export const registerUser = (data) => {
    return dispatch => {
        axios({
            method : 'POST',
            baseURL : BASE_URI + "/signin",
            headers : {
                post : {
                    "auth-token" : token
                }
            },
            data : data
        }).then(res => {
            dispatch({type : REGISTER_USER, payload : res.data.user})
        }).catch(err => {
            console.log(err);
        })
    }
    
}
export const getAllUser = () => {
    return dispatch => {
        axios({
            method : 'GET',
            baseURL : BASE_URI,
        }).then(res => {
            dispatch({type : GET_ALL_USER, payload : res.data.users})
        }).catch(err => {
            console.log(err);
        })
    }
}
export const getOneUser = () => {

}

export const updateUser = (data) => {
    return dispatch => {
        axios({
            method : "PATCH",
            baseURL : BASE_URI +"/" + data._id,
            data : data,
            headers : {
                patch : {
                    "auth-token" : token
                }
            }
        }).then(res => {
            dispatch({method : UPDATE_USER, payload : data})
        }).catch(err => {
            console.log(err);
        })
    }
}
export const deleteUser = (id) => {
    return dispatch => {
        axios({
            method : 'DELETE',
            baseURL : BASE_URI + "/" + id,
            headers : {
                delete : {
                    "auth-token" : token
                }
            }
        }).then(res => {
            dispatch({type : DELETE_USER, payload : id})
        }).catch(err => {
            console.log(err);
        })
    }
}