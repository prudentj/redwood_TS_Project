import { Link } from '@redwoodjs/router'

import FooterLarge from 'src/components/FooterLarge/FooterLarge'
import placeHolder from 'src/placeholderData/bDClonePlaceholder'

const footer = placeHolder.footer

type LandingLayoutProps = {
  children?: React.ReactNode
}

// const placeHolderFooterList: FooterListProps = {
//   name: 'Social',
//   links: [
//     {
//       name: 'Instagram',
//       url: 'www.instagram.com',
//     },
//     {
//       name: 'Twitter',
//       url: 'https://twitter.com',
//     },
//     {
//       name: 'LinkedIn',
//       url: 'https://www.linkedin.com/',
//     },
//     {
//       name: 'Facebook',
//       url: 'www.facebook.com',
//     },
//   ],
// }

// const placeHolder: FooterLargeProps = {
//   logo: 'B/D®️',
//   callToAction: "We collaborate with ambitious brands and people. Let's build.",
//   email: 'biz@basicagency.com',
//   lists: [placeHolderFooterList, placeHolderFooterList, placeHolderFooterList],
//   subscribeHeading: 'Stay in the Know',
//   nameLegal: 'BASIC/DEPT®, INC 10 - 22©',
//   motto: 'Easy To Understand, Impossible to Ignore.™',
//   termsUrl: 'https://www.bing.com/',
//   privacyUrl: 'https://www.bing.com/',
// }

const LandingLayout = ({ children }: LandingLayoutProps) => {
  const logo = (
    <Link className="text-xl font-extrabold" to="">
      LOGO<span className="text-xs">©️</span>
    </Link>
  )
  return (
    <>
      <header className="py-6 bg-slate-600 px-7">
        <nav className="flex flex-row justify-between">
          {logo}
          <span className="text-lg ">MENU</span>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <FooterLarge
          logo={footer.logo}
          callToAction={footer.callToAction}
          email={footer.email}
          lists={footer.lists}
          subscribeHeading={footer.subscribeHeading}
          nameLegal={footer.nameLegal}
          motto={footer.motto}
          termsUrl={footer.termsUrl}
          privacyUrl={footer.privacyUrl}
        />
      </footer>
    </>
  )
}

export default LandingLayout
