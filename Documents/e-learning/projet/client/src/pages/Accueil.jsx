import {Paper, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography,TextField, Box, Grid } from "@material-ui/core"
import { AddCircle } from "@material-ui/icons"
import { useDispatch, useSelector } from "react-redux"
import { makeStyles } from '@material-ui/core/styles'
import Rating from '@material-ui/lab/Rating';
import { useState } from "react";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import SwiperCore, {Navigation, Pagination, Scrollbar} from 'swiper'
import db from '../reducers/InitialeIDB'
import { addPanier, getPanier, updatePanier } from "../actions/PanierAction";
import Fuse from 'fuse.js';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const useStyles = makeStyles({
    root : {
        maxWidth : 300,
        width : 250
    },
    media : {
        height : 200,
    },
    header : {
        width : "100%"
    },
   
})

SwiperCore.use([Navigation, Pagination, Scrollbar])


const Accueil = () => {

    const produits = useSelector(state => state.ProduitReducer)
    const classes = useStyles()
    const dispatch = useDispatch()
    const uri = "http://localhost:5000/"
    const panier = useSelector(state => state.PanierReducers)
    const [query, setQuery] = useState('');


    const fuse = new Fuse(produits,{
        keys : [
            'nomProd',
            'prixProd'
        ]
    })
    const resultats = fuse.search(query)
    const resultatRecherche = query ? resultats.map(result => result.item) : produits;



    let value = {
        produit : {},
        qte :0
    }

    const handleOnRecherche = e => {
        const {value} = e.target

        setQuery(value);
    }

    const notify = () => toast("Ajouté au panier avec succès");

     const handleAddPannier = async (id) => {
        value = {
            id : id,
            produit : produits.filter(prod => prod._id === id)[0],
            qte : 1
        }
        let data;
        await db.collection('ligneCom').get().then(res => {
            data = res.filter(p => p.produit._id === id)
        }).catch(err => {
            console.log(err);
        })

        if(Object.keys(data).length === 0){
            dispatch(addPanier(value));
        }else{
            dispatch(updatePanier(value));
        }
        //console.log(Object.keys(data).length);

        // if(!data){
        //     //Modification
        //     console.log("aaaa");
        //     //await dispatch(addPanier(value))
        // }else{
        //     //addition
        //     console.log('bbbbb');
        //     // await dispatch(updatePanier(value))
        // }

        //await dispatch(addPanier(value)); 
        // db.collection('ligneCom').get().then(ligne => {
        //     for(let i = 0; i < ligne.length; i ++){
        //         if(ligne[i].produit._id === id){
        //             return db.collection('ligneCom').doc(id).set({
        //                 produit : ligne[i].produit,
        //                 qte : ligne[i].qte + 1
        //             })
        //         }
        //     }
        //     return db.collection('ligneCom').add(value, id);
        // })
        dispatch(getPanier());
        notify();
    }
    
    
    return (
        <>
         <div className={classes.header} style={{ width : "100%", height :"350px", backgroundImage : "url('./2.jpg')", backgroundRepeat : "no-repeat", backgroundSize : "cover"}}>
                {/* <img src="./2.jpg" alt="image"  style={{width : "100%", height :"350px"}}/> */}

            <div className="mx-4 pt-4">
                <h1 style={{color : "white", fontSize : "3rem", display :"none"}} className="">&nbsp;</h1>
                <h1 style={{color : "white", fontSize : "3rem"}} className="">E-Varotra</h1>
                <h3 style={{color : "white"}} className="">Vente des matériels informatiques</h3>
            </div>
         </div>

        <div className="container">

            <div className="my-4">
                <TextField 
                    id="recherche"
                    name="recherche"
                    label="Recherche"
                    onChange={handleOnRecherche}
                />
            </div>
                <Grid container spacing={3}>
                    {resultatRecherche.length !== undefined && resultatRecherche.map(produit => (
                        <Grid item xs={6} sm={3}>
                            <Paper elevation={3} style={{width : "200px"}} >
                            <Card key={produit._id} className={classes.root} >
                                <CardHeader 
                                    title={produit.nomProd}
                                />
                                <div>
                                    <Swiper 
                                        spaceBetween={50} 
                                        slidesPerView={1}
                                        scrollbar={{draggable : true}}
                                        pagination={{clickable : true}}
                                        >
                                        {produit?.images.map(i => (
                                          <SwiperSlide>
                                                <CardMedia
                                                    className={classes.media}
                                                    image={uri+i}
                                                    title={produit.nameProduct}
                                                />
                                         </SwiperSlide>
                                        ))}
                                    </Swiper>
                                    
                                    <CardContent>
                                        <Typography variant="subtitle1">
                                            {produit.descProd.length > 25 ? produit.descProd.substring(0,25) + "..." : produit.descProd }
                                        </Typography>
                                        <Typography>Prix : {produit.prixProd} Ar</Typography>
                                        <Box component='fieldset' borderColor="transparent">
                                            <Rating
                                                name="simple-controlled"
                                                value={produit.rateProd}
                                            />
                                        </Box>
                                    </CardContent>
                                </div>
                                <CardActions>
                                    <Button variant='outlined' color="primary" onClick={() => handleAddPannier(produit._id)}><AddCircle /> &nbsp;&nbsp; Ajouter au panier</Button>
                                    <ToastContainer autoClose={2000} />
                                </CardActions>
                                </Card>
                            </Paper>
                        
                        </Grid>
                    ))}
                </Grid>          
        </div>
        </>
    )
}



export default Accueil