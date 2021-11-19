import { Button, Dialog, DialogTitle, DialogContent, DialogActions, Typography, TextField } from "@material-ui/core";
import { AddCircle } from "@material-ui/icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser, getAllUser } from "../../../actions/UserAction";


const CreateUser = () => {
    const [open, setOpen] = useState(false)
    const [info, setInfo] = useState({
        nameUser :"",
        emailUser : "",
        password : ""
    })
    const dispatch = useDispatch()

    const handleOpen = () => {
        setOpen(!open);
    }

    const handleChange = e => {
        const {name, value} = e.target
        
        setInfo(prev => ({
            ...prev,
            [name] : value
        }))
    }

    const handleOnSubmit = async e => {
        e.preventDefault();

        await dispatch(registerUser(info));
        dispatch(getAllUser());
        handleOpen();
    }
    return (
        <>
            <Button onClick={handleOpen} color="primary" variant="contained"> <AddCircle />&nbsp;&nbsp; Ajouter</Button>

            <Dialog open={open} onClose={handleOpen}>
                <DialogTitle>
                    <Typography variant="subtitle1">Nouvelle utilisateur </Typography>
                </DialogTitle>
                <form method="POST" onSubmit={handleOnSubmit}>
                    <DialogContent>
                        <TextField 
                            id="nameUser"
                            name="nameUser"
                            type="text"
                            label="Nom d'utilisateur"
                            margin="dense"
                            fullWidth
                            className="mb-4"
                            onChange={handleChange}
                        />
                        <TextField 
                            id="emailUser"
                            name="emailUser"
                            type="email"
                            label="E-mail"
                            margin="dense"
                            fullWidth
                            className="mb-4"
                            onChange={handleChange}
                        />
                        <TextField 
                            id="password"
                            name="password"
                            type="password"
                            label="Password"
                            margin="dense"
                            fullWidth
                            className="mb-4"
                            onChange={handleChange}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button color="secondary" onClick={handleOpen}>Annuler</Button>
                        <Button color="primary" type="submit">Sauvegarder</Button>
                    </DialogActions>
                </form>
                
            </Dialog>
    
        </>
    )
}

export default CreateUser