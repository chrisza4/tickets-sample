import React from 'react'
import Bluebird from 'bluebird'
import { mount } from 'enzyme'
import withLoginRequest from './withLoginRequest'

describe('with login request', () => {
  const MockComponent = props => {
    if (props.errorMessage) {
      return <div className="ax-error">Error</div>
    }
    return (
      <button className="ax-btn" onClick={props.onLogin}>
        Login
      </button>
    )
  }
  it('When login success, should store data in local storage', async () => {
    const waitForSetItem = Bluebird.defer()
    const localStorageData = {}
    const mockLocalStorage = {
      setItem: (key, val) => {
        localStorageData[key] = val
        waitForSetItem.resolve()
      },
    }
    const mockLogin = async () => ({ ok: true, token: 'mytoken' })
    const Component = withLoginRequest(mockLogin, mockLocalStorage)(
      MockComponent
    )
    const wrapper = mount(<Component />)
    wrapper.find('.ax-btn').simulate('click')
    await waitForSetItem.promise
    expect(localStorageData.access_token).toEqual('mytoken')
  })

  it('When login failed, should return error message', async () => {
    const mockLogin = async () => ({ ok: false, err: 'Some error message' })
    const Component = withLoginRequest(mockLogin, null)(MockComponent)
    const wrapper = mount(<Component />)
    wrapper.find('.ax-btn').simulate('click')
    await tick()
    wrapper.update()
    expect(wrapper.find('.ax-error').length).toEqual(1)
  })
})
function tick() {
  return new Promise(resolve => {
    setTimeout(resolve, 0)
  })
}
