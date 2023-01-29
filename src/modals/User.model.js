import { makeAutoObservable } from 'mobx'

const STORAGE_USER = 'user'

class UserModel {
    name = ''
    password = ''
    email = ''

    constructor() {
        makeAutoObservable(this) //эта строчка говорит теперь это будет mobx состоянием, следи за этим объектом,
        // и каждый раз когда будут меняться поля stats и loading  делай rerender
        this.init()
    }
   //для LocalStorage
    init() {
        if (localStorage.getItem(STORAGE_USER)) {
            const values = JSON.parse(localStorage.getItem(STORAGE_USER))

            this.fromJSON(values)
        }
    }

    signIn({ name, password, email }) {
        this.name = name
        this.password = password
        this.email = email
    }
//для LocalStorage
    fromJSON({ email, password, name, secondName, male, age,experience }) {
        this.email = email
        this.password = password
        this.name = name
        this.secondName = secondName
        this.male = male
        this.age = age
        this.experience = experience
    }
//для LocalStorage
    signUp(values) {
        this.fromJSON(values)
        localStorage.setItem(STORAGE_USER, JSON.stringify(values))
    }

    isLoggedIn() {
        return Boolean(this.name)
    }

    logOut() {
        this.name = ''
        this.password = ''
        this.email = ''
        localStorage.removeItem(STORAGE_USER)
    }
    changeInfo({ email, password, name }) {
        if (this.name !== name) {
            this.name = name
        }
        if (this.email !== email) {
            this.email = email
        }
        if (this.password !== password) {
            this.password = password
        }
    }

}

export default new UserModel()
