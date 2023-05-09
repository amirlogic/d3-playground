
 import * as d3 from "d3";

/*
const jsdom = require("jsdom");
const { JSDOM } = jsdom; */
//const dom = new JSDOM(`<!DOCTYPE html><body><div id="wrapper"></body></div>`);
//const { document } = (new JSDOM(`<!DOCTYPE html><html><body></body></html>`)).window;

const svgen = require('/lib/svgen.js')



export default function handler(req, res) {

  //console.log( svgen.xml(d3,'demo') )
  // {target:'text',content:"This is a test"}
  // {target:"table",dataset:[{name:"Sweden",language:"Swedish"},{name:"France",language:"French"}]}

  //console.log(req.body)

  res.status(200).send( { "svg":svgen.xml( d3,req.body?.raw ) } )
}
