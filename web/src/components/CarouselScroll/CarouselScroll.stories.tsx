// import { ReactElement } from 'react'

import placeholder from 'src/placeholderData/bDClonePlaceholder'

import CarouselScroll from './CarouselScroll'

// interface Card4CarouselProps {
//   logo: string | ReactElement
//   name: string | ReactElement
//   content: string | ReactElement
// }

export const generated = () => {
  // const googleFiller: Card4CarouselProps = {
  //   logo: 'https://basic-admin.basicagency.com/uploads/google-dark.svg',
  //   name: 'Google',
  //   content:
  //     'Our embedded partnership with Google is as deep as it gets. We’re the lead creative agency for Google Store and provide strategy, design, and prototyping to other divisions. Learn more about our partnership here',
  // }
  // const cards = [
  //   googleFiller,
  //   googleFiller,
  //   googleFiller,
  //   googleFiller,
  //   {
  //     ...googleFiller,
  //     content: `${googleFiller.content} Sometime You need to add aditional lines to make sure everything still looks good`,
  //   },
  // ]

  return <CarouselScroll cards={placeholder.main.carousel} />
}

export default { title: 'Components/CarouselScroll' }
