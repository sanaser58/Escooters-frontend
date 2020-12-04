import { createStore, combineReducers, applyMiddleware } from 'redux' /// bringing necessary stuff from redux
import thunk from 'redux-thunk' /// middleware
import { composeWithDevTools } from 'redux-devtools-extension' /// to use redux devtools
import { productListReducer } from './reducers/productReducers'

const reducer = combineReducers({
    productList: productListReducer,
})

const initialState = {}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store