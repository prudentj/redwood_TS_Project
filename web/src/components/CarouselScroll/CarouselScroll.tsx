import { ReactElement, useState, useEffect, useRef, RefObject } from 'react'

import Card4Carousel from 'src/components/Card4Carousel/Card4Carousel'

//Took this code from https://github.com/g-delmo/use-draggable-scroll/blob/master/src/index.tsx
function useDraggableScroll(
  ref: RefObject<HTMLElement>,
  options: {
    direction?: 'vertical' | 'horizontal' | 'both'
  } = { direction: 'both' }
) {
  if (process.env.NODE_ENV === 'development') {
    if (typeof ref !== 'object' || typeof ref.current === 'undefined') {
      console.error('`useDraggableScroll` expects a single ref argument.')
    }
  }

  const { direction } = options

  // The initial position (scroll progress and mouse location) when the mouse is pressed down on the element
  let initialPosition = { scrollTop: 0, scrollLeft: 0, mouseX: 0, mouseY: 0 }

  const mouseMoveHandler = (event: { clientX: number; clientY: number }) => {
    if (ref.current) {
      // Calculate differences to see how far the user has moved
      const dx = event.clientX - initialPosition.mouseX
      const dy = event.clientY - initialPosition.mouseY

      // Scroll the element according to those differences
      if (direction !== 'horizontal')
        ref.current.scrollTop = initialPosition.scrollTop - dy
      if (direction !== 'vertical')
        ref.current.scrollLeft = initialPosition.scrollLeft - dx
    }
  }

  const mouseUpHandler = () => {
    // Return to cursor: grab after the user is no longer pressing
    // if (ref.current) ref.current.style.cursor = 'grab'

    // Remove the event listeners since it is not necessary to track the mouse position anymore
    document.removeEventListener('mousemove', mouseMoveHandler)
    document.removeEventListener('mouseup', mouseUpHandler)
  }

  const onMouseDown = (event: { clientX: number; clientY: number }) => {
    if (ref.current) {
      // Save the position at the moment the user presses down
      initialPosition = {
        scrollLeft: ref.current.scrollLeft,
        scrollTop: ref.current.scrollTop,
        mouseX: event.clientX,
        mouseY: event.clientY,
      }

      // Show a cursor: grabbing style and set user-select: none to avoid highlighting text while dragging
      //ref.current.style.cursor = 'grabbing'
      //ref.current.style.userSelect = 'none'

      // Add the event listeners that will track the mouse position for the rest of the interaction
      document.addEventListener('mousemove', mouseMoveHandler)
      document.addEventListener('mouseup', mouseUpHandler)
    }
  }

  return { onMouseDown }
}
interface Card4CarouselProps {
  logo: string | ReactElement
  name: string | ReactElement
  content: string | ReactElement
}
interface CarouselScrollProps {
  cards: Card4CarouselProps[]
}
const useMousePosition = () => {
  const [position, setPosition] = useState({
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
  })

  const updatePosition = (event) => {
    const { pageX, pageY, clientX, clientY } = event

    setPosition({
      clientX,
      clientY,
      pageX,
      pageY,
    })
  }

  useEffect(() => {
    document.addEventListener('mousemove', updatePosition, false)
    document.addEventListener('mouseenter', updatePosition, false)

    return () => {
      document.removeEventListener('mousemove', updatePosition)
      document.removeEventListener('mouseenter', updatePosition)
    }
  }, [])

  return position
}

// const useMouseMoveHandler = (e) => {
//   // How far the mouse has been moved
//   const dx = e.clientX - pos.x
//   const dy = e.clientY - pos.y

//   // Scroll the element
//   ele.scrollTop = pos.top - dy
//   ele.scrollLeft = pos.left - dx
// }
// const useMounseDragScroll = (e) => {
//   let pos = { top: 0, left: 0, x: 0, y: 0 }

// }

// Moved the cursor to Index CSS. Need to refactor to tailwind
const CarouselScroll = ({ cards }: CarouselScrollProps) => {
  const { pageX, pageY } = useMousePosition()
  const [isVisible, setIsVisible] = useState(false)
  const [isScrolling, setIsScrolling] = useState(false)

  const arrowRight = `w-0 h-0 border border-solid border-b-4 border-b-transparent border-l-4 border-t-4 border-t-transparent border-r-transparent border-l-pink-200`
  const arrowLeft = `w-0 h-0 border border-solid border-b-4 border-b-transparent border-r-4  border-t-4 border-t-transparent border-l-transparent border-r-pink-200`

  const cursorClass =
    'absolute z-10 w-32 h-32 bg-pink-200 rounded-full pointer-events-none'
  const cursorDragClass = `absolute z-10 w-14 h-14 rounded-full flex justify-center align-center bg-pink-200 `
  const ref = useRef(null)
  const { onMouseDown } = useDraggableScroll(ref, { direction: 'horizontal' })

  return (
    <div
      className="select-none cursor-none bg-pink"
      onMouseOver={() => {
        setIsVisible(true)
      }}
      onFocus={() => {}}
      onBlur={() => {}}
      onMouseOut={() => {
        setIsVisible(false)
      }}
      onMouseEnter={() => {
        setIsVisible(true)
      }}
      onMouseLeave={() => {
        setIsVisible(false)
        setIsScrolling(false)
      }}
      onMouseDownCapture={(e) => {
        setIsScrolling(true)
        onMouseDown(e)
      }}
      onMouseUpCapture={() => {
        setIsScrolling(false)
      }}
    >
      <h5 className="w-20 pl-4 text-2xl font-bold uppercase lg:pl-10 lg:w-96 xl:text ">
        Featured Engagements
      </h5>
      <div
        className={`transition-transform delay-500 ${
          !isVisible ? `hidden` : isScrolling ? cursorDragClass : cursorClass
        }`}
        id="circularcursor"
        style={{
          left: pageX,
          top: pageY,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div
          className={
            isScrolling ? `${arrowLeft} relative right-10 top-5 ` : `hidden`
          }
        />
        <p
          className={`transition-opacity ease-in-out duration-300 ${
            isScrolling
              ? `hidden`
              : `relative text-sm font-bold uppercase top-14 left-11`
          }`}
        >
          Drag
        </p>
        <div
          className={
            isScrolling ? `${arrowRight} relative left-10 top-5` : `hidden`
          }
        />
      </div>

      <div
        className="overflow-x-scroll scrollbar"
        ref={ref}
        // ref={scrollRef}
        // onClick={(e) => {
        //   console.log(e)
        //   ref.current.scrollLeft = ref.current.scrollLeft + 1
        // }}
      >
        <div className="flex flex-row pl-4 flex-nowrap lg:pl-10">
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
