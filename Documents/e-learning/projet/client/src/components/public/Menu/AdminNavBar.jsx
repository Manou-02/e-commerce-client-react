import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";


const AdminNavBar = () => {
    return (
        <>
            

            <Link to="/administration/category">
                <Typography variant="subtitle1">Category</Typography>
            </Link>


            <Link to="/administration/produit">
                <Typography variant="subtitle1">Produit</Typography>
            </Link>
            <Link to="/administration/users">
                <Typography variant="subtitle1">Utilisateur</Typography>
            </Link>

            <Link to="/administration/commandes">
                <Typography variant="subtitle1">Commandes</Typography>
            </Link>
        </>
    )
}

export default AdminNavBar