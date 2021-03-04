import {TextField} from '@material-ui/core'
import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {setChartData, setHistory} from '../../../redux/reducers/chartReducer'
import {TableBody, TableCell, TableRow} from '../index'

const isNumber = n => !isNaN(n)

const TableContent = ({charts, setError}) => {
  const dispatch = useDispatch()
  const username = useSelector(({user}) => user.username)
  const [counter, setCounter] = useState(0)

  const changeHandler = (e, id, index) => {
    const chart = e.target.value
    if (!isNumber(chart)) {
      return setError(true)
    }
    dispatch(setChartData(+chart, id, index))
    dispatch(setHistory(+chart, id, index, username, counter))
    setError(false)
  }

  return (
    <TableBody>
      {charts.map(({name, items, id}) => <TableRow key={id}>
        <TableCell>{name}</TableCell>
        {items.map((item, index) =>
          <TableCell key={item + '_' + index}>
            <TextField
              autoFocus
              onChange={event => changeHandler(event, id, index)}
              value={item}/>
          </TableCell>
        )}
      </TableRow>)}
    </TableBody>
  )
}

export default TableContent