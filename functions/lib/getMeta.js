
exports.getMeta = meta => {

	let baseUrl = process.env.BASEURL_DEV
	if (meta.req.hostname === `us-central1-listingslab-serverless.cloudfunctions.net`){
		baseUrl = process.env.BASEURL_PROD
	}
	const url = `${baseUrl}${meta.req.url}`
	let image = meta.image
	if (!image){
		image = `${baseUrl}/png/open-graph.png`
	}
	let description = meta.description
	if (description){
		description = description.replace(/(<([^>]+)>)/ig,"").replace(/(\r\n|\n|\r)/gm,"")
		if (description.length > 155){
			description = `${description.substring(0,155)} ...`
		}
	}

	return `<link rel="shortcut icon" href="/favicon.ico" />
	    <link rel="manifest" href="/manifest.json" />
		<meta name="theme-color" content="${meta.theme}" />
		<meta name="description" content="${description}" />
	    <meta property="og:description" content="${description}" />
	    <meta name="twitter:description" content="${description}" />
	    <meta name="application-name" content="${meta.app}" />
	    <meta name="apple-mobile-web-app-title" content="${meta.app}" />
	    <meta property="og:url" content="${url}" />
		<meta property="og:site_name" content="${meta.app}" />
		<meta property="og:title" content="${meta.label}. ${meta.title}." />
		<meta property="og:image" content="${image}" />
		<meta property="og:image:alt" content="${meta.label}. ${meta.title}." />
		<meta name="mobile-web-app-capable" content="yes" />
	    <meta property="og:locale" content="en_pi" />
	    <meta property="og:type" content="website" />
	    <meta property="og:image:type" content="image/png" />
	    <meta property="og:image:width" content="938" />
	    <meta property="og:image:height" content="530" />
	   	<meta name="geo.region" content="${meta.geo.region}" />
	    <meta name="geo.placename" content="${meta.geo.placename}" />
	    <meta name="geo.position" content="${meta.geo.position}" />
	    <meta name="ICBM" content="${meta.geo.ICBM}" />
	    <meta property="al:android:app_name" content="${meta.app}" />
	    <meta property="al:ios:app_name" content="${meta.app}" />
	    <meta property="al:windows:app_name" content="${meta.app}" />
	    <meta name="twitter:card" content="summary_large_image" />
	    <meta name="twitter:title" content="${meta.label}. ${meta.title}." />
	    <meta name="twitter:image" content="${image}" />
	    <meta name="twitter:image:alt" content="${meta.label}. ${meta.title}." />`
}
