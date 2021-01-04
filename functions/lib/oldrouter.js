
const { create } = require('./create.js')
const { update } = require('./update.js')
const { fsdelete } = require('./delete.js')
const { checkExistance } = require('./checkExistance.js')

function respond (req, res, response){
	const endpoint = req.path
	let r = {
		time: Date.now(),
		...response,
		req: {
			endpoint
		},	
	}
	res.send(JSON.stringify(r))
}

exports.router = async (req, res, db) => {	
	const endpoint = req.path
	switch (endpoint) {

		case `/ping`:
			respond(req, res, { 
				status: 200,
				response:{
					message: `pong` 
				}})
			return

		case `/`:
			respond(req, res, { 
				status: 200, 
				response:{
					message: `help you, brah?` 
				}})
			return

		case `/create`:
			create(req, res, db)
			return
		
		case `/delete`:
			fsdelete(req, res, db)
			return

		case `/update`:
			update(req, res, db)
			return

		case `/check-existance`:
			checkExistance(req, res, db)
			return

		default: {
			respond(req, res, { 
				status: 500,
				response:{
					message: `Bad endpoint` 
				}})
			return
		}
		
	}

}