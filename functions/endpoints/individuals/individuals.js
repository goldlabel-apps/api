exports.individuals = async (req, res, db) => {	
	const {
		method,
		body,
	} = req
	const { individual } = body
	if ( method !== 'POST'){ return { status: 601, data: {	message: `POST verb is required` } } }
	if ( !individual ){ return { status: 602, data: {	message: `individual is required` } } }
	let id = ``
	const tingQuery = await db.collection(`individuals`)
						.where(`individual`, `==`, individual)
						.get()	

	if (tingQuery.empty){
		const newTing = await db.collection(`individuals`).add({
			created: Date.now(),
			...body,
		})
		id = newTing.id
	} else {
		tingQuery.forEach((doc) => { 
			id = doc.id
		})
		const updateTing = await db.collection(`individuals`)
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