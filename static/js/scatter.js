// Setup the parameters
var svgWidth = 1000;
var svgHeight = 500;

var margin = {
    top: 40,
    right: 40,
    bottom: 80,
    left: 200
};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

var svg = d3.select("#scatter")
            .append("svg")
            .attr("width", svgWidth)
            .attr("height", svgHeight);

var chartGroup = svg
            .append("g")
            .attr("transform", `translate(${margin.left}, ${margin.top})`);
            // .attr("pointer-events", "stroke")


// var colorScale = d3.scale.category20()

// Import Data
d3.json("/metadata/scatter_plot").then(function (movieData) {

    console.log(movieData);

    // Parse the data/Cast as numbers
    movieData.forEach(function (data) {
        data.budget = +data.budget;
        data.revenue = +data.revenue;
    });

    var xLinearScale = d3.scaleLinear()
        .domain([d3.min(movieData, d => d.budget),
                 d3.max(movieData, d => d.budget)])
        .range([0, width]);

    var yLinearScale = d3.scaleLinear()
        .domain([d3.min(movieData, d => d.revenue),
                 d3.max(movieData, d => d.revenue)])
        .range([height, 0]);

    // Create axis functions
    var bottomAxis = d3.axisBottom(xLinearScale);
    var leftAxis = d3.axisLeft(yLinearScale);

    // Append Axes to the chart
    chartGroup.append("g")
        .attr("transform", `translate(0, ${height})`)
        .call(bottomAxis);

    chartGroup.append("g")
        .call(leftAxis);
    
    // Create axes labels
    chartGroup.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 -margin.left + 100)
        .attr("x", 0 - (height / 2) -60)
        .attr("class", "axisText")
        .text("Revenue (USD)");

    chartGroup.append("text")
        .attr("transform", `translate(${width / 2}, ${height + margin.top + 10})`)
        .attr("class", "axisText")
        .text("Budget (USD)");

    // Create circles
    var circlesGroup = chartGroup.selectAll("circle")
        .data(movieData)
        .enter()
        .append("circle")
        .attr("cx", d => xLinearScale(d.budget))
        .attr("cy", d => yLinearScale(d.revenue))
        .attr("r", 10)
        .attr("stroke", "black")
        .attr("stroke-width", 1)
        .attr("fill", "teal")
        // .attr('fill',function (d,i) { return colorScale(i) })
        .attr("opacity", "0.6")

    circlesGroup.on("mouseover", function (d) {
            d3.select(this)
                .transition()
                // .duration(500)
                .attr("r", 20)
                .attr("stroke-width", 3)
        })
            .on("mouseout", function () {
                d3.select(this)
                .transition()
                // .duration(500)
                .attr("r", 10)
                .attr("stroke-width", 1)
        })

        .append("title") // Tooltip
            .text(d => d.title);

        // .append("div")
        // .classed("tooltip", true)
        // .style("display", "block")
        // .html(`<strong>${d => d.title}<strong><hr>${d => d.budget}`);
});




/* features to work on

1. Genre filter
    - Drop down
2. Tooltip improvement
3. Color scale circles
                        */
