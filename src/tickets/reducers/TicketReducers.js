import _ from 'lodash'
import * as TicketActionTypes from '../actions/TicketActionTypes'
import { buildTicketIndexes } from './TicketIndexes'
import LoadState from '../../loadState/LoadState'
import { keyBy } from '../../utils/keyBy'

export const initialState = {
  loadState: LoadState.NONE,
  tickets: {},
  showResolved: false,
  selectedTicketIds: [],
  index: {
    resolved: [],
  },
}

export default function(state = initialState, action) {
  switch (action.type) {
    case TicketActionTypes.TICKET_SELECTED:
      if (state.selectedTicketIds.includes(action.id)) {
        return {
          ...state,
          selectedTicketIds: state.selectedTicketIds.filter(
            id => id !== action.id
          ),
        }
      } else {
        return {
          ...state,
          selectedTicketIds: [...state.selectedTicketIds, action.id],
        }
      }
    case TicketActionTypes.TICKETS_FETCHED:
      const ticketIndex = buildTicketIndexes(state.index, action.data)
      return {
        ...state,
        tickets: {
          ...state.tickets,
          ...keyBy(action.data, t => t.id),
        },
        loadState: LoadState.LOADED,
        index: ticketIndex,
      }
    case TicketActionTypes.TICKETS_FETCHING:
      return {
        ...state,
        loadState: LoadState.LOADING,
      }
    case TicketActionTypes.TICKETS_FETCH_ERROR:
      return {
        ...state,
        loadState: LoadState.ERROR,
      }
    case TicketActionTypes.TICKETS_TOGGLE_RESOLVED:
      return {
        ...state,
        showResolved: !state.showResolved,
      }
    case TicketActionTypes.TICKET_DELETED: {
      const restTickets = _.omitBy(state.tickets, (val, key) => {
        return action.ids.some(id => String(id) === String(key))
      })
      return {
        ...state,
        tickets: restTickets,
      }
    }
    default:
      return state
  }
}
