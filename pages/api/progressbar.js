/**
 * Renders an html page
 *
 *@param {string} title - Page title
 *@param {string} xhead - Additional tags in the head section
 *@param {string} payload - Content of body section
 *
 */

const webpage = (title = 'Progress bar', xhead, payload) => {
	return `<!doctype html>
          <html>
            <head>
              <meta charset="utf-8">
              <title>${title}</title>
              <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <script>

                let inputdata = {};

                async function sendToServer( ndl, cdata = {} ){

                  fetch('/api',{

                    method: 'POST',
                    mode: 'cors', 
                    cache: 'no-cache', 
                    credentials: 'same-origin',
                    headers: {
                      'Content-Type': 'application/json'
                      
                    },
                    redirect: 'follow', 
                    referrerPolicy: 'no-referrer',
                    body: JSON.stringify( { "ndl":ndl, "dyd":{ ...inputdata, ...cdata } } ),

                  })
                  .then(response => response.json())
                  .then( (rdata) => {

                      if( rdata.hasOwnProperty('redirect') ){

                        window.location.href = rdata.redirect;
                      }

                      if( rdata.hasOwnProperty('rawdata') ){

                        console.log(rawdata);
                      }

                    console.log(rdata)
                  } );
                }

              </script>
              ${xhead}
            </head>
            <body>
                ${payload}
                <script src="https://d3js.org/d3.v7.min.js"></script>
                <script src="/progressbar.js"></script>
            </body>
          </html>`;
};

export default function handler(req, res) {
	//console.log(req.headers['x-real-ip'])
	//console.log(NextRequest.ip)

	// req.body.p

	res.status(200).send(
		webpage(
			'Progress Bar',
			`<script> const progval = ${req.query.p}; let xval = ${
				typeof req.query.x !== 'undefined' ? req.query.x : 50
			}; let yval = ${
				typeof req.query.y !== 'undefined' ? req.query.y : 50
			}; </script>`,
			`<div id="progress"></div>
                                              <div><button onclick="moveShape('up')">UP</button>
                                              <button onclick="moveShape('down')">DOWN</button>
                                              <button onclick="moveShape('left')">LEFT</button>
                                              <button onclick="moveShape('right')">RIGHT</button></div>`,
		),
	);
}
