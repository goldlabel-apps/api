const fs = require('fs')
const flatten = require('flatten')
const { getNav } = require( './getNav' )
const { getAppleTouch } = require( './getAppleTouch' )
const { getMeta } = require( './getMeta' )
const MarkdownIt = require('markdown-it'),
    md = new MarkdownIt();

exports.ssr = async (req, res, db) => {
	let app = {
		appName: `Listingslab`,
	  	theme: '#18a3ae',
	  	css: fs.readFileSync('./ssr/style.css', 'utf8'),
	  	pwa: fs.readFileSync('./react-build/react.html', 'utf8'),
		// pwa: ``,
		geo: {
			region: `AU-QLD`,
			placename: `Scarborough`,
			position: `-27.211579;153.107658`,
			ICBM: `-27.211579, 153.107658`,
		},
	}
	const currentPath = `${req.path}`
	const ref = db.collection('ssr')
	const snapshot = await ref.get()
	const docs = []
	snapshot.forEach(doc => {
		docs.push ({id: doc.id, data: doc.data()})
	})
	let ssrDoc = {
		id: 404,
		parent: 0,
		data:{
			label: `Listingslab`,
			title: `V8`,
			body: ``
		}
	}
	for (let i=0; i<docs.length; i++){
		if (docs[i].data.path === currentPath){
			ssrDoc = docs[i]
		}
	}
	const {
		title,
		image,
		body,
		markdown,
		parent,
		label,
	} = ssrDoc.data

	let ssrImage = image
	if (!ssrImage){
		ssrImage = null
	}
	res.send(`<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<title>
			${label}. ${ title }.
		</title>
	    ${getMeta({
	    	req,
	    	app: app.appName,
	    	title,
	    	label,
	    	image: ssrImage,
	    	description: body,
	    	geo: app.geo,
	    	theme: app.theme,
	    })}
	    ${getAppleTouch()}  
		${app.css}
	</head>
	<body>
		<noscript>
	      <h2>
	        <a href="https://listingslab.com/work/pwa" target="_blank" rel="noopener noreferrer">
	          ${label}. ${ title }.
	        </a>
	      </h2>
	    </noscript>
		<div id="ssr" class="ssr">
			<header class="appbar">
				<div class="header-div">
					<a href="/" title="${app.appName} home">
						<div class="svg-logo">
							<svg viewBox="0 0 512 512">
							    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
							        <g id="favicon">
							            <rect fill-opacity="0" fill="#18a3ae" x="0" y="0" width="512" height="512"></rect>
							            <g id="blokey" transform="translate(52.000000, 7.000000)"></g>
							            <circle id="Oval" fill="#18a3ae" fill-rule="nonzero" cx="251" cy="57" r="50"></circle>
							            <path d="M349.25,159.75 C339.5,150 322.75,132 290.25,132 C285,132 254.75,132 226.75,132 C158,131.75 102,75.75 102,7 L52,7 C52,86 104.75,153 177,174.75 L177,507 L227,507 L227,357 L277,357 L277,507 L327,507 L327,208.25 L425.75,307 L461,271.75 L349.25,159.75 Z" id="Path" fill="#18a3ae" fill-rule="nonzero"></path>
							        </g>
							    </g>
							</svg>
						</div>
					</a>
					<div style="clear: both;"></div>
				</div>
			</header>
			<div class="content">
				<main>			
					<article>			
			        	<div class="article-split">
			        		<div class="article-split-left">
			        			<h1>${label}</h1>
			        			<h3>${title}</h3>
				        		<div class="body-image">
					        		${image ? `<img alt="${title}" class="image" src="${image}" />` : `` }
					        	</div>
					        	<div class="body-content">
			        				${md.render(body)}
			        			<div>
			        		</div>
			        	</div>
					</article>
					<div class="article-split-right">
	        			${ ssrDoc.id !== 404 ? getNav(ssrDoc.id, docs) : ``} 
	        			<div style="clear: both;"></div>
	        		</div>
					<div style="clear: both;"></div>
			    </main>

			    <footer>
					<div class="spacer"></div>
	        			<ul>
	        				<li class="sibling">
	                          <a href="/privacy" title="Previous">
	                            privacy
	                          </a>
	                        </li>
	        			</ul>
	        		</div>
	        		<div style="clear: both;"></div>
				</footer>

		    </div>
		</div>
		<div class="pwa">${app.pwa}</div>
	<body>
</html>`
)}


/*
<div class="content">
	
 </div>
*/