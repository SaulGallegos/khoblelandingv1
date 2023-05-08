export default function Hero() {
  return (
    <section className='bg-gray-900 '>
      <div className='py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12'>
        {/* <div className='grid grid-rows-3 grid-flow-col mb-6 '>
          <div className='row-start-1 row-end-4 '>
            <span className='ml-3 text-m font-medium text-gray-900 dark:text-gray-300 '>
              Para empresas
            </span>
          </div>
          <div className='row-start-1 row-end-4'>
            <label className='relative inline-flex items-center cursor-pointer'>
              <input type='checkbox' value='' className='sr-only peer'></input>
              <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>
          <div className='row-start-1 row-end-4'>
            <span className='ml-3 text-m font-medium text-gray-900 dark:text-gray-300'>
              Para estudiantes
            </span>
          </div>
        </div> */}

        <h1 className='mb-8 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-white'>
          Explora el futuro talento de tu organización
        </h1>
        <p className='mb-8 text-lg font-normal  lg:text-xl sm:px-16 xl:px-48 text-gray-400'>
          Buscamos ayudarte a conectar a las personas que compartan tu cultura y
          valores; no se trata de encontrar cualquier talento, si no el talento
          especifico que tu organización requiere. Transforma tu empresa
          mediante la tecnología y la inteligencia artificial con Khoble.
        </p>
        <div className='flex flex-col mb-4  space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4'>
          <a
            href='https://web.khoble.com/recruiter/signup/'
            target='_blank'
            className='inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center rounded-lg border  hover:bg-gray-100 focus:ring-4 text-white border-gray-700 hover:bg-gray-700 focus:ring-gray-800'
          >
            Regístrame gratis
          </a>
        </div>
      </div>
      <div>
        <img
          className='h-auto w-9/12 rounded-lg mx-auto'
          src='/images/image-hero.png'
          alt=''
        ></img>
      </div>
      {/* </div>
      <img
        className='h-auto max-w-lg rounded-lg'
        src='/images/image-hero.png'
        alt='image description'
      ></img> */}
    </section>
  );
}
