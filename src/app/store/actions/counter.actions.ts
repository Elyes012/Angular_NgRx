export const INCREMENT = 'increament'
export const DECREAMENT = 'decreament'

// Définiiton de tout les actions (des class)
export class increamentAction {
    type : string = INCREMENT
    payload : number
    constructor (payload : number) {
        this.payload = payload
    }
}

export class deccreamentAction {
    type : string = DECREAMENT
    payload : number
    constructor (payload : number) {
        this.payload = payload
    }
}
