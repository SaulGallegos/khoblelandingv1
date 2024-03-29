export default function Hero() {
  return (
    <section className='bg-gray-900'>
      <div className='py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12'>
        <h1 className='mb-8 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-white'>
          Encuentra tu pasión y propósito
        </h1>
        <p className='mb-8 text-2xl font-normal lg:text-2xl sm:px-16 xl:px-38 text-gray-400'>
          Maximiza tu creatividad, competencia, colaboración y compromiso para
          redefinir tu trayectoria y alcanzar tu máximo potencial.
        </p>
        <div className='flex flex-col mb-4  space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4'>
          <a
            href='https://web.khoble.com/student/signup/'
            target='_blank'
            className='inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center rounded-lg border  focus:ring-4  text-white border-gray-700 hover:bg-gray-700 focus:ring-gray-800'
          >
            Crear cuenta gratis
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
