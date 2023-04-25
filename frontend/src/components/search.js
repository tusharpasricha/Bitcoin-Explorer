// import React, { useState } from 'react';
// import axios from 'axios';

// const Search = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [searchResult, setSearchResult] = useState({});
//   const [isTransaction, setIsTransaction] = useState(false);

//   const handleSearch = async () => {
//     if (!searchQuery) {
//       return;
//     }
//     try {
//       const blockResult = await axios.get(`https://blockstream.info/api/block/${searchQuery}`);
//       setSearchResult(blockResult.data);
//       setIsTransaction(false);
//     } catch (error) {
//       const transactionResult = await axios.get(`https://blockstream.info/api/tx/${searchQuery}`);
//       setSearchResult(transactionResult.data);
//       setIsTransaction(true);
//     }
//   };

//   return (
//     <>
//       <div>
//         <input
//           placeholder='Search by block hash or transaction id'
//           type='text'
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//         <button onClick={handleSearch}>Search</button>
//       </div>
//       {Object.keys(searchResult).length > 0 && (
//         <div>
//           {isTransaction ? (
//             <div>
//               <h4>Transaction information</h4>
//               <p>Version: {searchResult.version}</p>
//               <p>Locktime: {searchResult.locktime}</p>
//               <p>Size: {searchResult.size}</p>
//               <p>Weight: {searchResult.weight}</p>
//               <p>Fee: {searchResult.fee}</p>
//             </div>
//           ) : (
//             <div>
//               <h4>Block information</h4>
//               <p>Height: {searchResult.height}</p>
//               <p>Version: {searchResult.version}</p>
//               <p>Timestamp: {searchResult.timestamp}</p>
//               <p>Nonce: {searchResult.nonce}</p>
//               <p>Size: {searchResult.size}</p>
//               <p>Weight: {searchResult.weight}</p>
//             </div>
//           )}
//         </div>
//       )}
//     </>
//   );
// };

// export default Search;



import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Search = ({ setIsTransaction ,setSearchR }) => { // history is a prop provided by react-router-dom
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState({});
  // const [isTransaction, setIsTransaction] = useState(false);
  const navigate = useNavigate();
  const handleSearch = async () => {
    if (!searchQuery) {
      return;
    }
    try {
      const blockResult = await axios.get(`https://blockstream.info/api/block/${searchQuery}`);
      setSearchResult(blockResult.data);
      setIsTransaction(false);
      navigate(`/block/${searchQuery}`);
    } catch (error) {
      try{

      const height = parseInt(searchQuery);
        if (!isNaN(height)) {
          const blockHashResult = await axios.get(`https://blockstream.info/api/block-height/${height}`);
          console.log(blockHashResult)
          const blockHash = blockHashResult.data;
          console.log(blockHash)
          const blockResult = await axios.get(`https://blockstream.info/api/block/${blockHash}`);
          setSearchResult(blockResult.data);
          setIsTransaction(false);
          navigate(`/block/${blockHash}`);
        } else {
          const transactionResult = await axios.get(`https://blockstream.info/api/tx/${searchQuery}`);
          const jsonData = await transactionResult.data;
          setSearchResult(jsonData);
          setSearchR(jsonData);
          setIsTransaction(true);
          navigate(`/tx/${searchQuery}`);
        }
    }catch(error){
      console.log('No matching block, transaction, or address found.');
    }
  }
    
  };

  return (
    <>
      <div className='searchbar'>
        <input
          placeholder='Search by Block Height, Block Hash or Transaction Id'
          type='text'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      
    </>
  );
};

export default Search;
