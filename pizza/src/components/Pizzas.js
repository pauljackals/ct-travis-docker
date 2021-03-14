import React from 'react'
import PizzaItem from "./PizzaItem";
import '../styles/Pizzas.css'

const Pizzas = ({pizzas, removePizza, crusts, ingredients}) => {
    return (
        <div className="Pizzas">
            <ul>
                {pizzas.map((pizza, index) => <li key={`pizza${index}`}>
                    <PizzaItem index={index} pizza={pizza} crusts={crusts} ingredients={ingredients}/>
                    <button onClick={() => removePizza(pizza.id)}>remove</button>
                </li>)}
            </ul>
        </div>
    )
}
export default Pizzas