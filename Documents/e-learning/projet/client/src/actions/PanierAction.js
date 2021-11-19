import db from '../reducers/InitialeIDB';

export const GET_PANIER = "GET_PANIER"
export const REMOVE_LIGNE_PANIER = "REMOVE_LIGNE_PANIER"
export const ADD_PANIER = "ADD_PANIER"
export const UPDATE_PANIER = "UPDATE_PANIER"

export const getPanier = () => {
    return dispatch => {
        db.collection('ligneCom').get().then(res => {
            dispatch({type : GET_PANIER, payload : res})
        }).catch(err => {
            console.log(err);
        })
    }
}

export const addPanier = (data) => {
    return dispatch => {
        db.collection('ligneCom').add({produit : data.produit, qte : data.qte}, data.id).then(res => {
            dispatch({type : ADD_PANIER, payload : {produit : data.produit, qte : data.qte}})
        }).catch(err => {
            console.log(err);
        })
    }
}

export const updatePanier = (data) => {
    return dispatch => {
        db.collection('ligneCom').doc(data.id).get().then(res => {
            db.collection('ligneCom').doc(data.id).update({
                produit : data.produit,
                qte : parseInt(res.qte) + 1
            }).then(docs => {
                db.collection('ligneCom').get().then(pan => {
                    dispatch({type : UPDATE_PANIER, payload : pan});
                }).catch(err => {
                    console.log(err);
                })
            }).catch(err => {
                console.log(err);
            })
            
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