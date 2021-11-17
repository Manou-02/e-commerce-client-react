import { useSelector } from "react-redux"
import {Typography, Button, TextField, IconButton , TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from "@material-ui/core";
import { Delete, CheckBox, CheckBoxOutlineBlank, Info } from "@material-ui/icons";
import { useEffect } from "react";
import DeleteCommande from "./DeleteCommande";
import DetailsCommande from "./DetailsCommande";

const Commande = () => {
    const commandes = useSelector(state => state.CommandeReducer)


    useEffect(() => {

    }, [commandes])

    return (
        <div className="container my-4">
            <Typography variant="h6">Liste de tous les commandes</Typography>
            
            <div className="my-4">
                <TextField 
                    id="recherche"
                    name="recherche"
                    label="Recherche"
                />        
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
                        {commandes.length !== undefined && commandes?.map(c => {

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