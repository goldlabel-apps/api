exports.pingpong = async (req, res, db) => {	
	

	/* TAKES FINGERPRINT, returns ID */
	const {
		method,
		body,
	} = req
	const { fingerprint } = body
	if ( method !== 'POST'){ return { status: 601, data: {	message: `POST verb is required` } } }
	if ( !fingerprint ){ return { status: 602, data: {	message: `fingerpring is required` } } }

	let id = ``
	const tingQuery = await db.collection(`pingpong`)
						.where(`fingerprint`, `==`, fingerprint)
						.get()	

	if (tingQuery.empty){
		const newTing = await db.collection(`pingpong`).add({
			created: Date.now(),
			...body,
		})
		id = newTing.id
	} else {
		tingQuery.forEach((doc) => { 
			id = doc.id
		})
		const updateTing = await db.collection(`pingpong`)
									.doc(id)
									.set({
										...body,
									}, { merge: true })
	}
	return {
		status: 200,
		data: { id }	
	}
}







/*
	// let params = req.params[0].split( `/` )
	// params = params.slice( 1, params.length)
	// const action = params[1]
	// if ( action === `update` ){
	// 	console.log('Is there a record for the fingerprint blah in the pingpong collection?')
	// }
*/