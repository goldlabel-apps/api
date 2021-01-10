const nodemailer = require('nodemailer')
const htmlToText = require('nodemailer-html-to-text').htmlToText

exports.notify = async (req, res, db) => {

	let sendFrom = process.env.GMAIL_ACCOUNT
	
	return {
		reqBody: req.body,
		sendFrom,
	}
	
}
