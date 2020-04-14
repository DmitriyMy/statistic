import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    bgcolor: {
        background: "rgba(255, 140, 0, 1)"
    },
    bg1color: {
        background: "rgb(255, 255, 255)"
    },
    bg2color: {
        background: "rgba(0, 0, 0, 1)"
    }
});

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function DenseTable() {
    const classes = useStyles();

    function ColoriesCell(calories) {
        if (calories < 100 && calories > 0){
            return (<TableCell
                align="right"
                className={classes.bgcolor}
            >
                {calories}
            </TableCell>)
        } else {//(calories >= 100 && calories < 250) {
            return (<TableCell
                align="right"
                className={classes.bg1color}
            >
                {calories}
            </TableCell>)
        } /*if else {
            return (<TableCell
                align="right"
                className={classes.bg2color}
            >
                {calories}
            </TableCell>)
        }*/
        return (<TableCell
            align="right"
        >
            {calories}
        </TableCell>)
    }

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>Dessert (100g serving)</TableCell>
                        <TableCell align="right">Calories</TableCell>
                        <TableCell align="right">Fat&nbsp;(g)</TableCell>
                        <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                        <TableCell align="right">Protein&nbsp;(g)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row" style={{ background: "red" }}>
                                {row.name}
                            </TableCell>
                            <ColoriesCell colories={row.colories}/>
                            <TableCell align="right">{row.fat}</TableCell>
                            <TableCell align="right">{row.carbs}</TableCell>
                            <TableCell align="right">{row.protein}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}