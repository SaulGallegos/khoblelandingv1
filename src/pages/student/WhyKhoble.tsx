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
                  Khoble?
                </span>
              </span>
            </h2>
            <p className='text-base text-gray-700 md:text-lg'>
              No somos solo una startup; estamos aquí para remodelar el mercado
              laboral tal como lo conocemos. Nuestro objetivo es crear un
              entorno colaborativo en el que las empresas y los empleados se
              unan para garantizar la satisfacción de ambas partes, en lugar de
              solo una. De un lado queremos ayudar a los estudiantes a ir más
              allá de simplemente seguir un proceso para conseguir un empleo y,
              en cambio, brindarles una experiencia que les permita descubrir en
              qué son buenos, recibir el salario que merecen y, lo más
              importante, encontrar un trabajo que realmente les guste.
              Paralelamente, apoyamos a las empresas en su camino hacia un
              enfoque más centrado en las personas, desmantelando la burocracia
              y empoderando a los colaboradores para liberarse de las
              trayectorias profesionales tradicionales. Esto lleva a la creación
              de organizaciones más fuertes y cohesionadas.
            </p>
          </div>
          {/* <div className='grid gap-5 row-gap-8 sm:grid-cols-2'>
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
