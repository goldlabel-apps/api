const PJSON = require('../package.json')

function respond (req, res, response){
	const endpoint = req.path
	const method = `GET`
	let r = {	
		app: PJSON.description,	
		// eslint-disable-next-line
		response: response.response,
		request: {
			endpoint,
			method,
			unixEpoch: Date.now(),
		},	
		openSource: PJSON.repository,
		vs: PJSON.version,
	}
	res.send(JSON.stringify(r))
}

exports.router = async (req, res, db) => {	
	let endpoint = req.path.toLowerCase()
	if(endpoint.substr(-1) === '/') {
        endpoint =  endpoint.substr(0, endpoint.length - 1)
    }

	switch (endpoint) {

		case ``:
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
					message: `Sorry, your endpoint was not found`,
				}})
			return
		}
		
	}

}