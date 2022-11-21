import React from 'react'

export type DetailsProps = {}

const BaseDetail = ({ content = null }) => (
  <div className="h-4 w-[70px] rounded bg-white" />
)
const LargeDetail = ({ content = null }) => (
  <div className="h-4 w-[90px] rounded bg-white" />
)
const SmallDetail = ({ content = null }) => (
  <div className="h-4 w-4 rounded bg-white" />
)
const Details = ({}: DetailsProps) => {
  return (
    <div className="mt-2 mb-3 flex w-full items-center px-2">
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-2">
          <BaseDetail />
          <LargeDetail />
          <SmallDetail />
        </div>
        <div className="flex items-center space-x-2">
          <SmallDetail />
          <BaseDetail />
        </div>
      </div>
    </div>
  )
}

export default Details
