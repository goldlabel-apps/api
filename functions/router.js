const PJSON = require('../package.json')
// const { create } = require('./create.js')
// const { update } = require('./update.js')
// const { fsdelete } = require('./delete.js')
// const { checkExistance } = require('./checkExistance.js')

function respond (req, res, response){
	const endpoint = req.path
	const method = `GET`
	let r = {		
		description: PJSON.description,
		vs: PJSON.version,
		repository: PJSON.repository,
		request: {
			endpoint,
			method,
			unixEpoch: Date.now(),
		},	
		...response,
	}
	res.send(JSON.stringify(r))
}

exports.router = async (req, res, db) => {	
	const endpoint = req.path
	const home = `http://localhost:5001/listingslab--express-api/us-central1/api`
	// const home = `https://api.listingslab.com`
	switch (endpoint) {

		case `/`:
			respond(req, res, { 
				
				response:{
					status: 200, 
					message: `help you with something, brah?`,
					endpoints: [
						`${home}/ping`,
						`${home}/p2t`,
					]
				}})
			return

		case `/ping`:
			respond(req, res, { 
				
				response:{
					status: 200,
					message: `pong`,
					home,
				}})
			return

		case `/p2t`:
			respond(req, res, { 
				
				response:{
					status: 200,
					message: `Push 2 Talk`,
					home,
				}})
			return




		default: {
			respond(req, res, { 
				response:{
					status: 500,
					message: `Bad endpoint`,
					home,
				}})
			return
		}
		
	}

}