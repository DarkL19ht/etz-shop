import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-red-300 text-red-500">Vite + React</h1>
      <div className="card bg-red-600">
        <button
          type="button"
          onClick={() => setCount((count) => count + 1)}
          className="bg-red-600"
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs text-red-300">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
