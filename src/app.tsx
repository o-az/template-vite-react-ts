import * as React from 'react'

export function App() {
  const [count, setCount] = React.useState<number>(0)

  return (
    <main>
      <header className='mb-auto w-full text-right'>
        <a
          target='_blank'
          rel='noreferrer'
          href='https://github.com/o-az/template-vite-react-ts'
          className='h-full bg-amber-200 pr-2 text-blue-600 text-xs'
        >
          source code
        </a>
      </header>
      <section className='mx-auto mt-5 flex h-full max-w-36 flex-col items-center space-y-2'>
        <h4 className='mb-3'>
          counter: <span className='font-bold'>{count}</span>
        </h4>

        <button
          type='button'
          aria-label='Increment counter'
          onClick={() => setCount(count + 1)}
          className='w-full rounded bg-pink-300 px-4 py-2 font-bold text-black hover:scale-105 hover:cursor-pointer hover:bg-pink-400 hover:text-white'
        >
          increment
        </button>
        <button
          type='button'
          aria-label='Reset counter'
          onClick={() => setCount(0)}
          className='w-full rounded bg-blue-300 px-4 py-2 font-bold text-black hover:scale-105 hover:cursor-pointer hover:bg-blue-400 hover:text-white'
        >
          reset
        </button>
      </section>
    </main>
  )
}
