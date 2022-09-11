import { useState } from 'react';

export function BoilerPlate() {
  const [count, setCount] = useState(0)
  return <>
    <button onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </button>
    <p>
      Edit <code>src/App.jsx</code> and save to test HMR
    </p>
  </>;
}
