const PJSON = require('./package.json')
const { create } = require('./api/create.js')
const { update } = require('./api/update.js')
const { fsdelete } = require('./api/delete.js')
const { checkExistance } = require('./api/checkExistance.js')

exports.router = async (req, res, db) => {	
	const endpoint = req.path
	switch (endpoint) {

		case `/`:
			respond(req, res, {
				response:{
					status: 200, 
					message: `help you with something, brah?`,
				}})
			return

		case `/ping`:
			respond(req, res, {
				response:{
					status: 200,
					message: `pong`,
				}})
			return

		case `/push2talk`:
			respond(req, res, {
				response:{
					status: 200,
					message: `Push2Talk OK`,
				}})
			return

		default: {
			respond(req, res, { 
				response:{
					status: 404,
					message: `Sorry, that endpoint does not exist`,
				}})
			return
		}
	}
}

function respond (req, res, response){
	const endpoint = req.path
	const method = req.method
	let r = {
		...response,
		request: {
			endpoint,
			method,
			unixEpoch: Date.now(),
		},
		app: PJSON.description,
		vs: PJSON.version,
		repository: PJSON.repository,
	}
	res.send(JSON.stringify(r))
}

