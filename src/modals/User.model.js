
import { makeAutoObservable } from 'mobx'



class UserModel {
   name = 'не зарегестрирован'
   password = ''
   email = ''
    constructor() {
        makeAutoObservable(this) //эта строчка говорит теперь это будет mobx состоянием, следи за этим объектом,
        // и каждый раз когда будут меняться поля stats и loading  делай rerender        
    }

    signIn({name, password, email}){
        this.name = name
        this.password = password
        this.email = email
    }
}

export default new UserModel()