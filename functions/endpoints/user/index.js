

// user

exports.getUser = async (req, res, db, userId) => {

	/*
		email: `listingslab@gmail.com`,
		avatar: `https://listingslab.com/wp-content/uploads/2020/11/Octocat.png`,
		displayName: `Octocat`
	*/

	const cityRef = db.collection('users').doc(userId)
	const doc = await cityRef.get()
	if (!doc.exists) {
		return { 
			error: true,
			message : `Get User Error. User ID doesn't exist`,
			userId,
		}
			
	} else {
	  return {
		  	uid: userId,
			data: doc.data(),		
		}
	}
}
