
const showViz = (zoom)=>{

  const origcolor = "#6D3A7E"

  const secolor = "#AEC09A"

  const dmax = d3.max(hdata)*zoom;

  const bottom = dmax;

  const barwidth = 20;

  const leftgap = 5;

  const innergap = 10;

  const unitwidth = barwidth+innergap;

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
                    .attr("x", (d,i) => i * unitwidth + leftgap)
                    .attr("width", barwidth)
                    .attr("y", (d) =>{ return dmax - d })
                    .attr("height", d => d)
                    .on('mouseover', barHover)
                    .on('mouseout', (e)=>{

                      d3.select(e.srcElement).attr("fill", origcolor)
                    })

  const yaxisgenerator = d3.axisLeft(yScale);

  const xScale = d3.scaleBand()
                    .domain(hdata.map((el,i)=>{
                      return i;
                    }))
                    .range([0, hdata.length*unitwidth ])
                          
  const xaxisgenerator = d3.axisBottom(xScale)
                      
  const yAxis =  hist.append("g")
                          .attr("transform", "translate(200,200)")
                          .call(yaxisgenerator)

  const xAxis =  hist.append("g")
                          .attr("transform", `translate(200,${200+bottom})`)
                          .call(xaxisgenerator)

}

showViz(1)

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