import { Paper, Grid, Typography } from "@material-ui/core";
import { Alert } from '@material-ui/lab'

const CommandeEnvoyer = () => {
    return(
        <div className="container m-4">
            <Grid container>
                <Grid item xs={3}>

                </Grid>
                <Grid item xs={6}>
                    <Paper elevation={3}>
                        <Alert severity="info">
                            Votre commande est en cours.
                            <Typography>Nous vous avons envoyé une e-mail de confirmation, veuillez le consulter. </Typography>
                        </Alert>
                    </Paper>
                </Grid>
                <Grid item xs={3}>

                </Grid>
            </Grid>
        </div>
    )
}

export default CommandeEnvoyer