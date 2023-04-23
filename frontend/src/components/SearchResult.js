import React from 'react';
import { Link } from 'react-router-dom';
import Search from './search';

const SearchResult = ({ searchResult, isTransaction, handleBack }) => {
  return (
    <>
    {console.log("hi"+isTransaction+searchResult)}
      {/* <div>
      <Link to="/">Back</Link>      </div> */}
      <div>
        {isTransaction ? (

                <div className='remarkabletxs'>
                <p> <Link style={{ color:'white' , alignItems:'left'}} to="/">Back</Link></p>
                <div className='eachtxs'>
                <h5>Version: </h5>
                <p> {searchResult?.version}</p>
                
                </div>
                <div className='eachtxs'>
                <h5> Locktime: </h5>
                <p>  {searchResult?.locktime}</p>
                
                </div>
                <div className='eachtxs'>
                <h5> Size: </h5>
                <p> {searchResult?.size}</p>
                
                </div>
                <div className='eachtxs'>
                <h5> Weight:</h5>
                <p> {searchResult?.weight}</p>
                
                </div>
                <div className='eachtxs'>
                <h5>Fee:  </h5>
                <p> {searchResult?.fee}</p>
                
                </div>
                
                </div>

        //   <div>
        //     <h4>Transaction information</h4>
        //     <p>Version: {searchResult?.version}</p>
        //     <p>Locktime: {searchResult?.locktime}</p>
        //     <p>Size: {searchResult?.size}</p>
        //     <p>Weight: {searchResult?.weight}</p>
        //     <p>Fee: {searchResult?.fee}</p>
        //   </div>
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
      </div>
    </>
  );
};

export default SearchResult;
