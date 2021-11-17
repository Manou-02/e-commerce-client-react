import db from '../reducers/InitialeIDB';

export const GET_ALL_CLIENT = "GET_ALL_CLIENT"
export const ADD_CLIENT = "ADD_CLIENT"
export const GETE_ONE_CLIENT = "GET_ONE_CLIENT"


export const getAllClient = () => {

}

export const getOneClient = () => {
    const key = localStorage.getItem('key');

    return dispatch => {
        db.collection('client').doc(key).get()
            .then(res => {
                dispatch({type : GETE_ONE_CLIENT, payload : res.data})
            }).catch(err => {
                console.log(err);
            })
    }
}

export const addClient = (data) => {
    return dispatch => {
        db.collection('client').add(data)
            .then(res => {
                localStorage.setItem('key', res.data.key);
                dispatch({type: ADD_CLIENT, payload : data})
            })
            .catch(err => {
                console.log(err);
            })
    }
}