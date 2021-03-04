import React from 'react'
import {List, Notification, HistoryItem} from '../index'
import shortid from 'shortid'

const History = ({history = []}) => {
  return (
    <List>
      {history && history.map((el, index) => <HistoryItem
        key={shortid.generate()}
        el={el}
        counter={index}
        index={el.index}/>
      )}
      {!history.length && <Notification
        type='warning' text='History is empty...'/>}
    </List>
  )
}

export default History