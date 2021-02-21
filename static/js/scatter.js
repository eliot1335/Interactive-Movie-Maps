
// Setup the parameters
var svgWidth = 1000;
var svgHeight = 700;

var margin = {
    top: 40,
    right: 40,
    bottom: 80,
    left: 100
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


// function genreChanged(thatGenre) {
//     buildChart(thatGenre);
// }

// function buildChart(thatGenre) {
// Import Data
d3.json("/metadata/scatter_plot").then(function (movieData) {

   

    console.log(movieData);

    // Split genres
    movieData.forEach(item => {
        var genres = item.genres.split(":");
        var genre = genres[0];
        item.genres = genre;
    })
    
    // **************

    // var genreFilter = movieData.filter(row => row.genres == thatGenre);

    // console.log(genreFilter);


    // Parse the data/Cast as numbers
    // movieData.forEach(function (data) {
    //     data.budget = +data.budget;
    //     data.revenue = +data.revenue;
    // });

    // Genre Dropdown
    // var body = d3.select("body")
    // // Select Genre
    // var span = body.append("span")
    //     .text("Select a genre: ")
    // var genreInput = body.append("select")
    //     .attr("id", "genreSelect")
    //     .on("change", genreChange)
    //     .selectAll("option")
    //     .data(movieData.genres[0])
    //     .enter()
    //     .append("option")
    //     .attr("value", function (d) { return d })
    //     .text(function (d) { return d ;})

    //     body.append("br")
  

    var formatValue = d3.format(".2s");

    var xLinearScale = d3.scaleLinear()
        .domain([d3.min(movieData, d => d.budget),
                 d3.max(movieData, d => d.budget)])
        .range([0, width]);

    var yLinearScale = d3.scaleLinear()
        .domain([d3.min(movieData, d => d.revenue),
                 d3.max(movieData, d => d.revenue)])
        .range([height, 0]);
        

    // Create axis functions
    var bottomAxis = d3.axisBottom(xLinearScale).tickFormat(d => formatValue(d).replace("M", "M"));
    var leftAxis = d3.axisLeft(yLinearScale).tickFormat(d => formatValue(d).replace("M", "M").replace("G", "B"));

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
        .text("Revenue (USD)");

    chartGroup.append("text")
        .attr("transform", `translate(${width / 2}, ${height + margin.top + 10})`)
        .attr("class", "axisText")
        .text("Budget (USD)");


    var c10 = d3.scaleOrdinal(d3.schemeCategory10);
    // var c20 = d3.scaleOrdinal(d3.schemeCategory20c);


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
        .attr('fill',function (d,i) { return c10(d.genres) })
        // .attr('fill',function (d,i) { return c20(d.genres) })
        .attr("opacity", "0.6")

    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        // These options are needed to round to whole numbers if that's what you want.
        //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
        });
    
    var toolTip = d3.tip()
        .attr("class", "tooltip")
        .offset([80, -100])
        .html(function(d) {
        return (`<strong>${d.title}</strong><br><br>Genre: ${d.genres}
                <br>Budget: ${formatter.format(d.budget)}
                <br>Revenue: ${formatter.format(d.budget)}`);
        });

    chartGroup.call(toolTip);

    circlesGroup.on("mouseover", function (d) {
            d3.select(this)
                .transition()
                // .duration(500)
                .attr("r", 20)
                .attr("stroke-width", 3);
            
            toolTip.show(d, this);
        })
            .on("mouseout", function (d) {
                d3.select(this)
                    .transition()
                    // .duration(500)
                    .attr("r", 10)
                    .attr("stroke-width", 1);
                
                toolTip.hide(d);
        })
});

function genreChanged(thatGenre) {
    buildChart(thatGenre);
}

