const PJSON = require('../package.json')
const { initTing } = require( './ting' )
const { randomIdentity } = require( '../lib/randomIdentity' )


exports.router = async (req, res, db) => {	

	let endpoint = req.path.toLowerCase()
	let exploded = endpoint.split(`/`)
	let ting = ``

	if(endpoint.substr(-1) === '/') {
        endpoint =  endpoint.substr(0, endpoint.length - 1)
    }
    if( endpoint.indexOf('/ting') !== -1 ) {
        endpoint = `/ting`
        if ( exploded[1] === `ting` ){
	    	if (exploded[2]){
	    		ting = exploded[2]
	    	}
	    }
    }


    if( endpoint.indexOf('/random-identity') !== -1 ) {
        endpoint = `/random-identity`
    }
    
    
    // console.log ('exploded', exploded)
    

	switch (endpoint) {

		case ``:
			respond(req, res, {
				response:{
					status: 200, 
					data: { message: `Help you with something, brah?` },
				}})
			return

		case `/random-identity`:
			respond(req, res, {
				response:{
					status: 200,
					data: randomIdentity(),
				}})
			return

		case `/ting`:
			const data = await initTing(req, res, db, ting)
			respond(req, res, {
				response:{
					status: 200,
					data,
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
