
import { LinearProgress } from "@mui/material"

import { observer } from "mobx-react-lite"
import { StatsModel } from "./model"

import MuiTable from "./ui/Table/MuiTable"


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


// rows.forEach((item) => console.log(item))



// function fetchStats() {
//     fetch(STATS_URL).then((res) => {
//         return res.json()
//     }).then((res) => {
//         console.log(res)
//     })
// }



function Stats() {

    // const [stats, setStats] = useState([])
    // const [loading, setLoading] = useState(false)
    // Важно! Stats хранит в себе статистику. Если не поставить изначально пустой массив, то при map будет ошибка(не может мапить 
    //     underfind). Есть выход ещё {stats?.map((item) => ...   тогда будет работать

    //  помогает делать что то в зависимости от чего то useEffect
    // useEffect(() => {
        // fetch(STATS_URL).then((res) => {
        //     return res.json()
        // }).then((res) => {
        //     console.log(res.data)
        //     setStats(res.data)
        // })

        // Альтернатива через AXIOS (предоставляет обвёртку в которой можно много с чем работать)
        // setLoading(true)
        // axios.get(STATS_URL)
        //     .then(function (response) {
        //         console.log(response.data)
        //         setStats(response.data.data)
        //         setLoading(false)
        //     })
    // }, [])// вторым параметром принимает массив. С пустым массивом отраьотае 1раз когда загрузится страница



    return (
        <>
        <h1>Statistics</h1>

            {StatsModel.loading ?
                (<LinearProgress color="secondary" />)
                : (
                    <MuiTable stats={StatsModel.stats} />
                )}
        </>
    )
}

export default observer(Stats)// этим мы сказали что эта компонента зависит от состояния  состояния mobx, когда оно будет 
//меняться будет rerender