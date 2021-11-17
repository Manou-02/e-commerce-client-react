import {Typography, IconButton, Table, TableContainer, TableBody, TableHead, TableRow, TableCell } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Edit, Delete } from "@material-ui/icons";
import Create from "./Create";
import UpdateCategory from "./UpdateCategory";
import DeleteCategory from "./DeleteCategory";


const Category = () => {

    const categories = useSelector(state => state.categoryReducer)
    const dispatch = useDispatch();

    useEffect(() => {

    }, [categories])



    return (
        <div className="container mt-4">

            <Typography variant="h5" > Liste de tous les category</Typography>
            <Create />
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
                        {categories?.map(c => (
                            <TableRow key={c._id}>
                                <TableCell> {c._id} </TableCell>
                                <TableCell> {c.libelleCateg} </TableCell>
                                <TableCell> {c.descCateg} </TableCell>
                                <TableCell>
                                    <IconButton>
                                        <UpdateCategory libelle={c.libelleCateg} desc={c.descCateg} id={c._id} />
                                    </IconButton>
                                    <IconButton>
                                        <DeleteCategory id={c._id} />
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