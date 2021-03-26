const nodemailer = require('nodemailer')
const htmlToText = require('nodemailer-html-to-text').htmlToText

exports.notify = async (req, res, db) => {	
	
	const endpoint = req.path
	let subject = req.body.subject
	let body = req.body.message

	let transporter = nodemailer.createTransport({
		    service: 'gmail',
		    auth: {
		        user: process.env.GMAIL_ACCOUNT,
		        pass: process.env.GMAIL_PW
		    }
		})
		transporter.use('compile', htmlToText())
		const mailOptions = {
			to: process.env.OWNER_EMAIL,
			from: process.env.GMAIL_ACCOUNT,
			subject,
			html: `<!doctype html>
				<html>
			      <head>
			        <meta charset="utf-8">
			        <style>
			        	a { 
			        		text-decoration: none; color: #333333; 
			        	}
			        	a:hover { 
			        		color: #18a3ae; 
			        	}
			        </style>
			      </head>
			      <body>
			        <a href="https://listingslab.com">
			        	<h1 style="font-weight: normal;">
				        	<img
				        		src="${process.env.ASSET_PATH}/png/logo32.png" 
				        		style="margin-right: 8px; margin-top: -8px;"
				        		valign="middle" width="32" height="32"
				        	/>
				        	${process.env.APP_NAME}
				        </h1>
			        </a>
			        <p>${body}</p>

			      </body>
			    </html>`,
		}

		return transporter.sendMail(mailOptions, (error, info) => {
				if (error){
					res.send(JSON.stringify({
						status: 599,
						req: {
							endpoint
						},
						response:{
							error: error.toString(),
						}
					}))
				} else {
					res.send(JSON.stringify({
						status: 200,
						req: {
							endpoint
						},
						response:{
							message: `Notified ok`,
						}
					}))
				}
		})
}


/*
 <a href="https://listingslab.com/manager/ting/">${body}</a>
*/