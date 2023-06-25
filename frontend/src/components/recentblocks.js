import "./recentblocks.css"
import Axios from 'axios'
import { Link } from 'react-router-dom';
import React,{useState,useEffect} from 'react';

function RecentBlock() {
  const [blocks,setblocks]=useState([])
  const [selectedBlock,setselectedBlock]=useState(null)
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
            <Link style={{ textDecoration: 'none' }} key={block.id} to={`/block/${block.id}`}>
            <div className="block">
              <h4>{block.height}</h4>
              <p>{block.timestamp}</p>
              <p>{block.tx_count}</p>
              <p>{block.size}</p>
              <p>{block.weight}</p>
            </div>
          </Link>
          
          )

        })
        
      }
      
    </div>
 );
}

export default RecentBlock;