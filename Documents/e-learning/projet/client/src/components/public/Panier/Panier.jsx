import { Grid, Typography, Paper, Button, ButtonBase, List, ListItem, Badge,IconButton, Divider, Box } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux"
import { makeStyles } from "@material-ui/core/styles";
import { Check, CheckCircleOutline, CheckCircleOutlined, Delete, Remove } from "@material-ui/icons";
import { useEffect, useState } from "react";    
import Rating from '@material-ui/lab/Rating';
import { Link } from 'react-router-dom'

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import SwiperCore, {Navigation, Pagination, Scrollbar} from 'swiper'
import RemovePanier from "./RemovePanier";


const useStyles = makeStyles((theme) => ({
    paper : {
        padding : theme.spacing(2),
        margin : theme.spacing(2),
    },
    text : {

    },
    button  : {
        cursor : 'pointer',
    },
}))


SwiperCore.use([Navigation, Pagination, Scrollbar])

const Panier = () => {
    const classes = useStyles()
    const panier = useSelector(state => state.PanierReducers)
    const [total, setTotal] = useState(0)
    const dispatch = useDispatch()

    const uri = "http://localhost:5000/"

    const calcul = () => {
        let t = 0;
        panier.length !== undefined && panier.map(p => {
            t += p.produit.prixProd * p.qte
        })
        setTotal(t);
    }

    useEffect(() => {
        calcul()
    }, [panier])

    return (
        <div className="container mt-4">
            <Typography variant="h5">Mon pannier</Typography>
            <Grid container>
                <Grid item xs={12} sm={6}>
                <List>
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
                                                        <img style={{height :"180px", width : "250px"}} src={uri + image} />
                                                    </SwiperSlide>

                                                ))}
                                            </Swiper>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography variant="h6"> {p.produit.nomProd} </Typography>
                                            <Typography variant="subtitle1">Prix : <em> {p.produit.prixProd}</em> Ar &nbsp; &nbsp; <Badge badgeContent={"x" +p.qte} color="primary">   </Badge> </Typography>
                                            <Typography variant="subtitle2"> Decription : {p.produit.descProd} </Typography>
                                            <Box component='fieldset' borderColor="transparent" className="m-4">
                                                <Rating
                                                    name="simple-controlled"
                                                    value={p.produit.rateProd}
                                                />
                                            </Box>
                                            <Grid container spacing={2}>
                                                <Grid item xs={8}>
                                                    <Typography variant="subtitle2">Sous-total : <em>{p.produit.prixProd * p.qte}</em> Ar</Typography>
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <IconButton>
                                                        <RemovePanier id={p.produit._id} />
                                                    </IconButton>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </ListItem>
                                <Divider />
                            </Paper>
                        ))}
                    </List>
                    
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>
                        <Typography className="h6 my-4" >Total : {total} Ar</Typography>
                        <Link to="/commande" style={{textDecoration : 'none'}}>
                            <Button color="primary" variant="outlined"><Check /> &nbsp;&nbsp; Commander</Button>
                        </Link>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default Panier