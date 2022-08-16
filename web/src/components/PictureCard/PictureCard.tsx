interface CardProps {
  image: string
  altText: string
  title: string
  category: string
  date: string
}

const PictureCard = ({ image, altText, title, category, date }: CardProps) => {
  return (
    //md:justify-between
    //py-4
    <div className="relative bg-transparent md:flex md:flex-row md:flex-grow">
      <img
        src={image}
        alt={altText}
        className="md:w-1/3 max-w bg-clip-content"
      />
      <div className="md:relative md:ml-4 md:w-2/3">
        <h5 className="py-4 text-2xl font-semibold uppercase pb-14 xl:text-4xl md:flex md:flex-grow md:mr-40">
          {title}
        </h5>
        <div className="absolute bottom-0 left-0 flex flex-row">
          <span className="pr-2 text-xs font-bold uppercase">{category}</span>
          <span className="text-xs xl:text-sm">{date}</span>
        </div>
        <span className="absolute bottom-0 right-0 text-2xl font-bold md:top-0 md:text-2xl lg:text-4xl">
          🡪
        </span>
      </div>

      {/* <h2 className="pt-4 text-xl font-bold uppercase">{title}</h2>
      <div className="flex flex-row justify-between pt-10 md:w-2/3 md:pt-0">
        <div className="flex flex-row">
          <p className="pr-2 text-xs font-bold uppercase">{category}</p>
          <p className="text-xs">{date}</p>
        </div>
        <p className="text-lg font-bold">🡪</p>
      </div> */}
    </div>
  )
}
export default PictureCard
