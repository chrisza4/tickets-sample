import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import TicketsReducers from './tickets/reducers/TicketReducers'
import UserReducers from './users/reducers/UserReducers'
import AuthReducers from './auth/reducers/AuthReducers'
import { AuthInit } from './auth/actions/AuthActions'
import { mainSaga } from './tickets/actions/TicketActions'

const reducers = combineReducers({
  tickets: TicketsReducers,
  users: UserReducers,
  auth: AuthReducers,
})

const sagaMiddleWare = createSagaMiddleware()
const store = createStore(reducers, applyMiddleware(sagaMiddleWare))
sagaMiddleWare.run(mainSaga)
store.dispatch(AuthInit())
export default store
