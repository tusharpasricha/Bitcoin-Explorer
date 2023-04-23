import React from 'react';
import { useNavigate } from 'react-router-dom';

const transactions = [
  {
    title: 'The First Bitcoin Transaction',
    hash: '4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b',
    description: 'On January 12, 2009, the first-ever Bitcoin transaction took place between Satoshi Nakamoto and Hal Finney, a cryptographic pioneer. This transaction sent 10 bitcoins to Finney\'s wallet, marking the beginning of a new era in digital currency.'
  },
  {
    title: 'The Pizza Purchase',
    hash: '7c9d9bef48efc820bc0eee4e8c56b7f8c50f9be44f23368c2c4d7f87e488e37d',
    description: 'On May 22, 2010, Laszlo Hanyecz paid 10,000 BTC for two pizzas, making it the first real-world purchase made with Bitcoin. This transaction is now famously known as "Bitcoin Pizza Day."'
  },
  {
    title: 'The Silk Road Seizure',
    hash: '97c7a8d1d7c9c83ff0a1a1e3a914b75d3a0c43f6307e6c1e960d7b649f4d492b',
    description: 'In October 2013, the FBI shut down the infamous dark web marketplace, Silk Road, and seized over 144,000 bitcoins from its founder, Ross Ulbricht. This seizure remains one of the largest Bitcoin transactions to date.'
  },
  {
    title: 'The $1 Billion Transaction',
    hash: '74f7dc5dc83e84fc8443f95b9d9e583a7f2ade264c3b3dbce4913f931fc7eada',
    description: 'In November 2020, an unknown individual moved 88,857 bitcoins, worth approximately $1 billion at the time, in a single transaction. The identity of the sender and the reason for the transaction remain unknown.'
  }
];

const Remarkabletxs = () => {
  const navigate = useNavigate();

  const handleTransactionClick = (transaction) => {
    navigate(`/transactions/${encodeURIComponent(transaction.description)}/${encodeURIComponent(transaction.title)}/${encodeURIComponent(transaction.hash)}`);
  };

  return (
    <div className='remarkabletxs'>
      <p>Remarkable Transactions</p>
      {transactions.map((transaction) => (
        <div className='eachtxs' key={transaction.hash} onClick={() => handleTransactionClick(transaction)}>
          <h3>{transaction.title}</h3>
          <p>{transaction.hash}</p>
        </div>
      ))}
    </div>
  );
};

export default Remarkabletxs;



// import React, { useEffect, useState } from 'react'
// import { useLocation , useNavigate } from 'react-router-dom';

