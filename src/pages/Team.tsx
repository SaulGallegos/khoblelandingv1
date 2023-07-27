import Image from 'next/image';

export default function Team() {
  return (
    <div className='py-20'>
      <div className='xl:container mx-auto px-6 md:px-12'>
        <div className='mb-16 md:w-2/3 lg:w-1/2'>
          <h2 className='mb-4 text-2xl font-bold text-black-500 md:text-4xl'>
            El equipo de Khoble
          </h2>
          <p className='text-black-500'>
            Estamos construyendo una plataforma de trabajo impulsada por IA que
            cambiará la forma en que los estudiantes encuentran sus carreras
            ideales.
          </p>
        </div>
        <div className='grid gap-6 px-4 sm:px-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          <div className='group relative  space-y-6 overflow-hidden'>
            {/* group-hover:scale-105 group-hover:grayscale-0  */}
            <Image
              className='mx-auto h-[26rem] w-full grayscale object-cover object-top ransition duration-500'
              src='/images/team/javier.jpeg'
              loading='lazy'
              alt='Javier Cordero'
              width='640'
              height='805'
            />
            <div className='absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6  bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0'>
              <div>
                <h4 className='text-xl font-semibold text-gray-700'>
                  Javier Cordero
                </h4>
                <span className='block text-sm text-gray-500'>
                  CEO & Co-Founder
                </span>
              </div>
              <p className='mt-8 text-white'>
                Quae labore quia tempora dolor impedit. Possimus, sint ducimus
                ipsam?
              </p>
            </div>
          </div>
          <div className='group relative  space-y-6 overflow-hidden'>
            <Image
              className='mx-auto h-[26rem] w-full grayscale object-cover object-top ransition duration-500'
              src='/images/team/memo.jpeg'
              loading='lazy'
              alt='Guillermo Salles'
              width='640'
              height='805'
            />
            <div className='absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0'>
              <div>
                <h4 className='text-xl font-semibold text-gray-700'>
                  Guillermo Salles
                </h4>
                <span className='block text-sm text-gray-500'>
                  CFO & Co-Founder
                </span>
              </div>
              <p className='mt-8 text-white'>
                Quae labore quia tempora dolor impedit. Possimus, sint ducimus
                ipsam?
              </p>
            </div>
          </div>
          <div className='group relative  space-y-6 overflow-hidden'>
            <Image
              className='mx-auto h-[26rem] w-full grayscale object-cover object-top ransition duration-500'
              src='/images/team/juan.jpeg'
              loading='lazy'
              alt='Juan Hecht'
              width='640'
              height='805'
            />
            <div className='absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0'>
              <div>
                <h4 className='text-xl font-semibold text-gray-700'>
                  Juan Alvaro Hecht
                </h4>
                <span className='block text-sm text-gray-500'>
                  CPO & Co-Founder
                </span>
              </div>
              <p className='mt-8 text-white'>
                Quae labore quia tempora dolor impedit. Possimus, sint ducimus
                ipsam?
              </p>
            </div>
          </div>
          <div className='group relative  space-y-6 overflow-hidden'>
            <Image
              className='mx-auto h-[26rem] w-full grayscale object-cover object-top ransition duration-500'
              src='/images/team/saul.jpeg'
              loading='lazy'
              alt='Saul Gallegos'
              width='640'
              height='805'
            />
            <div className='absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0'>
              <div>
                <h4 className='text-xl font-semibold text-gray-700'>
                  Saul Gallegos
                </h4>
                <span className='block text-sm text-gray-500'>Tech Lead</span>
              </div>
              <p className='mt-8 text-white'>
                Quae labore quia tempora dolor impedit. Possimus, sint ducimus
                ipsam?
              </p>
            </div>
          </div>

          <div className='group relative  space-y-6 overflow-hidden'>
            <Image
              className='mx-auto h-[26rem] w-full grayscale object-cover object-top ransition duration-500'
              src='/images/team/jaime.jpeg'
              loading='lazy'
              alt='Jaime Lopez-Hidalgo'
              width='640'
              height='805'
            />
            <div className='absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0'>
              <div>
                <h4 className='text-xl font-semibold text-gray-700'>
                  Jaime Lopez-Hidalgo
                </h4>
                <span className='block text-sm text-gray-500'>
                  Frontend Web Developer
                </span>
              </div>
              <p className='mt-8 text-white'>
                Quae labore quia tempora dolor impedit. Possimus, sint ducimus
                ipsam?
              </p>
            </div>
          </div>
          <div className='group relative  space-y-6 overflow-hidden'>
            <Image
              className='mx-auto h-[26rem] w-full grayscale object-cover object-top ransition duration-500'
              src='/images/team/esteban.jpeg'
              loading='lazy'
              alt='Esteban Ortiz'
              width='640'
              height='805'
            />
            <div className='absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0'>
              <div>
                <h4 className='text-xl font-semibold text-gray-700'>
                  Esteban Ortíz
                </h4>
                <span className='block text-sm text-gray-500'>
                  Frontend Web Developer
                </span>
              </div>
              <p className='mt-8 text-white'>
                Quae labore quia tempora dolor impedit. Possimus, sint ducimus
                ipsam?
              </p>
            </div>
          </div>
          <div className='group relative  space-y-6 overflow-hidden'>
            <Image
              className='mx-auto h-[26rem] w-full grayscale object-cover object-top ransition duration-500'
              src='/images/team/nic.jpeg'
              loading='lazy'
              alt='Nicolas Levy'
              width='640'
              height='805'
            />
            <div className='absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0'>
              <div>
                <h4 className='text-xl font-semibold text-gray-700'>
                  Nicolas Levy
                </h4>
                <span className='block text-sm text-gray-500'>
                  People and culture
                </span>
              </div>
              {/* <p className='mt-8 text-gray-600'> */}
              <p className='mt-8 text-white'>
                Quae labore quia tempora dolor impedit. Possimus, sint ducimus
                ipsam?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
