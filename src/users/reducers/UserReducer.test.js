import * as UserActionTypes from '../actions/UserActionTypes'
import UserReducers, { initialState } from './UserReducers'
import LoadState from '../../loadState/LoadState'
import { mockUser } from '../UserMocks'

describe('UserReducer', () => {
  it('Given received USERS_FETCHED, merge data into state and set loading state to loaded', () => {
    const action = {
      type: UserActionTypes.USERS_FETCHED,
      data: [mockUser({ id: 'user1' }), mockUser({ id: 'user2' })],
    }
    const newState = UserReducers(initialState, action)
    expect(newState.users).toEqual(action.data)
    expect(newState.loadState).toEqual(LoadState.LOADED)
  })

  it('Given received USER_FETCHING, set load state to loading', () => {
    const action = {
      type: UserActionTypes.USERS_FETCHING,
    }
    const newState = UserReducers(initialState, action)
    expect(newState.loadState).toEqual(LoadState.LOADING)
  })

  it('Given recevied USERS_FETCH_ERROR, set load state to error', () => {
    const action = {
      type: UserActionTypes.USERS_FETCH_ERROR,
    }
    const newState = UserReducers(initialState, action)
    expect(newState.loadState).toEqual(LoadState.ERROR)
  })
})
