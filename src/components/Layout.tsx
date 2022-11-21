import React, { FC, PropsWithChildren } from 'react'
import TopNav from './TopNav'
import Details from './Details'

export type LayoutProps = PropsWithChildren<{}>

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex h-full flex-col bg-trello-canvas pb-8 text-white">
      <TopNav />
      <Details />
      <main className="flex-grow">{children}</main>
    </div>
  )
}

export default Layout
