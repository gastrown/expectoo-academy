import Link from 'next/link'

import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: 'How to apply?',
      answer: 'Apply, get added to our community, orientation.'
    },
    {
      question: 'Fees and financial options',
      answer:
        'Our courses are affordable and we offer financial options that allow you to make a 70% payment upfront and the remaining 30% during the course of the program.'
    }
  ],
  [
    {
      question: 'How long does the program run?',
      answer: 'The length of the program is determined by the choice of course.'
    },
    {
      question: 'Where is the training location?',
      answer:
        'The training venue is located at No. 5 Engr. Maxwell Street, Port Harcourt, Rivers'
    },
    
  ],
  [
   
    {
      question: 'Is the training remote or on-site?',
      answer: 'The training would be on-site.'
    }
  ]
]

export function Faqs () {
  return (
    <section
      id='faqs'
      aria-labelledby='faqs-title'
      className='border-t border-gray-200 py-20 sm:py-32'
    >
      <Container>
        <div className='mx-auto max-w-2xl lg:mx-0'>
          <h2
            id='faqs-title'
            className='text-3xl font-medium tracking-tight text-gray-900'
          >
            All you need to know
          </h2>
          <p className='mt-2 text-lg text-gray-600'>
            If you have anything else you want to ask,{' '}
            <Link
              href='mailto:info@example.com'
              className='text-gray-900 underline'
            >
              reach out to us
            </Link>
            .
          </p>
        </div>
        <ul
          role='list'
          className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3'
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role='list' className='space-y-10'>
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className='text-lg font-semibold leading-6 text-gray-900'>
                      {faq.question}
                    </h3>
                    <p className='mt-4 text-sm text-gray-700'>{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
