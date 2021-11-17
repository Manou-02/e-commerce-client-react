import { Button, makeStyles, Popover, Typography, List, ListItem,Badge, Divider, Grid } from "@material-ui/core"
import { CheckCircle, ShoppingCart } from "@material-ui/icons"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { getPanier } from "../../../actions/PanierAction";
import { Alert } from "@material-ui/lab";


const useStyles = makeStyles((theme) => ({
    text : {
        padding : theme.spacing(2)
    },
    button : {
        textDecoration : "none",
    },
}))


const PopPanier = ({id, open, anchorEl, onClose}) => {

    const classes = useStyles() 
    const panier = useSelector(state => state.PanierReducers);
    const uri = "http://localhost:5000/"
    const [total, setTotal] = useState(0);
    const dispatch = useDispatch()

    useEffect(() => {
        calcul()
        dispatch(getPanier())
        
    }, [panier])

    const calcul = () => {
        let t = 0;
        panier.length !== undefined && panier.map(p => {
            t += p.produit.prixProd * p.qte
        })
        setTotal(t);
    }

    const getP = async () => {
        await dispatch(getPanier())
    }

    return (
        <>
            <Popover 
                open={open}
                anchorEl={anchorEl}
                onClose={onClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
                className={classes.popover}
            >
                <div id={id} className={classes.text}>
                    <Typography variant='subtitle1'>Mon panier</Typography>

                    {/**Le contenue de mon panier */}
                    <List>
                        {panier.length !== undefined && panier.map(p => (
                            <>
                                <ListItem>
                                    <Grid container spacing={2}>
                                        <Grid item xs={6}>
                                            <img style={{height :"60px", width : "60px"}} src={uri + p.produit?.images[0]} />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography variant="subtitle1"> {p.produit.nomProd} </Typography>
                                            <Typography variant="subtitle2">Prix : <em> {p.produit.prixProd}</em> Ar &nbsp; &nbsp; <Badge badgeContent={"x" +p.qte} color="primary">   </Badge> </Typography>
                                        </Grid>
                                    </Grid>
                                </ListItem>
                                <Divider />
                            </>
                        ))}
                    </List>

                    <Typography variant='subtitle1' className="my-2">Total : {total} Ar</Typography>

                    <div className="nav">
                        <Link to="/panier" styles={classes.button} className="nav-link">
                            <Button variant="outlined" color="primary" onClick={onClose} className="nav-item" ><ShoppingCart />&nbsp; Details&nbsp; &nbsp;</Button>
                        </Link>
                        <Link className="nav-link" to="/commande">
                            <Button variant="outlined" color="secondary" onClick={onClose} ><CheckCircle />&nbsp; Commander</Button>
                        </Link>
                        
                    </div>
                    
                </div>
                
            </Popover>
        </>
    )
}

export default PopPanier