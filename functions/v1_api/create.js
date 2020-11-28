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

exports.create = async (req, res, db) => {	
	const collectionName = `seeds`
	const reqBody = req.body
	const {
		data,
	} = reqBody
	const time = Date.now()

	const fsAdd = await db.collection(collectionName).add({
		...data, 
		created: time, 
		updated: time,
	})
	const newId = fsAdd.id

	const client = algoliasearch(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_ADMIN)
	const index = client.initIndex(collectionName)

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
							title: `${newId} created`,
							message: `all good`,
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
						error
					}
				}})
			return false
		})
}
