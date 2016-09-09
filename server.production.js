delete process.env.BROWSER;

import express from 'express';
import logger from 'morgan';
import compression from 'compression';
import http from 'http';

const app = express(); // delcare application
const PORT = process.env.PORT || 3002;

app.use(compression()); // compress compatible files for quicker client load time
app.use(logger('dev')); // log content

// Set path to public assets
app.use('/tictactoe/resources', express.static('resources'));
app.use('/tictactoe/static', express.static('dist'));

app.use('*', (req, res) => {
  res.status(200).send(renderFullPage());
});

// create server based on application configuration
const server = http.createServer(app);

// start the server listening on specified port
server.listen(PORT, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log('App listening on port', PORT);
});

/**
 * Takes a react rendering in string format and returns a full html page.
 *
 * @param {string} app - react component to be rendered
 * @return {string} full html page
 */
function renderFullPage() {
  return `
    <!doctype html>
    <html>
      <head>
        <link rel="stylesheet" href="/tictactoe/static/bundle.min.css">
        <link rel="stylesheet" href="https://cdn.rawgit.com/twbs/bootstrap/v4-dev/dist/css/bootstrap.css">
      </head>
      <body id="app-body">
        <div class="react-container"></div>
      </body>
      <script src="/tictactoe/static/bundle.min.js"></script>
    </html>
  `;
}
