import { CityHeader } from '@/features/city-header'
import { GeoData } from '@/features/geo-data'

export const Main = () => {
  return (
    <main className='flex flex-col gap-4 text-gray-600'>
      <CityHeader />
      <GeoData />
    </main>
  )
}
