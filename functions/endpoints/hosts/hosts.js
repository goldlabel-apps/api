
exports.hosts = async (req, res, db, action) => {	

	if (action === 'first-run' ){
		const {
			body,
			method,
		} = req
		const { url } = body
		if ( method !== 'POST'){ return { status: 601, data: {	message: `POST verb is required` } } }
		if ( !url ){ return { status: 602, data: {	message: `url is required` } } }
		let id = ``
		const hostsQuery = await db.collection(`hosts`)
						.where(`url`, `==`, url)
						.get()	
		if (hostsQuery.empty){
			const newHost = await db.collection(`hosts`).add({
				created: Date.now(),
				...body,
			})
			id = newTing.id
		} else {
			hostsQuery.forEach((doc) => { 
				id = doc.id
			})
			const updateHost = await db.collection(`hosts`)
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
	return {
		status: 500,
		data: { 
			message: `yeh... nah.`,
			action,
		}	
	}
}
