import * as React from 'react'

export function App() {
  const [count, setCount] = React.useState(0)

  const onIncrementClick = (_event: React.MouseEvent<HTMLButtonElement>) => {
    setCount(count + 1)
  }

  return (
    <main>
      <header>
        <a href='https://github.com/o-az/template-vite-react-ts'>Source code</a>
      </header>
      <section>
        <h4>Counter: {count}</h4>

        <button type='button' onClick={onIncrementClick}>
          Increment
        </button>
      </section>
    </main>
  )
}
