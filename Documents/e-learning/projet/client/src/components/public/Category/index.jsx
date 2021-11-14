import { IconButton, Table, TableContainer, TableBody, TableHead, TableRow, TableCell } from "@material-ui/core";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Edit, Delete } from "@material-ui/icons";


const Category = () => {

    const categories = useSelector(state => state.categoryReducer)

    useEffect(() => {

    }, [categories])

    return (
        <div className="container">

            Liste de tous les category

            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>#ID</TableCell>
                            <TableCell>Libelle</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {categories.category?.map(c => (
                            <TableRow>
                                <TableCell> {c._id} </TableCell>
                                <TableCell> {c.libelleCateg} </TableCell>
                                <TableCell> {c.descCateg} </TableCell>
                                <TableCell>
                                    <IconButton>
                                        <Edit color="primary" />
                                    </IconButton>
                                    <IconButton>
                                        <Delete color="secondary" />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Category