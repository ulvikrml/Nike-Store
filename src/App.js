import { heroapi, popularsales, highlight, topratedsales, featured, footer } from './data/data';
import Products from './components/Products'
import Navbar from './components/Navbar';
import FlexContent from './components/FlexContent';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Cart from './components/Cart'

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Cart></Cart>
      <main className='flex flex-col gap-16'>
        <Hero heroapi={heroapi} />
        <Products data={popularsales} ifExists></Products>
        <FlexContent endpoint={highlight} ifExists />
        <Products data={topratedsales}></Products>
        <FlexContent endpoint={featured} />
      </main>
      <Footer footer={footer} />
    </div>
  );
}

export default App;
