const Redux = require('redux')

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD': {
      return [ ...state, action.data ]
    }
    case 'REMOVE': {
      return state.filter(s => s.id !== action.data.id)
    }
    case 'EDIT': {
      return state.map(s =>
        s.id === action.data.id ? action.data : s
      )
    }
    default: return state
  }
}

const store = Redux.createStore(reducer, [ ])

store.dispatch({
  type: 'ADD',
  data: {
    id: 'data1',
    title: 'Precious data'
  }
})

console.log('******* After Adding Precious data *********')
console.log('State1:', store.getState())

store.dispatch({
  type: 'ADD',
  data: {
    id: 'data2',
    title: 'Hello world. You are nice'
  }
})

console.log('******* After Adding Hello world *********')
console.log('State2:', store.getState())

store.dispatch({
  type: 'EDIT',
  data: {
    id: 'data1',
    title: 'Hello world. I will not be mean'
  }
})

console.log('******* After Edit *********')
console.log('State3:', store.getState())

store.dispatch({
  type: 'REMOVE',
  data: {
    id: 'data1'
  }
})

console.log('******* After Delete data1 *********')
console.log('State4:', store.getState())
