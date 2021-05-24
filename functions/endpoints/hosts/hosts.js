
exports.hosts = async (req, res, db, action) => {	

	if (action === 'first-run' ){
		return {
		status: 200,
			data: { 
				message: `all good, brah`,
			}	
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
