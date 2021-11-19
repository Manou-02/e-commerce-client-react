import React, { useEffect } from "react";
import { Info, CheckCircle } from "@material-ui/icons";
import {Paper, ListItem, Badge, Divider, Box, IconButton, Typography,Button, Dialog, DialogActions, DialogContent, DialogTitle, Slide } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getAllCommande, marquerCommeEffectuer } from "../../../actions/CommandeActions";
import Rating from '@material-ui/lab/Rating';


import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import SwiperCore, {Navigation, Pagination, Scrollbar} from 'swiper'


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });


SwiperCore.use([Navigation, Pagination, Scrollbar])

const DetailsCommande = ({commande}) => {

    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const uri = "http://localhost:5000/"

    const handleOpen = () => {
        setOpen(!open)
    }

    useEffect(() => {

    }, [])

    const onMarquerEffectuer = async (id) => {
        await dispatch(marquerCommeEffectuer(id));
        dispatch(getAllCommande());
        handleOpen();
    }

    return (
        <>
            <IconButton>
                <Info color="primary" onClick={handleOpen} />
            </IconButton>
            <Dialog 
                open={open} 
                onClose={handleOpen} 
                TransitionComponent={Transition}
                keepMounted
                fullWidth="lg"
            >
                <DialogTitle>
                    <Typography variant="subtitle1"></Typography>
                </DialogTitle>
                <DialogContent>
                    <Grid container>
                        <Grid item xs={8}>
                            <Typography variant="subtitle1" color="primary">Commandes</Typography>
                            {commande.panier.length !== undefined && commande.panier.map(p => (
                                 <Paper elevation={3} className="m-4" key={p.ligneCommande.produit._id}>
                                    
                                 <ListItem>
                                     <Grid container spacing={2}>
                                         <Grid item xs={6}>
                                             <Swiper 
                                                 spaceBetween={50} 
                                                 slidesPerView={1}
                                                 scrollbar={{draggable : true}}
                                                 pagination={{clickable : true}}
                                                 >
                                                 {p.ligneCommande.produit?.images.map(image => (
                                                     <SwiperSlide>
                                                         <img style={{height :"180px", width : "250px"}} src={uri + image} />
                                                     </SwiperSlide>
 
                                                 ))}
                                             </Swiper>
                                         </Grid>
                                         <Grid item xs={6}>
                                             <Typography variant="h6"> {p.ligneCommande.produit.nomProd} </Typography>
                                             <Typography variant="subtitle1">Prix : <em> {p.ligneCommande.produit.prixProd}</em> Ar &nbsp; &nbsp; <Badge badgeContent={"x" +p.ligneCommande.qte} color="primary">   </Badge> </Typography>
                                             <Typography variant="subtitle2"> Decription : {p.ligneCommande.produit.descProd} </Typography>
                                             <Box component='fieldset' borderColor="transparent" className="m-4">
                                                 <Rating
                                                     name="simple-controlled"
                                                     value={p.ligneCommande.produit.rateProd}
                                                 />
                                             </Box>
                                             <Grid container spacing={2}>
                                                 <Grid item xs={8}>
                                                     <Typography variant="subtitle2">Sous-total : <em>{p.ligneCommande.produit.prixProd * p.ligneCommande.qte}</em> Ar</Typography>
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

                        </Grid>
                        <Grid item xs={4}>
                            <Typography className="my-4" variant="subtitle1" color="primary">Client</Typography>
                            <div className="container">
                                <Typography variant="subtitle2" >Nom : {commande.client.nomClient}</Typography>
                                <Typography variant="subtitle2" >Prènoms : {commande.client.prenomClient}</Typography>
                                <Typography variant="subtitle2" >E-mail : {commande.client.emailClient}</Typography>
                            </div>
                            <div className="container my-4">
                                <Typography>Adresse :</Typography>
                                <div className="container">
                                    <Typography variant="subtitle2" >Lot : {commande.client.adresse.lotClient}</Typography>
                                    <Typography variant="subtitle2" >Ville : {commande.client.adresse.villeClient}</Typography>
                                    <Typography variant="subtitle2" >Province : {commande.client.adresse.provinceClient}</Typography>
                                </div>
                                <div className="container my-4">
                                    <Typography><em> Net à payer : {commande.total} Ar </em></Typography>
                                </div>
                            </div>
                            
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    {commande.status === 0 &&<Button color="primary" variant="contained" onClick={() => onMarquerEffectuer(commande._id)}> <CheckCircle /> &nbsp;&nbsp; Marquer comme effectuer</Button> }
                    
                    <Button color="secondary" onClick={handleOpen}>Fermer</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default DetailsCommande