import { CardContent, CardHeader, Card, Paper, Grid, TextField, Button} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'
import { LockOpen } from "@material-ui/icons"
import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { Alert } from "@material-ui/lab";


const useStyle = makeStyles((theme) => ({
    paper : {
        width : "40%"
    },
    connexion :  {
        
    },
}))


const Login = () => {

    const classes = useStyle()
    const [info, setInfo] = useState({
         emailUser : "",
        password : ""
    })
    const [erreur, setErreur] = useState();
    const history = useHistory();

    const handleChange = e => {
        const {name, value} = e.target
        setInfo(prev => ({
            ...prev,
            [name] : value
        }))
    }

    const onSubmit = async e => {
        e.preventDefault()
        await axios({
            method: 'POST',
            baseURL : 'http://localhost:5000/api/user/login',
            data : info
        }).then(docs => {
            if(docs.data?.token) {
                localStorage.setItem('token', docs.data.token)
                return history.push("/administration/dashboard");
            } 
            else{
                localStorage.setItem('token', "");
                setErreur(docs.data.erreur);
            }
        }).catch(err => {
            console.log(err);
        })
    }

    useEffect(() => {

    }, [info])


    return (
        <div className="container mt-4">
                <Grid container>
                    <Grid item xs={6} sm={3}>

                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper elevation={1}>
                            <Card>
                                <CardHeader 
                                    title="S'authentifier"
                                />
                                <CardContent>
                                    <Grid container>
                                        <Grid item xs={12} sm={6}>
                                            <img src='./login1.png' alt="Login" height="300px" width="300px" />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            {erreur && 
                                                <Alert severity="error">{erreur} </Alert>
                                            }
                                            <TextField 
                                               label="E-mail"
                                               id="emailUser"
                                               name="emailUser"
                                               type="email"
                                               fullWidth
                                               className="mb-4"
                                               onChange={handleChange}
                                            />
                                            <TextField 
                                               label="Mot de passe"
                                               id="password"
                                               name="password"
                                               type="password"
                                               fullWidth 
                                               className="mb-4"
                                               onChange={handleChange}
                                            />
                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                
                                            <Link to="/" className={classes.connexion} style={{textDecoration : 'none'}}>
                                                <Button color="primary" variant="contained" className="my-4" onClick={onSubmit}><LockOpen />&nbsp;&nbsp;  Se connecter</Button>
                                            </Link>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Paper>
                        
                    </Grid>
                    <Grid item xs={6} sm={3}>

                    </Grid>
                </Grid>       
        </div>
    )
}

export default Login