
import { Link } from 'react-router-dom'
import {Home, ShoppingCart, Info, AccountCircle, List} from '@material-ui/icons';
import { AppBar, Typography } from '@material-ui/core';
import { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import PopPanier from '../Panier/PopPanier';


const useStyles = makeStyles((theme) => ({
    text : {
        padding : theme.spacing(2)
    }
}))


const Menu = () => {
    const classes = useStyles() 


    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
      setAnchorEl(anchorEl ? null : event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
      };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;
  
    return (
        <>
            <AppBar color="transparent" position="relative" className="pt-2">
                <div className="nav justify-content-end">
                    <Link to="/" className="nav-link">
                        <Typography variant='subtitle1'  className="nav-item "><Home /> Accueil</Typography>
                    </Link>
                    <Link to="#" className="nav-link">
                        <Typography variant='subtitle1'  className="nav-item "><List /> Produits</Typography>
                    </Link>
                    
                    <Link to='#' className="nav-link" onClick={handleClick} aria-descriptedby={id}>
                        <Typography variant='subtitle1' className="nav-item ">
                            <ShoppingCart /> Panier
                        </Typography>
                    </Link>

                    <Link to="/about" className="nav-link">
                        <Typography variant='subtitle1' className="nav-item "><Info />   A-propos</Typography>
                    </Link>

                    <Link to="/administration" className="nav-link">
                        <Typography variant='subtitle1' className="nav-item "><AccountCircle /> Administration</Typography>
                    </Link>
                </div>
            </AppBar>
            <PopPanier
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
            />
            
        </>
    )
}

export default Menu    