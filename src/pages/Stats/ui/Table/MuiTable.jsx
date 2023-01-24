import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function MuiTable({ stats }) {

    return (
        <>
            <TableContainer component={Paper}>
                {/* TableContainer возьмёт все стили из Paper */}
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID Nation</TableCell>
                            <TableCell align="right">Year</TableCell>
                            <TableCell align="right">Population</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {stats.map((item) => (
                            <TableRow
                                key={item.Year}
                                // key нужен для того что если будет изменения только одного компонента и рендерить будет только его 
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {item['ID Nation']}
                                </TableCell>
                                <TableCell align="right">{item.Year}</TableCell>
                                <TableCell align="right">{item.Population}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>

    );
}

export default MuiTable

