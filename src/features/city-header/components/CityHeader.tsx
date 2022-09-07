import { FeaturedImage } from './FeaturedImage'
import { US } from 'country-flag-icons/react/3x2'

export const CityHeader = () => {
  return (
    <header className='mb-4 flex flex-col gap-4'>
      <FeaturedImage />
      <div className='flex items-center justify-between text-2xl text-gray-600'>
        <div className='flex items-center gap-2'>
          <h2 className='font-semibold'>Los Angeles</h2>
          <US title='United States' className='mt-1 h-3.5' />
        </div>
        <span>United States</span>
      </div>
    </header>
  )
}
