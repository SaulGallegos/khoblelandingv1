export default function WhyKhoble() {
  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div className='grid gap-5 row-gap-8 lg:grid-cols-2'>
        <div className='flex flex-col justify-center'>
          <div className='max-w-xl mb-6'>
            <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
              ¿Por qué{' '}
              <span className='relative px-1'>
                <div className='absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400' />
                <span className='relative inline-block text-rose-400'>
                  khoble?
                </span>
              </span>
            </h2>
            <p className='text-base text-gray-700 md:text-lg'>
              Nuestra plataforma ofrece herramientas inteligentes para encontrar
              al candidato ideal y construir una red de profesionales. Puedes
              buscar por habilidades, experiencia, educación y otros criterios
              para seleccionar los candidatos que más se adecuen a tus
              necesidades. Además, ofrecemos herramientas de colaboración para
              trabajar en proyectos de manera eficiente.
            </p>
          </div>
          <div className='grid gap-5 row-gap-8 sm:grid-cols-2'>
            <div className='bg-white border-l-4 shadow-sm border-rose-500'>
              <div className='h-full p-5 border border-l-0 rounded-r'>
                <h6 className='mb-2 font-semibold leading-5'>Encuentra</h6>
                <p className='text-sm text-gray-900'>
                  Grandes cantidades de talento estan a la espera de
                  oportunidades laborales importantes en sus carreras
                </p>
              </div>
            </div>
            <div className='bg-white border-l-4 shadow-sm border-rose-500'>
              <div className='h-full p-5 border border-l-0 rounded-r'>
                <h6 className='mb-2 font-semibold leading-5'>Conecta</h6>
                <p className='text-sm text-gray-900'>
                  Conecta con profesionales de tu sector y construye una red de
                  contactos para futuras oportunidades
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            className='object-cover w-full h-56 rounded shadow-lg sm:h-96'
            src='https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
          />
        </div>
      </div>
    </div>
  );
}
