var map = new Datamap({
                      element: document.getElementById('map_container'),
                      scope: 'usa',
                      // projection: 'albersUsa',
                      setProjection: function(element) {
                      var projection = d3.geo.albersUsa()
                        // .center([-75, 40])
                        // .rotate([0, 0])
                        .scale(1320)
                        .translate([90,260]);
                      var path = d3.geo.path()
                        .projection(projection);

                      return {path: path, projection: projection};
                    },
                      geographyConfig: {
                          highlightOnHover: false,
                          popupOnHover: false,
                          hideHawaiiAndAlaska: true
                      },
                      bubblesConfig: {
                        fillOpacity: .9,
                        borderWidth: 2,
                      },
                      fills: {
                        defaultFill: '#ABDDA4',
                        CHICAGO: 'blue',
                        red: 'red',
                        green: 'green',
                        blue: 'blue',
                        yellow: 'yellow',
                        magenta: 'magenta',
                        purple: 'purple'
                      }
                  });
                  map.bubbles(data_all,{
                    popupTemplate: function(geo, data) {
                    return ['<div class="hoverinfo">' +  data.name,
                           '<br/>radius: ' +  data.radius + '',
                           '<br/>Ranking: ' +  data.Ranking + '',
                           '<br/>latitude: ' +  data.latitude + '',
                           '<br/>longitude: ' +  data.longitude + '',
                           '</div>'].join('');
                }});
                  map.labels({fontFamily: 'Oxygen', fontSize: 9});
                  map.legend();

