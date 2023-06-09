import { useEffect, useId, useState } from 'react'
import fullStack from '/public/fullstack.jpeg'
import backend from '/public/backend.jpeg'
import frontend from '/public/frontend.jpeg'
import { Container } from '@/components/Container'
import Image from 'next/image'
import { PaystackButton } from 'react-paystack'
import { RadioGroup } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/20/solid'

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

const frequencies = [
  { value: 'installment', label: 'Installment', priceSuffix: '/installment' },
  { value: 'complete', label: 'Full Payment', priceSuffix: '/complete' }
]
function classNames (...classes) {
  return classes.filter(Boolean).join(' ')
}
export function SecondaryFeatures () {
  const [price, setPrice] = useState(20000000)
  const [frequency, setFrequency] = useState(frequencies[0])

  const config = {
    email: 'epectoo.company@gmail.com',
    publicKey: 'pk_live_4b858db970be95c5f14023e4b6f371d979bcb988'
  }

  const handlePaystackSuccessAction = (reference) => {
    console.log('success')
  }

  const handlePaystackCloseAction = () => {
    console.log('closed')
  }

  function getComponentPropsWithAmount (amount) {
    const reference = `${Date.now()}_${Math.random()
      .toString(36)
      .substring(2, 11)}`
    return {
      ...config,
      reference: reference,
      amount: amount,
      text: 'Pay Now',
      onSuccess: (reference) => handlePaystackSuccessAction(reference),
      onClose: handlePaystackCloseAction
    }
  }
  const features = [
    {
      name: 'Frontend Development',
      imageUrl: frontend,
      amount: frequency.value === 'complete' ? 200000 : 140000,
      price: frequency.value === 'complete' ? 20000000 : 14000000,
      description:
        'Learn the essential skills and tools needed to build stunning user interfaces from veteran tutors. Get hands-on experience with popular frameworks and languages such as React, Vue.js, HTML, CSS, and JavaScript to kickstart your career in web development.',
      icon: DeviceArrowIcon
    },
    {
      name: 'Backend Development',
      imageUrl: backend,
      amount: frequency.value === 'complete' ? 200000 : 140000,
      price: frequency.value === 'complete' ? 20000000 : 14000000,
      description:
        'Our backend development bootcamp will equip you with the knowledge and practical skills needed to build robust and scalable server-side applications. Learn how to work with popular programming languages and frameworks like Node.js, Express, and MongoDB to build RESTful APIs and manage databases, and take your career in web development to the next level.',
      icon: DeviceCardsIcon
    },
    {
      name: 'Full Stack Development',
      imageUrl: fullStack,
      amount: frequency.value === 'complete' ? 400000 : 280000,
      price: frequency.value === 'complete' ? 40000000 : 28000000,
      description:
        'Become a full-stack developer with our comprehensive bootcamp that covers both frontend and backend development. Learn how to build dynamic and responsive web applications using popular technologies such as React, Node.js, Express, and MongoDB, and acquire the skills necessary to take on any web development project with confidence.',
      icon: DeviceClockIcon
    }
  ]
  return (
    <section
      id='secondary-features'
      aria-label='Features for building a portfolio'
      className='relative py-20 sm:py-32'
    >
      <Container>
        <div className='mx-auto max-w-2xl sm:text-center md:max-w-4xl'>
          <h2 className='text-3xl font-medium tracking-tight text-gray-900'>
            Flexible Payment Option.
          </h2>
          <p className='mt-2 text-lg text-gray-600'>
            We understand that financing your education can be challenging,
            which is why we've developed a payment plan that helps you get
            started on your academic journey without breaking the bank. With our
            flexible payment option, you only need to pay 70% of your tuition
            fees as your first instalment, allowing you to save money and manage
            your finances more efficiently. The remaining balance can be paid
            during the course of the programme.
          </p>
        </div>
        <div className='mt-16 flex justify-center'>
          <RadioGroup
            value={frequency}
            onChange={setFrequency}
            className='grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-gray-200'
          >
            <RadioGroup.Label className='sr-only'>
              Payment Process
            </RadioGroup.Label>
            {frequencies.map((option) => (
              <RadioGroup.Option
                key={option.value}
                value={option}
                className={({ checked }) =>
                  classNames(
                    checked ? 'bg-[#D31A86] text-white' : 'text-gray-500',
                    'cursor-pointer rounded-full px-6 py-3'
                  )
                }
              >
                <span>{option.label}</span>
              </RadioGroup.Option>
            ))}
          </RadioGroup>
        </div>
        <ul
          role='list'
          className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3'
        >
          {features.map((feature, index) => (
            <div class='max-w-sm overflow-hidden rounded shadow-lg'>
              <Image class='w-full' src={feature.imageUrl} alt='Mountain' />
              <div class='px-6 py-4'>
                <div class='my-2 mb-2 text-right text-2xl font-bold text-red-600'>
                  {feature.amount.toLocaleString('en-NG', {
                    style: 'currency',
                    currency: 'NGN'
                  })}
                </div>
                <div class='mb-2 text-xl font-bold'>{feature.name}</div>
                <p class='text-base text-gray-700'>{feature.description}</p>
              </div>

              {index >= 1 && (
                <div className=' flex justify-center px-6 pb-2 pt-8 '>
                  <PaystackButton
                    className='  inline-flex items-center gap-x-2 rounded-md bg-[#D31A86] px-8  py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#D31A86] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
                    {...getComponentPropsWithAmount(feature.price)}
                  />
                </div>
              )}
              {index <= 0 && (
                <div className=' flex justify-center px-6 pb-2 md:mt-20 '>
                  <PaystackButton
                    className='  inline-flex items-center gap-x-2 rounded-md bg-[#D31A86] px-8  py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#D31A86] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
                    {...getComponentPropsWithAmount(feature.price)}
                  />
                </div>
              )}
            </div>
          ))}
        </ul>
      </Container>
    </section>
  )
}
