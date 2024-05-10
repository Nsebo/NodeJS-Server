const http = require('http');
const os = require('os');

const server = http.createServer((req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  // Check if it's a GET request
  if (req.method === 'GET') {
    // Simulate asynchronous operation with random delay
    setTimeout(() => {
      // Get CPU and OS information
      const cpuInfo = os.cpus();
      const osInfo = {
        platform: os.platform(),
        release: os.release(),
        totalMemory: os.totalmem(),
        freeMemory: os.freemem(),
      };

      // Respond with CPU and OS information
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ cpuInfo, osInfo }));
    }, Math.random() * 1000); // Random delay up to 1 second
  } else {
    // Handle other HTTP methods
    res.writeHead(405, { 'Content-Type': 'text/plain' });
    res.end('Method Not Allowed');
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
