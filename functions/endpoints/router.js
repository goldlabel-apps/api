const PJSON = require('../package.json')
const { initTing } = require( './ting' )
const { randomIdentity } = require( '../lib/randomIdentity' )
const { notify } = require( './notify' )

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

	switch (endpoint) {

		case ``:
			respond(req, res, {
				response:{
					status: 200, 
					data: { 
						message: `Help you with something, brah?` 
					},
				}})
			return

		case `/notify`:
			const notifyData = await notify(req, res, db)
			respond(req, res, {
				response:{
					status: 200,
					data: notifyData,
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
		app: PJSON.name,
		version: PJSON.version,
		gmail: process.env.GMAIL_ACCOUNT,
		time: Date.now(),
		...response,
		request: {
			endpoint,
			method,
		},
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
