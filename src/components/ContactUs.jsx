import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { Button } from './Button'
import twitter from '../images/twitter.png'
import facebook from '../images/facebook.png'
import instagram from '../images/instagram.png'
import Image from 'next/image'
export default function Contact(props) {
    const {setForm} =props
  return (
    <div className=''>
      <div className='mx-auto  max-w-6xl lg:px-8'>
        <div className='relative bg-white shadow-xl'>
          <h2 className='sr-only'>Contact us</h2>

          <div className='grid grid-cols-1 lg:grid-cols-3'>
            {/* Contact information */}
            <div className='relative overflow-hidden bg-black px-6 py-10 sm:px-10 xl:p-12'>
              <div
                className='pointer-events-none absolute inset-0 sm:hidden'
                aria-hidden='true'
              >
                <svg
                  className='absolute inset-0 h-full w-full'
                  width={343}
                  height={388}
                  viewBox='0 0 343 388'
                  fill='none'
                  preserveAspectRatio='xMidYMid slice'
                >
                  <path
                    d='M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z'
                    fill='url(#linear1)'
                    fillOpacity='.1'
                  />
                  <defs>
                    <linearGradient
                      id='linear1'
                      x1='254.553'
                      y1='107.554'
                      x2='961.66'
                      y2='814.66'
                      gradientUnits='userSpaceOnUse'
                    >
                      <stop stopColor='#fff' />
                      <stop offset={1} stopColor='#fff' stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div
                className='pointer-events-none absolute bottom-0 right-0 top-0 hidden w-1/2 sm:block lg:hidden'
                aria-hidden='true'
              >
                <svg
                  className='absolute inset-0 h-full w-full'
                  width={359}
                  height={339}
                  viewBox='0 0 359 339'
                  fill='none'
                  preserveAspectRatio='xMidYMid slice'
                >
                  <path
                    d='M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z'
                    fill='url(#linear2)'
                    fillOpacity='.1'
                  />
                  <defs>
                    <linearGradient
                      id='linear2'
                      x1='192.553'
                      y1='28.553'
                      x2='899.66'
                      y2='735.66'
                      gradientUnits='userSpaceOnUse'
                    >
                      <stop stopColor='#fff' />
                      <stop offset={1} stopColor='#fff' stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div
                className='pointer-events-none absolute bottom-0 right-0 top-0 hidden w-1/2 lg:block'
                aria-hidden='true'
              >
                <svg
                  className='absolute inset-0 h-full w-full'
                  width={160}
                  height={678}
                  viewBox='0 0 160 678'
                  fill='none'
                  preserveAspectRatio='xMidYMid slice'
                >
                  <path
                    d='M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z'
                    fill='url(#linear3)'
                    fillOpacity='.1'
                  />
                  <defs>
                    <linearGradient
                      id='linear3'
                      x1='192.553'
                      y1='325.553'
                      x2='899.66'
                      y2='1032.66'
                      gradientUnits='userSpaceOnUse'
                    >
                      <stop stopColor='#fff' />
                      <stop offset={1} stopColor='#fff' stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h3 className='text-xl font-medium text-[#D31A86]'>
                Contact information
              </h3>
              <p className='mt-6 max-w-3xl text-base text-indigo-50'>
                Have more questions? Feel free to reach out to us, we are glad
                to help.
              </p>
              <dl className='mt-8 space-y-6'>
                <dt>
                  <span className='sr-only'>Phone number</span>
                </dt>
                <dd className='flex text-base text-indigo-50'>
                  <PhoneIcon
                    className='h-6 w-6 flex-shrink-0 text-indigo-200'
                    aria-hidden='true'
                  />
                  <span className='ml-3'>09026136485, 08146163916</span>
                </dd>
                <dt>
                  <span className='sr-only'>Email</span>
                </dt>
                <dd className='flex text-base text-indigo-50'>
                  <EnvelopeIcon
                    className='h-6 w-6 flex-shrink-0 text-indigo-200'
                    aria-hidden='true'
                  />
                  <span className='ml-3'>expectoo.company@gmail.com</span>
                </dd>
              </dl>
              <ul role='list' className='mt-8 flex space-x-6'>
                <li>
                  <a className='text-indigo-200 hover:text-indigo-100' href='#'>
                    <span className='sr-only'>Facebook</span>
                    <Image
                      src={facebook}
                      alt='Twitter logo'
                      className='h-8 w-8'
                    />
                  </a>
                </li>
                <li>
                  <a className='text-indigo-200 hover:text-indigo-100' href='#'>
                    <span className='sr-only'>Instagram</span>
                    <Image
                      src={instagram}
                      alt='Twitter logo'
                      className='h-8 w-8'
                    />
                  </a>
                </li>
                <li>
                  <a className='text-indigo-200 hover:text-indigo-100' href='#'>
                    <span className='sr-only'>Twitter</span>
                    <Image
                      src={twitter}
                      alt='Twitter logo'
                      className='h-8 w-8'
                    />
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact form */}
            <div className='px-6 py-10 sm:px-10 lg:col-span-2 xl:p-12'>
              <h3 className='text-lg font-medium text-gray-900'>
                Send us a message
              </h3>
              <form
                action='#'
                method='POST'
                className='mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8'
              >
                <div>
                  <label
                    htmlFor='first-name'
                    className='block text-sm font-medium text-gray-900'
                  >
                    First name
                  </label>
                  <div className='mt-1'>
                    <input
                      type='text'
                      name='first-name'
                      id='first-name'
                      autoComplete='given-name'
                      className='block w-full rounded-md border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500'
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor='last-name'
                    className='block text-sm font-medium text-gray-900'
                  >
                    Last name
                  </label>
                  <div className='mt-1'>
                    <input
                      type='text'
                      name='last-name'
                      id='last-name'
                      autoComplete='family-name'
                      className='block w-full rounded-md border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500'
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium text-gray-900'
                  >
                    Email
                  </label>
                  <div className='mt-1'>
                    <input
                      id='email'
                      name='email'
                      type='email'
                      autoComplete='email'
                      className='block w-full rounded-md border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500'
                    />
                  </div>
                </div>
                <div>
                  <div className='flex justify-between'>
                    <label
                      htmlFor='phone'
                      className='block text-sm font-medium text-gray-900'
                    >
                      Phone
                    </label>
                    <span id='phone-optional' className='text-sm text-gray-500'>
                      Optional
                    </span>
                  </div>
                  <div className='mt-1'>
                    <input
                      type='text'
                      name='phone'
                      id='phone'
                      autoComplete='tel'
                      className='block w-full rounded-md border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500'
                      aria-describedby='phone-optional'
                    />
                  </div>
                </div>
                <div className='sm:col-span-2'>
                  <label
                    htmlFor='subject'
                    className='block text-sm font-medium text-gray-900'
                  >
                    Subject
                  </label>
                  <div className='mt-1'>
                    <input
                      type='text'
                      name='subject'
                      id='subject'
                      className='block w-full rounded-md border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500'
                    />
                  </div>
                </div>
                <div className='sm:col-span-2'>
                  <div className='flex justify-between'>
                    <label
                      htmlFor='message'
                      className='block text-sm font-medium text-gray-900'
                    >
                      Message
                    </label>
                    <span id='message-max' className='text-sm text-gray-500'>
                      Max. 500 characters
                    </span>
                  </div>
                  <div className='mt-1'>
                    <textarea
                      id='message'
                      name='message'
                      rows={4}
                      className='block w-full rounded-md border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500'
                      aria-describedby='message-max'
                      defaultValue={''}
                    />
                  </div>
                </div>
                <div className='space-x-3 sm:col-span-2 sm:flex sm:justify-end'>
                  <Button onClick={setForm} variant='solid' color='white' className='border border-[#D31A86] bg-white text-[#D31A86]'>
                    Cancel
                  </Button>
                  <Button href='#' className=''>
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
