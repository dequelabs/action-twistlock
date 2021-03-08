const http = require('http');

const HTML_PAGE = `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf8" />
    <title>action-twistlock example</title>
  </head>
  <body>
    <h1>action-twistlock example</h1>
  </body>
</html>
`;

/**
 * Simple HTTP server. Responds with our HTML page.
 */

const server = http.createServer((req, res) => {
  console.log(`${req.method} - ${req.url}`);
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.write(HTML_PAGE);
  res.end();
});

/**
 * Bind event listeners.
 */

server
  .on('listening', () => {
    const addr = server.address();
    console.log(`Server listening at http://localhost:${addr.port}`);
  })
  .on('error', (error) => {
    console.error(error);
    process.exit(1);
  });

/**
 * Start the server.
 */

server.listen(3000);
