// Step 1: Set up our chart
//= ================================
var svgWidth = 960;
var svgHeight = 800;

var margin = {
  top: 20,
  right: 40,
  bottom: 60,
  left: 50
};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// Step 2: Create an SVG wrapper,
// append an SVG group that will hold our chart,
// and shift the latter by left and top margins.
// =================================
var svg = d3
  .select("body")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Step 3:
// Import data from the mojoData.csv file
// =================================
d3.csv("data/data.csv", function(error, healthData) {
  if (error) throw error;
  // healthData.forEach(d => {console.log(d.stateAbbrv)});
  // console.log(d3.max(healthData, d => parseFloat(d.diabetes)));

  //= ============================================

  var xLinearScale = d3.scaleLinear()
    .domain([0, d3.max(healthData, d => parseFloat(d.medianIncome))])
    .range([0, width]);

  var yLinearScale = d3.scaleLinear()
    .domain([0, d3.max(healthData, d => parseFloat(d.diabetes))])
    .range([height, 0]);

  // Step 6: Create Axes
  // =============================================
  var bottomAxis = d3.axisBottom(xLinearScale);
  var leftAxis = d3.axisLeft(yLinearScale);


  // Step 7: Append the axes to the chartGroup
  // ==============================================
  // Add bottomAxis
  chartGroup.append("g").attr("transform", `translate(0, ${height})`).call(bottomAxis);

  // Add leftAxis to the left side of the display
  chartGroup.append("g").call(leftAxis);


  // Step 8: Set up circle generators for all data points
  // ==============================================
  // Line generators for each line
 
 
  // var circle = d3
  //   .line()
  //   .x(d => xLinearScale(d.medianIncome))
  //   .y(d => yLinearScale(d.diabetes));

  // var line2 = d3
  //   .line()
  //   .x(d => xTimeScale(d.date))
  //   .y(d => yLinearScale2(d.evening));

  var circlesGroup = chartGroup.selectAll("circle")
    .data(healthData)
    .enter()
    .append("circle")
    .attr("cx", d => xLinearScale(d.medianIncome))
    .attr("cy", d => yLinearScale(d.diabetes))
    .attr("r", "15")
    .style("opacity", .8)  
    .attr("fill", "#A07A19")
    .attr("stroke-width", "1")
    .attr("stroke", "black");
    
  var circlesText = chartGroup.selectAll("text")
    .data(healthData)
    .enter()
    .append("text")
    .attr("x", d => xLinearScale(d.medianIncome)-7)
    .attr("y", d => yLinearScale(d.diabetes)+4)
    .style("font-size", 10)
    .text(d => d.stateAbbrv);

  chartGroup.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 0 - margin.left)
    .attr("x", 0 - (height*(2/3)))
    .attr("dy", "1em")
    .attr("class", "axisText")
    .text("Percent of State Population Diagnosed with Diabetes");

  chartGroup.append("text")
    .attr("transform", `translate(${width / 2}, ${height + margin.top + 30})`)
    .attr("class", "axisText")
    .text("Median Houehold Income");

});
