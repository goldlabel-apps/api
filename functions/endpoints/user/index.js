exports.getUser = async (req, res, db, userId) => {
	const cityRef = db.collection('users').doc(userId)
	const doc = await cityRef.get()
	if (!doc.exists) {
		return { 
			error: true,
			message : `Error getting user. ID doesn't exist`,
			userId,
		}		
	} else {
	  return {
		  	uid: userId,
			data: doc.data(),		
		}
	}
}
