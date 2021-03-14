import React from 'react'

const Ingredients = ({ingredients}) => {
    const [isChecked, setIsChecked] = React.useState(Array.from(Array(ingredients.length)).fill(false))
    const checkHandle = (index) => {
        setIsChecked(isChecked.map((element, indexElement) => indexElement === index ? !element : element))
    }

    return (
        <ul>
            {ingredients.map((ingredient, index) => <li key={`ingredient${index}`}>{ingredient.name}<input type={'checkbox'} name={'ingredient'} value={ingredient.id} id={ingredient.id} checked={isChecked[index]} onClick={() => checkHandle(index)}/>{isChecked[index]}</li>)}
        </ul>
    )
}
export default Ingredients