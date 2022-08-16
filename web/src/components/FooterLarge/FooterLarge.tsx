import { ReactElement } from 'react'

// import { Form } from '@redwoodjs/forms'

import FooterList from 'src/components/FooterList/FooterList'
import ListHeader from 'src/components/ListHeader/ListHeader'

import SubscribeForm from '../SubscribeForm/SubscribeForm'
// import {}

interface ListLink {
  name: string | ReactElement
  url: string
}
interface FooterListProps {
  name: string | ReactElement
  links: ListLink[]
}
export interface FooterLargeProps {
  logo: string | ReactElement
  callToAction: string | ReactElement
  email: string | ReactElement
  lists: FooterListProps[]
  subscribeHeading: string | ReactElement
  nameLegal: string
  motto: string
  termsUrl: string
  privacyUrl: string
}

const FooterLarge: React.FC<FooterLargeProps> = ({
  logo,
  callToAction,
  email,
  lists,
  subscribeHeading,
  nameLegal,
  motto,
  termsUrl,
  privacyUrl,
}) => {
  return (
    <>
      <div className="grid-rows-2 px-8 sm:px-10 lg:flex lg:flex-wrap lg:px-20">
        <h2 className="text-xl font-bold pt-14 lg:w-1/2 lg:mb-24 lg:text-2xl">
          {logo}
        </h2>
        <p className="pr-40 text-xl font-bold leading-6 pt-14 lg:w-1/2 lg:mb-24 lg:text-3xl">
          {callToAction + ' '}
          <span className="underline ">{email}</span>
        </p>
        <div className="pt-14 lg:w-1/2 lg:mb-24 lg:pr-32 ">
          <ListHeader content={subscribeHeading} />

          <SubscribeForm
          // onSubmit={(e) => {
          //   console.log(e)
          // }}
          // formMethods={() => {}}
          // error={() => {}}
          />
        </div>
        <div className="pt-8 lg:pt-14 lg:w-1/2 lg:flex lg:flex-row lg:justify-between lg:mb-24 ">
          {lists.map((e, i) => {
            return (
              <FooterList
                key={`${i}-${e.name}-footerList`}
                name={e.name}
                links={e.links}
              />
            )
          })}
        </div>
      </div>
      <div className="grid py-6 text-xs uppercase bg-gray-700 flex-flow justify-items-center lg:flex lg:flex-flow lg:justify-around">
        <span className="">{nameLegal}</span>
        <span className="pt-1">{motto}</span>
        <span className="pt-1">
          <a href={termsUrl}>Terms</a>, <a href={privacyUrl}>Privacy Policy</a>
        </span>
      </div>
    </>
  )
}

export default FooterLarge
