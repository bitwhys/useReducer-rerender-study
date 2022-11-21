import React from 'react'

export type ButtonProps = {
  text?: string
}

const Button = ({ text }: ButtonProps) => {
  return <div className="h-8 w-32 rounded bg-white/40"></div>
}

export default Button
