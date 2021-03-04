import React, {useEffect} from 'react'
import {useSelector} from 'react-redux'
import {Chart, History, Table, Card} from '../index'

const Main = () => {
  const datas = useSelector(({diagramm}) => diagramm.data)
  const history = useSelector(({diagramm}) => diagramm.history)
  const series = datas.map(({name, items}) => ({name, data: items}))

  return (
    <main className='wrapper'>
      <Card><Chart series={series}/></Card>
      <Card><Table charts={datas}/></Card>
      <Card><History history={history}/></Card>
    </main>
  )
}

export default Main
