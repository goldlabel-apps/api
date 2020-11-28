const functions = require('firebase-functions')
const admin = require('firebase-admin')
const serviceAccount = require('./serviceAccountKey.json')
const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv').config()
const { router } = require('./endpoints/router.js')

admin.initializeApp({
  projectId: serviceAccount.project_id, 
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.DATABASEURL,
  storageBucket: process.env.STORAGEBUCKET,
})
let db = admin.firestore()

const app = express()
app.use(cors({ origin: true }))
app.all('**', async (req, res) => {
	router(req, res, db)
})

exports.api = functions.https.onRequest(app)