function buildChart(thatGenre) {
// Import Data
d3.json("/metadata/scatter_plot").then(function (movieData) {

   

    console.log(movieData);

    // Split genres
    movieData.forEach(item => {
        var genres = item.genres.split(":");
        var genre = genres[0];
        item.genres = genre;
    })
    
    // **************
    d3.select("#scatter").html("");

    // Setup the parameters
    var svgWidth = 1000;
    var svgHeight = 700;

    var margin = {
        top: 40,
        right: 40,
        bottom: 80,
        left: 100
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

    var genreFilter = movieData.filter(row => row.genres == thatGenre);

    console.log(genreFilter);


    // Parse the data/Cast as numbers
    // movieData.forEach(function (data) {
    //     data.budget = +data.budget;
    //     data.revenue = +data.revenue;
    // });

    // Genre Dropdown
    // var body = d3.select("body")
    // // Select Genre
    // var span = body.append("span")
    //     .text("Select a genre: ")
    // var genreInput = body.append("select")
    //     .attr("id", "genreSelect")
    //     .on("change", genreChange)
    //     .selectAll("option")
    //     .data(movieData.genres[0])
    //     .enter()
    //     .append("option")
    //     .attr("value", function (d) { return d })
    //     .text(function (d) { return d ;})

    //     body.append("br")
  

    var formatValue = d3.format(".2s");

    var xLinearScale = d3.scaleLinear()
        .domain([d3.min(genreFilter, d => d.budget),
                 d3.max(genreFilter, d => d.budget)])
        .range([0, width]);

    var yLinearScale = d3.scaleLinear()
        .domain([d3.min(genreFilter, d => d.revenue),
                 d3.max(genreFilter, d => d.revenue)])
        .range([height, 0]);
        

    // Create axis functions
    var bottomAxis = d3.axisBottom(xLinearScale).tickFormat(d => formatValue(d).replace("M", "M"));
    var leftAxis = d3.axisLeft(yLinearScale).tickFormat(d => formatValue(d).replace("M", "M").replace("G", "B"));

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
        .text("Revenue (USD)");

    chartGroup.append("text")
        .attr("transform", `translate(${width / 2}, ${height + margin.top + 10})`)
        .attr("class", "axisText")
        .text("Budget (USD)");


    var c10 = d3.scaleOrdinal(d3.schemeCategory10);
    // var c20 = d3.scaleOrdinal(d3.schemeCategory20c);


    // Create circles
    var circlesGroup = chartGroup.selectAll("circle")
        .data(genreFilter)
        .enter()
        .append("circle")
        .attr("cx", d => xLinearScale(d.budget))
        .attr("cy", d => yLinearScale(d.revenue))
        .attr("r", 10)
        .attr("stroke", "black")
        .attr("stroke-width", 1)
        // .attr("fill", "teal")
        .attr('fill', function (d,i) { return c10(d.genres) })
        // .attr('fill',function (d,i) { return c20(d.genres) })
        .attr("opacity", "0.6")

    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        // These options are needed to round to whole numbers if that's what you want.
        //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
        });
    
    var toolTip = d3.tip()
        .attr("class", "tooltip")
        .offset([80, -100])
        .html(function(d) {
        return (`<strong>${d.title}</strong><br><br>Genre: ${d.genres}
                <br>Budget: ${formatter.format(d.budget)}
                <br>Revenue: ${formatter.format(d.budget)}`);
        });

    chartGroup.call(toolTip);

    circlesGroup.on("mouseover", function (d) {
            d3.select(this)
                .transition()
                // .duration(500)
                .attr("r", 20)
                .attr("stroke-width", 3);
            
            toolTip.show(d, this);
        })
            .on("mouseout", function (d) {
                d3.select(this)
                    .transition()
                    // .duration(500)
                    .attr("r", 10)
                    .attr("stroke-width", 1);
                
                toolTip.hide(d);
        })
    
    // function genreChange() {
    //     var value = this.value // get the new y value

    //     xLinearScale // change the yScale
    //         .domain([
    //         d3.min([0,d3.min(data.values,function (d) { return d[value] })]),
    //         d3.max([0,d3.max(data.values,function (d) { return d[value] })])
    //         ])
    //     yAxis.scale(yScale) // change the yScale
    //     d3.select('#yAxis') // redraw the yAxis
    //         .transition().duration(1000)
    //         .call(yAxis)
    //     d3.select('#yAxisLabel') // change the yAxisLabel
    //         .text(value)    
    //     d3.selectAll('circle') // move the circles
    //         .transition().duration(1000)
    //         .delay(function (d,i) { return i*100})
    //         .attr('cy',function (d) { return yScale(d[value]) })
    //       }
});
}



/* features to work on

1. Genre filter
    - Drop down
2. Tooltip improvement (done)
3. Color scale circles (done)
4. Axes labeling (done)
5. Create a legend for the color scale
                        */
