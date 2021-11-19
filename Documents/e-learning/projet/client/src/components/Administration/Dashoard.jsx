import AdminNavBar from "../public/Menu/AdminNavBar"
import BarChart from "../Chart/BarChart"
import { Alert } from "@material-ui/lab";
import { Grid, Typography, Paper } from "@material-ui/core";
import { Link } from 'react-router-dom'

const Dashoard = () => {
    return (
        <div className="container mt-4">
            <div className="container">
                <div className="row m-4">
                    <div className="col col-lg-6">
                        <Link to="/administration/commandes" style={{textDecoration : "none"}}>
                        
                            <Paper elevation={3} style={{cursor : "pointer"}}>
                                <Alert >
                                    <Grid container spacing={2}>
                                        <Grid item>
                                            <img src={process.env.PUBLIC_URL + "/com.png"  } alt="imageCateg" style={{width : "150px", height : "150px"}} />
                                        </Grid>
                                        <Grid item className="m-4">
                                            <Typography variant="h4">Commandes</Typography>
                                        </Grid>
                                    </Grid>
                                </Alert>
                            </Paper>
                        </Link>
                    </div>
                    <div className="col col-lg-6">
                        <Link to="/administration/produit" style={{textDecoration : "none"}}>
                            <Paper elevation={3} style={{cursor : "pointer"}}>
                                <Alert >
                                    <Grid container spacing={2}>
                                        <Grid item>
                                            <img src={process.env.PUBLIC_URL + "/commande.webp"  } alt="imageCateg" style={{width : "150px", height : "150px"}} />
                                        </Grid>
                                        <Grid item className="m-4">
                                            <Typography variant="h4">Produits</Typography>
                                        </Grid>
                                    </Grid>
                                </Alert>
                            </Paper>
                        </Link>
                    </div>
                </div>
                <div className="row m-4">
                    <div className="col col-lg-6">
                        <Link to="/administration/category" style={{textDecoration : "none"}}>
                            <Paper elevation={3} style={{cursor : "pointer"}}>
                                <Alert >
                                    <Grid container spacing={2}>
                                        <Grid item>
                                            <img src={process.env.PUBLIC_URL + "/categ.png"  } alt="imageCateg" style={{width : "150px", height : "150px"}} />
                                        </Grid>
                                        <Grid item className="m-4">
                                            <Typography variant="h4">Categories</Typography>
                                        </Grid>
                                    </Grid>
                                </Alert>
                            </Paper>
                        </Link>
                    </div>
                    <div className="col col-lg-6">
                        <Link to="/administration/users" style={{textDecoration : "none"}}>
                            <Paper elevation={3} style={{cursor : "pointer"}}>
                                <Alert >
                                    <Grid container spacing={2}>
                                        <Grid item>
                                            <img src={process.env.PUBLIC_URL + "/user.webp"  } alt="imageCateg" style={{width : "150px", height : "150px"}} />
                                        </Grid>
                                        <Grid item className="m-4">
                                            <Typography variant="h4">Utilisateurs</Typography>
                                        </Grid>
                                    </Grid>
                                </Alert>
                            </Paper>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashoard