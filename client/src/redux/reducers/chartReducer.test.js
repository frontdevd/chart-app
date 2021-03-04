import chartReducer from './chartReducer'

describe('Chart Reducer', () => {
  test('Test SET_CHART_DATA / SET_HISTORY', () => {

    const data = [{id: 1, name: 'a', head: '10', items: [10, 50, 78, 50]}]
    const history = {username: 'user@gmail.com', id: 1, value: 782, index: 2}

    const initializeState = {data, history: []}

    const action = {
      type: 'SET_CHART_DATA/SET_HISTORY',
      payload: {data, history}
    }

    const newState = chartReducer(initializeState, action)
    expect(newState).toEqual({
      data,
      history: [],
    })
  })
})