const reducerIngredient = (state = [], action) => {
    switch (action.type) {
        case 'ADD_INGREDIENT': {
            return [...state,
                {
                    id: state.length,
                    name: action.payload.name
                }
            ]
        }
        default:{
            return state
        }
    }
}
export default reducerIngredient