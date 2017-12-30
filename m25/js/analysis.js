$(window).on('load',function() {
var root = {

 "name": "flare",
 "children": [
  {
   "name": "analytics",
   "children": [
    {
     "name": "Team",
     "children": [
      {"name": "Team", "size": 4}
     ]
    },
    {
     "name": "Market",
     "children": [
      {"name": "Market", "size": 3}
     ]
    },
    {
     "name": "Traction",
     "children": [
      {"name": "Traction", "size": 3}
     ]
    },
    {
     "name": "Competition",
     "children": [
      {"name": "Competition", "size": 3}
     ]
    },
    {
     "name": "Growth",
     "children": [
      {"name": "Growth", "size": 2}
     ]
    },
    {
     "name": "Funding",
     "children": [
      {"name": "Funding", "size": 2}
     ]
    },
    {
     "name": "Business",
     "children": [
      {"name": "Business Plan", "size": 1}
     ]
    }
   ]
  }
 ]
};




var diameter = 500,
    format = d3.format(",d"),
    color = d3.scale.ordinal().range(["#e66432", "#e87346","#eb835a","#ed926f", "#f0a284","#f2b198", "#f5c1ad"]);

var bubble = d3.layout.pack()
    .sort(null)
    .size([diameter, diameter])
    .padding(0);

var svg = d3.select("#analysis").append("svg")
    .attr("viewBox","0 0 500 500")
    .attr("perserveAspectRatio","xMinYMid")
    .attr("width", diameter)
    .attr("height", diameter)
    .attr("class", "bubble");

//d3.json("flare.json", function(error, root) {
  var node = svg.selectAll(".node")
      .data(bubble.nodes(classes(root))
      .filter(function(d) { return !d.children; }))
    .enter().append("g")
      .attr("class", "node")
      .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

  node.append("title")
      .text(function(d) { return d.className + ": " + format(d.value); });

  node.append("circle")
      .attr("r", function(d) { return d.r; })
      .style("fill", function(d) { return color(d.packageName); });

  node.append("text")
      .text(function(d) { return d.className.substring(0, d.r / 3); })
      .style("text-anchor", "middle")
      .style("font-size", function(d) { return Math.min(2 * d.r, (2 * d.r - 8) / this.getComputedTextLength() * 10) + "px"; })
      .attr("fill", "#121922")
       .attr("dy", ".3em");
//});



      
      

// Returns a flattened hierarchy containing all leaf nodes under the root.
function classes(root) {
  var classes = [];

  function recurse(name, node) {
    if (node.children) node.children.forEach(function(child) { recurse(node.name, child); });
    else classes.push({packageName: name, className: node.name, value: node.size});
  }

  recurse(null, root);
  return {children: classes};
}

//d3.select(self.frameElement).style("height", diameter + "px");

var chart = $(".bubble"),
    aspect = chart.width() / chart.height(),
    container = chart.parent();
$(window).on("resize", function() {
    var targetWidth = container.width();
    chart.attr("width", targetWidth/2);
    chart.attr("height", Math.round(targetWidth*.5 / aspect));
}).trigger("resize");

});//]]> 
