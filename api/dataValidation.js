/**
 * Higher-order function that enforces required
 * data is being received
 * @param {function} fn 
 * @param {array} dataFields 
 */
const requiredData = (fn, dataFields) => {
	return (req, res, next) => {
		if (!req.body || !Object.keys(req.body).length) {
			res.status(400).json({ message: "Missing input data" });
		} else if (!fn(Object.keys(req.body), dataFields)) {
			res.status(400).json({ message: "Missing required field." });
		} else {
			next();
		}
	};
};


/**
 * Helper function that confirms all required data is received
 * @param {array} arr 
 * @param {array} target 
 */
const inputDataChecker = (arr, target) => target.every(v => arr.includes(v)); 

module.exports = {
	inputDataChecker, requiredData
};