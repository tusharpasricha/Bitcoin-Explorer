import React,{useState,useEffect} from 'react';
import axios from 'axios';

const SearchBlock = () => {
  const[blockHash,setblockHash]=useState('');
  const[blockInfo,setblockInfo]=useState({ });

  const searchBlock = async()=>{
    console.log('BlockHash')
    const result = await axios.get(`https://blockstream.info/api/block/${blockHash}`)
    setblockInfo(result.data);
  }
  return (
    <>
    <div>
      <input
      placeholder='Block hash'
      type="text"
      value={blockHash}
      onChange={(e)=>setblockHash(e.target.value)}
      />
      <button onClick={searchBlock}>Search</button>
    </div>
    {blockInfo && (
      <div>
        <h4>Block information</h4>
          <p>Height: {blockInfo.height}</p>
          <p>Version: {blockInfo.timestamp}</p>
          <p>Timestamp: {blockInfo.timestamp}</p>
          <p>Nonce: {blockInfo.nonce}</p>
          <p>Size: {blockInfo.size}</p>
          <p>Weight: {blockInfo.weight}</p>
      </div>
    )}
    </>
  )
}

export default SearchBlock;