import { ReactElement } from 'react'

import ListHeader from 'src/components/ListHeader/ListHeader'
//import FooterList from 'src/components/FooterList/FooterList'
interface ListLink {
  name: string | ReactElement
  url: string
}
interface FooterListProps {
  name: string | ReactElement
  links: ListLink[]
}
const FooterList = ({ name, links }: FooterListProps) => {
  return (
    <div>
      <ListHeader content={name} />
      <div className="flex flex-col my-4 text-sm font-semibold lg:text-base justify-content">
        {links.map((e, i) => {
          return (
            <a key={`${i} ${e.name}`} href={e.url}>
              {e.name}
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default FooterList
