const functions = require('firebase-functions')
const admin = require('firebase-admin')
const algoliasearch = require('algoliasearch')

exports.canna = async (req, res, db) => {
	const time = Date.now()
	const collectionName = `canna`
	let performedAction = ``
	let id = 0
	const {
		body
	} = req
	if (!body) return { status: 501, message: `You need to post an object, dude` }
	const {
		action,
		seed,
	} = body
	if (!action) return { status: 502, message: `You need to post an action, dude` }
	if (!seed) return { status: 503, message: `You need to post a seed, dude` }
	const {
		url
	} = seed
	let exists = true
	const checkExists = await db.collection( collectionName ).where('url', '==', url).get()
	if (checkExists.empty) exists = false
	if ( !exists ){
		const fsAdd = await db.collection( collectionName ).add({
			...seed, 
			created: time, 
			updated: time,
		})
		id = fsAdd.id
		performedAction = `created`
	} else {
		checkExists.forEach(doc => {
			id = doc.id
		})
		performedAction = `updated`
		console.log( 'existing id', id)
		const fsUpdate =	await db.collection( collectionName ).doc(id).set({	
								updated: time,
								...seed,
							}, { merge: true })
	}
	const client = algoliasearch(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_ADMIN)
	const index = client.initIndex(collectionName)
	const algoliaOp = await index.saveObjects(
		[{
			objectID: id,
			updated: time,
			...seed,
		}])
	if (algoliaOp){
		return { status: 200, message: `${ id } ${ performedAction }` }

	}
	if (!seed) return { status: 500, message: `Algolia error?` }
}
