import { ReactElement } from 'react'

export interface ListHeaderProps {
  content: string | ReactElement
}

const ListHeader = ({ content }: ListHeaderProps) => {
  return (
    <h5 className="font-bold uppercase lg:text-xl">
      {' '}
      <span className="text-xl lg:text-2xl">● </span>
      <span>{content}</span>
    </h5>
  )
}

export default ListHeader
