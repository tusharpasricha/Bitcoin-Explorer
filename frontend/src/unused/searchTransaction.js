import React,{useState,useEffect} from 'react';
import axios from 'axios';

const SearchTransaction = () => {
  const[transactionId,setTransactionId]=useState('');
  const[transactionInfo,setTransactionInfo]=useState({ });

  const searchTransaction = async()=>{
    console.log('transactionId')
    const result = await axios.get(`https://blockstream.info/api/tx/${transactionId}`)
    setTransactionInfo(result.data);
  }
  return (
    <>
    <div>
      <br></br>
      <input
      placeholder='Transaction Id'
      type="text"
      value={transactionId}
      onChange={(e)=>setTransactionId(e.target.value)}
      />
      <button onClick={searchTransaction}>Search</button>
    </div>
    {transactionInfo && (
      <div>
        <h4>Transaction information</h4>
          <p>Version: {transactionInfo.version}</p>
          <p>Locktime: {transactionInfo.locktime}</p>
          <p>Size: {transactionInfo.size}</p>
          <p>Weight: {transactionInfo.weight}</p>
          <p>Fee: {transactionInfo.fee}</p>
      </div>
    )}
    </>
  )
}

export default SearchTransaction