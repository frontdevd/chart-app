import React, {useState} from 'react'
import {TableBlock, TableContainer, TableHeader, TableContent, Notification} from '../index'

const Table = ({charts}) => {
  const [error, setError] = useState(false)

  return (
    <TableContainer>
      <TableBlock>
        <TableHeader charts={charts}/>
        <TableContent error={error} setError={setError} charts={charts}/>
      </TableBlock>
      {error && <Notification
        type='error'
        text='Please write — only numbers!'
      />}
    </TableContainer>
  )
}

export default Table