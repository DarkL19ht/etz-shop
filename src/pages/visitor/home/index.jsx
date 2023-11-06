import Ecommerce from './components/Ecommerce';
import TopSection from './components/TopSection';
import Product from './components/OurProduct';

function Home() {
  return (
    <div >
      <TopSection />
      <div className="pt-[1.45rem]">
        <div className="">
          <Ecommerce />
        </div>
        <Product />
      </div>
    </div>
  );
}

export default Home;
