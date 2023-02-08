import './App.css';
import Main from './components/main';
import Navbar from './components/navbar';
import SearchBlock from './components/searchBlock';
import SearchTransaction from './components/searchTransaction';
import Footer from './components/footer';
import Remarkabletxs from './components/remarkabletxs';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main/>
      <SearchTransaction/>
      <SearchBlock/>
      <Remarkabletxs/>
      <Footer/>
    </div>
  );
}

export default App;
