const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const logger = require("morgan");

const wordWrap = require("./wordWrap");

// Instantiate server
const server = express();

// Enable middleware
server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(logger("dev"));

const { inputDataChecker, requiredData } = require("./dataValidation");

// Define required fields
const requiredDataFields = ["str", "lineWidth"];
const dataValidation = requiredData(inputDataChecker, requiredDataFields);

/**
 * Returns text formatted by wordWrap function
 * @return {object} formatted text
 */
server.post("/api/wordwrap", dataValidation, async (req, res) => {
	const { str, lineWidth } = req.body;
	try {
		const data = wordWrap(str, lineWidth);
		res.send(data);
	} catch (err) {
		res.status(400).send({message: err.message});
	}
});

server.use("/api", (req, res) => {
	res.send({ api_status: "up" });
});

server.use("/", (req, res) => {
	res.send("<h1>WordWrap API server</h1>");
});

module.exports = server;