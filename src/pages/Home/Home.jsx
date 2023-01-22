import { Button, Card, CardActions, CardContent, CardMedia, LinearProgress, Typography } from "@mui/material"
import axios from "axios"
// import { useEffect } from "react"
import { useState } from "react"


const URL = 'https://www.boredapi.com/api/activity'

// function fetchActivity(){
//     fetch(URL).then((res)=>{
//         return res.json()
//     }).then((res)=>{
//         console.log(res)
//     })
// }

function Home() {
    const [action, setAction] = useState({})
    const [loading, setLoading] = useState(false)

    const getAction = () => {
        setLoading(true)
        axios.get(URL)
            .then((res) => {
                console.log(res.data)
                setAction(res.data)
                setLoading(false)
            })
    }

    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image="https://www.tutorialfunda.com/wp-content/uploads/2021/07/How-to-Call-API-in-React.js-Using-Axios.png"
                    title="react"
                />

                {loading ? <LinearProgress color="secondary" /> : <CardContent>

                    <Typography gutterBottom variant="h5" component="div">
                        {action.type}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                        {action.activity}
                    </Typography>

                </CardContent>}


                <CardActions>
                    <Button size="small" onClick={getAction}>Get new action</Button>
                </CardActions>
            </Card>
        </>
    )
}

export default Home