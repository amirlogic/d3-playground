
const dispatch = d3.dispatch("test", "none");

const newcolor = "#c5f1b4"

const showViz = () => {

	let cont = d3.select('#wrapper')
		.style('padding', '20px')
		.append('svg')
		.attr('width', 1000)
		.attr('height', 600);

	let circle = cont
		.append('circle')
		.attr('cx', xval)
		.attr('cy', yval)
		.attr('r', 40)
		.attr('fill', 'cornflowerblue')
		.call( dispatch.on('test', ()=>{

			console.log("it works!")
			//console.log(t,s)
			
		}))
		
};

showViz();

function changeShape(){

	dispatch.call("test")

};
