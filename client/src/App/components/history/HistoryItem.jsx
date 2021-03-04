import React from 'react'
import {useDispatch} from 'react-redux'
import {ListItem, ListItemText} from '../index'
import {setChartData} from '../../../redux/reducers/chartReducer'

const HistoryItem = ({counter, el}) => {
  const dispatch = useDispatch()

  const historyItemHandler = (event, el) => {
    dispatch(setChartData(+el.value, el.id, el.index))
  }

  return (
    <ListItem button onClick={(e) => historyItemHandler(e, el)}>
      <ListItemText primary={'N: ' + counter}/>
      <ListItemText primary={'username: ' + el.username}/>
      <ListItemText primary={'value: ' + el.value}/>
    </ListItem>
  )
}

export default HistoryItem
