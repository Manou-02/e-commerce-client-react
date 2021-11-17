import {Edit} from '@material-ui/icons'
import { IconButton, Dialog, DialogActions, DialogContent, DialogTitle, Typography, Button } from '@material-ui/core'
import { TextField, FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProduit, getAllProduit } from '../../../actions/ProduitAction';



const UpdateProduit = ({id,nomProd,descProd,prixProd,rateProd,category}) => {

    const [open, setOpen] = useState(false);
    const categories = useSelector(state => state.categoryReducer)
    const [info, setInfo] = useState({
        _id : id,
        nomProd : nomProd,
        descProd : descProd,
        prixProd : prixProd,
        rateProd : rateProd,
        category : category
    })
    const dispatch = useDispatch();

    const handleOpen = () => {
        setOpen(!open)
    }

    const handleChange = e => {
        const {name,value} = e.target;
        setInfo(prev => ({
            ...prev,
            [name] : value
        }))
    }

    const onSubmit = async e => {
        e.preventDefault();
        console.log(info);

        await dispatch(updateProduit(info))
        dispatch(getAllProduit())
        handleOpen();

    }

    return (
        <>
            <IconButton>
                <Edit color="primary" onClick={handleOpen} />
            </IconButton>

            <Dialog open={open} onClose={handleOpen}>
                <DialogTitle>

                </DialogTitle>
                <DialogContent>
                    <TextField 
                            id="nomProd"
                            name="nomProd"
                            label="Nom"
                            fullWidth
                            margin="dense"
                            variant="outlined"
                            type="text"
                            defaultValue={nomProd}
                            onChange={handleChange}
                        />
                        <TextField 
                            id="descProd"
                            name="descProd"
                            label="Description"
                            multiline
                            rows={6}
                            fullWidth
                            margin="dense"
                            variant="outlined"
                            type="text"
                            defaultValue={descProd}
                            onChange={handleChange}
                        />
                        <TextField 
                            id="prixProd"
                            name="prixProd"
                            label="Prix(Ar)"
                            margin="dense"
                            variant="outlined"
                            type="number"
                            className="mb-4"
                            defaultValue={prixProd}
                            onChange={handleChange}
                        />&nbsp;&nbsp;
                        <TextField 
                            id="rateProd"
                            name="rateProd"
                            label="Rate"
                            margin="dense"
                            variant="outlined"
                            type="number"
                            defaultValue={rateProd}
                            className="mb-4"
                            onChange={handleChange}
                        /><br />
                        <FormControl variant="outlined" className="mb-4" fullWidth>
                            <InputLabel>Categorie</InputLabel>
                            <Select label="Categorie" name="category" defaultValue={category._id} onChange={handleChange}>
                                {categories.length !== undefined && categories.map(categorie => (
                                    <MenuItem defaultValue={category._id} value={categorie._id}>
                                        {categorie.libelleCateg}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <br />
                </DialogContent>
                <DialogActions>
                    <Button color="secondary" onClick={handleOpen}>Annuler</Button>
                    <Button color="primary" onClick={onSubmit}>Suvegarder</Button>
                </DialogActions>
            </Dialog>



        </>
    )
}

export default UpdateProduit