
const showViz = ()=>{

  const width = 800;

  const height = 600;

  let wmap = d3.select("#wmap")
                .append("svg")
                    .attr("width", width)
                    .attr("height", height);

  let projection = d3.geoNaturalEarth1()
                    .scale(width / 1.3 / Math.PI)
                    .translate([width / 2, height / 2])


  const countryClick = (e,d)=>{

    d3.select('#target').text(JSON.stringify({id:d.id, name:d.properties.name }))
                let country = d3.select(e.srcElement)

                country.attr("fill", "#AEC09A")
                console.log(e)
                //console.log(i)
                console.log(country)
  }

  d3.json("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson").then( function(data){

      // Draw the map
      wmap.append("g")
          .selectAll("path")
          .data(data.features)
          .join("path")
              .attr("fill", "#69b3a2")
              .attr("d", d3.geoPath()
              .projection(projection)
              )
              .style("stroke", "#fff")
              .on('click', countryClick)
  })

  
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