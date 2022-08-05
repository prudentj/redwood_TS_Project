import { ReactElement } from 'react'

import Card4Carousel from 'src/components/Card4Carousel/Card4Carousel'
interface Card4CarouselProps {
  logo: string | ReactElement
  name: string | ReactElement
  content: string | ReactElement
}
interface CarouselScrollProps {
  cards: Card4CarouselProps[]
}
const CarouselScroll = ({ cards }: CarouselScrollProps) => {
  return (
    <div>
      <h5 className="font-bold uppercase text-2xl w-20 pl-4 lg:pl-10 lg:w-96 xl:text">
        Featured Engagements
      </h5>
      {/* <p>{JSON.stringify(cards)}</p> */}
      {/* //className="flex flex-row" */}
      <div className=" overflow-x-scroll">
        <div className="flex flex-row flex-nowrap pl-4 lg:pl-10">
          {cards.map((el, i) => {
            return (
              <Card4Carousel
                key={`card-${i}`}
                logo={el.logo}
                name={el.name}
                content={el.content}
              />
            )
          })}
        </div>
      </div>
      {/* {cards.map((element) => {
        return (
          <p>
            {JSON.stringify(element)}
            <span>Test2</span>
          </p>
        )
      })} */}
    </div>
  )
  // cards.foreach((card)=>{
  //   return test
  // }
  // <div>
  //   <h2>{'CarouselScroll'}</h2>
  //   <p>
  //     {'Find me in ./web/src/components/CarouselScroll/CarouselScroll.tsx'}
  //   </p>
  // </div>
}

export default CarouselScroll
