const nodemailer = require('nodemailer')
const htmlToText = require('nodemailer-html-to-text').htmlToText

exports.notify = async (req, res, db) => {	

	let verb = req.method
	let query = req.query

	if ( verb !== `GET` ){
		return {
			error: true, status: 601,
			data: { message: `Request method must be GET` }
		}
	}

	return {
		status: 200,
		data: {
			message: `All good broheim`,
			query,
		},
	}

}
