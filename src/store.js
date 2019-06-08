import { createStore, combineReducers } from 'redux'
import TicketsReducers from './tickets/reducers/TicketReducers'
import UserReducers from './users/reducers/UserReducers'
import AuthReducers from './auth/reducers/AuthReducers'
import { AuthInit } from './auth/actions/AuthActions'

const reducers = combineReducers({
  tickets: TicketsReducers,
  users: UserReducers,
  auth: AuthReducers,
})

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.dispatch(AuthInit())
export default store
