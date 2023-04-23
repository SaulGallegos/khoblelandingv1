export default function SwitchNavbar({
  setVersion,
  version,
}: {
  setVersion: (version: string) => void;
  version: string;
}) {
  return (
    <nav className='bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <ul className='flex items-center  space-x-8 lg:flex'>
          <li className='mr-5'>
            <a href='#' className='flex items-center'>
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
                href={
                  version === 'company'
                    ? 'https://web.khoble.com/recruiter/login/'
                    : 'https://web.khoble.com/login'
                }
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
                href={
                  version === 'company'
                    ? 'https://web.khoble.com/recruiter/signup/'
                    : 'https://web.khoble.com/student/signup/'
                }
              >
                Registame gratis
              </a>
            </li>
          </ul>
          <button
            data-collapse-toggle='navbar-sticky'
            type='button'
            className='inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
            aria-controls='navbar-sticky'
            aria-expanded='false'
          >
            <span className='sr-only'>Open main menu</span>
            <svg
              className='w-6 h-6'
              aria-hidden='true'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                clipRule='evenodd'
              ></path>
            </svg>
          </button>
        </div>
        {/* <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <a href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
          </li>
          <li>
            <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
          </li>
          <li>
            <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
          </li>
          <li>
            <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
          </li>
        </ul>
      </div> */}
      </div>
    </nav>
  );
}
{
  /* <header>
      <nav className='bg-white border-gray-200 px-4  py-2.5 dark:bg-gray-800'>
        <div className='flex flex-wrap justify-between items-center'>
          <div className='flex justify-start items-center'>
            <ul className='flex items-center  space-x-8 lg:flex'>
              <li>
                <a
                  aria-label='Our product'
                  title='Our product'
                  className={`cursor-pointer font-medium tracking-wide text-${
                    version !== 'company' ? 'gray-100' : 'rose-500'
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
                  className={`cursor-pointer font-medium tracking-wide text-${
                    version === 'company' ? 'gray-100' : 'rose-500'
                  } transition-colors duration-200`}
                  onClick={() => setVersion('student')}
                >
                  Estudiante
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header> */
}
