function resetInit() {

    d3.select("#scatter").html("");

    // Setup the parameters
    var svgWidth = 1000;
    var svgHeight = 550;

    var margin = {
        top: 20,
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

    // Import Data
    d3.json("/metadata/scatter_plot").then(function (movieData) {

        // console.log(movieData);

        // Split genres
        movieData.forEach(item => {
            var genres = item.genres.split(":");
            var genre = genres[0];
            item.genres = genre;
        })
    
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
            .attr('fill',function (d,i) { return c10(d.genres) })
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
            .offset([80, -130])
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
}

function genreChanged(thatGenre) {
    buildChart(thatGenre);
}

function buildChart(thatGenre) {
// Import Data
    d3.json("/metadata/scatter_plot").then(function (movieData) {

        // console.log(movieData);

        // Split genres
        movieData.forEach(item => {
            var genres = item.genres.split(":");
            var genre = genres[0];
            item.genres = genre;
        })
        
        // Wipe previous chart from different genre
        d3.select("#scatter").html("");

        // Setup the parameters
        var svgWidth = 1000;
        var svgHeight = 550;

        var margin = {
            top: 20,
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

        // The genreFilter that create new object of the specific genre
        var genreFilter = movieData.filter(row => row.genres == thatGenre);

        // console.log(genreFilter);

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
            .attr('fill', function (d,i) { return c10(d.genres) })
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
}

resetInit();

/* features to work on

1. Genre filter (done)
    - Drop down (done)
2. Tooltip improvement (done)
3. Color scale circles (done)
4. Axes labeling (done)
5. Create a legend for the color scale
6. Set margin for the circles to not land on the axes
                        */
