const functions = require('firebase-functions')
const admin = require('firebase-admin')
const algoliasearch = require('algoliasearch')

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

exports.fsdelete = async (req, res, db) => {	
	const collectionName = `seeds`
	const reqBody = req.body
	const { 
		id,
	} = reqBody
	const time = Date.now()
	const fsDelete = await db.collection(collectionName).doc(id).delete()
	const client = algoliasearch(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_ADMIN)
	const index = client.initIndex(collectionName)

	index.deleteObject(id)
		.then(() => {
		  	respond(req, res, { 
					response:{
						statue: 200,
						alert:{
							severity: `success`,
							title: `${id} deleted`,
						}
					}})
		  	return true
		})
		.catch((error) => {
			respond(req, res, { 
				response:{
					error,
					alert:{
						severity: `error`,
					}
				}})
			return false
		})
}
