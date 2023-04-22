import "./main.css"
import Axios from 'axios'
import React,{useState,useEffect} from 'react';

function Main() {
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

  const fetchBlockInfo= async(blockId)=>{
    const response = await Axios(`https://blockstream.info/api/block/${blockId}`);
    setselectedBlock(response.data)
    setblocks([response.data]);
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
            <div className="block" key={block.id} onClick={()=>fetchBlockInfo(block.id)}>            <h4>{block.height}</h4>
            <p>{block.timestamp}</p>
            <p>{block.tx_count}</p>
            <p>{block.size}</p>
            <p>{block.weight}</p>
          </div>
          )

        })
        
      }
      {
          selectedBlock&&
          <div>
          <p><strong>Height:</strong> {selectedBlock.height}</p>
          <p><strong>Timestamp:</strong> {selectedBlock.timestamp}</p>
          <p><strong>Transaction count:</strong> {selectedBlock.tx_count}</p>
          <p><strong>Size:</strong> {selectedBlock.size}</p>
          <p><strong>Weight:</strong> {selectedBlock.weight}</p>

          </div>
        }
    </div>
 );
}

export default Main;