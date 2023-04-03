import type { Testimonial } from '@/interfaces/testimonial'

export const data: Array<Testimonial> = [
  {
    id: 1,
    title: 'Communication & responsiveness',
    content:
      'Our real estate company prioritizes effective communication and prompt responsiveness to our clients needs. We strive to keep our clients informed at every step of the process and are readily available to answer any questions or concerns they may have.',
    user: {
      id: 1,
      name: 'Luis Sera',
      professional: 'UI/UX Engineer',
      photo: '1.jpg',
    },
  },
  {
    id: 2,
    title: 'Buying Strategies',
    content:
      'We help clients make informed decisions about their property investments. It involves a detailed analysis of market trends, property values, and financing options to identify the best opportunities for buyers to achieve their desired goals.',
    user: {
      id: 1,
      name: 'Riski',
      professional: 'Software Engineer',
      photo: '2.jpg',
    },
  },
  {
    id: 3,
    title: 'Market Ready & Destined to Sell',
    content:
      'Market Ready & Destined to Sell are two key features that every real estate company should strive to offer. By ensuring that a property is market-ready and destined to sell, clients can feel confident that their investment will be both attractive to potential buyers and sold quickly for the best possible price.',
    user: {
      id: 1,
      name: 'Nguyễn Văn',
      professional: 'FullStack Designer',
      photo: '3.jpg',
    },
  },
]
