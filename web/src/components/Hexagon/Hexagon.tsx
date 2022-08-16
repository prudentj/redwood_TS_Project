const Hexagon = () => {
  return (
    <div>
      <h2>{'Hexagon'}</h2>
      <p>{'Find me in ./web/src/components/Hexagon/Hexagon.tsx'}</p>
      <svg
        width="400px"
        height="400px"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <polygon
          // style="fill:none;stroke:#000000;stroke-width:2.5px"
          points="148,183.138438763306 52,183.138438763306 4,100 52,16.8615612366939 148,16.8615612366939 196,100"
        />
      </svg>
      <svg height="200" width="200">
        {/* <polygon points="100,10 40,198 190,78 10,78 160,198" /> */}
        {/* <polygon points="100,10 40,198 190,78" /> */}
      </svg>
      {/* <ul className="hex-grid__list">
        <li className="hex-grid__item">
          <div className="hex-grid__content">1</div>
        </li>
        <li className="hex-grid__item">
          <div className="hex-grid__content">2</div>
        </li>
      </ul> */}
    </div>
  )
}

export default Hexagon
