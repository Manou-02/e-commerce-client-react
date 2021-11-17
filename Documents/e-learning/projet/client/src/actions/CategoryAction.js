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

const token = localStorage.getItem('token');
export const getAllCategory = ()  => {
    return dispatch => {
        axios({
            method : 'GET',
            baseURL : BASE_URI
        }).then(docs => {
            dispatch({type : GET_ALL_CATEGORY, payload : docs.data.category})
        }).catch(err => {
            console.log(err);
        })
    }

}

/**
 * Create new Category
 * @param {*} data 
 * @returns 
 */
export const createCategory = (data) => {
    return dispatch => {
        axios({
            method : 'POST',
            baseURL : BASE_URI,
            headers : { post : {

                "auth-token" : token
            }
            },
            data : data
        }).then(docs => {
            dispatch({type : CREATE_CATEGORY, payload: data})
        }).catch(err => {
            console.log(err);
        })
    }

}

/**
 * Get one category
 * @param {*} id 
 * @returns 
 */
export const getOneCategory = (id) => {
    return dispatch => {
        axios({
            method : 'GET',
            baseURL : BASE_URI + '/' + id
        }).then(docs => {
            dispatch({type : GET_ONE_CATEGORY, payload : docs.data})
        }).catch(err => {
            console.log(err);
        })
    }

}

/**
 * Update category
 */
export const updateCategory = (data) => {
    const info = {
        libelleCateg : data.libelleCateg,
        descCateg : data.descCateg
    }
    return dispatch => {
        axios({
            method: 'PATCH',
            baseURL: BASE_URI + "/" + data._id,
            data : info,
            headers : {
                 patch : {
                    "auth-token" : token
                }
            }
        }).then(docs => {
            dispatch({type : UPDATE_CATEGORY, payload : data})
        }).catch(err => {
            console.log(err);
        })
    }
}

/**
 * Delete category
 * @param {*} id 
 * @returns 
 */
export const deleteCategory = (id) => {
    return dispatch => {
        axios({
            method : 'DELETE',
            baseURL : BASE_URI +'/'+ id,
            headers : { 
                delete : {
                    "auth-token" : token
                }
            }
        }).then(docs => {
            dispatch({type : DELETE_CATEGORY, payload : {id}})
        }).catch(err => {
            console.log(err);
        })
    }
    
}