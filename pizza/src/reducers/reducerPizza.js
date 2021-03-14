const reducerPizza = (state = [], action) => {
    switch (action.type) {
        case 'ADD_PIZZA': {
            return [...state,
                {
                    id: action.payload.id,
                    ingredients: action.payload.ingredients,
                    crust: action.payload.crust
                }
            ]
        }
        case 'REMOVE_PIZZA': {
            return state.filter(pizza => pizza.id !== action.payload.id)
        }
        default:{
            return state
        }
    }
}
export default reducerPizza