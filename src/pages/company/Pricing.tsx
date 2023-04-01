function CheckMark() {
  return (
    <svg
      className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
      fill='currentColor'
      viewBox='0 0 20 20'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
        clipRule='evenodd'
      ></path>
    </svg>
  );
}

export default function Pricing() {
  return (
    <section className='bg-white dark:bg-gray-900'>
      <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'>
        <div className='mx-auto max-w-screen-md text-center mb-8 lg:mb-12'>
          <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white'>
            Nuestros precios
          </h2>
          <p className='mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400'>
            En khoble nos interesa que nuestros planes sean accesibles para todo
            tipo de empresas, por eso tenemos planes que se adaptan a tus
            necesidades.
          </p>
        </div>
        <div className='space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0'>
          <div className='flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white'>
            <h3 className='mb-4 text-2xl font-semibold'>Publicación</h3>
            <p className='font-light text-gray-500 sm:text-lg dark:text-gray-400'>
              Mejor opción para pequeñas empresas que buscan crecer en el
              futuro.
            </p>
            <div className='flex justify-center items-baseline my-8'>
              <span className='mr-2 text-5xl font-extrabold'>$499</span>
              <span className='text-gray-500 dark:text-gray-400'>
                /publicación
              </span>
            </div>
            <ul role='list' className='mb-8 space-y-4 text-left'>
              <li className='flex items-center space-x-3'>
                <CheckMark />
                <span>
                  Team size: <span className='font-semibold'>1 reclutador</span>
                </span>
              </li>
              <li className='flex items-center space-x-3'>
                <CheckMark />
                <span>Perfil de empresa</span>
              </li>
              <li className='flex items-center space-x-3'>
                <CheckMark />
                <span>Soporte</span>
              </li>
              <li className='flex items-center space-x-3'>
                <CheckMark />
                <span>Actualizaciones gratis </span>
              </li>
            </ul>
            <a
              href='#'
              className='text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900'
            >
              Empieza ahora
            </a>
          </div>

          <div className='flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white'>
            <h3 className='mb-4 text-2xl font-semibold'>Suscripción</h3>
            <p className='font-light text-gray-500 sm:text-lg dark:text-gray-400'>
              El mejor plan para empresas con un mayor numero de empleados.
            </p>
            <div className='flex justify-center items-baseline my-8'>
              <span className='mr-2 text-5xl font-extrabold'>$3,999</span>
              <span className='text-gray-500 dark:text-gray-400'>/month</span>
            </div>

            <ul role='list' className='mb-8 space-y-4 text-left'>
              <li className='flex items-center space-x-3'>
                <CheckMark />
                <span>10 Publicaciones</span>
              </li>
              <li className='flex items-center space-x-3'>
                <CheckMark />
                <span>
                  Team size:{' '}
                  <span className='font-semibold'>5 Reclutadores</span>
                </span>
              </li>{' '}
              <li className='flex items-center space-x-3'>
                <CheckMark />
                <span>Perfil de empresa</span>
              </li>
              <li className='flex items-center space-x-3'>
                <CheckMark />
                <span>Soporte</span>
              </li>
              <li className='flex items-center space-x-3'>
                <CheckMark />
                <span>Actualizaciones gratis</span>
              </li>
            </ul>
            <a
              href='#'
              className='text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900'
            >
              Empieza ahora
            </a>
          </div>

          <div className='flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white'>
            <h3 className='mb-4 text-2xl font-semibold'>Personalizado</h3>
            <p className='font-light text-gray-500 sm:text-lg dark:text-gray-400'>
              Best for large scale uses and extended redistribution rights.
            </p>
            <div className='flex justify-center items-baseline my-8'>
              <span className='mr-2 text-5xl font-extrabold'>Plan</span>
              <span className='text-gray-500 dark:text-gray-400'>/mensual</span>
            </div>

            <ul role='list' className='mb-8 space-y-4 text-left'>
              <li className='flex items-center space-x-3'>
                <CheckMark />
                <span>
                  Número de publicaciones:{' '}
                  <span className='font-semibold'>Negociable</span>
                </span>
              </li>
              <li className='flex items-center space-x-3'>
                <CheckMark />
                <span>
                  Team size: <span className='font-semibold'>Negociable</span>
                </span>
              </li>
              <li className='flex items-center space-x-3'>
                <CheckMark />
                <span>Perfil de empresa</span>
              </li>
              <li className='flex items-center space-x-3'>
                <CheckMark />
                <span>Soporte</span>
              </li>
              <li className='flex items-center space-x-3'>
                <CheckMark />
                <span>Actualizaciones gratis</span>
              </li>
              <li className='flex items-center space-x-3'>
                <CheckMark />
                <span>Funcionalidades personalizadas</span>
              </li>
            </ul>
            <a
              href='#'
              className='text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900'
            >
              Empieza ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
