import "./main.css"
import Axios from 'axios'
import React,{useState,useEffect} from 'react';

function Main() {
  const [blocks,setblocks]=useState([])
  useEffect(() => {
    fetchblocks();
  }, [])
  useEffect(() => {
    console.log(blocks)
  }, [blocks])
  const fetchblocks=async()=>{
    const response=await Axios('https://blockstream.info/api/blocks');
    setblocks(response.data)    
  }
  return (
    <div className="Main">
      <h5>Recent Blocks</h5>
        <div className="head">
            <h4>Height</h4>
            <p>Timestamp</p>
            <p>Transaction</p>
            <p>Size</p>
            <p>Weight</p>

        </div>
        
      {
        blocks && blocks.map(block=>{
          return(
            <div className="block"  key={block.id} >
            <h4>{block.height}</h4>
            <p>{block.timestamp}</p>
            <p>{block.tx_count}</p>
            <p>{block.size}</p>
            <p>{block.weight}</p>
          </div>
          )

        })
      }
    </div>
 );
}

export default Main;