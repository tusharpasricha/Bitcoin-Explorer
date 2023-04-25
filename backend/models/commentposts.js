const posts = [
  {
    title: "The First Bitcoin Transaction",
    hash: "4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b",
    description:
      "On January 12, 2009, the first-ever Bitcoin transaction took place between Satoshi Nakamoto and Hal Finney, a cryptographic pioneer. This transaction sent 10 bitcoins to Finney's wallet, marking the beginning of a new era in digital currency.",
    comments_commentids: [],
  },
  {
    title: "The Pizza Purchase",
    hash: "7c9d9bef48efc820bc0eee4e8c56b7f8c50f9be44f23368c2c4d7f87e488e37d",
    description:
      'On May 22, 2010, Laszlo Hanyecz paid 10,000 BTC for two pizzas, making it the first real-world purchase made with Bitcoin. This transaction is now famously known as "Bitcoin Pizza Day."',
    comments_commentids: [],
  },
  {
    title: "The Silk Road Seizure",
    hash: "97c7a8d1d7c9c83ff0a1a1e3a914b75d3a0c43f6307e6c1e960d7b649f4d492b",
    description:
      "In October 2013, the FBI shut down the infamous dark web marketplace, Silk Road, and seized over 144,000 bitcoins from its founder, Ross Ulbricht. This seizure remains one of the largest Bitcoin transactions to date.",
    comments_commentids: [],
  },
  {
    title: "The $1 Billion Transaction",
    hash: "74f7dc5dc83e84fc8443f95b9d9e583a7f2ade264c3b3dbce4913f931fc7eada",
    description:
      "In November 2020, an unknown individual moved 88,857 bitcoins, worth approximately $1 billion at the time, in a single transaction. The identity of the sender and the reason for the transaction remain unknown.",
    comments_commentids: [],
  },
];

const comments = [
  {
    commentid: 1,
    post_hash: 1,
    userid: 1,
    thecomment: "Fetch this comment from a text file maybe.",
  },
];

module.exports = { posts, comments };
