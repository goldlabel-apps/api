const ipgeo = require('./examples/ipgeo')

exports.visitor = async ( req, res, db ) => {
	let message = `Help you with visitors, brah?`
  
  const { body } = req
	const endpoint = req.path.toLowerCase()
  let {
    fingerprint,
    hostname,
  } = body
  if ( endpoint === `/visitor/getid`){
    const visitorsRef = await db.collection( `visitors` )
            .where( 'fingerprint' , '==', fingerprint )
            .where( 'hostname' , '==', hostname )
            .get()
    if (!visitorsRef.empty) {     
     let existingVisitor
      visitorsRef.forEach((doc) => {
        existingVisitor = { 
          id: doc.id, 
        }
      })
      return {
        id: existingVisitor.id
      }
    } else {
      let newVisitor = {
        created: Date.now(),
        fingerprint: fingerprint,
        hostname: hostname,
        gdpr: false,
      }
      const newVisitorDoc = await db.collection(`visitors`).add( newVisitor )
      return {
        id: newVisitorDoc.id,
      }
    } 
  }

  if ( endpoint === `/visitor/ipgeo/example`){
    message = `Example response from https://api.ipgeolocation.io`
    return {
      message,
      ipgeo,
    }  
  }

  return { message }  

}
