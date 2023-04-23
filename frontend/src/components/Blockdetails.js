import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Axios from 'axios';

function BlockDetails() {
  const { blockId } = useParams();
  const [block, setBlock] = useState(null);

  useEffect(() => {
    console.log(blockId);
    fetchBlockInfo();
  }, [blockId]);

  const fetchBlockInfo = async () => {
    
        const response = await Axios(`https://blockstream.info/api/block/${blockId}`);
        setBlock(response.data);
        console.log(response.data)
      
  };

  return (
    <div>
      <Link to="/">Back to Block List</Link>
      {block && (
        <div>
            <p>
            <strong>Hash:</strong> {block.id}
          </p>
          <p>
            <strong>Height:</strong> {block.height}
          </p>
          <p>
            <strong>Timestamp:</strong> {block.timestamp}
          </p>
          <p>
            <strong>Transaction count:</strong> {block.tx_count}
          </p>
          <p>
            <strong>Size:</strong> {block.size}
          </p>
          <p>
            <strong>Weight:</strong> {block.weight}
          </p>
        </div>
      )}
    </div>
  );
}

export default BlockDetails;
