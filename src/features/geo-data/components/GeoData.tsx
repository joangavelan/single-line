import { Subheading } from '@/components/Elements/Subheading'
import { Timezone } from './Timezone'
import { Weather } from './Weather'

export const GeoData = () => {
  return (
    <section className='flex flex-col gap-1.5'>
      <Subheading title='Geo Data' />
      <Timezone />
      <Weather />
    </section>
  )
}
