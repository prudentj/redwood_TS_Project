import { ReactElement } from 'react'

interface Card4CarouselProps {
  logo: string | ReactElement
  name: string | ReactElement
  content: string | ReactElement
}

const Card4Carousel = ({ logo, name, content }: Card4CarouselProps) => {
  return (
    <div className="py-4 pr-11 pt-20 min-w-max lg:pr-8 lg">
      {/* Logo container */}
      <figure className="p-t max-h-10 ">
        {typeof logo === 'string' ? (
          <img src={logo} alt={name + ' logo'} className="max-h-10" />
        ) : (
          logo
        )}
      </figure>
      <div className="border-t-2  border-black mt-4 mb-10 w-6 ">{''}</div>
      <h5 className="uppercase font-semibold text-lg mb-4 lg:text-xl">
        {name}
      </h5>
      <p className="text-sm w-80 lg:w-64 lg:text-base">{content}</p>
    </div>
  )
}

export default Card4Carousel
