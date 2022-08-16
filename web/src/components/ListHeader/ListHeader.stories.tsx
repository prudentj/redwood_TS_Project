import { ReactElement } from 'react'

import ListHeader from './ListHeader'

const testContent: string | ReactElement = 'Social'
export const generated = () => {
  return <ListHeader content={testContent} />
}

export default { title: 'Components/ListHeader' }
