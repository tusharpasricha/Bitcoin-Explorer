import "./recentblocks.css"
import Axios from 'axios'
import { Link } from 'react-router-dom';
import React,{useState,useEffect} from 'react';

function RecentBlock() {
  const [blocks,setblocks]=useState([])
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchblocks();
  }, [])
  
  
  const fetchblocks=async()=>{
    setIsLoading(true);
    try {
      const response = await Axios('https://blockstream.info/api/blocks');
      setblocks(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }   
  }

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
    <div className="Main">
        {isLoading ? (
        <div className="spinner"></div>
      ) : (
<>
        <h5>Recent Blocks</h5>
        <div className="head">
            <h4>Height</h4>
            <p>Timestamp</p>
            <p>Transaction</p>
            <p>Size(B)</p>
            <p>Weight(WU)</p>
        </div>

        {blocks &&
        blocks.map((block) => (
          <Link style={{ textDecoration: 'none' }} key={block.id} to={`/block/${block.id}`}>
            <div className="block">
              <h4>{block.height}</h4>
              <p>{ timestampConvertor(block.timestamp)}</p>
              <p>{block.tx_count}</p>
              <p>{block.size}</p>
              <p>{block.weight}</p>
            </div>
          </Link>
          
        ))}
        </>
      )}
      
    </div>
 );
}

export default RecentBlock;