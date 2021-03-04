const SET_CHART_DATA = 'SET_CHART_DATA'
const SET_HISTORY = 'SET_HISTORY'
let counter = 0

const initialState = {
  data: [
    {id: 1, name: 'a', head: '10', items: [10, 50, 78, 50]},
    {id: 2, name: 'b', head: '20', items: [50, 25, 45, 65]},
    {id: 3, name: 'c', head: '30', items: [50, 25, 45, 65]},
    {id: 4, name: 'd', head: '40', items: [50, 25, 45, 65]},
  ],
  history: [],
}

export default function chartReducer(state = initialState, {payload, type}) {
  switch (type) {
    case SET_CHART_DATA:
      const newChart = newChartData(state, payload)
      return {
        ...state,
        data: newChart.data
      }
    case SET_HISTORY: {
      const newHistory = addedHistory(state, payload)
      return {
        ...state,
        history: newHistory
      }
    }
    default:
      return state
  }
}

// Action Creators
export const setChartData = (value, id, index) => ({type: SET_CHART_DATA, payload: {value, id, index}})
export const setHistory = (value, id, index, username) => ({type: SET_HISTORY, payload: {value, id, index, username}})


function newChartData(state, payload) {
  const chart = JSON.parse(JSON.stringify(state))
  chart.data
    .filter(({id}) => id === payload.id)
    .map(({items}) => items.filter((_, idx) => {
        if (idx === payload.index) {
          items[idx] = payload.value
        }
        return items
      })
    )
  return chart
}

function addedHistory(state, {value, username, id, index}) {
  if (value == "") {
    counter++
  } else {
    counter = 0
  }
  const {history} = JSON.parse(JSON.stringify(state))
  if (counter < 2) {
    if (history.length === 10) {
      history.shift()
    }
    const newHistory = {username, id, value, index}
    history.push(newHistory)
    return history
  }
  return history
}