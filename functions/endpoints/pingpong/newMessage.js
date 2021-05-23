
exports.newMessage = async (req, res, db) => {	
	
	const {
		method,
		body,
	} = req

	if ( method !== 'POST'){ return { status: 601, data: {	message: `POST verb is required` } } }

	return {
		status: 200,
		data: { body }	
	}

}
