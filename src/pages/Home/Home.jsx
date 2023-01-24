import { Button, Card, CardActions, CardContent, CardMedia, LinearProgress, Typography } from "@mui/material"
// import axios from "axios"
import { observer } from "mobx-react-lite"
// import { useEffect } from "react"
// import { useState } from "react"
import HomeModel from "./model/Home.model"




// function fetchActivity(){
//     fetch(URL).then((res)=>{
//         return res.json()
//     }).then((res)=>{
//         console.log(res)
//     })
// }

function Home() {
    // const [action, setAction] = useState({})
    // const [loading, setLoading] = useState(false)

    // const getAction = () => {
    //     setLoading(true)
    //     axios.get(URL)
    //         .then((res) => {
    //             console.log(res.data)
    //             setAction(res.data)
    //             setLoading(false)
    //         })
    // }

    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image="https://www.tutorialfunda.com/wp-content/uploads/2021/07/How-to-Call-API-in-React.js-Using-Axios.png"
                    title="react"
                />

                {HomeModel.loading ? <LinearProgress color="secondary" /> : <CardContent>

                    <Typography gutterBottom variant="h5" component="div">
                        {HomeModel.action.type}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                        {HomeModel.action.activity}
                    </Typography>

                </CardContent>}


                <CardActions >
                    <Button size="small" onClick={HomeModel.init}>Get new action</Button>
                </CardActions>
            </Card>
        </>
    )
}

export default observer(Home)