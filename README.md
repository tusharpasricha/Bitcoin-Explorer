# Bitcoin-Explorer
A bitcoin explorer with a feature where you can interact with like minded bitcoiners

#issues resolved
when ever user clicks on copy i want to copy the transaction hash but in this code it automaticaly trigger handlecopytxid
The issue in the code is that we are invoking the handleCopyTxid function directly when rendering the component instead of passing it as a reference to the onClick event. To fix this, we should change the way we're calling handleCopyTxid in the button's onClick attribute.

````javascript
<button className="copy" onClick={() => handleCopyTxid(transaction)}> copy </button>
`````

#find comments of a particular section
````javascript
exports.getAllComments = (req, res, next) => {
  const transactionId = req.params.transactionId;

  Comment.find({ transaction: transactionId })
    .then(comments => {
      res.status(200).json({
        success: true,
        comments: comments
      });
    })
    .catch(err => {
      res.status(500).json({
        errors: [{ error: err }]
      });
    });
};

````

#cors error
CORS is a security feature implemented by web browsers to prevent unauthorized access to resources on a different domain. When your React app makes a request to your backend server, the server needs to include the appropriate CORS headers in its response to allow the request from the specific origin of your React app.
````javascript
app.use(cors()); // <-- Use the 'cors' middleware

\\allow specific origin
const corsOptions = {
  origin: 'https://bitcoin-explorer-tusharpasricha.vercel.app',
};

app.use(cors(corsOptions));

\\manualy add cord headers
app.get('/api/getAllComments/:transaction', (req, res) => {
  const { transaction } = req.params;

  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', 'https://bitcoin-explorer-tusharpasricha.vercel.app');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Your route handling logic here
  // ...
});

````
