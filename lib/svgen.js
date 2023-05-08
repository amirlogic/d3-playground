
//import * as d3 from "d3";

const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const { document } = (new JSDOM(`<!DOCTYPE html><html><body></body></html>`)).window;


const xml = (d3,jsondata)=>{

    let svg = d3.select(document.body)
              .append('svg')
                .attr('width', 500)
                .attr('height', 500);

    if( jsondata?.target === 'demo'){

        svg.append('circle')
            .attr('cx', 250)
            .attr('cy', 150)
            .attr('r', 55)
            .attr('fill', 'blue');
    }
    if( jsondata?.target === 'histogram'){


    }
    

    return svg.node().outerHTML;
}

module.exports = { xml }
