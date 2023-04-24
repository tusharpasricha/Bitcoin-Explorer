import React from 'react';
import { Link } from 'react-router-dom';
import Search from './search';

const SearchResult = ({SearchR, searchResult, isTransaction, handleBack }) => {
  return (
    <>
    {console.log("1"+searchResult)}
    {console.log(SearchR)}
    {console.log("txid"+SearchR.txid)}
      
        {isTransaction ? (
                <div className='remarkabletxs'>
                <p> <Link style={{ color:'white' , alignItems:'left'}} to="/">Back</Link></p>
                        <div className='eachtxs'>
                        <h5>Transaction ID </h5>
                        <p> {SearchR.txid}</p>
                        </div>

                        <div className='eachtxs'>
                        <h5> Version: </h5>
                        <p>  {SearchR?.version}</p>
                        </div>

                        <div className='eachtxs'>
                        <h5> Locktime: </h5>
                        <p> {SearchR?.locktime}</p>
                        </div>

                        <div className='eachtxs'>
                        <h5> Input TXID:</h5>
                        <p> {SearchR?.vin[0].txid}</p>
                        </div>

                        <div className='eachtxs'>
                        <h5>Input Vout:  </h5>
                        <p> {SearchR?.vin[0].vout}</p>
                        </div>
                        {/* <div className='eachtxs'>
                        <h5>Output ScriptPubKey: </h5>
                        <p> {SearchR.vout[0].scriptpubkey}</p>
                        </div> */}

                        <div className='eachtxs'>
                        <h5> Output Value: </h5>
                        <p>  {SearchR?.vout[0].value}</p>
                        </div>

                        <div className='eachtxs'>
                        <h5> Size: </h5>
                        <p> {SearchR?.size}</p>
                        </div>

                        <div className='eachtxs'>
                        <h5> Weight:</h5>
                        <p> {SearchR?.weight}</p>
                        </div>

                        <div className='eachtxs'>
                        <h5>Fee:  </h5>
                        <p> {SearchR?.fee}</p>
                        </div>
                        <div className='eachtxs'>
                        <h5>Confirmed: </h5>
                        <p> {SearchR.status.confirmed ? 'Yes' : 'No'}</p>
                        </div>

                        <div className='eachtxs'>
                        <h5> Block Height: </h5>
                        <p>  {SearchR?.status.block_height}</p>
                        </div>

                        <div className='eachtxs'>
                        <h5> Block Hash: </h5>
                        <p> {SearchR?.status.block_hash}</p>
                        </div>

                        <div className='eachtxs'>
                        <h5> Block Time:</h5>
                        <p> {SearchR?.status.block_time}</p>
                        </div>

                        
                </div>
      
        ) : (
            <div className='remarkabletxs'>
           <p> <Link style={{ color:'white' , alignItems:'left'}} to="/">Back</Link></p>
           <div className='eachtxs'>
            <h5>Hash: </h5>
            <p> {searchResult?.id}</p>
            
          </div>
          <div className='eachtxs'>
            <h5> Height: </h5>
            <p>  {searchResult?.height}</p>
            
          </div>
          <div className='eachtxs'>
            <h5> Timestamp: </h5>
            <p> {searchResult?.timestamp}</p>
            
          </div>
          <div className='eachtxs'>
            <h5> Transaction count:</h5>
            <p> {searchResult?.tx_count}</p>
             
          </div>
          <div className='eachtxs'>
            <h5>Size:  </h5>
            <p> {searchResult?.size}</p>
            
          </div>
          <div className='eachtxs'>
            <h5>Weight:  </h5>
            <p> {searchResult?.weight}</p>
            
          </div>
          <div className='eachtxs'>
            <h5> Merkle Root: </h5>
            <p>{searchResult?.merkle_root} </p>
            
          </div>
          <div className='eachtxs'>
            <h5> Nonce:</h5>
            <p>  {searchResult?.nonce}</p>
            
          </div>
          <div className='eachtxs'>
            <h5> Difficulty:</h5>
            <p> {searchResult?.difficulty} </p>
            
          </div>
          <div className='eachtxs'>
            <h5> Bits: </h5>
            <p>{searchResult?.bits} </p>
            
          </div>
          <div className='eachtxs'>
            <h5> Median Time:</h5>
            <p> {searchResult?.mediantime} </p>
            
          </div>
          <div className='eachtxs'>
            <h5>Previous Block Hash:  </h5>
            <p> {searchResult?.previousblockhash}</p>
            
          </div>
        </div>
          
        )}
      
    </>
  );
};

export default SearchResult;
