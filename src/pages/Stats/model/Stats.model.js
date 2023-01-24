import axios from 'axios'
import { makeAutoObservable } from 'mobx'

const STATS_URL =
    'https://datausa.io/api/data?drilldowns=Nation&measures=Population'

class StatsModel {
    stats = []
    loading = false

    constructor() {
        makeAutoObservable(this) //эта строчка говорит теперь это будет mobx состоянием, следи за этим объектом,
        // и каждый раз когда будут меняться поля stats и loading  делай rerender
        this.init()
    }

    init() {
        this.loading = true
        axios.get(STATS_URL).then((res)=>{
            this.stats = res.data.data
            this.loading = false
        })
            
            
        
    }
}

export default new StatsModel()
