
import * as d3 from "d3";

const jsdom = require("jsdom");
const { JSDOM } = jsdom;

//const dom = new JSDOM(`<!DOCTYPE html><body><div id="wrapper"></body></div>`);

const { document } = (new JSDOM(`<!DOCTYPE html><html><body></body></html>`)).window;

let svg = d3.select(document.body)
              .append('svg')
                .attr('width', 500)
                .attr('height', 500);

svg.append('circle')
      .attr('cx', 250)
      .attr('cy', 150)
      .attr('r', 25)
      .attr('fill', 'blue');

export default function handler(req, res) {

	/* res.status(200).send(
		`<svg width="100" height="100">
      <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
    </svg>`
	); */

  //console.log(svg.node().outerHTML)

  res.status(200).send(svg.node().outerHTML) // svg._groups[0][0].outerHTML
}
