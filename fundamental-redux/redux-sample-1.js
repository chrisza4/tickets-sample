const Redux = require('redux')

// Action is not effect anything
const reducer = (state, action) => state

const store = Redux.createStore(reducer, {
  hello: 'world'
})

console.log('State:', store.getState())

store.dispatch({
  type: 'MyAction',
  'title': 'Hello Redux'
})

console.log('State:', store.getState())
