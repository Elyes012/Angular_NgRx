export const SUCCESS = '[Todos] success'
export const FAILED = '[Todos] FAILED'
export const LOAD = '[Todos] LOAD'

export class LoadTodosAction {
    type: string = LOAD
}

export class SuccessAction {
    type: string = SUCCESS
    payload : any

    constructor(payload: any) {
        this.payload = payload
    }
}

export class FailedAction {
    type: string = FAILED
    payload : any

    constructor(payload: any) {
        this.payload = payload
    }
}