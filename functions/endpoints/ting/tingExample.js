const functions = require('firebase-functions')
const admin = require('firebase-admin')

exports.tingExample = async (req, res, db) => {
	let ting = [
	{
		"created": 1613360286062,
		"updated": 1613360286062,
		"displayName": "dapper448",
		"avatar": "dapper.svg",
		"fingerprint": "example",
		"hits": 1,
		"messages": [ ]
  	},
]
	return { 
		status: 200, 
		message: `Example ting object`,
		ting
	}
}
