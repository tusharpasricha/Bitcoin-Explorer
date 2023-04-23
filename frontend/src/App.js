import React, { useState ,useEffect} from 'react';
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
import Search from './components/search';
import TransactionDescription from './components/TransactionDescription';
import BlockDetails from './components/Blockdetails';
import SearchResult from './components/SearchResult';
function App() {
  const [isTransaction, setIsTransaction] = useState(false);
  useEffect(() => {
    console.log('isTransaction updated', isTransaction);
  }, [isTransaction]);
  // const handleIsTransactionChange = (isTransaction) => {
  //   setIsTransaction(isTransaction);
  // };
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={
          <>
          
          <Navbar/>
          <Search setIsTransaction={setIsTransaction} />
          <Main/>
          {/* <SearchTransaction/>
          <SearchBlock/> */}
          
          <Remarkabletxs/>
          <Footer/>
          </>

        }/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/block/:blockId" element={<BlockDetails/>} />
        <Route path="/:searchResult/:query" element={<SearchResult isTransaction={isTransaction}/>} />

        <Route path="/transactions/:title/:hash/:description" element={<TransactionDescription />} />
        
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
