import { createStore, combineReducers } from 'redux'
import TicketsReducers from './tickets/reducers/TicketReducer'

const reducers = combineReducers({ tickets: TicketsReducers })
const store = createStore(reducers)

export default store
