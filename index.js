require("dotenv").config();

const server = require("./api/server");

const port = process.env.PORT || 5000;

server.listen(port, () => console.log(`API server running on port ${port}`));