// const Remarkabletxs = () => {
//   const location = useLocation();
//   const navigation = useNavigate()
//     // const tx =[{"id":0,"name":"Largest Transaction","txid":"d5d27987d2a3dfc724e359870c6644b40e497bdc0589a033220fe15429d88599"},{"id":1,"name":"First recorded transaction","txid":"e3bf3d07d4b0375638d5f1db5255fe07ba2c4cb067cd81b84ee974b6585fb468"},{"id":2,"name":"Bitcoin Pizza Day","txid":"a1075db55d416d3ca199f55b6084e2115b9345e16c5cf302fc80e9d5fbf5d48d"}];
//     // [
//     // {"txid":"959b5a858ee1a0060b7685c723517d9b82f14e4d070ace3ec0ea7c6949176515","version":1,"locktime":0,"vin":[{"txid":"d1019cbd94347b751907e9762e4dcbdc79677c0ef47671be7db722893b558cfe","vout":1,"prevout":{"scriptpubkey":"0020616f6da28704d061acc740a9d5c6ab55864cd22def160494559af5deb4ac50df","scriptpubkey_asm":"OP_0 OP_PUSHBYTES_32 616f6da28704d061acc740a9d5c6ab55864cd22def160494559af5deb4ac50df","scriptpubkey_type":"v0_p2wsh","scriptpubkey_address":"bc1qv9hkmg58qngxrtx8gz5at34t2krye53dautqf9z4nt6aad9v2r0skkctfl","value":3106},"scriptsig":"","scriptsig_asm":"","witness":["ee202aefc6b3574c381ea3fc8dc2e22e06cb245d3dbb3e1b518f65cebcae8d09","30440220511b644d667aa65eef9492ddb069bfef44c397ef7e4d4e9d387854de79b514f9022053e203bcb5ccf668c7c66fc370c5c7733c2bdfb55c80b647b56f16050a37867401","30440220277accead13d229c3f51995e57794807798a66c2752cbeede1c9978e78e26d9702206a4b57710b66d346cbcce6eaa0230e2431d2ed544f866e4a332bc704222bde5a01","210363680dee282909488e3798a6b0287ed80fde760ef57293d0073ffe1298a78932ac6476a9141344093f67618581bea305f40e7ca3e87c6b59b788ad03e8d50bb1672103239d7cc044472ebd3b35400af36f2afaabbaf66d053f95acb59de20638d1c495ad82012088a91439961ad396349445a5128e2273d14efdee1fa6ee8768"],"is_coinbase":false,"sequence":4294967295,"inner_witnessscript_asm":"OP_PUSHBYTES_33 0363680dee282909488e3798a6b0287ed80fde760ef57293d0073ffe1298a78932 OP_CHECKSIG OP_NOTIF OP_DUP OP_HASH160 OP_PUSHBYTES_20 1344093f67618581bea305f40e7ca3e87c6b59b7 OP_EQUALVERIFY OP_CHECKSIGVERIFY OP_PUSHBYTES_3 e8d50b OP_CLTV OP_ELSE OP_PUSHBYTES_33 03239d7cc044472ebd3b35400af36f2afaabbaf66d053f95acb59de20638d1c495 OP_CHECKSIGVERIFY OP_SIZE OP_PUSHBYTES_1 20 OP_EQUALVERIFY OP_HASH160 OP_PUSHBYTES_20 39961ad396349445a5128e2273d14efdee1fa6ee OP_EQUAL OP_ENDIF"}],"vout":[{"scriptpubkey":"51206b5fbe0a61f845d08880b4eb10d34dd3254c0fc48082acaaeca1cc38e214d877","scriptpubkey_asm":"OP_PUSHNUM_1 OP_PUSHBYTES_32 6b5fbe0a61f845d08880b4eb10d34dd3254c0fc48082acaaeca1cc38e214d877","scriptpubkey_type":"v1_p2tr","scriptpubkey_address":"bc1pdd0muznplpzapzyqkn43p56d6vj5cr7yszp2e2hv58xr3cs5mpmsmmzhmm","value":2500}],"size":405,"weight":687,"fee":606,"status":{"confirmed":true,"block_height":775603,"block_hash":"000000000000000000063cbb234d97eeab48afa5fdb4efa117519059a4a12a2e","block_time":1675876577}}
//     // ]
//     // const[fetchTxs,setfetchTxs]=useState({})
//     // useEffect(()=>{
//     //     const result =  axios.get(`https://blockstream.info/api/tx/`)
//     //     setfetchTxs(result.data);
//     // },[])
//     const handleCommentClick = () => {
//       if (isLoggedIn) {
//         // navigate to user's profile page
//        console.log("you can comment")
//       } else {
//         // navigate to login page
//         navigation('/login')
//       }
//     }
//     const isLoggedIn = location?.state?.isLoggedIn
//   return (
//     <div>
//         <h5>Remarkable Transactions</h5>
//         {isLoggedIn ? (
//         <button onClick={handleCommentClick} className='profile-btn'>
//           comment
//         </button>
//           ) : (
//         <button onClick={handleCommentClick} className='login-btn'>
//           Log in to comment
//         </button>
//       )}

//     </div>
//   )
// }

// export default Remarkabletxs

