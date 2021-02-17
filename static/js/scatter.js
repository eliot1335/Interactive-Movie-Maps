// Setup the parameters
var svgWidth = 800;
var svgHeight = 600;

var margin = {
    top: 40,
    right: 40,
    bottom: 80,
    left: 90
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

// Import Data
d3.csv("url_for('Resources', filename='movies_metadata.csv')").then(function (movieData) {

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
        .attr("y", 0 -margin.left + 50)
        .attr("x", 0 - (height / 2) -60)
        .attr("class", "axisText")
        .text("Revenue");

    chartGroup.append("text")
        .attr("transform", `translate(${width / 2}, ${height + margin.top + 10})`)
        .attr("class", "axisText")
        .text("Budget");

    // Create circles
    chartGroup.selectAll("circle")
        .data(movieData)
        .enter()
        .append("circle")
        .attr("cx", d => xLinearScale(d.budget))
        .attr("cy", d => yLinearScale(d.revenue))
        .style("r", 10)
        .style("fill", "teal")
        .style("opacity", "0.6");

    // Create circle labels
    // chartGroup.selectAll()
    //     .data(movieData)
    //     .enter()
    //     .append("text")
    //     .attr("x", d => xLinearScale(d.budget) -6.5)
    //     .attr("y", d => yLinearScale(d.revenue) + 3)
    //     .style("fill", "white")
    //     .style("font-size", "8.5")
    //     .text(d => d.title);
});