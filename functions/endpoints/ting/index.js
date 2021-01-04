

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
			displayName: ranId.displayName,
			avatar: ranId.avatar,
			fingerprint: fingerprint,
			visits: 1,
		}
		const newTingQuery = await db.collection(`tings`).add(ting)
			return {
				preExisting: false,
				message: `Ting Created`,
				fingerprint,
				ting,
			}		
	} else {
		
		tingQuery.forEach((doc) => { ting = doc.data() })
		return {
			preExisting: true,
			message: `Ting found`,
			fingerprint,
			ting,
		}
	}
}
