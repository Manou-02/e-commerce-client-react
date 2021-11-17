import { Edit } from "@material-ui/icons";
import React, { useState } from "react";
import { Dialog,Slide, Typography, DialogActions, DialogTitle, DialogContent, TextField, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { getAllCategory, updateCategory } from "../../../actions/CategoryAction";


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const UpdateCategory = ({libelle, desc, id}) => {

    const [open, setOpen] = useState(false);
    const [info, setInfo] = useState({
        _id : id,
        libelleCateg : libelle,
        descCateg : desc
    })
    const dispatch = useDispatch();

    const handleOpen = () => {
        setOpen(!open)
    }
    const onChangeHandler = e => {
        const {name, value} = e.target
        setInfo(prev => ({
            ...prev,
            [name] : value
        }))
    }
    const onSubmit = async e => {
        e.preventDefault()
        await dispatch(updateCategory(info));
        dispatch(getAllCategory());
        handleOpen();
    }



    return (
        <>
            <Edit color="primary" onClick={handleOpen} />
            
            <Dialog open={open} onClose={handleOpen}  TransitionComponent={Transition} keepMounted>
                <DialogTitle>
                    <Typography variant="subtitle1">Modification d'une categorie</Typography> 
                </DialogTitle>
                <DialogContent>
                    <TextField name="libelleCateg" defaultValue={libelle} onChange={onChangeHandler}  label="Libelle"   variant="standard" fullWidth className="my-4"/>
                    <TextField name="descCateg" defaultValue={desc} onChange={onChangeHandler} label="Description" variant="standard" fullWidth className="my-4" />
                </DialogContent>
                <DialogActions>
                    <Button variant="text" color="secondary" onClick={handleOpen}>Annuler</Button>
                    <Button variant="text" color="primary" onClick={onSubmit}>Sauvegarder</Button>
                </DialogActions>
             </Dialog>
        </>
    )
}

export default UpdateCategory