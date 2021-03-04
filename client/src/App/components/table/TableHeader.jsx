import React from 'react'
import {TableRow, TableHead, TableCell} from '../index'

const TableHeader = ({charts}) => {
  return (
    <TableHead>
      <TableRow>
        <TableCell align='right'></TableCell>
        {charts.map(({head, id}) => <TableCell key={id}>{head}</TableCell>)}
      </TableRow>
    </TableHead>
  )
}

export default TableHeader