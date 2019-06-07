import Bluebird from 'bluebird'
import React from 'react'
import ApiProvider from './ApiProvider'
import { mount } from 'enzyme'

describe('AuthorizedProvider', () => {
  it('Should render loading state when fetch is not completed, and render normal component when completed with provided data', async () => {
    const LoadingComponent = () => (
      <div className="ax-loading-state">Loading</div>
    )
    const ActualComponent = props => {
      return <div className="ax-actual-component">{props.data}</div>
    }
    const defer = Bluebird.defer()
    const fetchFunc = () => defer.promise
    const wrapper = mount(
      <ApiProvider
        renderLoading={() => <LoadingComponent />}
        fetch={fetchFunc}
        children={data => {
          return <ActualComponent data={data} />
        }}
      />
    )
    expect(wrapper.exists('.ax-loading-state')).toBeTruthy()
    expect(wrapper.exists('.ax-actual-component')).toBeFalsy()
    defer.resolve('hahahaha')
    await Bluebird.delay(2)
    wrapper.update()
    expect(wrapper.exists('.ax-loading-state')).toBeFalsy()
    expect(wrapper.exists('.ax-actual-component')).toBeTruthy()
  })
})
