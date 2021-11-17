import axios from 'axios';

export const LOGIN_USER = "LOGIN_USER"
export const REGISTER_USER = "REGISTER_LOGIN"
export const GET_ALL_USER = "GET_ALL_USER"
export const GET_ONE_USER = "GET_ONE_USER"
export const UPDATE_USER = "UPDATE_USER"
export const DELETE_USER = 'DELETE_USER'

const BASE_URI = "http://localhost:5000/api/user"

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
export const registerUser = () => {

}
export const getAllUser = () => {

}
export const getOneUser = () => {

}

export const updateUser = () => {

}
export const deleteUser = () => {
    l
}