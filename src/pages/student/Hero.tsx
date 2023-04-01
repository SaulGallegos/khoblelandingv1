export default function Hero() {
  return (
    <section className='bg-white dark:bg-gray-900'>
      <div className='py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12'>
        <h1 className='mb-8 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>
          Encuentra el trabajo adecuado para tu perfil universitario.
        </h1>
        <p className='mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400'>
          Basado en tus intereses y habilidades, dentro de khoble te
          proporcionamos las mejores propuestas de trabajo adecuadas a tu
          perfil. Nuestra misión es ayudarte a encontrar el mejor trabajo para
          ti y promover un acceso igualitario a oportunidades laborales de
          calidad.
        </p>
        <div className='flex flex-col mb-4  space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4'>
          <a
            href='https://web.khoble.com/student/signup/'
            target='_blank'
            className='inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800'
          >
            Registrame gratis
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
