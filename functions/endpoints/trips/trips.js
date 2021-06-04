exports.trips = async (req, res, db, action) => {
	let finalAction = action
	if ( !finalAction ) finalAction = `default`

	if ( finalAction === `default` ) {
		let trips = []
		const tripsQuery = await db.collection(`trips`).get()
		tripsQuery.forEach(( doc ) => { 
			trips.push({
				id: doc.id,
				data: doc.data(),
			})
		})
		return {
			status: 200,
			data: {
				trips, 
			}
		}
	}
	return {
		status: 690,
		data: {
			message: `No trips`, 
		}
	}
}
