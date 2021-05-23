const serviceAccount = require( './serviceAccountKey.json' )
const functions = require( 'firebase-functions' )
const admin = require( 'firebase-admin' )
const express = require( 'express' )
const cors = require( 'cors' )
const dotenv = require( 'dotenv' ).config()
const { router } = require( './router.js' )

admin.initializeApp({
  projectId: serviceAccount.project_id, 
  credential: admin.credential.cert(serviceAccount),
})
let db = admin.firestore()

const app = express()
app.use(cors({ origin: true }))
app.all('**', async (req, res) => {
	router(req, res, db)
})

exports.api = functions.https.onRequest(app)
