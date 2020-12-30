exports.getTing = async (req, res, db, fingerprint) => {
	if (!fingerprint){
		return {
			error: true,
			message: `Fingerprint not specified in request`,
		}
	}
	let ting = {}
	const tingQuery = await db.collection(`tings`).get(fingerprint)
	if (tingQuery.empty){
		let ting = {
			created: Date.now(),
			fingerprint
		}
		const newTingQuery = await db.collection(`tings`).doc(fingerprint).set(ting)
		return {
			preExisting: false,
			ting,
		}
	} else {
		tingQuery.forEach((doc) => { ting = doc.data() })
		return {
			preExisting: true,
			ting,
		}
	}
}