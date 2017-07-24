var controller = new ScrollMagic.Controller({
  globalSceneOptions: {
      triggerHook: "onLeave",
      duration: 900,
      duration: '100%'
  }
});


var pinani = new TimelineMax()
    .add(TweenMax.to("#wipe", 2, {transform: "translateY(0)"}))
    .add(TweenMax.to("#second-wipe", 1, {transform: "translateY(0)"}))
    .add(TweenMax.to("#third-wipe", 1, {transform: "translateY(0)"}))
    .add(TweenMax.to("#fourth-wipe", 1, {transform: "translateY(0)"}))
    .add(TweenMax.to("#fifth-wipe", 1, {transform: "translateY(0)"}));


new ScrollMagic.Scene({
  triggerElement: "section#pin",
  duration: '100%'
})
.setTween(pinani)
.setPin("section#pin")
.addTo(controller);



                  
  var map = new Datamap({
                      element: document.getElementById('map_container2'),
                      scope: 'usa',
                      // projection: 'albersUsa',
                      setProjection: function(element) {
                      var projection = d3.geo.albersUsa()
                        // .center([-75, 40])
                        // .rotate([0, 0])
                        .scale(element.offsetWidth*2.3)
                        .translate([element.offsetWidth / 3, element.offsetHeight*.8]);
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

  var map = new Datamap({
                      element: document.getElementById('map_container3'),
                      scope: 'usa',
                      // projection: 'albersUsa',
                      setProjection: function(element) {
                      var projection = d3.geo.albersUsa()
                        // .center([-75, 40])
                        // .rotate([0, 0])
                        .scale(element.offsetWidth*2.3)
                        .translate([element.offsetWidth / 3, element.offsetHeight*.8]);
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




