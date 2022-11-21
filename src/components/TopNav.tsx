import React from 'react'
import Button from './Button'
import Search from './Search'
import Logo from './Logo'
import Icon from './Icon'

export type TopNavProps = {}

const TopNav = ({}: TopNavProps) => {
  return (
    <div className="flex h-12 items-center justify-between  bg-trello-on-accent px-2">
      <div className="flex items-center space-x-2">
        <Button />
        <Search />
      </div>
      <Logo />
      <ul className="flex space-x-2">
        <Icon />
        <Icon />
        <Icon />
        <Icon />
      </ul>
    </div>
  )
}

export default TopNav
