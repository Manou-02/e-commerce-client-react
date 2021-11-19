import { ListItem, Badge, Box, Divider, Typography, Paper, Grid, TextField, Button, Dialog, DialogContent, DialogActions, DialogTitle } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addClient, getOneClient } from "../../../actions/ClientAction";
import db from "../../../reducers/InitialeIDB";
import { Redirect, useHistory } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import SwiperCore, {Navigation, Pagination, Scrollbar} from 'swiper'
import { createCommande } from "../../../actions/CommandeActions";





SwiperCore.use([Navigation, Pagination, Scrollbar])

const uri = "http://localhost:5000/"

const Commande = () => {

    const [info, setInfo] = useState({
        nomClient :"",
        prenomClient : "",
        emailClient : "",
        lotClient : "",
        villeClient : "",
        provinceClient : ""
    })
    const [data, setData] = useState({});
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const panier = useSelector(state => state.PanierReducers);
    const history = useHistory();
    const [total, setTotal] = useState();
    const [valide, setValide] = useState(false);

    const openHandler = () => {
        setOpen(!open)
    }

    const handleChange = e => {
        const {name, value} = e.target

        setInfo(prev => ({
            ...prev,
            [name] : value
        }))

        setData({
            client : {
                nomClient : info.nomClient,
                prenomClient : info.prenomClient,
                emailClient : info.emailClient,
                adresse : {
                    lotClient : info.lotClient,
                    villeClient : info.villeClient,
                    provinceClient : info.provinceClient
                }
            }
        })

    }
    const onSubmit = async (e) => {
        e.preventDefault()
        
        await dispatch(addClient((data)));
        
        confirmerCommande();
        
    }
    const calcul = () => {
        let t = 0;
        panier.length !== undefined && panier.map(p => {
            t += p.produit.prixProd * p.qte
        })
        setTotal(t);
    }


    const confirmerCommande = () => {
        openHandler();
        console.log(panier);
        console.log(data.client);
        
    }

    const validerCommande = async () => {
       
        const commande = {
            client : data.client,
            panier : panier.map(p => ({
                ligneCommande : p
            })),
            total : total
        }
        console.log(commande);

        dispatch(createCommande(commande));
        history.push('/commande-envoyer');
    }

    useEffect(() => {
        //  dispatch(getOneClient());
        calcul();
    }, [data])

    return (
        <>
        <div className="container my-4">
            <Grid container>
                <Grid item xs={4}>

                </Grid>
                <Grid item xs={4}>
                    <Typography variant="h6" className="m-4">Information personnel</Typography>
                </Grid>
                <Grid item xs={4}>

                </Grid>
            </Grid>
            
            <Grid container>
                <Grid item xs={2}>

                </Grid>
                <Grid item xs={8}>
                    <div className="container m-4">
                        <Paper elevation={3} className="m-4 ">
                            <Grid container>
                                <Grid item xs={2}>
                                    
                                </Grid>
                                <Grid item xs={8} spacing={2}>
                                    <Typography className="my-4">Veuillez remplir les champs suivants pour proceder à votre commande.</Typography>
                                    <form method="post" onSubmit={onSubmit}>
                                    <TextField 
                                        type="text"
                                        name="nomClient"
                                        fullWidth
                                        margin="dense"
                                        variant="standard"
                                        label="Nom"
                                        className="my-4"
                                        required
                                        onChange={handleChange}
                                    />
                                    <TextField 
                                        type="text"
                                        name="prenomClient"
                                        fullWidth
                                        margin="dense"
                                        variant="standard"
                                        label="Prènom(s)"
                                        className="my-4"
                                        required
                                        onChange={handleChange}
                                    />
                                    <TextField 
                                        type="email"
                                        name="emailClient"
                                        fullWidth
                                        margin="dense"
                                        variant="standard"
                                        label="E-mail"
                                        className="my-4"
                                        required
                                        onChange={handleChange}
                                    />
                                    <Typography className="mt-4">Adresse</Typography>
                                    <Grid container spacing={2} className="mb-4">
                                       
                                        <Grid item xs={4}>
                                            <TextField 
                                                type="text"
                                                name="lotClient"
                                                fullWidth
                                                margin="dense"
                                                variant="standard"
                                                label="Lot"
                                                required
                                                onChange={handleChange}
                                            />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <TextField 
                                                type="text"
                                                name="villeClient"
                                                fullWidth
                                                margin="dense"
                                                variant="standard"
                                                label="Ville"
                                                required
                                                onChange={handleChange}
                                            />
                                            
                                        </Grid>
                                        <Grid item xs={4}>
                                            <TextField 
                                                type="text"
                                                name="provinceClient"
                                                fullWidth
                                                required
                                                margin="dense"
                                                variant="standard"
                                                label="Province"
                                                onChange={handleChange}
                                            />
                                            
                                        </Grid>
                                    </Grid>
                                    <Button variant="contained" type="submit" className="mt-4" color="primary" fullwidth>Valider</Button>
                                    </form>
                                   
                                </Grid>
                                
                                
                                <Grid item xs={2} className="m-4">

                                </Grid>
                            </Grid>
                        </Paper>            
                    </div>
                </Grid>
                <Grid item xs={2}>

                </Grid>
            </Grid>
            
        </div>
        
       {data?.client && (
           <div className="container mt-4">
                <Dialog open={open} onClose={openHandler}>
                    <DialogTitle>
                        <Typography variant="h5">Confirmation du commande</Typography>
                    </DialogTitle>
                    <DialogContent>
                        <Typography variant="subtitle1">Bonjour {data.client.nomClient} </Typography>
                        <Typography variant="subtitle1">Votre commande sont les suivants :</Typography>

                        {panier.length !== undefined && panier.map(p => (
                            <Paper elevation={3} className="m-4" key={p.produit._key}>
                                <ListItem>
                                    <Grid container spacing={2}>
                                        <Grid item xs={6}>
                                            <Swiper 
                                                spaceBetween={50} 
                                                slidesPerView={1}
                                                scrollbar={{draggable : true}}
                                                pagination={{clickable : true}}
                                                >
                                                {p.produit?.images.map(image => (
                                                    <SwiperSlide>
                                                        <img style={{height :"100px", width : "200px"}} src={uri + image} />
                                                    </SwiperSlide>

                                                ))}
                                            </Swiper>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography variant="h6"> {p.produit.nomProd} </Typography>
                                            <Typography variant="subtitle1">Prix : <em> {p.produit.prixProd}</em> Ar &nbsp; &nbsp; <Badge badgeContent={"x" +p.qte} color="primary">   </Badge> </Typography>
                                            <Typography variant="subtitle2"> Decription : {p.produit.descProd} </Typography>
                                            
                                            <Grid container spacing={2}>
                                                <Grid item xs={8}>
                                                    <Typography variant="subtitle2">Sous-total : <em>{p.produit.prixProd * p.qte}</em> Ar</Typography>
                                                </Grid>
                                                <Grid item xs={4}>
                                                    
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </ListItem>
                                <Divider />
                            </Paper>
                        ))}

                        <div className="container">
                            <Typography variant="h6"><em> Total : {total} Ar</em></Typography>
                        </div>
                        <div className="container mt-4">
                            <Typography variant="subtitle1">Mode de payement :</Typography>
                            <div className="m-4">
                                <input type="radio" id="huey" name="drone" value="huey" checked />
                                <label for="huey">&nbsp; Mobile money</label>
                            </div>
                            <div className="m-4">
                                <input type="radio" id="huey" name="drone" value="huey" />
                                <label for="huey">&nbsp; Carte crédit</label>
                            </div>
                            <div className="m-4">
                                <input type="radio" id="huey" name="drone" value="huey" />
                                <label for="huey">&nbsp; Autres</label>
                            </div>
                        </div>   
                    </DialogContent>
                    <DialogActions>
                        <Button color="secondary" onClick={openHandler}>Annuler</Button>
                        <Button color="primary" onClick={validerCommande}>Valider</Button>
                    </DialogActions>
                </Dialog>
            </div>
       )} 
        </>
    )
}

export default Commande