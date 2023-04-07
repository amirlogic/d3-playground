
const showViz = ()=>{


    let pbar = d3.select("#progress")
                 .style("padding", "20px")
                 .append("svg")
                  .attr("width",1000)
                  .attr("height",600)

    pbar.append("rect")
      .attr("x",xval)
      .attr("y",yval)
      .attr("width",progval)
      .attr("height",20)
      .attr("fill","cornflowerblue")

    pbar.append("rect")
      .attr("x",xval)
      .attr("y",yval)
      .attr("width",100)
      .attr("height",20)
      .attr("fill","transparent")
      .attr("stroke-width",2)
      .attr("stroke","gray")

  


}

showViz()

const moveShape = (direction)=>{

  switch(direction){
    case 'up':
      window.location = `${location.pathname}?p=${progval}&x=${xval}&y=${yval-20}`
      //yval+=20
      break;
    case 'down':
      window.location = `${location.pathname}?p=${progval}&x=${xval}&y=${yval+20}`
      //yval-=20
      break;
    case 'left':
      window.location = `${location.pathname}?p=${progval}&x=${xval-20}&y=${yval}`
      //xval-=20
      break;
    case 'right':
      window.location = `${location.pathname}?p=${progval}&x=${xval+20}&y=${yval}`
      //xval+=20
      break;

  }

  showViz()

}