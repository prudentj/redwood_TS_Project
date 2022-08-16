import { MetaTags } from '@redwoodjs/web'

import ButtonRound from 'src/components/ButtonRound/ButtonRound'
import CardWithButton from 'src/components/CardWithButton/CardWithButton'
import CarouselScroll from 'src/components/CarouselScroll/CarouselScroll'
import PictureCard from 'src/components/PictureCard/PictureCard'
import VideoOverlay from 'src/components/VideoOverlay/VideoOverlay'
import placeHolder from 'src/placeholderData/bDClonePlaceholder'

interface CardProps {
  image: string
  altText: string
  title: string
  category: string
  date: string
}
const LandingPage = () => {
  const news = placeHolder.main.featuredNews
  const newsMapFunc = (card: CardProps, i) => {
    return (
      <div className="py-5 border-t-2 border-solid md:pb-10 lg:pb-14 xl:pb-20">
        <PictureCard
          key={`picCard-${i}-${card.title}`}
          image={card.image}
          altText={card.altText}
          title={card.title}
          category={card.category}
          date={card.date}
        />
      </div>
    )
  }
  return (
    <>
      <MetaTags title="Landing" description="Landing page" />
      <VideoOverlay />
      <section className="mx-10 mb-28">
        <div className="grid grid-cols-2">
          {/* <CardWithButton
            title={
              'BASIC/DEPT® is a global branding and digital design agency building products, services, and eCommerce experiences that turn cultural values into company value.'
            }
            buttonLabel="See the work"
          /> */}
          <p className="pt-2 text-4xl">LOGO</p>
        </div>
        <p>Three colums go here</p>
      </section>
      <hr />
      <CarouselScroll cards={placeHolder.main.carousel} />
      <hr></hr>
      <section className="mx-10 mt-12">
        {/* "grid grid-cols-2" */}
        <div className="flex flex-col-reverse md:grid md:grid-cols-2">
          <CardWithButton
            title="BASIC/DEPT® helps brands ● Connect w/ Culture"
            subtitle={
              <span>
                Adweek <strong>(Agency Spotlight)</strong>
              </span>
            }
            buttonLabel="About Us"
          />
          <div className="flex justify-center w-full h-full mb-10 bg-slate-500">
            <div className="flex flex-col justify-center">
              <h2 className="text-xl font-bold capitalize ">
                {'Video Component Goes here'}
              </h2>
            </div>
          </div>
          {/* <div className="flex justify-center w-full h-full bg-slate-500">
            <div className="flex flex-col justify-center">
              <h2 className="text-xl font-bold capitalize ">
                {'Video Component Goes here'}
              </h2>
            </div>
          </div> */}
        </div>
        <div className="flex flex-row justify-between mt-40 mb-12">
          <h2 className="text-2xl font-bold uppercase ">
            Featured <br /> News
          </h2>
          <div>
            <ButtonRound label={'View All'} />
          </div>
        </div>
        {news.map(newsMapFunc)}
      </section>
    </>
  )
}

export default LandingPage
