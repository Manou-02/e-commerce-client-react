import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Button, IconButton, Typography, TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from "@material-ui/core";
import { Edit, Delete } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { getAllProduit } from "../../../actions/ProduitAction";
import UpdateProduit from './UpdateProduit';
import DeleteProduit from "./DeleteProduit";

const Produit = () => {

    const produits = useSelector(state => state.ProduitReducer);
    const uri = "http://localhost:5000/"
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProduit());
    }, [produits])

    return (
        <div className="container mt-4">
            <Typography variant="h6">Liste de tous les produits</Typography>
            <Link to="/administration/produit/create" style={{ textDecoration: 'none' }}>
                <Button variant="outlined" color="primary" className="m-4" > Ajouter </Button>
            </Link>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>#ID</TableCell>
                            <TableCell>Images</TableCell>
                            <TableCell>Nom</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Prix</TableCell>
                            <TableCell>Rate</TableCell>
                            <TableCell>Categorie</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {produits.length !== undefined  && produits?.map(p => (
                            <TableRow key={p._id} >
                                <TableCell> {p._id} </TableCell>
                                <TableCell> 
                                    <img src={uri+p.images[0]} alt={p.nomProd} style={{width : "50px", height : "50px"}} />
                                     
                                </TableCell>
                                <TableCell> {p.nomProd} </TableCell>
                                <TableCell> {p.descProd} </TableCell>
                                <TableCell> {p.prixProd} </TableCell>
                                <TableCell> {p.rateProd} </TableCell>
                                <TableCell> {p.category.libelleCateg} </TableCell>
                                <TableCell>
                                    <IconButton>
                                        <UpdateProduit 
                                            id={p._id} 
                                            nomProd={p.nomProd}
                                            descProd={p.descProd}
                                            prixProd={p.prixProd}
                                            rateProd={p.rateProd}
                                            category={p.category} 
                                        /> &nbsp;
                                    </IconButton>
                                    <IconButton>
                                        <DeleteProduit id={p._id} />    
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Produit