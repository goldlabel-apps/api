const PJSON = require('../package.json')
const { getTing } = require( './fingerprint' )

exports.router = async (req, res, db) => {	

	let endpoint = req.path.toLowerCase()
	if(endpoint.substr(-1) === '/') {
        endpoint =  endpoint.substr(0, endpoint.length - 1)
    }
    let exploded = endpoint.split(`/`)
    
    let fingerprint = ``
    if ( exploded[1] === `fingerprint` ){
    	endpoint = `/fingerprint`
    	if (exploded[2]){
    		fingerprint = exploded[2]
    	}
    }

	switch (endpoint) {

		case ``:
			respond(req, res, {
				response:{
					status: 200, 
					data: { message: `Help you with something, brah?` },
				}})
			return

		case `/fingerprint`:
			const ting = await getTing(req, res, db, fingerprint)
			respond(req, res, {
				response:{
					status: 200,
					data: {
						ting,
					},
				}})
			return

		default: {
			respond(req, res, { 
				response:{
					status: 404,
					data: { 
						message: `Sorry, that endpoint does not exist`, 
					},
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
		},
		app: PJSON.name,
		time: Date.now(),
		vs: PJSON.version,
	}
	if (method === 'POST'){
		const payload = req.body
		r = {
			...r,
			request: {
				endpoint,
				method,
				payload,
			}
		}
	}
	res.send(JSON.stringify(r))
}
