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
  }
];

const comments = [
  {
    commentid: 1,
    post_hash:
      "4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b",
    userid: 1,
    thecomment: "The beginning of a new remarkable era in cryptocurrency!",
  },
  {
    commentid: 2,
    post_hash:
      "4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b",
    userid: 4,
    thecomment: "Great informative site",
  },
  {
    commentid: 1,
    post_hash:
      "7c9d9bef48efc820bc0eee4e8c56b7f8c50f9be44f23368c2c4d7f87e488e37d",
    userid: 1,
    thecomment: "PIZZAAAA!",
  },
  {
    commentid: 2,
    post_hash:
      "7c9d9bef48efc820bc0eee4e8c56b7f8c50f9be44f23368c2c4d7f87e488e37d",
    userid: 4,
    thecomment: "I celebrate Bitcoin Pizza day every year!",
  },
];

module.exports = { posts, comments };
