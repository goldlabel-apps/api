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
			// reqBody,
		},	
	}
	res.send(JSON.stringify(r))
}

exports.update = async (req, res, db) => {	
	const reqBody = req.body
	const { 
		type,
		data,
	} = reqBody
	const time = Date.now()
	const fsId = await db.collection(type).add({
		...data,
		created: time,
		updated: time,
	})
	const newId = fsId.id
	
	const client = algoliasearch(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_ADMIN)
	const index = client.initIndex(type)

	index.saveObjects(
		[{
			objectID: newId,
			created: time,
			updated: time,
			...data,
		}])
		.then(({ objectIDs }) => {
		  	respond(req, res, { 
					response:{
						id: newId,
						alert:{
							severity: `success`,
							title: `${type} created`,
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
