import React from 'react'
import AddIngredient from "./AddIngredient";
import Pizzas from './Pizzas'
import {connect} from 'react-redux'
import CreatePizza from "./CreatePizza";
import {addPizzaAction, removePizzaAction} from "../actions/actionsPizza";
import {addIngredientAction} from "../actions/actionsIngredient";
import '../styles/App.css'

function App({pizzas, ingredients, addIngredient, addPizza, removePizza, crusts}) {

  return (
    <div className="App">
      <AddIngredient addIngredient={addIngredient}/>
      <CreatePizza addPizza={addPizza} ingredients={ingredients} crusts={crusts}/>
      <Pizzas pizzas={pizzas} removePizza={removePizza} crusts={crusts} ingredients={ingredients}/>
    </div>
  );
}

const mapStateToProps = (state) => {
    return {
        pizzas: state.reducerPizza,
        ingredients: state.reducerIngredient,
        crusts: state.reducerCrust
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPizza: (crust, ingredients) => {
            dispatch(addPizzaAction(crust, ingredients))
        },
        removePizza: (id) => {
            dispatch(removePizzaAction(id))
        },
        addIngredient: (name) => {
            dispatch(addIngredientAction(name))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
