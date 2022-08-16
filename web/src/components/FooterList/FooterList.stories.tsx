import { ReactElement } from 'react'

import FooterList from './FooterList'
interface ListLink {
  name: string | ReactElement
  url: string
}
interface FooterListProps {
  name: string | ReactElement
  links: ListLink[]
}
const placeHolder: FooterListProps = {
  name: 'Social',
  links: [
    {
      name: 'Instagram',
      url: 'www.instagram.com',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/',
    },
    {
      name: 'Facebook',
      url: 'www.facebook.com',
    },
  ],
}
export const generated = () => {
  return <FooterList name={placeHolder.name} links={placeHolder.links} />
}

export default { title: 'Components/FooterList' }
