import axios from 'axios'
import { makeAutoObservable } from 'mobx'

const URL = 'https://www.boredapi.com/api/activity'

class HomeModel {
    action = {}
    loading = false

    constructor() {
        makeAutoObservable(this) //эта строчка говорит теперь это будет mobx состоянием, следи за этим объектом,
        // и каждый раз когда будут меняться поля stats и loading  делай rerender
       
        this.getAction()
        
    }

    // init() {
    //     this.loading = true
    //     axios.get(URL).then((res) => {
    //         this.action = res.data
    //         console.log(res.data)
    //         this.loading = false
    //     })
    // }
    getAction = () => {
        this.loading = true
        
        axios.get(URL)
            .then((res) => {
                this.action = res.data
                this.loading= false
            })
    }


}

export default new HomeModel()
