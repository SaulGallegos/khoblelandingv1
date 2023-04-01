export default function GetCandidatesIsEasy() {
  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 '>
      <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
        <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto'>
          <span className='relative inline-block'>
            <svg
              viewBox='0 0 52 24'
              fill='currentColor'
              className='absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block'
            >
              <defs>
                <pattern
                  id='34f481be-159a-4846-821d-9ca19fb6bcc5'
                  x='0'
                  y='0'
                  width='.135'
                  height='.30'
                >
                  <circle cx='1' cy='1' r='.7' />
                </pattern>
              </defs>
              <rect
                fill='url(#34f481be-159a-4846-821d-9ca19fb6bcc5)'
                width='52'
                height='24'
              />
            </svg>
            <span className='relative'>Consigue</span>
          </span>{' '}
          tu primer trabajo khobleando
        </h2>
        <p className='text-base text-gray-700 md:text-lg'>
          Encontrar el talento que necesita tu empresa nunca había sido tan
          fácil.
        </p>
      </div>
      <div className='grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2'>
        <div className='duration-300 transform bg-white border-l-4 border-rose-400 hover:-translate-y-2'>
          <div className='h-full p-5 border border-l-0 rounded-r shadow-sm'>
            <h6 className='mb-2 font-semibold leading-5'>Sin costo</h6>
            <p className='text-sm text-gray-900'>
              Khoble es completamente gratuito para estudiantes universitarios.
              Queremos proporcionarte las mejores herramientas sin costo.
            </p>
          </div>
        </div>
        <div className='duration-300 transform bg-white border-l-4 border-rose-400 hover:-translate-y-2'>
          <div className='h-full p-5 border border-l-0 rounded-r shadow-sm'>
            <h6 className='mb-2 font-semibold leading-5'>Encuentra</h6>
            <p className='text-sm text-gray-900'>
              Ofrecemos empleos en una amplia variedad de industrias, te
              recomendamos las más adecuadas para ti y tu eliges la que más te
              guste.
            </p>
          </div>
        </div>
        <div className='duration-300 transform bg-white border-l-4 border-rose-400 hover:-translate-y-2'>
          <div className='h-full p-5 border border-l-0 rounded-r shadow-sm'>
            <h6 className='mb-2 font-semibold leading-5'>Consigue</h6>
            <p className='text-sm text-gray-900'>
              Cambiarlo a Selecciona: Recibe invitaciones de empleadores y
              selecciona las que más te interesen.
            </p>
          </div>
        </div>
        <div className='duration-300 transform bg-white border-l-4 border-rose-400 hover:-translate-y-2'>
          <div className='h-full p-5 border border-l-0 rounded-r shadow-sm'>
            <h6 className='mb-2 font-semibold leading-5'>Crea una red</h6>
            <p className='text-sm text-gray-900'>
              Ofrecemos una red de contactos global para que los profesionales
              se conecten con empresas, compartan recursos y establezcan
              relaciones laborales de manera inteligente.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
