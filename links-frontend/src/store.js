import { createStore, applyMiddleware, combineReducers } from 'redux'
import ReduxPromise from 'redux-promise'

import AccountReducer from './reducers/AccountReducer'
import LinkReducer from './reducers/LinkReducer'

const reducers = combineReducers({
    account: AccountReducer,
    link: LinkReducer,
})

const store = createStore(reducers, applyMiddleware(ReduxPromise))

export default store