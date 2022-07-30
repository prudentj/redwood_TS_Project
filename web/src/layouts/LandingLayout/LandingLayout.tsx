//import { Link, routes } from '@redwoodjs/router'

type LandingLayoutProps = {
  children?: React.ReactNode
}
{
  /* <nav className="flex-between">
          <div className="flex-between">
            <h1>
              <Link to={routes.landing()}>Logo©️</Link>
            </h1>
          </div>
          <ul>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
            <li>
              <Link to={routes.contact()}>Contact</Link>
            </li>
          </ul>
        </nav> font-semibold*/
}
const LandingLayout = ({ children }: LandingLayoutProps) => {
  const logo = (
    <h1 className="font-extrabold text-xl">
      LOGO<span className="text-xs">©️</span>
    </h1>
  )
  return (
    <>
      <header className="bg-slate-600 py-6 px-7">
        <nav className="flex flex-row justify-between">
          {logo}
          <span className=" text-lg">MENU</span>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="bg-slate-500 py-8 px-6">
        {logo}
        <p className="font-semibold text-xl">
          Profound words go here. Call to action. <br />
          <span className="underline">Email@Address!</span>{' '}
        </p>
        I am a humble footer
      </footer>
    </>
  )
}

export default LandingLayout
