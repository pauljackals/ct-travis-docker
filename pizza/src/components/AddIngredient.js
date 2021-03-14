import React from 'react'
import '../styles/AddIngredient.css'

const AddIngredient = ({addIngredient}) => {
    const [error, setError] = React.useState(false)
    const formHandle = (event) => {
        event.preventDefault()
        const newIngredient = event.target.name.value

        if(newIngredient.length < 1){
            setError(true)
        } else {
            setError(false)
            addIngredient(newIngredient)
            event.target.reset()
        }
    }
    return (
        <div className="AddIngredient">
            <form onSubmit={formHandle} onBlur={() => setError(false)}>
                {error ? <span>Name must not be empty</span> : ''}
                <input type='text' name='name' placeholder="Ingredient's name"/>
                <input type='submit' value='add'/>
            </form>
        </div>
    )
}
export default AddIngredient