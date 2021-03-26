exports.pingpong = async (req, res, db) => {	

	const {
		method,
		query,
		path,
		params,
	} = req

	return {
		status: 200,
		data: {
			message: `PingPong`,
			query,
			path,
			params,
		},
	}

}





	// if ( verb !== `GET` ){
	// 	return {
	// 		error: true, status: 601,
	// 		data: { message: `Request method must be GET` }
	// 	}
	// }