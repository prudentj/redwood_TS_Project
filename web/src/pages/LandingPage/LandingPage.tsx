import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import ButtonRound from 'src/components/ButtonRound/ButtonRound'
import CardWithButton from 'src/components/CardWithButton/CardWithButton'
import CarouselScroll from 'src/components/CarouselScroll/CarouselScroll'
import VideoOverlay from 'src/components/VideoOverlay/VideoOverlay'

const fakeData = {
  featuredNews: [
    {
      title: 'I must not fear',
      image: 'https://picsum.photos/id/237/870/500',
      altText: 'random picture',
      date: '1776.07.04',
      category: 'Animal',
    },
    {
      title: 'Fear is the Mindkiller',
      image: 'https://picsum.photos/id/237/870/500',
      altText: 'random picture',
      date: '1776.07.04',
      category: 'Animal',
    },
    {
      title: 'Fear is the little-death that brings total obliteration.',
      image: 'https://picsum.photos/id/237/870/500',
      altText: 'random picture',
      date: '1776.07.04',
      category: 'Animal',
    },
    {
      title: 'I will face my fear.',
      image: 'https://picsum.photos/id/237/870/500',
      altText: 'random picture',
      date: '1776.07.04',
      category: 'Animal',
    },
    {
      title: 'I will permit it to pass over me and through me.',
      image: 'https://picsum.photos/id/237/870/500',
      altText: 'random picture',
      date: '1776.07.04',
      category: 'Animal',
    },
    {
      title:
        'And when it has gone past, I will turn the inner eye to see its path.',
      image: 'https://picsum.photos/id/237/870/500',
      altText: 'random picture',
      date: '1776.07.04',
      category: 'Animal',
    },
    {
      title:
        'Where the fear has gone there will be nothing. Only I will remain.',
      image: 'https://picsum.photos/id/237/870/500',
      altText: 'random picture',
      date: '1776.07.04',
      category: 'Human',
    },
  ],
}

const LandingPage = () => {
  return (
    <>
      <MetaTags title="Landing" description="Landing page" />
      <VideoOverlay />
      <section className="mx-10 mb-28">
        <div className="grid grid-cols-2">
          <CardWithButton
            title={
              'BASIC/DEPT® is a global branding and digital design agency building products, services, and eCommerce experiences that turn cultural values into company value.'
            }
            buttonLabel="See the work"
          />
          <p className="pt-2 text-4xl">LOGO</p>
        </div>
        <p>Three colums go here</p>
      </section>
      <hr />
      <p>Header goes here</p>
      <CarouselScroll />
      <hr></hr>
      <section className="mt-12 mx-10">
        {/* "grid grid-cols-2" */}
        <div className="grid grid-cols-2">
          <div className="h-full w-full bg-slate-500 flex justify-center">
            <div className="flex flex-col justify-center">
              <h2 className="font-bold capitalize text-xl ">
                {'Video Component Goes here'}
              </h2>
            </div>
          </div>
          <CardWithButton
            title="BASIC/DEPT® helps brands ● Connect w/ Culture"
            subtitle={
              <span>
                Adweek <strong>(Agency Spotlight)</strong>
              </span>
            }
            buttonLabel="About Us"
          />
          <div className="h-full w-full bg-slate-500 flex justify-center">
            <div className="flex flex-col justify-center">
              <h2 className="font-bold capitalize text-xl ">
                {'Video Component Goes here'}
              </h2>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <h2 className="uppercase ">
            Featured <br /> News
          </h2>
          <ButtonRound label={'View All'} />
        </div>
        <p>Horizontal Rule goes here</p>
      </section>
    </>
  )
}

export default LandingPage
