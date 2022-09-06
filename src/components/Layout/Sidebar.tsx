import { SearchBar } from '@/features/search-bar'
import { AiFillGithub } from 'react-icons/ai'

export const Sidebar = () => {
  return (
    <aside className='flex flex-col justify-between bg-sky-800 p-8 text-gray-100'>
      {/* header */}
      <header className='flex w-max flex-col gap-3'>
        <h1 className='text-3xl font-extrabold'>Single Line</h1>
        <p className='text-lg text-gray-100'>
          Get relevant information about the city you plan to travel to.
        </p>
        <SearchBar />
      </header>

      {/* tagline */}
      <div className='flex flex-col gap-3 pb-44 text-5xl font-bold text-white'>
        {/* <p className='leading-[1.2]'>Discover a world full of adventures.</p> */}
        <p>Discover.</p>
        <p>Plan new adventures.</p>
        <p>Live.</p>
      </div>

      {/* footer */}
      <footer className='flex items-center justify-between'>
        <span>
          Developed with{' '}
          <a
            className='hover:underline'
            href='https://vitejs.dev/'
            target='_blank'
            rel='noreferrer'
          >
            Vite
          </a>
        </span>
        <a
          href='https://github.com/joangavelan/single-line'
          target='_blank'
          rel='noreferrer'
        >
          <AiFillGithub className='cursor-pointer text-2xl hover:text-green-400' />
        </a>
      </footer>
    </aside>
  )
}
