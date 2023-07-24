import React from 'react';
import { useNavigate } from 'react-router-dom';

const transactions = [
  {
    title: 'The First Bitcoin Transaction',
    hash: '4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b',
    description: 'The first Bitcoin transaction occurred on January 12, 2009. Satoshi Nakamoto, the unknown person or group who created Bitcoin, sent 10 bitcoins to Hal Finney, a well-known cryptographic activist, and early Bitcoin contributor. The transaction was made on the Bitcoin network and was recorded on the blockchain, which is a public ledger that keeps a record of all Bitcoin transactions. At the time, the value of 10 bitcoins was negligible, but today, it would be worth a significant amount of money. This transaction marked the beginning of the Bitcoin economy and paved the way for the development of other cryptocurrencies.'
  },
  {
    title: 'The Pizza Purchase',
    hash: 'a1075db55d416d3ca199f55b6084e2115b9345e16c5cf302fc80e9d5fbf5d48d',
    description: 'On May 22, 2010, Laszlo Hanyecz paid 10,000 BTC for two pizzas, making it the first real-world purchase made with Bitcoin. This transaction is now famously known as "Bitcoin Pizza Day."'
  },
  // {
  //   title: 'The Silk Road Seizure',
  //   hash: '97c7a8d1d7c9c83ff0a1a1e3a914b75d3a0c43f6307e6c1e960d7b649f4d492b',
  //   description: 'In October 2013, the FBI shut down the infamous dark web marketplace, Silk Road, and seized over 144,000 bitcoins from its founder, Ross Ulbricht. This seizure remains one of the largest Bitcoin transactions to date.'
  // },
  // {
  //   title: 'The $1 Billion Transaction',
  //   hash: '74f7dc5dc83e84fc8443f95b9d9e583a7f2ade264c3b3dbce4913f931fc7eada',
  //   description: 'In November 2020, an unknown individual moved 88,857 bitcoins, worth approximately $1 billion at the time, in a single transaction. The identity of the sender and the reason for the transaction remain unknown.'
  // }
  //, {
  //   title: 'imtitle',
  //   hash: 'imhash',
  //   description: 'imdesc'
  // }
];

const Remarkabletxs = () => {
  const navigate = useNavigate();

  const handleTransactionClick = (transaction) => {
    navigate(`/transactions/${encodeURIComponent(transaction.description)}/${encodeURIComponent(transaction.title)}/${encodeURIComponent(transaction.hash)}`);
  };

  // const handleCopyTxid = (transaction) => {
  //   navigator.clipboard.writeText(transaction.txid);
  //   alert(`Copied to clipboard!`);
  // };

  return (
    <div className='remarkabletxs'>
      <p>Remarkable Transactions</p>
      {transactions.map((transaction) => (
        <div className='eachtxs' key={transaction.hash} onClick={() => handleTransactionClick(transaction)}>
          <h3>{transaction.title}</h3>
          <p>{transaction.hash} </p>
          {/* <button className="copy"  onClick={()=>handleCopyTxid(transaction)}> copy </button> */}
        </div>
      ))}
    </div>
  );
};

export default Remarkabletxs;


