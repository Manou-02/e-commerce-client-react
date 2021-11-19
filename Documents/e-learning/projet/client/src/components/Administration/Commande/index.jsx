import { useDispatch, useSelector } from "react-redux"
import {Typography, Button, TextField, IconButton , TableContainer, Table, TableHead, TableBody, TableRow, TableCell, FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { Delete, CheckBox, CheckBoxOutlineBlank, Info } from "@material-ui/icons";
import { useEffect } from "react";
import DeleteCommande from "./DeleteCommande";
import DetailsCommande from "./DetailsCommande";
import { getAllCommande } from "../../../actions/CommandeActions";
import { useState } from "react";
import Fuse from 'fuse.js';

const Commande = () => {
    const commandes = useSelector(state => state.CommandeReducer)
    const dispatch = useDispatch();
    const {info, setInfo} = useState(0);

    const {loading, setLoading} = useState(false);
    const {currentPage, setCurrentPage} = useState(1)
    const {nbParPage, setNbParPage} = useState(10);

    const [query, setQuery] = useState('');

    const fuse = new Fuse(commandes,{
        keys : [
            'client.nomClient',
            'client.emailClient',
            'panier.nomProd'
        ]
    })



    const handleOnRecherche = e => {
        const {value} = e.target

        setQuery(value);
    }

    const handleChange = e => {

    }

    const resultats = fuse.search(query)
    const resultatRecherche = query ? resultats.map(result => result.item) : commandes;



    useEffect(() => {
        //dispatch(getAllCommande());
    }, [commandes])

    return (
        <div className="container my-4">
            <Typography variant="h6">Liste de tous les commandes</Typography>
            
            <div className="my-4">
                <div className="row">
                    <div className="col-lg-3">
                        <TextField 
                            id="recherche"
                            name="recherche"
                            label="Recherche"
                            onChange={handleOnRecherche}
                        />  
                    </div>
                    <div className="col-lg-1">
                        <FormControl variant="standard" className="mb-4" fullWidth>
                            <InputLabel></InputLabel>
                            <Select label="Categorie" name="category" onChange={handleChange}>
                                <MenuItem value={0} defaultValue={0}>Tous</MenuItem>
                                <MenuItem value={1}>Non effectuer</MenuItem>
                                <MenuItem value={2}>Effectuer</MenuItem>

                            </Select>
                        </FormControl>     
                    </div>
                    <div className="col-lg-8">

                    </div>
                </div>
                <div className="">
                     
                </div>
            </div>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Nom</TableCell>
                            <TableCell>E-mail</TableCell>
                            <TableCell>Adresse</TableCell>
                            <TableCell>Produit</TableCell>
                            <TableCell>Total (Ar)</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {resultatRecherche.length !== undefined && resultatRecherche?.map(c => {
                            return (
                                <TableRow>
                                    <TableCell> {c.client.nomClient} </TableCell>
                                    <TableCell> {c.client.emailClient} </TableCell>
                                    <TableCell>{c.client.adresse.provinceClient} </TableCell>
                                    <TableCell> {c?.panier.map(p => p.ligneCommande.produit.nomProd + " | ") } </TableCell>
                                    <TableCell>{c.total} </TableCell>
                                    <TableCell>
                                        {c.status === 1 ? <CheckBox /> : <CheckBoxOutlineBlank />}
                                        &nbsp;&nbsp;&nbsp;
                                    </TableCell>
                                    <TableCell>
                                        <DeleteCommande id={c._id} />
                                        <DetailsCommande commande={c} />
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Commande