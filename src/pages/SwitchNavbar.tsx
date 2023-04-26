import { useState } from 'react';
export default function SwitchNavbar({
  setVersion,
  version,
}: {
  setVersion: (version: string) => void;
  version: string;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className='bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 sticky top-0 z-50'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <ul className='flex items-center  space-x-8 lg:flex'>
          <li className='mr-5'>
            <a href='#' className='flex items-center'>
              {/* <img
                src='https://media.licdn.com/dms/image/C4E0BAQF_xpYQ1UrcJg/company-logo_200_200/0/1678195867758?e=1687392000&v=beta&t=kF9eQLMRZu4FWfYCcRmRUmBXYKtCbgdM3KHE416UD20'
                className='h-6 mr-3 sm:h-9'
                alt='Khoble Logo'
              /> */}
              <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
                Khoble
              </span>
            </a>
          </li>
          <li>
            <a
              aria-label='Our product'
              title='Our product'
              className={`cursor-pointer hover:underline underline-offset-4 font-medium tracking-wide text-${
                version !== 'company'
                  ? 'gray-100'
                  : 'gray-100 underline underline-offset-4'
              } transition-colors duration-200`}
              onClick={() => setVersion('company')}
            >
              Empresa
            </a>
          </li>
          <li>
            <a
              aria-label='Our product'
              title='Our product'
              className={`cursor-pointer hover:underline underline-offset-4 font-medium tracking-wide text-${
                version === 'company'
                  ? 'gray-100'
                  : 'gray-100 underline underline-offset-4'
              } transition-colors duration-200`}
              onClick={() => setVersion('student')}
            >
              Estudiante
            </a>
          </li>
        </ul>
        <div className='flex md:order-2'>
          <ul className='flex items-center hidden space-x-8 lg:flex'>
            <li>
              <a
                target='_blank'
                title='About us'
                href='https://web.khoble.com/switch'
                className='font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400'
              >
                Iniciar Sesión
              </a>
            </li>
            <li>
              <a
                target='_blank'
                className='inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-rose-500 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none'
                title='Sign up'
                href='https://web.khoble.com/switch/signup'
              >
                Registrame gratis
              </a>
            </li>
          </ul>
        </div>
        <div className='lg:hidden'>
          <button
            aria-label='Open Menu'
            title='Open Menu'
            className='p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline'
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
              <path
                fill='currentColor'
                d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z'
              />
              <path
                fill='currentColor'
                d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z'
              />
              <path
                fill='currentColor'
                d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z'
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className='absolute top-0 left-0 w-full'>
              <div className='p-5 bg-white border rounded shadow-sm'>
                <div className='flex items-center justify-between mb-4'>
                  <div>
                    <a
                      href='#'
                      aria-label='Company'
                      title='Company'
                      className='inline-flex items-center'
                    >
                      <img
                        src='https://media.licdn.com/dms/image/C4E0BAQF_xpYQ1UrcJg/company-logo_200_200/0/1678195867758?e=1687392000&v=beta&t=kF9eQLMRZu4FWfYCcRmRUmBXYKtCbgdM3KHE416UD20'
                        className='h-6 mr-3 sm:h-9'
                        alt='Khoble Logo'
                      />
                      <span className='ml-2 text-xl font-bold tracking-wide text-gray-800'>
                        Khoble
                      </span>
                    </a>
                  </div>
                  <div>
                    <button
                      aria-label='Close Menu'
                      title='Close Menu'
                      className='p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
                        <path
                          fill='currentColor'
                          d='M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z'
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className='space-y-4'>
                    <li>
                      <a
                        href='https://web.khoble.com/switch/'
                        title='About us'
                        target='_blank'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                      >
                        Iniciar Sesión
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://web.khoble.com/switch/signup'
                        className='inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-rose-500 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none'
                        title='Sign up'
                        target='_blank'
                      >
                        Registrate gratis
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
