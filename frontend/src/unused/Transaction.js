import { useState, useEffect } from "react";

function Transaction({ tx }) {
  const { txid, vin, vout } = tx;

  return (
    <div>
      <h3>{txid}</h3>
      <p>Inputs: {vin.length}</p>
      <p>Outputs: {vout.length}</p>
    </div>
  );
}

function Transactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    async function fetchTransactions() {
      const response = await fetch("https://blockstream.info/api/tx/recent");
      const data = await response.json();
      setTransactions(data);
    }
    fetchTransactions();
  }, []);

  return (
    <div>
      <h2>Recent Bitcoin Transactions</h2>
      {transactions.map((tx) => (
        <Transaction key={tx.txid} tx={tx} />
      ))}
    </div>
  );
}

export default Transactions;
