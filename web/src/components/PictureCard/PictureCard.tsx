interface CardProps {
  picture: string
  altText: string
  title: string
  category: string
  date: string
}

const PictureCard = ({
  picture,
  altText,
  title,
  category,
  date,
}: CardProps) => {
  return (
    //md:justify-between
    //py-4
    <div className="relative  md:flex md:flex-row bg-transparent">
      <img
        src={picture}
        alt={altText}
        className="md:w-1/3 max-w bg-clip-content"
      />
      <div className="md:relative md:ml-4">
        <h5 className="uppercase text-2xl font-semibold py-4 pb-14 md:mr-40 xl:text-4xl ">
          {title}
        </h5>
        <div className="flex flex-row absolute bottom-0 left-0">
          <span className="uppercase text-xs font-bold pr-2">{category}</span>
          <span className="text-xs xl:text-sm">{date}</span>
        </div>
        <span className="font-bold text-2xl absolute bottom-0 right-0 md:top-0 md:text-2xl lg:text-4xl">
          🡪
        </span>
      </div>

      {/* <h2 className="uppercase text-xl font-bold pt-4">{title}</h2>
      <div className=" flex flex-row pt-10 justify-between md:w-2/3 md:pt-0">
        <div className="flex flex-row">
          <p className="uppercase text-xs font-bold pr-2">{category}</p>
          <p className="text-xs">{date}</p>
        </div>
        <p className="font-bold text-lg">🡪</p>
      </div> */}
    </div>
  )
}
export default PictureCard
