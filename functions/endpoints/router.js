const PJSON = require('../package.json')

const { 
	getUser 
} = require( './user' )

exports.router = async (req, res, db) => {	

	let endpoint = req.path.toLowerCase()
	if(endpoint.substr(-1) === '/') {
        endpoint =  endpoint.substr(0, endpoint.length - 1)
    }
    let exploded = endpoint.split(`/`)
    let userId = null
    if ( exploded[1] === `user` ){
    	endpoint = `/user`
    	if (exploded[2]){
    		userId = exploded[2]
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

		case `/user`:
			const user = await getUser(req, res, db, userId)
			respond(req, res, {
				response:{
					status: 200,
					data: {
						user,
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

