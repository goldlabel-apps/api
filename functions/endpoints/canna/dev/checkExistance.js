const functions = require('firebase-functions')
const admin = require('firebase-admin')


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
