import twitter from '../images/twitter.png'
import facebook from '../images/facebook.png'
import instagram from '../images/instagram.png'
import Image from 'next/image'
import mail from '../images/mail.png'
export default function Footer () {
  const navigation = {
    main: [{ name: 'About Us', href: 'https://expectoo.net/about' }]
  }

  return (
    <footer className='bg-white'>
      <div className='mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8'>
        <nav
          className='-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12'
          aria-label='Footer'
        >
          {navigation.main.map((item) => (
            <div key={item.name} className='pb-6'>
              <a
                target='_blank'
                rel='noreferrer noopener'
                href={item.href}
                className='text-lg leading-6 text-gray-600 hover:text-gray-900'
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <div className='mt-10 flex justify-center space-x-10'>
          <ul role='list' className='mt-3 flex space-x-6'>
            <li>
              <a
                target='_blank'
                rel='noreferrer noopener'
                className='text-indigo-200 hover:text-indigo-100'
                href='https://www.facebook.com/expectoong'
              >
                <span className='sr-only'>Facebook</span>
                <Image
                  src={facebook}
                  alt='Twitter logo'
                  className='h-10 w-10'
                />
              </a>
            </li>
            <li>
              <a
                target='_blank'
                rel='noreferrer noopener'
                className='text-indigo-200 hover:text-indigo-100'
                href='  https://www.instagram.com/expectoo_ng/ '
              >
                <span className='sr-only'>Instagram</span>
                <Image
                  src={instagram}
                  alt='Twitter logo'
                  className='h-10 w-10'
                />
              </a>
            </li>
            <li>
              <a
                target='_blank'
                rel='noreferrer noopener'
                className='text-indigo-200 hover:text-indigo-100'
                href='https://twitter.com/expectoo_ng'
              >
                <span className='sr-only'>Twitter</span>
                <Image src={twitter} alt='Twitter logo' className='h-10 w-10' />
              </a>
            </li>
            <li>
              <a
                className='text-indigo-200 hover:text-indigo-100'
                href='mailto:expectoo.company@gmail.com'
                target='_blank'
                rel='noreferrer noopener'
              >
                <span className='sr-only'>Twitter</span>
                <Image src={mail} alt='Twitter logo' className='h-10 w-10' />
              </a>
            </li>
          </ul>
        </div>
        <p className='mt-10 text-center text-sm leading-5 text-gray-500'>
          &copy; 2023 Expectoo Academy. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
