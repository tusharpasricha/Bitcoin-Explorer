import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./search.css"

const Search = ({ setSearchR }) => { // history is a prop provided by react-router-dom
  const [searchQuery, setSearchQuery] = useState('');

  const navigate = useNavigate();
  const handleSearch = async () => {
    if (!searchQuery) {
      return;
    }
    try {
      // if the searchQuery is blockHash
      const blockResult = await axios.get(`https://blockstream.info/api/block/${searchQuery}`);
      navigate(`/block/${searchQuery}`);
    } catch (error) {
      try{
        console.log("SEARCH QUERY IS NOT HASH")

        if(searchQuery.length <15){
        //if the searchQuery is block height FIND BLOCKHASH
      const height = parseInt(searchQuery);
      console.log("height"+height)
        if (!isNaN(height)) {
          const blockHashResult = await axios.get(`https://blockstream.info/api/block-height/${height}`);
          console.log(blockHashResult)
          const blockHash = blockHashResult.data;
          console.log(blockHash)
          const blockResult = await axios.get(`https://blockstream.info/api/block/${blockHash}`);
          navigate(`/block/${blockHash}`);
        } }
        
        else {
          console.log("SEARCH QUERY IS NOT HASH AND HEIGHT")
          const transactionResult = await axios.get(`https://blockstream.info/api/tx/${searchQuery}`);
          const jsonData = await transactionResult.data;
          setSearchR(jsonData);
          navigate(`/tx/${searchQuery}`);
        }
    }catch(error){
      console.log('No matching block, transaction, or address found.');
    }
  }
    
  };

  return (
    <>
      <div className='searchbar'>
        <div class="search">
        <div class="search-box">
          <div class="search-field">
            <input placeholder='Search by Block Height, Block Hash or Transaction Id'
            type='text'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} class="input" 
          />
            <div class="search-box-icon">
              <button onClick={handleSearch} class="btn-icon-content">
                <i class="search-icon">
                  <svg xmlns="://www.w3.org/2000/svg" version="1.1" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" fill="#fff"></path></svg>
                </i>
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Search;
