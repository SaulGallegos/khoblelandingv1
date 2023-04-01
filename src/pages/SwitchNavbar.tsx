export default function SwitchNavbar({
  setVersion,
  version,
}: {
  setVersion: (version: string) => void;
  version: string;
}) {
  return (
    <header>
      <nav className='bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800'>
        <div className='flex flex-wrap justify-between items-center'>
          <div className='flex justify-start items-center'>
            <ul className='flex items-center hidden space-x-8 lg:flex'>
              <li>
                <a
                  aria-label='Our product'
                  title='Our product'
                  className={`cursor-pointer font-medium tracking-wide text-${
                    version !== 'company' ? 'gray-100' : 'rose-500'
                  } transition-colors duration-200`}
                  onClick={() => setVersion('company')}
                >
                  Empresa
                </a>
              </li>
              <li>
                <a
                  aria-label='Our product'
                  title='Our product'
                  className={`cursor-pointer font-medium tracking-wide text-${
                    version === 'company' ? 'gray-100' : 'rose-500'
                  } transition-colors duration-200`}
                  onClick={() => setVersion('student')}
                >
                  Estudiante
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
