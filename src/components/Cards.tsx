import React from 'react'

export type CardProps = {}

export const BaseCard = ({}: CardProps) => (
  <div className="h-[82px] w-64 rounded bg-white">Card</div>
)

export const SmallCard = ({}: CardProps) => (
  <div className="h-[58px] w-64 rounded bg-white">Small Card</div>
)

export const LargeCard = ({}: CardProps) => (
  <div className="h-[162px] w-64 rounded bg-white">Large Card</div>
)
