
const showViz = ()=>{




    d3.select("#mover")
      .style("padding", "20px")
    .append("svg")
      .attr("width",1000)
      .attr("height",600)
    .append("circle")
      .attr("cx",xval)
      .attr("cy",yval)
      .attr("r",40)
      .attr("fill","cornflowerblue")


}

showViz()

const moveShape = (direction)=>{

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

}