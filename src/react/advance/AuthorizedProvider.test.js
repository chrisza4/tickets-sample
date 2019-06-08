import React from 'react'
import { AuthorizedProvider } from './AuthorizedProvider'
import { shallow } from 'enzyme'

describe('AuthorizedProvider', () => {
  it('When access token is null, provide authorized as true', async () => {
    const wrapper = shallow(
      <AuthorizedProvider
        token={'token'}
        render={authorized =>
          authorized ? (
            <div className="ax-auth" />
          ) : (
            <div className="ax-not-auth" />
          )
        }
      />
    )
    expect(wrapper.exists('.ax-auth')).toBeTruthy()
  })

  it('When access token is null, provide authorized as false', async () => {
    const wrapper = shallow(
      <AuthorizedProvider
        token={null}
        render={authorized =>
          authorized ? (
            <div className="ax-auth" />
          ) : (
            <div className="ax-not-auth" />
          )
        }
      />
    )
    expect(wrapper.exists('.ax-not-auth')).toBeTruthy()
  })
})
