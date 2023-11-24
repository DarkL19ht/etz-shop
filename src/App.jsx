import RouteRenderer from './route/route-renderer';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <main>
      <BrowserRouter>
      <RouteRenderer />
      </BrowserRouter>
    </main>
  );
}

export default App;
