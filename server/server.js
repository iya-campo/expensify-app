// EXPRESS Server
// reference(s): http://expressjs.com/

const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

// informs EXPRESS of the public folder's location.
app.use(express.static(publicPath));

// handles other pages of the app
// without it, routes such as /create will NOT work.
// request - contains information about the request.
// response - lets you manipulate the response.
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

// sets the port of server.
app.listen(port, () => {
  console.log('Server is up!');
});
