import { useId } from 'react'

import { Container } from '@/components/Container'
const posts = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    author: {
      name: 'Michael Foster',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    }
  }
  // More posts...
]
const features = [
  {
    name: 'Frontend Development',
    description:
      'Learn the essential skills and tools needed to build stunning user interfaces from veteran tutors. Get hands-on experience with popular frameworks and languages such as React, Vue.js, HTML, CSS, and JavaScript to kickstart your career in web development.',
    icon: DeviceArrowIcon
  },
  {
    name: 'Backend Development',
    description:
      'Our backend development bootcamp will equip you with the knowledge and practical skills needed to build robust and scalable server-side applications. Learn how to work with popular programming languages and frameworks like Node.js, Express, and MongoDB to build RESTful APIs and manage databases, and take your career in web development to the next level.',
    icon: DeviceCardsIcon
  },
  {
    name: 'Full Stack Development',
    description:
      'Become a full-stack developer with our comprehensive bootcamp that covers both frontend and backend development. Learn how to build dynamic and responsive web applications using popular technologies such as React, Node.js, Express, and MongoDB, and acquire the skills necessary to take on any web development project with confidence.',
    icon: DeviceClockIcon
  }
]

function DeviceArrowIcon (props) {
  return (
    <svg viewBox='0 0 32 32' aria-hidden='true' {...props}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z'
        fill='#737373'
      />
      <path
        d='M12 25l8-8m0 0h-6m6 0v6'
        stroke='#171717'
        strokeWidth={2}
        strokeLinecap='round'
      />
      <circle cx={16} cy={16} r={16} fill='#A3A3A3' fillOpacity={0.2} />
    </svg>
  )
}

function DeviceCardsIcon (props) {
  let id = useId()

  return (
    <svg viewBox='0 0 32 32' aria-hidden='true' {...props}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z'
        fill='#737373'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M9 13a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H10a1 1 0 01-1-1v-2zm0 6a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H10a1 1 0 01-1-1v-2zm1 5a1 1 0 00-1 1v2a1 1 0 001 1h12a1 1 0 001-1v-2a1 1 0 00-1-1H10z'
        fill={`url(#${id}-gradient)`}
      />
      <rect x={9} y={6} width={14} height={4} rx={1} fill='#171717' />
      <circle cx={16} cy={16} r={16} fill='#A3A3A3' fillOpacity={0.2} />
      <defs>
        <linearGradient
          id={`${id}-gradient`}
          x1={16}
          y1={12}
          x2={16}
          y2={28}
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#737373' />
          <stop offset={1} stopColor='#737373' stopOpacity={0} />
        </linearGradient>
      </defs>
    </svg>
  )
}

function DeviceClockIcon (props) {
  return (
    <svg viewBox='0 0 32 32' aria-hidden='true' {...props}>
      <circle cx={16} cy={16} r={16} fill='#A3A3A3' fillOpacity={0.2} />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M5 4a4 4 0 014-4h14a4 4 0 014 4v10h-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 002 2h5v2H9a4 4 0 01-4-4V4z'
        fill='#737373'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M24 32a8 8 0 100-16 8 8 0 000 16zm1-8.414V19h-2v5.414l4 4L28.414 27 25 23.586z'
        fill='#171717'
      />
    </svg>
  )
}

function DeviceListIcon (props) {
  return (
    <svg viewBox='0 0 32 32' fill='none' aria-hidden='true' {...props}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z'
        fill='#737373'
      />
      <circle cx={11} cy={14} r={2} fill='#171717' />
      <circle cx={11} cy={20} r={2} fill='#171717' />
      <circle cx={11} cy={26} r={2} fill='#171717' />
      <path
        d='M16 14h6M16 20h6M16 26h6'
        stroke='#737373'
        strokeWidth={2}
        strokeLinecap='square'
      />
      <circle cx={16} cy={16} r={16} fill='#A3A3A3' fillOpacity={0.2} />
    </svg>
  )
}

