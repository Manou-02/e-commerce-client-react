import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Grid, Typography, TextField, FormControl, InputLabel, Select, Button, MenuItem } from "@material-ui/core";
import { AddCircle } from "@material-ui/icons";
import { createProduit, getAllProduit } from '../../../actions/ProduitAction';
import axios from 'axios'
import { useHistory } from "react-router-dom"

const CreateProduit = () => {

    const categories = useSelector(state => state.categoryReducer);
    const data = categories.category;
    const [info, setInfo] = useState({
        nomProd : "",
        descProd : "",
        prixProd : 0,
        rateProd : 0,
        category : ""
    });
    const history = useHistory();
    const [multipleImage, setMultipleImage] = useState("")
    const dispatch = useDispatch();
    const TOKEN = localStorage.getItem('token');

    const handleChange = e => {
        const {name, value} = e.target
        setInfo(prev => ({
            ...prev,
            [name] : value
        }))
    }
    const onChangeImage = e => {
        setMultipleImage(e.target.files);
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault()
        
        const formData = new FormData();
        formData.append('nomProd', info.nomProd)
        formData.append('descProd', info.descProd)
        formData.append('prixProd', info.prixProd)
        formData.append('rateProd', info.rateProd)
        formData.append('category', info.category)

        for(let i = 0; i < multipleImage.length; i++){
            formData.append('images', multipleImage[i]);
        }
        axios({
            method : 'POST',
            baseURL : "http://localhost:5000/api/produits",
            headers : {
                post : {
                    "auth-token" : TOKEN
                }
            },
            data : formData,   
        }).then(res => {
            history.push("/administration/produit/")
        }).catch(err => {
            console.log(err);
        })
        dispatch(getAllProduit());
    }

    useEffect(() => {

    }, [data])

    console.log(typeof data);

    return (
        <>
            <div className="container m-4">
            <Grid container>
                <Grid item xs={6} sm={3} >

                </Grid>
                <Grid item xs={12} sm={6} >
                    <Typography className="m-4">Nouveau produit</Typography>
                    <form>
                    <input type="file" name="images" onChange={onChangeImage} className="m-4" multiple />
                    <TextField 
                            id="nomProd"
                            name="nomProd"
                            label="Nom"
                            fullWidth
                            margin="dense"
                            variant="outlined"
                            type="text"
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
                            onChange={handleChange}
                        />&nbsp;&nbsp;
                        <TextField 
                            id="rateProd"
                            name="rateProd"
                            label="Rate"
                            margin="dense"
                            variant="outlined"
                            type="number"
                            className="mb-4"
                            onChange={handleChange}
                        /><br />
                        <FormControl variant="outlined" className="mb-4" fullWidth>
                            <InputLabel>Categorie</InputLabel>
                            <Select label="Categorie" name="category" onChange={handleChange}>
                                {categories.length !== undefined && categories.map(categorie => (
                                    <MenuItem value={categorie._id}>
                                        {categorie.libelleCateg}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <br />
                        <Button color="primary" variant="contained" type="submit" fullWidth onClick={handleOnSubmit}> <AddCircle />&nbsp;&nbsp; 
                            Publier
                        </Button>
                    </form>
                                          
                </Grid>
                <Grid item xs={6} sm={3} >

                </Grid>

            </Grid>
            </div>
        </>
    )
}

export default CreateProduit