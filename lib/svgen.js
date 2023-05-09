
//import * as d3 from "d3";

const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const { document } = (new JSDOM(`<!DOCTYPE html><html><body></body></html>`)).window;


const xml = (d3,jsondata)=>{

    let svgwidth = 500
    let svgheight = 500

    let svg = d3.select(document.body)
                    .append('svg')
                        .attr('width', svgwidth)
                        .attr('height', svgheight);

    if( jsondata?.target === 'demo'){

        svg.append('circle')
                .attr('cx', 250)
                .attr('cy', 150)
                .attr('r', 55)
                .attr('fill', 'blue');
    }
    else if( jsondata?.target === 'text'){

        svg.append('text')
            .attr("y", 150)
            .attr("x", 150)
            .attr("font-size", 20)
            .attr("fill", "red")
                .text(jsondata?.content)

    }
    else if( jsondata?.target === 'table'){

        let toptext = Object.keys(jsondata?.dataset[0])

        svg.append('table')
            /* .append("thead")
                .join("tr")
                .selectAll("th")
                .data(toptext)
                .join("th")
                .text(d => d)
                .style("background-color", "#aaa")
                .style("color", "#fff") */
            .append("tbody")
                .selectAll("tr")
                .data(jsondata?.dataset)
                .join("tr")
                .selectAll("td")
                .data(row => Object.values(row))
                .join("td")
                .text(d => d);    // d.value



    }
    else if( jsondata?.target === 'histogram'){



    }
    
    console.log(svg.node().outerHTML)

    return svg.node().outerHTML;
}

module.exports = { xml }