function DeviceLockIcon (props) {
  return (
    <svg viewBox='0 0 32 32' aria-hidden='true' {...props}>
      <circle cx={16} cy={16} r={16} fill='#A3A3A3' fillOpacity={0.2} />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M5 4a4 4 0 014-4h14a4 4 0 014 4v10h-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 002 2h5v2H9a4 4 0 01-4-4V4z'
        fill='#737373'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M18 19.5a3.5 3.5 0 117 0V22a2 2 0 012 2v6a2 2 0 01-2 2h-7a2 2 0 01-2-2v-6a2 2 0 012-2v-2.5zm2 2.5h3v-2.5a1.5 1.5 0 00-3 0V22z'
        fill='#171717'
      />
    </svg>
  )
}

function DeviceChartIcon (props) {
  return (
    <svg viewBox='0 0 32 32' fill='none' aria-hidden='true' {...props}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z'
        fill='#737373'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M23 13.838V26a2 2 0 01-2 2H11a2 2 0 01-2-2V15.65l2.57 3.212a1 1 0 001.38.175L15.4 17.2a1 1 0 011.494.353l1.841 3.681c.399.797 1.562.714 1.843-.13L23 13.837z'
        fill='#171717'
      />
      <path
        d='M10 12h12'
        stroke='#737373'
        strokeWidth={2}
        strokeLinecap='square'
      />
      <circle cx={16} cy={16} r={16} fill='#A3A3A3' fillOpacity={0.2} />
    </svg>
  )
}

export function SecondaryFeatures () {
  return (
    <section
      id='secondary-features'
      aria-label='Features for building a portfolio'
      className='py-20 sm:py-32'
    >
      <Container>
        <div className='mx-auto max-w-2xl sm:text-center'>
          <h2 className='text-3xl font-medium tracking-tight text-gray-900'>
            Courses Offered.
          </h2>
          <p className='mt-2 text-lg text-gray-600'>
            We train individuals in an immersive learning environment that will
            challenge them to develop new skills and push themselves to new
            heights in developing software.
          </p>
        </div>
        <ul
          role='list'
          className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3'
        >
          {/* {posts.map((post) => (
            <article
              key={post.id}
              className='relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-black px-8 pb-8 pt-80 sm:pt-48 lg:pt-80'
            >
              <img
                src={post.imageUrl}
                alt=''
                className='absolute inset-0 -z-10 h-full w-full object-cover'
              />
              <div className='absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40' />
              <div className='absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10' />

              <div className='flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300'>
                <time dateTime={post.datetime} className='mr-8'>
                  {post.date}
                </time>
                <div className='-ml-4 flex items-center gap-x-4'>
                  <svg
                    viewBox='0 0 2 2'
                    className='-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50'
                  >
                    <circle cx={1} cy={1} r={1} />
                  </svg>
                  <div className='flex gap-x-2.5'>
                    <img
                      src={post.author.imageUrl}
                      alt=''
                      className='h-6 w-6 flex-none rounded-full bg-white/10'
                    />
                    {post.author.name}
                  </div>
                </div>
              </div>
              <div className='absolute right-0 top-0 mr-3 mt-3 rounded-full bg-red-600 px-2 py-1 text-xs font-semibold text-white'>
               200000
              </div>
              <h3 className='mt-3 text-lg font-semibold leading-6 text-white'>
                <a href={post.href}>
                  <span className='absolute inset-0' />
                  {post.title}
                </a>
              </h3>
            </article>
          ))} */}

          {features.map((feature) => (
            <li
              key={feature.name}
              className='rounded-2xl border border-gray-200 p-8'
            >
              <feature.icon className='mx-auto h-8 w-8' />
              <h3 className='mt-6 text-center font-semibold text-gray-900'>
                {feature.name}
              </h3>
              <p className='mt-2 text-center text-gray-700'>
                {feature.description}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
