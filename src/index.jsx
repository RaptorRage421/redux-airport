import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';

/** TODO: import REDUX **/
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import airlineReducer from './components/Reducers/Reducer';

/** TODO: Add REDUCERS */
// const airlineList = (state = [], action) => {
//     if(action.type === 'ADD_AIRLINE') {

//         return [...state, action.payload]
//     }
//     return state
// }

/** TODO: Create store */

const storeInstance = createStore(
    // Combine reducers needed with more than 1 reducer
      combineReducers({
        airlineReducer
      }),
    composeWithDevTools(
      applyMiddleware(
      logger
    )
    )
    
    )

// Be sure to add the Provider! Just wrap App with it. Don't copy and paste from lecture, that will cause issues.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
         <Provider store={storeInstance}>
    <App />
    </Provider>
    </React.StrictMode>
);