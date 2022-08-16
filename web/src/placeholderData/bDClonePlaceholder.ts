import { ReactElement } from 'react'

interface ListLink {
  name: string | ReactElement
  url: string
}
interface FooterListProps {
  name: string | ReactElement
  links: ListLink[]
}
interface FooterLargeProps {
  logo: string | ReactElement
  callToAction: string | ReactElement
  email: string | ReactElement
  lists: FooterListProps[]
  subscribeHeading: string | ReactElement
  nameLegal
  motto
  termsUrl
  privacyUrl
}
interface Card4CarouselProps {
  logo: string | ReactElement
  name: string | ReactElement
  content: string | ReactElement
}
interface CardProps {
  image: string
  altText: string
  title: string
  category: string
  date: string
}
interface MainProps {
  carousel: Card4CarouselProps[]
  featuredNews: CardProps[]
}
interface placeholderType {
  main: MainProps
  footer: FooterLargeProps
}
const placeholder: placeholderType = {
  main: {
    carousel: [
      {
        logo: 'https://basic-admin.basicagency.com/uploads/google-dark.svg',
        name: 'Google',
        content:
          'Our embedded partnership with Google is as deep as it gets. We’re the lead creative agency for Google Store and provide strategy, design, and prototyping to other divisions. Learn more about our partnership here',
      },
      {
        logo: 'https://basic-admin.basicagency.com/uploads/google-dark.svg',
        name: 'Google',
        content:
          'Our embedded partnership with Google is as deep as it gets. We’re the lead creative agency for Google Store and provide strategy, design, and prototyping to other divisions. Learn more about our partnership here',
      },
      {
        logo: 'https://basic-admin.basicagency.com/uploads/google-dark.svg',
        name: 'Google',
        content:
          'Our embedded partnership with Google is as deep as it gets. We’re the lead creative agency for Google Store and provide strategy, design, and prototyping to other divisions. Learn more about our partnership here',
      },
      {
        logo: 'https://basic-admin.basicagency.com/uploads/google-dark.svg',
        name: 'Google',
        content:
          'Our embedded partnership with Google is as deep as it gets. We’re the lead creative agency for Google Store and provide strategy, design, and prototyping to other divisions. Learn more about our partnership here',
      },
      {
        logo: 'https://basic-admin.basicagency.com/uploads/google-dark.svg',
        name: 'Google',
        content:
          'Our embedded partnership with Google is as deep as it gets. We’re the lead creative agency for Google Store and provide strategy, design, and prototyping to other divisions. Learn more about our partnership here',
      },
    ],
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
  },
  footer: {
    logo: 'B/D®️',
    callToAction:
      "We collaborate with ambitious brands and people. Let's build.",
    email: 'biz@basicagency.com',
    lists: [
      {
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
      },
      {
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
      },
      {
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
      },
    ],
    subscribeHeading: 'Stay in the Know',
    nameLegal: 'BASIC/DEPT®, INC 10 - 22©',
    motto: 'Easy To Understand, Impossible to Ignore.™',
    termsUrl: 'https://www.bing.com/',
    privacyUrl: 'https://www.bing.com/',
  },
}

export default placeholder
