import * as React from 'react'

export function App() {
  const [count, setCount] = React.useState<number>(0)

  return (
    <main>
      <header>
        <a href='https://github.com/o-az/template-vite-react-ts'>Source code</a>
      </header>
      <section>
        <h4>Counter: {count}</h4>

        <button
          type='button'
          aria-label='Increment counter'
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
        <button
          type='button'
          aria-label='Reset counter'
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </section>
    </main>
  )
}
