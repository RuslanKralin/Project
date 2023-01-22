import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';
import axios from 'axios';


// function createData(
//     name,
//     calories,
//     fat,
//     carbs,
//     protein,
// ) {
//     return {
//         name: name,
//         calories: calories,
//         fat: fat,
//         carbs: carbs,
//         protein: protein
//     };
// }

// const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData('Eclair', 262, 16.0, 24, 6.0),
//     createData('Cupcake', 305, 3.7, 67, 4.3),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

// rows.forEach((item) => console.log(item))

const STATS_URL = 'https://datausa.io/api/data?drilldowns=Nation&measures=Population'

function fetchStats() {
    fetch(STATS_URL).then((res) => {
        return res.json()
    }).then((res) => {
        console.log(res)
    })
}

function MuiTable() {
    const [stats, setStats] = useState([]) 
    // Важно! Stats хранит в себе статистику. Если не поставить изначально пустой массив, то при map будет ошибка(не может мапить 
    //     underfind). Есть выход ещё {stats?.map((item) => ...   тогда будет работать

    //  помогает делать что то в зависимости от чего то useEffect
    useEffect(()=>{
        // fetch(STATS_URL).then((res) => {
        //     return res.json()
        // }).then((res) => {
        //     console.log(res.data)
        //     setStats(res.data)
        // })

        // Альтернатива через AXIOS (часто используется, есть много возможностей)
        axios.get(STATS_URL)
        .then(function (response) {
          console.log(response.data)
          setStats(response.data.data)
        })


    },[])// вторым параметром принимает массив. С пустым массивом отраьотае 1раз когда загрузится страница


    
    return (
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
                            key={item['ID Nation']}
                            // key нужен для того что если будет изменения только одного компонента и рендерить будет только его 
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {item['ID Nation']}
                            </TableCell>
                            <TableCell align="right">{item.Year}</TableCell>
                            <TableCell align="right">{item.Population}</TableCell>
                            
                            {/* <TableCell align="right">{item.carbs}</TableCell>
                            <TableCell align="right">{item.protein}</TableCell> */}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default MuiTable

