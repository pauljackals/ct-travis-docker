import React from 'react'

const PizzaItem = ({pizza, index, crusts, ingredients}) => {
    return (
        <>
            <span>Pizza {index}:</span>
            <span>{crusts.find(crust => crust.id === pizza.crust).name} crust</span>
            <ul>
                {ingredients.filter(ingredient => pizza.ingredients.includes(ingredient.id)).map((ingredient, indexInner) => <li key={`pizzaIngredient${indexInner}`}>{ingredient.name}</li>)}
            </ul>
        </>
    )
}
export default PizzaItem