const functions = require('firebase-functions')
const admin = require('firebase-admin')

function respond (req, res, response){
	const reqBody = req.body
	const endpoint = req.path
	let r = {
		time: Date.now(),
		...response,
		req: {
			endpoint,
			reqBody,
		},	
	}
	res.send(JSON.stringify(r))
}

exports.checkExistance = async (req, res, db) => {	
	let exists = true
	const reqBody = req.body
	const { 
		url,
	} = reqBody	
	const query = await db.collection(`seeds`).where('url', '==', url).get()
	if (query.empty) exists = false
		
	respond(req, res, { 
			response:{
				status: 200,
				url,
				exists,
				alert:{
					severity: `success`,
					title: exists ? `Exists` : `Does not exist`,
				},
			}})
}
