
/** 
* Renders an html page
*
*@param {string} title - Page title
*@param {string} xhead - Additional tags in the head section
*@param {string} payload - Content of body section
*
*/

const webpage = (title='NestedLogic',xhead,payload)=>{

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
                
                <script src="/worldmap.js"></script>
            </body>
          </html>`;
}

// <script src="https://d3js.org/d3.v6.js"></script> <script src="https://d3js.org/d3.v7.js"> </script> </script><script src="https://d3js.org/d3-scale-chromatic.v1.min.js"></script><script src="https://d3js.org/d3-geo-projection.v2.min.js"></script>

// <script> let hdata = ${ (typeof(req.query.d) !== 'undefined' ) ? `[${req.query.d.split(',')}]` : 0 }; </script>


export default function handler(req, res) {

  res.status(200).send(webpage("Histogram",
  
                                `<script src="https://d3js.org/d3.v7.js"></script>`,
  
                                `<div id="wmap"></div>
                                 <div id="target">...</div>`));
    
}
