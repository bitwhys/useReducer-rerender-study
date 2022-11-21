import React, { JSXElementConstructor } from 'react'

export type ColumnProps = {
  cards: Array<JSXElementConstructor<any>>
}

const Title = () => <div className="mb-2 h-5 w-[86px] rounded bg-zinc-400" />
const ColumnAction = () => (
  <div className="mt-4 h-4 w-[86px] rounded bg-white" />
)
const Cards = ({ cards }: ColumnProps) => {
  return (
    <ol className="flex flex-col space-y-2">
      {cards.map((Card, index) => (
        <Card key={index} />
      ))}
    </ol>
  )
}

const Column = ({ cards }: ColumnProps) => {
  return (
    <div className="flex h-max flex-col rounded bg-zinc-300 px-2 pt-2 pb-4">
      <Title />
      <Cards cards={cards} />
      <ColumnAction />
    </div>
  )
}

export default Column
