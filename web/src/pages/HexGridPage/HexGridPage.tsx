import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HexGridPage = () => {
  return (
    <>
      <MetaTags title="HexGrid" description="HexGrid page" />

      <h1>HexGridPage</h1>
      <p>
        Find me in <code>./web/src/pages/HexGridPage/HexGridPage.tsx</code>
      </p>
      <p>
        My default route is named <code>hexGrid</code>, link to me with `
        <Link to={routes.hexGrid()}>HexGrid</Link>`
      </p>
    </>
  )
}

export default HexGridPage
