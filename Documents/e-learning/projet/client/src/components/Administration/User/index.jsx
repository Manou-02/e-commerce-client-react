import { Typography, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Button, TextField, IconButton } from "@material-ui/core";
import { useSelector } from "react-redux";
import { Edit, Delete } from "@material-ui/icons";
import CreateUser from './CreateUser';
import EditUser from "./EditUser";
import DeleteUser from './DeleteUser';

const User = () => {

    const users = useSelector(state => state.UserReducer);

    return (
        <div className="container my-4">
            <Typography variant="ssubtitle1" className="my-4">Liste de tous les utilisateurs</Typography>
            <div className="my-4">
                <CreateUser />
            </div>

            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell> ID </TableCell>
                            <TableCell> Nom  </TableCell>
                            <TableCell> E-mail </TableCell>
                            <TableCell> Actions </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.length !== undefined && users.map(u => (
                            <TableRow>
                                <TableCell> {u._id} </TableCell>
                                <TableCell> {u.nameUser} </TableCell>
                                <TableCell> {u.emailUser} </TableCell>
                                <TableCell>
                                    <EditUser user={u} />
                                    <DeleteUser id={u._id} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default User