var data_all = 
[
  {
    "city": "Indianapolis",
    "includes": "Fishers, Carmel, Noblesville, Westfield, Zionsville, Greenwood, Avon",
    "state": "Indiana",
    "latitude": 39.775092,
    "longitude": -86.13216,
    "radius": 8.7,
    "fillKey": "green",
    "overall_rankings": 8,
    "startup": 7,
    "resources": 12,
    "demographics": 10
  }
]
var map = new Datamap({
  element: document.getElementById('map_container'),
  responsive: true,
  scope: 'usa',
  projection: 'albersUsa',
  setProjection: function(element) {
    var projection = d3.geo.albersUsa()
    .scale(element.offsetWidth*1)
    .translate([element.offsetWidth / 2.7, element.offsetHeight*.7]);
    var path = d3.geo.path()
    .projection(projection);

    return {path: path, projection: projection};
  },
  geographyConfig: {
    // dataUrl: ,
    highlightOnHover: false,
    popupOnHover: false,
    hideHawaiiAndAlaska: true
  },
  data: {
        IL: {
            fillKey: 'maroon'
        },
        WI: {
            fillKey: 'maroon'
        },
        MI: {
            fillKey: 'maroon'
        },
        IN: {
            fillKey: 'maroon'
        },
        OH: {
            fillKey: 'maroon'
        },
        KY: {
            fillKey: 'maroon'
        },
        MO: {
            fillKey: 'maroon'
        },
        IA: {
            fillKey: 'maroon'
        },
        MN: {
            fillKey: 'maroon'
        },
        KS: {
            fillKey: 'maroon'
        },
        NE: {
            fillKey: 'maroon'
        },
        SD: {
            fillKey: 'maroon'
        },
        ND: {
            fillKey: 'maroon'
        },
        PA: {
            fillKey: 'maroon'
        }
    },
  bubblesConfig: {
    fillOpacity: .9,
    borderWidth: 2,
  },
  fills: {
    defaultFill: '#707070',
    red: 'red',
    green: 'green',
    blue: 'blue',
    yellow: 'yellow',
    magenta: 'magenta',
    purple: 'purple',
    maroon: '#8f0014'
  }
});
window.addEventListener('resize', function() {
  map.resize();
});
map.bubbles(data_all,{
  popupTemplate: function(geo, data) {
  if (data.includes != 0){
    return ['<div class="hoverinfo"><strong><i>' +  data.city +'</i></strong>' +
    '<br/><strong>Includes:</strong> ' +  data.includes +
    '<br/><strong>Overall Rank:</strong> ' +  data.overall_rankings +
    '<br/><strong>Startup Activity:</strong> ' +  data.startup +
    '<br/><strong>Access to Resources:</strong> ' +  data.resources +
    '<br/><strong>Economics & Demographics:</strong> ' +  data.demographics +
    '</div>'].join('');
}else {
      return ['<div class="hoverinfo"><strong><i>' +  data.city +
    '</i></strong>'+
    '<br/><strong>Overall Rank:</strong> ' +  data.overall_rankings +
    '<br/><strong>Startup Activity:</strong> ' +  data.startup +
    '<br/><strong>Access to Resources:</strong> ' +  data.resources +
    '<br/><strong>Economics & Demographics:</strong> ' +  data.demographics +
    '</div>'].join('');
}

  }});
map.labels({fontFamily: 'Oxygen'});
