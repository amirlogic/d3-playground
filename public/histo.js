const showViz = () => {
	const svgwidth = 760 * zoom;

	const svgheight = 500 * zoom;

	const origcolor = '#6D3A7E';

	const secolor = '#AEC09A';

	const dmax = d3.max(hdata);

	const bottom = dmax * zoom;

	const barwidth = 20 * zoom;

	const leftgap = 5 * zoom;

	const innergap = 10 * zoom;

	const unitwidth = barwidth + innergap;

	const yScale = d3
		.scaleLinear()
		.domain([0, dmax])
		.range([dmax * zoom, 0]);

	let barHover = e => {
		let hbar = d3.select(e.srcElement);

		hbar.transition().attr('fill', secolor);

		//console.log("hover!")
	};

	const hist = d3
		.select('#histo')
		.append('svg')
		.attr('width', svgwidth)
		.attr('height', svgheight);

	hist
		.append('g')
		.attr('fill', origcolor)
		.attr('transform', `translate(${200 * zoom}, ${200 * zoom})`)
		.selectAll('rect')
		.data(hdata)
		.join('rect')
		.attr('x', (d, i) => i * unitwidth + leftgap)
		.attr('width', barwidth)
		//.attr("y", (d) =>{ return (dmax - d)*zoom })
		//.attr("height", d => d*zoom)
		.on('mouseover', barHover)
		.on('mouseout', e => {
			d3.select(e.srcElement).transition().attr('fill', origcolor);
		})
		.transition()
		.attr('y', d => {
			return (dmax - d) * zoom;
		})
		.attr('height', d => d * zoom);

	const yaxisgenerator = d3.axisLeft(yScale);

	const xScale = d3
		.scaleBand()
		.domain(
			hdata.map((el, i) => {
				return i;
			}),
		)
		.range([0, hdata.length * unitwidth]);

	const xaxisgenerator = d3.axisBottom(xScale);

	const yAxis = hist
		.append('g')
		.attr('transform', `translate(${200 * zoom},${200 * zoom})`)
		.call(yaxisgenerator);

	const xAxis = hist
		.append('g')
		.attr('transform', `translate(${200 * zoom},${200 * zoom + bottom})`)
		.call(xaxisgenerator);
};

showViz();

const changeZoom = newzoom => {
	window.location = `${location.pathname}?d=${hdata.join(',')}&z=${newzoom}`;
};
