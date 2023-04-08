
const showViz = ()=>{

  const origcolor = "#6D3A7E"

  const secolor = "#AEC09A"

  const dmax = d3.max(hdata);

  const yScale = d3.scaleLinear()
    .domain([0, dmax])  
    .range([dmax, 0])

  let barHover = (e)=>{

      let hbar = d3.select(e.srcElement)

      hbar.attr("fill", secolor)

      //console.log("hover!")
  }

  const hist = d3.select("#histo")
                .append("svg")
                    .attr("width", 760)
                    .attr("height", 500);

             hist.append("g")
                    .attr("fill", origcolor)
                    .attr("transform", "translate(200, 200)")
                .selectAll("rect")
                .data(hdata)
                .join("rect")
                    .attr("x", (d,i) => i * 40 + 5)
                    .attr("width", 20)
                    .attr("y", (d) =>{ return dmax - d })
                    .attr("height", d => d)
                    .on('mouseover', barHover)
                    .on('mouseout', (e)=>{

                      d3.select(e.srcElement).attr("fill", origcolor)
                    })

  const yaxisgenerator = d3.axisLeft(yScale);
                          
  const yAxis =  hist.append("g")
                          .attr("transform", "translate(200,200)")
                          .call(yaxisgenerator)

}

showViz()

/* const moveShape = (direction)=>{

  switch(direction){
    case 'up':
      window.location = `${location.pathname}?x=${xval}&y=${yval-20}`
      //yval+=20
      break;
    case 'down':
      window.location = `${location.pathname}?x=${xval}&y=${yval+20}`
      //yval-=20
      break;
    case 'left':
      window.location = `${location.pathname}?x=${xval-20}&y=${yval}`
      //xval-=20
      break;
    case 'right':
      window.location = `${location.pathname}?x=${xval+20}&y=${yval}`
      //xval+=20
      break;

  }

  showViz()

} */