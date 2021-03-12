const http = require("http");
const fs = require("fs").promises;

const hostname = "127.0.0.1";
const port = 3000;

const requestListener = (req, res) => {
	fs.readFile(__dirname + "/exercice_3.html")
		.then((contents) => {
			res.setHeader("Content-Type", "text/html");
			res.writeHead(200);
			res.end(contents);
		})
		.catch((err) => {
			res.writeHead(500);
			res.end(err);
			return;
		});
};

const server = http.createServer(requestListener);

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
