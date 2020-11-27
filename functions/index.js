const functions = require('firebase-functions')

exports.push2talk = functions.https.onRequest((request, response) => {
  
  functions.logger.info("Hello logs!", {
  	structuredData: true,
  })

  response.send("Hello push2talk")
  
})
