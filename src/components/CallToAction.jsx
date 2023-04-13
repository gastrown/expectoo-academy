import { AppStoreLink } from '@/components/AppStoreLink'
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'

export function CallToAction () {
  return (
    <section
      id='get-free-shares-today'
      className='relative overflow-hidden bg-gray-900 py-20 sm:py-28'
    >
      <div className='absolute left-20 top-1/2 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2'>
        <CircleBackground color='#fff' className='animate-spin-slower' />
      </div>
      <Container className='relative bg-gray-900'>
        <div className='mx-auto max-w-4xl sm:text-center'>
          <h2 className='text-3xl font-medium tracking-tight text-[#D31A86]  sm:text-4xl'>
            About the academy
          </h2>
          <p className='mt-4 text-lg text-gray-300'>
            Expectoo Academy is a tech training institute aimed at raising the
            next generation of skilled and knowledgeable tech professionals. Our
            mission is to provide accessible and high-quality education that
            empowers individuals to pursue fulfilling careers in tech.
          </p>
          <p className='mt-4 text-lg text-gray-300'>
            At Expectoo Academy, we're passionate about helping individuals from
            all backgrounds launch successful careers in software development.
            Our immersive programs provide hands-on training, mentorship, and
            career support to prepare students for the demands of the modern job
            market.
          </p>
        </div>
      </Container>
    </section>
  )
}
