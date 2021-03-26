
exports.initTing = async (req, res, db, fingerprint) => {

	if (!fingerprint){
		return {
			error: true,
			message: `Fingerprint unspecified`,
		}
	}
	const tingQuery = await db.collection(`tings`)
								.where(`fingerprint`, `==`, fingerprint)
								.get()					
	if (tingQuery.empty){
		const { randomIdentity } = require( '../../lib/randomIdentity' )
		const ranId = randomIdentity()
		let ting = {
			created: Date.now(),
			updated: Date.now(),
			displayName: ranId.displayName,
			avatar: ranId.avatar,
			fingerprint: fingerprint,
			hits: 1,
			messages: [],
		}
		const res = await db.collection(`tings`).add( ting )
		return {
			preExisting: false,
			message: `Ting Created`,
			fingerprint,
			id: res.id,
			ting,
			userAgent: req.get('User-Agent')
		}		
	} else {
		tingQuery.forEach((doc) => { ting = { 
			id: doc.id, 
			data: doc.data(),
		}})
		return {
			preExisting: true,
			message: `Fingerprint found`,
			fingerprint,
			ting,
			id: ting.id
		}
	}
}
