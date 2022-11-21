import React, { JSXElementConstructor } from 'react'

export type ColumnProps = {
  cards: Array<JSXElementConstructor<any>>
}

const Title = () => <div className="mb-2 h-5 w-[86px] rounded bg-zinc-400" />
const PositiveAction = ({ onPositive }) => (
  <button className="h-4 w-[56px] rounded bg-green-400" onClick={onPositive} />
)
const NegativeAction = ({ onNegative }) => (
  <button className="h-4 w-[56px] rounded bg-red-400" onClick={onNegative} />
)
const ColumnActions = ({ onPositive, onDestructive }) => (
  <div className="mt-4 flex w-full items-center justify-between">
    <PositiveAction onPositive={onPositive} />
    <NegativeAction onNegative={onDestructive} />
  </div>
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
  const handleAddItem = () => window.alert('Added new random card')
  const handleDeleteItem = () => window.alert('Deleted last card')

  return (
    <div className="flex h-max flex-col rounded bg-zinc-300 px-2 pt-2 pb-4">
      <Title />
      <Cards cards={cards} />
      <ColumnActions
        onPositive={handleAddItem}
        onDestructive={handleDeleteItem}
      />
    </div>
  )
}

export default Column
