exports.localify = async (req, res, db) => {	
	const {
		method,
		body,
	} = req
	const { fingerprint } = body
	if ( method !== 'POST'){ return { status: 601, data: {	message: `POST verb is required` } } }
	if ( !fingerprint ){ return { status: 602, data: {	message: `Fingerprint is required` } } }
	let id = ``
	const tingQuery = await db.collection(`localify`)
						.where(`fingerprint`, `==`, fingerprint)
						.get()
	if (tingQuery.empty){
		const newTing = await db.collection(`localify`).add({
			created: Date.now(),
			...body,
		})
		id = newTing.id
	} else {
		tingQuery.forEach((doc) => { 
			id = doc.id
		})
		const updateTing = await db.collection(`localify`)
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
