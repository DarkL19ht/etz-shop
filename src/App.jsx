import Nav from './components/Nav';
import Hero from './components/Hero';
import Sale from './components/Sale';
import Catalog from './components/Catalog';
import Pagination from './components/Pagination';

function App() {
  return (
    <main className="px-5 md:px-10 py-5 text-sm">
      <Nav />
      <Hero />
      <Sale />
      <Catalog />
      <Pagination />
    </main>
  );
}

export default App;
