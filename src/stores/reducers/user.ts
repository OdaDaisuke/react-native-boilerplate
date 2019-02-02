import { Action } from 'redux'

interface IUserProps extends Action {
}

export default (state = null, action: IUserProps) => {
    switch (action.type) {
        default:
            return state
    }
}