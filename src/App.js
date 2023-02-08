import './App.css';
import Main from './components/main';
import SearchBlock from './components/searchBlock';
import SearchTransaction from './components/searchTransaction'

function App() {
  return (
    <div className="App">
      Bitcoin Explorer
      <Main/>
      <SearchTransaction/>
      <SearchBlock/>
     
  
    </div>
  );
}

export default App;
