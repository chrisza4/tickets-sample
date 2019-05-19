import React from 'react'
import AuthorizedProvider from './AuthorizedProvider'
import { shallow } from 'enzyme'

describe('AuthorizedProvider', () => {
  it('When access token is in local storage, provide authorized as true', async () => {
    const mockLocalStorage = {
      getItem: () => 'token',
    }
    const wrapper = shallow(
      <AuthorizedProvider
        localStorage={mockLocalStorage}
        render={authorized =>
          authorized ? (
            <div className="ax-auth" />
          ) : (
            <div className="ax-unauth" />
          )
        }
      />
    )
    expect(wrapper.exists('.ax-auth')).toBeTruthy()
  })

  it('When access token is not local storage, provide authorized as false', async () => {
    const mockLocalStorage = {
      getItem: () => null,
    }
    const wrapper = shallow(
      <AuthorizedProvider
        localStorage={mockLocalStorage}
        render={authorized =>
          authorized ? (
            <div className="ax-auth" />
          ) : (
            <div className="ax-unauth" />
          )
        }
      />
    )
    expect(wrapper.exists('.ax-unauth')).toBeTruthy()
  })
})
