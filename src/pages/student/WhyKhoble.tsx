export default function WhyKhoble() {
  return (
    <section className='bg-gray-900'>
      <div className='gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6'>
        <div className='font-light sm:text-lg text-gray-400'>
          <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-white'>
            ¿Por qué Khoble?
          </h2>
          <p className='mb-4'>
            Queremos hacer un lugar donde las empresas y los trabajadores
            trabajen juntos para estar contentos. No solo queremos ayudar a los
            estudiantes a encontrar empleo, sino también darles una experiencia
            que los ayude a descubrir sus talentos, recibir un buen salario y
            encontrar un trabajo que les guste de verdad.
          </p>
        </div>
        <div className='grid grid-cols-2 gap-4 mt-8'>
          <img
            className='w-full rounded-lg'
            src='https://images.pexels.com/photos/3747474/pexels-photo-3747474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt='office content 1'
          />
          <img
            className='mt-4 w-full lg:mt-10 rounded-lg'
            src='https://images.pexels.com/photos/4069290/pexels-photo-4069290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt='office content 2'
          />
        </div>
      </div>
    </section>
  );
}
