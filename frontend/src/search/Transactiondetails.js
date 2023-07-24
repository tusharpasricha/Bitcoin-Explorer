import React from 'react';
import { Link } from 'react-router-dom';

const TransactionDetails = ({SearchR }) => {
  const handleCopyTxid = () => {
    navigator.clipboard.writeText(SearchR.txid);
    alert(`Copied to clipboard!`);
  };
  const handleCopyBlockHash = () => {
    navigator.clipboard.writeText(SearchR.status.block_hash);
    alert(`Copied to clipboard!`);
  };
  return (
    <>
    {console.log(SearchR)}
    {/* IT IS Transaction DATA */}
    {console.log("txid"+SearchR.txid)}
      
        
                <div className='remarkabletxs'>
                <p> <Link style={{ color:'white' , alignItems:'left'}} to="/">Back</Link></p>
                        <div className='eachtxs'>
                        <h5>Transaction ID </h5>
                        <p> {SearchR.txid}<button className="copy"  onClick={handleCopyTxid}>copy</button></p>
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
                        <p> {SearchR?.status.block_hash}<button className="copy"  onClick={handleCopyBlockHash}>copy</button></p>
                        </div>

                        <div className='eachtxs'>
                        <h5> Block Time:</h5>
                        <p> {SearchR?.status.block_time}</p>
                        </div>                        
                </div>  
    </>
  );
};

export default TransactionDetails;
