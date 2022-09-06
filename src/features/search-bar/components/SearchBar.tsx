import * as React from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { FaSearch } from 'react-icons/fa'

const cities = [
  { id: 1, name: 'Los Angeles, USA' },
  { id: 2, name: 'São Paulo, BR' },
  { id: 3, name: 'Lima, PE' },
  { id: 4, name: 'New York, USA' },
  { id: 5, name: 'Saint Petersburg, RU' },
  { id: 6, name: 'Tokio, JP' }
]

export const SearchBar = () => {
  const [selected, setSelected] = React.useState(cities[0])
  const [query, setQuery] = React.useState('')

  const filteredCities =
    query === ''
      ? cities
      : cities.filter((city) =>
          city.name
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        )

  return (
    <div className='mt-2 flex h-11 gap-2.5'>
      <Combobox
        as='div'
        className='relative flex flex-1'
        value={selected}
        onChange={setSelected}
      >
        <div className='relative w-full cursor-default overflow-hidden rounded-sm bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm'>
          <Combobox.Input
            className='h-full w-full border-none px-4 pr-10 text-[1rem] leading-5 text-gray-900 outline-none focus:ring-0'
            displayValue={(city: any) => city.name}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
        <Transition
          as={React.Fragment}
          leave='transition ease-in duration-100'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
          afterLeave={() => setQuery('')}
        >
          <Combobox.Options className='absolute top-14 max-h-60 w-full overflow-auto rounded-sm bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-[1rem]'>
            {filteredCities.length === 0 && query !== '' ? (
              <div className='relative cursor-default select-none py-2 px-4 text-gray-700'>
                Nothing found.
              </div>
            ) : (
              filteredCities.map((city) => (
                <Combobox.Option
                  key={city.id}
                  className={({ active }) =>
                    `relative cursor-default select-none p-3 ${
                      active ? 'bg-sky-600 text-white' : 'text-gray-900'
                    }`
                  }
                  value={city}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {city.name}
                      </span>
                    </>
                  )}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </Transition>
      </Combobox>
      <div className='grid cursor-pointer place-items-center rounded-sm bg-amber-500 px-5 shadow-md hover:text-slate-800'>
        <FaSearch />
      </div>
    </div>
  )
}
