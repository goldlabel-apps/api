const PJSON = require('../package.json')
const { ping } = require( './ping' )
const { notify } = require( './notify' )

exports.router = async (req, res, db) => {	
	let endpoint = req.path.toLowerCase()
	if( endpoint.substr( -1 ) === '/' ) {
        endpoint =  endpoint.substr(0, endpoint.length - 1)
    }
	switch (endpoint) { 
		
		case ``:
			
			let notifyURLParams = `?mode=example&to=listingslab@gmail.com`

			respond(req, res, { response: {status: 200, data: { 
				message: `Help you with something, brah?`,
				examples: {
					ping: `${ getBaseAPIUrl( req ) }ping/`,
					notify: `${ getBaseAPIUrl( req ) }notify/${ notifyURLParams }`,
				}
			}}})
			
			return 

		case `/ping`:
			respond(req, res, {
				response:{ 
					status: 200, 
					data: { 
						message: `pong` 
					}}})
			return

		case `/notify`:
			const notifyData = await notify(req, res, db)
			respond(req, res, { response:{ 
									error: notifyData.error, 
									status: notifyData.status, 
									data: notifyData.data, 
			}})
			return

		default: {
			respond(req, res, { 
				response:{ status: 404, data: {  message: `Sorry, that endpoint does not exist`}}})
			return
		}
	}
}

function getBaseAPIUrl (req) {
	let baseAPIUrl = `https://api.listingslab.com/`
	if ( req.host === 'localhost' ){
		baseAPIUrl = `http://localhost:5001/listingslab--express-api/us-central1/api/`
	}
	return baseAPIUrl
}

function respond (req, res, response){
	const endpoint = req.path
	const method = req.method
	let r = {
		app: PJSON.name,
		baseAPIUrl: getBaseAPIUrl( req ),
		version: PJSON.version,
		contact: process.env.GMAIL_ACCOUNT,
		time: Date.now(),
		request: {
			endpoint,
			method,
		},
		...response,
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
