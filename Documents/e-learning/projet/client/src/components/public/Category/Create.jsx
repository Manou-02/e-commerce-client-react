import React, { useState } from 'react'

import { Dialog, DialogTitle, DialogActions, DialogContent, Typography } from "@material-ui/core";
import { Slide, TextField, Button } from "@material-ui/core";
import { AddCircleOutline } from "@material-ui/icons";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createCategory, getAllCategory } from '../../../actions/CategoryAction';



const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
  

const Create = () => {
    
    const [open, setOpen] = useState(false)
    const [info, setInfo] = useState({
        libelleCateg : "",
        descCateg : ""
    });
    const dispatch = useDispatch();

    const handleOpen = () => {
        setOpen(!open);
    }

    const onChangeHandler = e => {
        const {name, value} = e.target

        setInfo(prev => ({
            ...prev,
            [name] : value
        }))
    }

    const onSubmit = async e => {
        e.preventDefault();

        await dispatch(createCategory(info));
        dispatch(getAllCategory())
        handleOpen();
        setInfo({
            libelleCateg : "",
            descCateg : ""
        })
    }

    useEffect(() => {

    }, [info])


    return (
        <>
             <Button variant="outlined" color="primary" onClick={handleOpen}><AddCircleOutline />&nbsp;&nbsp; Ajouter</Button>{' '}

             <Dialog open={open} onClose={handleOpen}  TransitionComponent={Transition} keepMounted>
                <DialogTitle>
                    <Typography variant="subtitle1">Ajouter une nouvelle categorie</Typography> 
                </DialogTitle>
                <DialogContent>
                    <TextField name="libelleCateg" value={info.libelleCateg} onChange={onChangeHandler}  label="Libelle"   variant="standard" fullWidth className="my-4"/>
                    <TextField name="descCateg" value={info.descCateg} onChange={onChangeHandler} label="Description" variant="standard" fullWidth className="my-4" />
                </DialogContent>
                <DialogActions>
                    <Button variant="text" color="secondary" onClick={handleOpen}>Annuler</Button>
                    <Button variant="text" color="primary" onClick={onSubmit}>Sauvegarder</Button>
                </DialogActions>
             </Dialog>
        </>
    )
}

export default Create