import { select, pie, entries, ascending, arc } from "d3";

const DATA1 = {
	a: 10,
	b: 20,
	c: 30,
	d: 40,
};

const DATA2 = {
	a: 8,
	b: 7,
	c: 12,
	d: 10,
};

const WIDTH = 600;
const HEIGHT = 600;
const MARGIN = 3;
const RADIUS = Math.min(WIDTH, HEIGHT) / 2 - MARGIN;

const svg = select("body")
	.append("svg")
	.attr("width", WIDTH)
	.attr("height", HEIGHT)
	.append("g")
	.attr("transform", `translate(50, 0)`);

const update = (data) => {
	let piechart = pie()
		.value((d) => d.value)
		.sort((a, b) => ascending(a.key, b.key)); // group order consistency

	let dataReady = piechart(entries(data));

	let graph = svg.selectAll("path").data(dataReady);

	graph
		.enter()
		.append("path")
		.merge(graph)
		.transition()
		.duration(1000)
		.attr("d", arc().innerRadius(0).outerRadius(RADIUS))
		.attr("fill", "tomato");

	graph.exit().remove();
};

update(DATA1);
