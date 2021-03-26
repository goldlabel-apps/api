const nodemailer = require('nodemailer')
const htmlToText = require('nodemailer-html-to-text').htmlToText

exports.notify = async (req, res, db) => {	

	const payload = req.body
	const endpoint = req.path
	
	if (!payload){
		return {
			error: true,
			message: `Payload body unspecified`,
		}
	}

	const { 
		subject,
		body,
		to,
		tingId,
		wpurl,
	} = payload

	// https://listingslab.com/wp-content/uploads/2021/01/push2Talk.png
	// const logoSrc = `${ process.env.ASSET_PATH }png/push2Talk.png`
	const logoSrc = `https://listingslab.com/wp-content/uploads/2021/01/push2Talk.png`
	// console.log ('$ body', body)

	let transporter = nodemailer.createTransport({
		    service: 'gmail',
		    auth: {
		        user: process.env.GMAIL_ACCOUNT,
		        pass: process.env.GMAIL_PW
		    }
		})
		transporter.use('compile', htmlToText())

		const mailOptions = {
			to,
			from: process.env.GMAIL_ACCOUNT,
			subject,
			html: `<!doctype html>
				<html>
			      <head>
			        <meta charset="utf-8">
			        <style>
				        body{
				        	max-width: 600px;
				        	margin: auto;
				        }
				        a { 
			        		text-decoration: none; 
			        		font-weight: bold; 
			        		color: #136c73; 
			        	}
			        	a:hover { 
			        		color: #18a2ad; 
			        	}
			        </style>
			      </head>
			      <body>
			      	<p>&nbsp;</p>
			        <p>
			        	<a target="_blank" href="${ wpurl }/wp-admin/admin.php?page=listingslab&tingId?${ tingId }">
			        		<img 
				        		src="${ logoSrc}"
				        		valign="middle" 
				        		width="275" 
				        		height="45" 
				        	/>
			        	</a>
			        </p>
			        <p>${ body }</p>
			      </body>
			    </html>`,
		}

		return transporter.sendMail(mailOptions, (error, info) => {
				console.log ( 'sendMail OK', info )
		})
	}