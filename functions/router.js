const PJSON = require('../package.json')

function respond (req, res, response){
	const endpoint = req.path
	const method = `GET`
	let r = {	
		app: PJSON.description,	
		...response,
		vs: PJSON.version,
		repository: PJSON.repository,
		request: {
			endpoint,
			method,
			unixEpoch: Date.now(),
		},	
		
	}
	res.send(JSON.stringify(r))
}

exports.router = async (req, res, db) => {	
	const endpoint = req.path.toLowerCase()

	switch (endpoint) {

		case `/`:
			respond(req, res, {
				response:{
					status: 200, 
					message: `Help you with something, brah?`,
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
					message: `pus2talk success`,
				}})
			return




		default: {
			respond(req, res, { 
				response:{
					status: 404,
					message: `Endpoint not found`,
				}})
			return
		}
		
	}

}