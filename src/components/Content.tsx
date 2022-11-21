import React, { JSXElementConstructor } from 'react'
import Column, { ColumnProps } from './Column'
import { board } from '../App'
import { getColumns } from '../lib/getColumns'

export type ContentProps = {
  content: typeof board
}

const Scrollbar = <div>scrollbar</div>

export type BoardProps = {
  columns: any
}
const Board = ({ columns }: BoardProps) => {
  return (
    <div className="grid grid-flow-col gap-x-2">
      {columns.map((cards, index) => (
        <Column cards={cards} key={index} />
      ))}
    </div>
  )
}

const Content = ({ content }: ContentProps) => {
  // TODO: convert content encoding into board data
  const columns = getColumns(content)
  return (
    <div className="h-full overflow-x-scroll px-2">
      <Board columns={columns} />
    </div>
  )
}

export default Content
