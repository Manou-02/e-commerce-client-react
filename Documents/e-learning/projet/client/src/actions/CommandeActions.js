import axios from "axios";



export const GET_ALL_COMMANDE = "GET_ALL_COMMANDE"
export const CREATE_COMMANDE = "CREATE_COMMANDE"
export const GET_ONE_COMMANDE = "GET_ONE_COMMANDE"
export const UPDATE_COMMANDE = "UPDATE_COMMANDE"
export const DELETE_COMMANDE = "DELETE_COMMANDE"
export const MARQUER_EFFECTUER = "MARQUER_EFFECTUER"
export const GET_COMMANDE_EFFECTUER = "GET_COMMANDE_EFFECTUER"
export const GET_COMMANDE_NON_EFFECTUER = "GET_COMMANDE_NON_EFFECTUER"

const BASE_URI = "http://localhost:5000/api/commande"
const token = localStorage.getItem('token');

 
/**
 * Get all commande
 */
export const getAllCommande = () => {
    return dispatch => {
        axios({
            method : 'GET',
            baseURL : BASE_URI
        }).then(res => {
            dispatch({type : GET_ALL_COMMANDE, payload : res.data.commandes})
        }).catch(err => {
            console.log(err);
        })
    }

}

/**
 * Create commande
 * @param {*} data 
 * @returns 
 */
export const createCommande = (data) => {
    return dispatch => {
        axios({
            method : 'POST',
            baseURL : BASE_URI,
            data : data
        }).then(res => {
            dispatch({type : CREATE_COMMANDE, payload : res.data});
        }).catch(err => {
            console.log(err);
        })
    }
}

/**
 * Get one commande
 * @param {*} id 
 */
export const getOneCommande = (id) => {
    return dispatch => {
        axios({
            method : 'GET',
            baseURL : BASE_URI + "/"+ id
        }).then(res => {
            dispatch({type : GET_ONE_COMMANDE, payload : res.data.commande})
        }).catch(err => {
            console.log(err);
        })
    }

}

/**
 * Update commande
 * @param {*} data 
 */
export const updateCommande = (data) => {

}

/**
 * Delete commande
 * @param {*} id 
 */
export const deleteCommande = (id) => {
    return dispatch => {
        axios({
            method : 'DELETE',
            baseURL : BASE_URI + '/' + id,
            headers : {
                delete : {
                    "auth-token" : token
                }
            }
        }).then(res => {
            dispatch({type : DELETE_COMMANDE, payload : id})
        }).catch(err => {
            console.log(err);
        })
    }
}


export const marquerCommeEffectuer = (id) => {
    return dispatch => {
        axios({
            method: "PATCH",
            baseURL: BASE_URI + "/to-effectuer/" + id,
            headers : {
                patch : {
                    "auth-token" : token
                }
            }
        }).then(res => {
            dispatch({type : MARQUER_EFFECTUER, payload : id})
        }).catch(err => {
            console.log(err);
        })
    }
}

export const getCommanadeEffectuer = () => {
    return dispatch => {
        axios({
            method : 'GET',
            baseURL : BASE_URI + "/get/effectuer"
        }).then(res => {
            dispatch({type : GET_COMMANDE_EFFECTUER, payload : res})
        }).catch(err => {
            console.log(err);
        })
    }
}


export const getCommandeNonEffectuer = () => {
    return dispatch => {
        axios({
            method : 'GET',
            baseURL : BASE_URI + "/get/non-effectuer"
        }).then(res => {
            dispatch({type : GET_COMMANDE_NON_EFFECTUER , payload : res})
        }).catch(err => {
            console.log(err);
        })
    }
}