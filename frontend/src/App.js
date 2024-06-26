import React, { useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './staticComponents/navbar';
import Footer from './staticComponents/footer';
import { Bitcoin } from './staticComponents/bitcoin';

import Login from './auth/Login';
import Signup from './auth/Signup';

import Search from './search/search';
import TransactionDetails from './search/Transactiondetails'

import RecentBlock from './components/recentblocks';
import Remarkabletxs from './components/remarkabletxs';

import TransactionDescription from './components/TransactionDescription';
import BlockDetails from './components/Blockdetails';



import './App.css';



function App() {
  const [SearchR, setSearchR] = useState({});
  // useEffect(() => {
  //   console.log('data', SearchR);
  // }, [SearchR]);
 
  return ( 
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <Bitcoin/>
              <Search setSearchR={setSearchR} />
              <RecentBlock/>
              <Remarkabletxs />
              <Footer />
            </>

          } />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/block/:blockId" element={<BlockDetails />} />
          <Route path="/transactions/:title/:hash/:description" element={<TransactionDescription />} />
          <Route path="/tx/:query" element={<TransactionDetails SearchR={SearchR} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
