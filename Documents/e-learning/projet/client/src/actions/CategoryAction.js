import axios from 'axios';

export const GET_ALL_CATEGORY = "GET_ALL_CATEGORY";
export const CREATE_CATEGORY = "CREATE_CATEGORY";
export const GET_ONE_CATEGORY = 'GET_ONE_CATEGORY';
export const UPDATE_CATEGORY  = "UPDATE_CATEGORY";
export const DELETE_CATEGORY = 'DELETE_CATEGORY';

const BASE_URI = 'http://localhost:5000/api/category/'

/**
 * Get all category
 * @returns 
 */
export const getAllCategory = ()  => {
    return dispatch => {
        axios({
            method : 'GET',
            baseURL : BASE_URI
        }).then(docs => {
            dispatch({type : GET_ALL_CATEGORY, payload : docs.data})
        }).catch(err => {
            console.log(err);
        })
    }

}


export const createCategory = () => {

}

export const getOneCategory = () => {

}

export const updateCategory = () => {

}

export const deleteCategory = () => {
    
}