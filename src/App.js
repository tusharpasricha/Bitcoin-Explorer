import './App.css';
import Main from './components/main';
import Navbar from './components/navbar';
import SearchBlock from './components/searchBlock';
import SearchTransaction from './components/searchTransaction'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main/>
      <SearchTransaction/>
      <SearchBlock/>
    </div>
  );
}

export default App;
