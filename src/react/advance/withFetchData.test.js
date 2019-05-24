import React from 'react'
import LoadState from '../../loadState/LoadState'
import { mount } from 'enzyme'
import withFetchData from './withFetchData'

describe('withFetchData', () => {
  const MockComponent = props => {
    return <div className="ax-loaded">Loaded</div>
  }

  it('When data is not fetching, should render loading state', async () => {
    const fetchFunction = async () => {}
    const Component = withFetchData(
      fetchFunction,
      <div className="ax-loading" />
    )(MockComponent)
    const wrapper = mount(<Component loadState={LoadState.LOADING} />)
    expect(wrapper.exists('.ax-loading')).toBeTruthy()
  })

  it('When load state is not provided, should render warning to dev', async () => {
    const fetchFunction = async () => {}
    const Component = withFetchData(fetchFunction, null)(MockComponent)
    const wrapper = mount(<Component loadState={LoadState.LOADING} />)
    expect(wrapper.exists('.ax-danger')).toBeTruthy()
  })

  it('When load state is loaded, should render base component', async () => {
    const fetchFunction = async () => {}
    const Component = withFetchData(
      fetchFunction,
      <div className="ax-loading" />
    )(MockComponent)
    const wrapper = mount(<Component loadState={LoadState.LOADED} />)
    expect(wrapper.find('.ax-loaded').exists()).toBeTruthy()
  })

  it('Trigger data loading on component mount if load state is NONE', async () => {
    let called = false
    const fetchFunction = () => {
      called = true
    }
    const Component = withFetchData(
      fetchFunction,
      <div className="ax-loading" />
    )(MockComponent)
    mount(<Component loadState={LoadState.NONE} />)
    expect(called).toBeTruthy()
  })

  it('not trigger data loading on component mount if load state is Loaded', async () => {
    let called = false
    const fetchFunction = () => {
      called = true
    }
    const Component = withFetchData(
      fetchFunction,
      <div className="ax-loading" />
    )(MockComponent)
    mount(<Component loadState={LoadState.LOADED} />)
    expect(called).toBeFalsy()
  })
})
