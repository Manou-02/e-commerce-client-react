import db from '../reducers/InitialeIDB';

export const GET_PANIER = "GET_PANIER"
export const REMOVE_LIGNE_PANIER = "REMOVE_LIGNE_PANIER"

export const getPanier = () => {
    return dispatch => {
        db.collection('ligneCom').get().then(res => {
            dispatch({type : GET_PANIER, payload : res})
        }).catch(err => {
            console.log(err);
        })
    }
}

export const removeLignePanier = (id) => {
    return dispatch => {
        db.collection('ligneCom').doc(id).delete()
            .then(res => {
                console.log("Supprimé");
                dispatch({type : REMOVE_LIGNE_PANIER, payload : id})
            })
            .catch(err => {
                console.log(err);
            })
    }
}