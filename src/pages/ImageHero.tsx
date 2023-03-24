import Image from 'next/image';

export default function ImageHero() {
  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div className='max-w-xl mb-6 sm:mx-auto sm:text-center md:mb-10 lg:max-w-2xl'>
        <p className='mb-1 text-xs font-semibold tracking-wide uppercase md:mb-2'>
          New History
        </p>
        <p className='text-base text-gray-700 md:text-lg'>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque rem aperiam, eaque ipsa quae.
        </p>
      </div>
      <Image
        src='/images/image-hero.png'
        height={600}
        width={1200}
        alt='Your Name'
      />
    </div>
  );
}
