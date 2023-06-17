import Products from './components/Products'
import Navbar from './components/Navbar';
import { popularsales, highlight, topratedsales, featured } from './data/data';
import FlexContent from './components/FlexContent';

function App() {
  return (
    <div className='bg-blue-200 h-screen'>
      <Navbar></Navbar>
      <Products data={popularsales} ifExists></Products>
      <FlexContent endpoint={highlight} ifExists />
      <Products data={topratedsales}></Products>
      <FlexContent endpoint={featured}/>
    </div>
  );
}

export default App;
