const PJSON = require('./package.json')
const { ping } = require( './endpoints/ping' )
const { notify } = require( './endpoints/notify' )
const { pingpong } = require( './endpoints/pingpong' )

exports.router = async (req, res, db) => {	
	
	let params = req.params[0].split( `/` )
	params = params.slice( 1, params.length)
	let endpoint = params[0]

	switch (endpoint) { 
		
		case ``:
			
			let notifyURLParams = `?mode=example&to=listingslab@gmail.com`
			respond(req, res, { response: {status: 200, data: { 
				message: `Help you with something, brah?`,
				examples: {
					ping: `${ getBaseAPIUrl( req ) }ping/`,
					notify: `${ getBaseAPIUrl( req ) }notify/${ notifyURLParams }`,
					pingpong: `${ getBaseAPIUrl( req ) }pingpong/check/fingerprint`,
				}
			}}})
			return 


		case `pingpong`:
			const pingpongData = await pingpong(req, res, db)
			respond(req, res, { response:{ 
									error: pingpongData.error, 
									status: pingpongData.status, 
									data: pingpongData.data, 
			}})
			return

		case `ping`:
			respond(req, res, {
				response:{ 
					status: 200, 
					data: { 
						message: `pong` 
					}}})
			return

		case `notify`:
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

function respond ( req, res, response ){
	const {
		path,
		method,
	} = req
	
	let params = req.params[0].split( `/` )
	params = params.slice( 1, params.length)
	let endpoint = params[0]

	let r = {
		app: PJSON.name,
		baseAPIUrl: getBaseAPIUrl( req ),
		version: PJSON.version,
		contact: process.env.GMAIL_ACCOUNT,
		time: Date.now(),
		request: {
			path,
			method,
			endpoint,
		},
		...response,
	}
	res.send(JSON.stringify(r))
}

function getBaseAPIUrl (req) {
	let baseAPIUrl = `https://api.listingslab.com/`
	if ( req.hostname === 'localhost' ){
		baseAPIUrl = `http://localhost:5001/listingslab--express-api/us-central1/api/`
	}
	return baseAPIUrl
}