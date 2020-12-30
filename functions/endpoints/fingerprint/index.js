exports.getTing = async (req, res, db, fingerprint) => {
	if (!fingerprint){
		return {
			error: true,
			message: `Fingerprint not specified in request`,
		}
	}
	db.collection( `tings` ).where( `fingerprint`, `==`, fingerprint)
		.get()
		.then(function( snap ) {
			let tingExists = {}
	        snap.forEach(function(doc) {
	        	tingExists = {
					id: doc.id,
					data: doc.data(),
				}
	        })
	        console.log ('tingExists', tingExists)
	      	return tingExists
	    })
		.catch(function(error) {
			return {
				error: true,
				message: `Error getting tingResult`,
			}
	    })
}
