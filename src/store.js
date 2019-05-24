import { createStore, combineReducers } from 'redux'
import TicketsReducers from './tickets/reducers/TicketReducers'
import UserReducers from './users/reducers/UserReducers'

const reducers = combineReducers({
  tickets: TicketsReducers,
  users: UserReducers,
})
const store = createStore(reducers)

export default store
