import './App.css';
import Main from './components/main';
import Navbar from './components/navbar';
import SearchBlock from './components/searchBlock';
import SearchTransaction from './components/searchTransaction';
import Footer from './components/footer';
import Remarkabletxs from './components/remarkabletxs';
import {BrowserRouter, Routes,Route} from "react-router-dom";
import Login from './auth/Login';
import Signup from './auth/Signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={
          <>
          <Navbar/>
          <Main/>
          <SearchTransaction/>
          <SearchBlock/>
          <Remarkabletxs/>
          <Footer/>
          </>

        }/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
