import React, { useState, useEffect,useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import Axios from 'axios';

function BlockDetails() {
  const { blockId } = useParams();
  const [block, setBlock] = useState(null);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    console.log(blockId);
    fetchBlockInfo();
  }, [blockId]);

  const fetchBlockInfo = async () => {
    setIsLoading(true);
        const response = await Axios(`https://blockstream.info/api/block/${blockId}`);
        setBlock(response.data);
        console.log(response.data)
    setIsLoading(false);

      
  };

  //const hashRef = useRef(null);
  const handleCopyHash = () => {
    //hashRef.current?.select(); //cant use ref with p
    navigator.clipboard.writeText(block.id);
    alert(`Copied to clipboard!`);
  };
  const handleCopyPrevHash = () => {
    navigator.clipboard.writeText(block.previousblockhash);
    alert(`Copied to clipboard!`);
  };

  return (
    <>
    {isLoading ? (
        <div className="spinner"></div>
      ) : (
        <>
      
      {block ? (
        <div className='remarkabletxs'>
           <p> <Link style={{ color:'white' , alignItems:'left'}} to="/">Back</Link></p>
           <div className='eachtxs'>
            <h5>Hash: </h5>
            <p > {block.id}
            <button className="copy"  onClick={handleCopyHash}>copy</button></p>
            
          </div>
          <div className='eachtxs'>
            <h5> Height: </h5>
            <p>  {block.height}</p>
            
          </div>
          <div className='eachtxs'>
            <h5> Timestamp: </h5>
            <p> {block.timestamp}</p>
            
          </div>
          <div className='eachtxs'>
            <h5> Transaction count:</h5>
            <p> {block.tx_count}</p>
             
          </div>
          <div className='eachtxs'>
            <h5>Size:  </h5>
            <p> {block.size}</p>
            
          </div>
          <div className='eachtxs'>
            <h5>Weight:  </h5>
            <p> {block.weight}</p>
            
          </div>
          <div className='eachtxs'>
            <h5> Merkle Root: </h5>
            <p>{block.merkle_root} </p>
            
          </div>
          <div className='eachtxs'>
            <h5> Nonce:</h5>
            <p>  {block.nonce}</p>
            
          </div>
          <div className='eachtxs'>
            <h5> Difficulty:</h5>
            <p> {block.difficulty} </p>
            
          </div>
          <div className='eachtxs'>
            <h5> Bits: </h5>
            <p>{block.bits} </p>
            
          </div>
          <div className='eachtxs'>
            <h5> Median Time:</h5>
            <p> {block.mediantime} </p>
            
          </div>
          <div className='eachtxs'>
            <h5>Previous Block Hash:  </h5>
            <p> {block.previousblockhash}<button className="copy"  onClick={handleCopyHash}>copy</button></p>
            
          </div>
        </div>
      ):null}    
    </>)
     
    }</>
  );
}

export default BlockDetails;
