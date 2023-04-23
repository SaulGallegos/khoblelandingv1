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
              Nuestra estrategia se centra en tres pilares fundamentales: 1)
              mejorar la retención en las empresas, 2) reducir la desconexión
              entre los colaboradores y 3) fomentar un ambiente colaborativo
              durante el proceso de reclutamiento, para ayudar a las empresas a
              encontrar y contratar a estudiantes que se ajusten a su identidad
              y cultura, además de contar con habilidades específicas. También
              brindamos a los estudiantes la oportunidad de descubrir sus
              talentos y conectarse con empresas, para encontrar trabajos bien
              remunerados y apasionantes. Reconocemos que cada organización es
              única, por lo que nos esforzamos por proporcionar herramientas
              personalizadas que ayuden a encontrar al candidato ideal, no solo
              por sus habilidades, sino también por su compatibilidad con la
              empresa. Para lograrlo, planeamos implementar inteligencia
              artificial y aprendizaje automático, para simplificar y
              automatizar los procesos actuales y mejorar la búsqueda para ambas
              partes. Al conectar a empresas y candidatos, podemos contribuir a
              la construcción de organizaciones sólidas y cohesionadas.
            </p>
          </div>
          {/* <div className='grid gap-5 row-gap-8 sm:grid-cols-2'>
            <div className='bg-white border-l-4 shadow-sm border-rose-500'>
              <div className='h-full p-5 border border-l-0 rounded-r'>
                <h6 className='mb-2 font-semibold leading-5'>Encuentra</h6>
                <p className='text-sm text-gray-900'>
                  Entendemos que cada organización es única, y por eso nos
                  esforzamos en proporcionar las herramientas necesarias para
                  que encuentres al candidato ideal, no solo por sus
                  habilidades, sino también por su compatibilidad con la
                  empresa.
                </p>
              </div>
            </div>
            <div className='bg-white border-l-4 shadow-sm border-rose-500'>
              <div className='h-full p-5 border border-l-0 rounded-r'>
                <h6 className='mb-2 font-semibold leading-5'>Conecta</h6>
                <p className='text-sm text-gray-900'>
                  Planeamos utilizar inteligencia artificial y aprendizaje
                  automático para simplificar y automatizar los procesos
                  actuales, implementando algoritmos de coincidencia
                  personalizados que prioricen y mejoren la búsqueda para ambas
                  partes. Al unir a empresas y candidatos, podemos contribuir a
                  la construcción de organizaciones más sólidas y cohesionadas.
                </p>
              </div>
            </div>
          </div> */}
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
