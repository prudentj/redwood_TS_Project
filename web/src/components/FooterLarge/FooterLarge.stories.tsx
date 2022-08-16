import FooterLarge from './FooterLarge'

const placeHolderFooterList = {
  name: 'Social',
  links: [
    {
      name: 'Instagram',
      url: 'www.instagram.com',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/',
    },
    {
      name: 'Facebook',
      url: 'www.facebook.com',
    },
  ],
}

const placeHolder = {
  logo: 'B/D®️',
  callToAction: "We collaborate with ambitious brands and people. Let's build.",
  email: 'biz@basicagency.com',
  lists: [placeHolderFooterList, placeHolderFooterList, placeHolderFooterList],
  subscribeHeading: 'Stay in the Know',
  nameLegal: 'BASIC/DEPT®, INC 10 - 22©',
  motto: 'Easy To Understand, Impossible to Ignore.™',
  termsUrl: 'https://www.bing.com/',
  privacyUrl: 'https://www.bing.com/',
}

export const generated = () => {
  return (
    <FooterLarge
      logo={placeHolder.logo}
      callToAction={placeHolder.callToAction}
      email={placeHolder.email}
      lists={placeHolder.lists}
      subscribeHeading={placeHolder.subscribeHeading}
      nameLegal={placeHolder.nameLegal}
      motto={placeHolder.motto}
      termsUrl={placeHolder.termsUrl}
      privacyUrl={placeHolder.privacyUrl}
    />
  )
}

export default { title: 'Components/FooterLarge' }
