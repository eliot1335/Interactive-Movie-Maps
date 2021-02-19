var svgWidth = 800;
var svgHeight = 800;

var width = svgWidth-margin.left-margin.right;
var height = svgHeight -margin.top-margin.bottom;

var svg = d3.select("#map")
            .append("svg")
            .attr("width", svgWidth)
            .attr("height", svgHeight);