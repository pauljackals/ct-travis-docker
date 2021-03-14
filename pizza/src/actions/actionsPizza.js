import {v4 as uuid} from 'uuid'

const addPizzaAction = (crust, ingredients) => {
    return {type: 'ADD_PIZZA', payload: {crust, ingredients, id: uuid()}}
}
const removePizzaAction = (id) => {
    return {type: 'REMOVE_PIZZA', payload: {id}}
}
export {addPizzaAction, removePizzaAction}