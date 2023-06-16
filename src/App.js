import Products from './components/Products'
import Navbar from './components/Navbar';
import { popularsales, highlight } from './data/data';
import FlexContent from './components/FlexContent';

function App() {
  return (
    <div className='bg-blue-200 h-screen'>
      <Navbar></Navbar>
      <Products data={popularsales} ifExists></Products>
      <FlexContent endpoint={highlight} ifExists />
    </div>
  );
}

export default App;
