import React from 'react'
import Ingredients from "./Ingredients";
import '../styles/CreatePizza.css'

const CreatePizza = ({ingredients, addPizza, crusts}) => {

    const [error, setError] = React.useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        const ingredientsIds = Array.from(event.target.ingredient).filter(element => element.checked).map(element => parseInt(element.id))

        if(ingredientsIds.length < 1){
            setError(true)
        } else {
            setError(false)
            addPizza(parseInt(event.target.crust.value), ingredientsIds)
            event.target.reset()
        }
    }
    return (
        <div className="CreatePizza">
            <form onSubmit={handleSubmit} onBlur={() => setError(false)}>
                <select name="crust">
                    {crusts.map((crust, index) => <option key={`crust${index}`} value={crust.id}>{crust.name}</option>)}
                </select>
                <Ingredients ingredients={ingredients}/>
                {error ? <span>At least one ingredient must be checked</span> : ''}
                <input type={'submit'} value={'create'}/>
            </form>
        </div>
    )
}

export default CreatePizza