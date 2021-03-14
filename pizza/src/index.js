import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import reducerPizza from "./reducers/reducerPizza";
import reducerIngredient from "./reducers/reducerIngredient";
import reducerCrust from "./reducers/reducerCrust";

const store = createStore(combineReducers({reducerPizza, reducerIngredient, reducerCrust}))

const render = () => ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App/>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
render()
store.subscribe(render)