import React, { useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import Axios from 'axios';

function BlockDetails() {
  const { blockId } = useParams();
  const [block, setBlock] = useState(null);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    console.log(blockId);
    fetchBlockInfo();
  }, [blockId ]);

  const fetchBlockInfo = async () => {
    setIsLoading(true);
        const response = await Axios(`https://blockstream.info/api/block/${blockId}`);
        setBlock(response.data);
        console.log(response.data)
    setIsLoading(false);
  };

  const handleCopyHash = () => {
    if (block && block.id) {
      try {
        navigator.clipboard.writeText(block.id).then(() => {
          alert(`Hash copied to clipboard!`);
        }).catch((error) => {
          console.error("Copy failed:", error);
          alert(`Failed to copy hash to clipboard.`);
        });
      } catch (error) {
        console.error("Clipboard API not available:", error);
      }
    } else {
      alert(`Hash is not available for copying.`);
    }
  };
  const handleCopyPrevHash = () => {
    if (block && block.previousblockhash) {
      try {
        navigator.clipboard.writeText(block.previousblockhash).then(() => {
          alert(`Previous Block Hash copied to clipboard!`);
        }).catch((error) => {
          console.error("Copy failed:", error);
          alert(`Failed to copy Previous Block Hash to clipboard.`);
        });
      } catch (error) {
        console.error("Clipboard API not available:", error);
      }
    } else {
      alert(`Previous Block Hash is not available for copying.`);
    }
  };

  function timestampConvertor(ts){
    const unixTimestamp = ts 
    const timestampInMilliseconds = unixTimestamp * 1000;
    const date = new Date(timestampInMilliseconds);
    const timeZone = "Asia/Kolkata";
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZone,
    };
    const formattedDateTime = date.toLocaleString("en-US", options);
    return formattedDateTime
  }

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
            <p> {timestampConvertor( block.timestamp)}</p>
            
          </div>
          <div className='eachtxs'>
            <h5> Transaction count:</h5>
            <p> {block.tx_count}</p>
             
          </div>
          <div className='eachtxs'>
            <h5>Size(B):  </h5>
            <p> {block.size}</p>
            
          </div>
          <div className='eachtxs'>
            <h5>Weight(WU):  </h5>
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
            <p> {block.previousblockhash}<button className="copy"  onClick={handleCopyPrevHash}>copy</button></p>
            
          </div>
        </div>
      ):null}    
    </>)
     
    }</>
  );
}

export default BlockDetails;
