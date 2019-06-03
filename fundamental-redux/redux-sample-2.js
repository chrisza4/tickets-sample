const Redux = require('redux')

// Action will be append to state
const reducer = (state, action) => [...state, action]

const store = Redux.createStore(reducer, [])

console.log('State1:', store.getState())

store.dispatch({
  type: 'SOMEACTION',
  data: 'world',
})

console.log('State2:', store.getState())

store.dispatch({
  type: 'ANOTHER_ACTION',
  data: 'world',
})

console.log('State3:', store.getState())
