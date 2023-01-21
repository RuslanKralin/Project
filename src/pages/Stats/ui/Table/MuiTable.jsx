import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
    name,
    calories,
    fat,
    carbs,
    protein,
) {
    return {
        name: name,
        calories: calories,
        fat: fat,
        carbs: carbs,
        protein: protein
    };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

rows.forEach((item) => console.log(item))

const STATS_URL ='https://datausa.io/api/data?drilldowns=Nation&measures=Population'

function fetchStats(){
    fetch(STATS_URL).then((res)=>{
        return res.json()
    }).then((res)=>{
        console.log(res)
    })
}

function MuiTable() {
    fetchStats()
    return (
        <TableContainer component={Paper}>
            {/* TableContainer возьмёт все стили из Paper */}
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
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
                    {rows.map((item) => (
                        <TableRow
                            key={item.name}
                            // key нужен для того что если будет изменения только одного компонента и рендерить будет только его 
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {item.name}
                            </TableCell>
                            <TableCell align="right">{item.calories}</TableCell>
                            <TableCell align="right">{item.fat}</TableCell>
                            <TableCell align="right">{item.carbs}</TableCell>
                            <TableCell align="right">{item.protein}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default MuiTable

