export default function Team() {
  return (
    <div className='py-20'>
      <div className='xl:container mx-auto px-6 md:px-12'>
        <div className='mb-16 md:w-2/3 lg:w-1/2'>
          <h2 className='mb-4 text-2xl font-bold dark:text-black-500 md:text-4xl'>
            El equipo de khoble
          </h2>
          <p className='dark:text-black-500'>
            Somos un grupo de entusiastas que busca ayudar a las empresas a
            encontrar el talento que necesitan.
          </p>
        </div>
        <div className='grid gap-6 px-4 sm:px-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          <div className='group relative  space-y-6 overflow-hidden'>
            <img
              className='mx-auto h-[26rem] w-full grayscale object-cover object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-0'
              src='https://media.licdn.com/dms/image/C5603AQF5OX1mItr7Cg/profile-displayphoto-shrink_400_400/0/1644719365492?e=1684972800&v=beta&t=VMSwOC7sHKc-iv4KjEGdiXOJeYbGSUpoihES28TASlY'
              alt='woman'
              loading='lazy'
              width='640'
              height='805'
            />
            <div className='absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0'>
              <div>
                <h4 className='text-xl font-semibold dark:text-gray-700 text-white'>
                  Javier Cordero
                </h4>
                <span className='block text-sm text-gray-500'>
                  CEO & Co-Founder
                </span>
              </div>
              <p className='mt-8 text-gray-300 dark:text-gray-600'>
                Quae labore quia tempora dolor impedit. Possimus, sint ducimus
                ipsam?
              </p>
            </div>
          </div>
          <div className='group relative  space-y-6 overflow-hidden'>
            <img
              className='mx-auto h-[26rem] w-full grayscale object-cover object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-0'
              src='https://media.licdn.com/dms/image/C5603AQEjLB3rfxi88w/profile-displayphoto-shrink_400_400/0/1660959514582?e=1684972800&v=beta&t=zO1SUj_vqCxpgCTEx9aIOCEfSWkIGIIehW0AC6VT9ig'
              alt='woman'
              loading='lazy'
              width='640'
              height='805'
            />
            <div className='absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0'>
              <div>
                <h4 className='text-xl font-semibold dark:text-gray-700 text-white'>
                  Juan Alvaro Hecht
                </h4>
                <span className='block text-sm text-gray-500'>
                  CPO & Co-Founder
                </span>
              </div>
              <p className='mt-8 text-gray-300 dark:text-gray-600'>
                Quae labore quia tempora dolor impedit. Possimus, sint ducimus
                ipsam?
              </p>
            </div>
          </div>
          <div className='group relative  space-y-6 overflow-hidden'>
            <img
              className='mx-auto h-[26rem] w-full grayscale object-cover object-top transition duration-500 group-hover:scale-105 group-hover:grayscale-0'
              src='https://media.licdn.com/dms/image/C5603AQEGhc0_g_GdDw/profile-displayphoto-shrink_400_400/0/1660686858945?e=1684972800&v=beta&t=0e0Z74OdN9uT50sKlwCEjaaUKTq_GtYPzJvIF3tT07Q'
              alt='woman'
              loading='lazy'
              width='640'
              height='805'
            />
            <div className='absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0'>
              <div>
                <h4 className='text-xl font-semibold dark:text-gray-700 text-white'>
                  Guillermo Salles
                </h4>
                <span className='block text-sm text-gray-500'>
                  CFO- Co-Founder
                </span>
              </div>
              <p className='mt-8 text-gray-300 dark:text-gray-600'>
                Quae labore quia tempora dolor impedit. Possimus, sint ducimus
                ipsam?
              </p>
            </div>
          </div>
          <div className='group relative  space-y-6 overflow-hidden'>
            <img
              className='mx-auto h-[26rem] w-full grayscale object-cover object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-0'
              src='https://media.licdn.com/dms/image/C4E03AQGyhz3YiHwuHA/profile-displayphoto-shrink_400_400/0/1578076121709?e=1684972800&v=beta&t=itLlUPJd97ovlOuu3FAD2C5fvpwsVeRiH-imtEaen00'
              alt='woman'
              loading='lazy'
              width='640'
              height='805'
            />
            <div className='absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0'>
              <div>
                <h4 className='text-xl font-semibold dark:text-gray-700 text-white'>
                  Saul Gallegos
                </h4>
                <span className='block text-sm text-gray-500'>Tech Lead</span>
              </div>
              <p className='mt-8 text-gray-300 dark:text-gray-600'>
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
