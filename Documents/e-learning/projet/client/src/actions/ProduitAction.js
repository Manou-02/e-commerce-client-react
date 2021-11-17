import axios from 'axios'

export const GET_ALL_PRODUIT = "GET_ALL_PRODUIT"
export const CREATE_PRODUIT = "CREATE_PRODUIT"
export const GET_ONE_PRODUIT = "GET_ONE_PRODUIT"
export const UPDATE_PRODUIT = "UPDATE_PRODUIT"
export const DELETE_PRODUIT = "DELETE_PRODUIT"

const BASE_URI = "http://localhost:5000/api/produits"

const TOKEN = localStorage.getItem('token');

/**Get all produits */
export const getAllProduit = () => {
    return dispatch => {
        axios({
            method : 'GET',
            baseURL : BASE_URI
        }).then(docs => {
            dispatch({type : GET_ALL_PRODUIT, payload : docs.data.produits})
        }).catch(err => {
            console.log(err);
        })
    }
}

export const createProduit = (data) => {
    return dispatch => {
        axios({
            method : 'POST',
            baseURL : BASE_URI,
            headers : {
                post : {
                    "auth-token" : TOKEN
                }
            },
            data : data,
            
        }).then(res => {
            console.log(res.data);
            dispatch({type: CREATE_PRODUIT, payload : res.data.produit});
        }).catch(err => {
            console.log(err);
        })
    }
}

export const getOneProduit = () => {

}

export const updateProduit = (data) => {
    return dispatch => {
        axios({
            method : 'PATCH',
            baseURL : BASE_URI +"/"+data._id,
            data : {...data},
            headers : {
                patch : {
                    "auth-token" : TOKEN
                }
            }
        }).then(res => {
            dispatch({type : UPDATE_PRODUIT, payload : {...data}})
        }).catch(err => {
            console.log(err);
        })
    }
}

export const deleteProduit = (id) => {
    return dispatch => {
        axios({
            method : "DELETE",
            baseURL : BASE_URI + "/" + id,
            headers : {
                delete : {
                    "auth-token" : TOKEN
                }
            }
        }).then(res => {
            dispatch({type : DELETE_PRODUIT, payload : id})
        })
    }
}