import {applyMiddleware, combineReducers, createStore} from "redux"
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from "redux-thunk"
import userReducer from "./reducers/userReducer"
import chartReducer from "./reducers/chartReducer";

const rootReducer = combineReducers({
  user: userReducer,
  diagramm: chartReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
