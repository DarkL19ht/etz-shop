import Nav from './components/Nav';
import Hero from './components/Hero';
import Sale from './components/Sale';
import Catalog from './components/Catalog';
import Pagination from './components/Pagination';

function App() {
  return (
    <main className="px-5 py-5 text-sm md:px-10">
      {import.meta.env.VITE_APP_NAME}
      <Nav />
      <Hero />
      <Sale />
      <Catalog />
      <Pagination />
    </main>
  );
}

export default App;
