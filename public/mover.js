
const showViz = ()=>{




    let cont = d3.select("#mover")
                  .style("padding", "20px")
                .append("svg")
                  .attr("width",1000)
                  .attr("height",600)

    let circle = cont.append("circle")
                  .attr("cx",xval)
                  .attr("cy",yval)
                  .attr("r",40)
                  .attr("fill","cornflowerblue")
                  .on('click',(e)=>{

                    d3.select(e.srcElement).transition()
                    .attr("fill", "black")
                    .attr("r", 80)
                    .transition()
                    .attr("r", 40)
                    .attr("fill", "cornflowerblue");
            
                  })
                  .call(d3.drag().on("drag", (e)=>{

                    circle.attr("cx", e.x)
                    circle.attr("cy", e.y)
                  }))

        
   

    
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

  //showViz()

}