var usgigmap = new Datamap({element: document.getElementById('container'), scope: 'usa'});
var projection = d3.geo.albersUsa();
usgigmap.bubbles(anmshows, {
    popupTemplate: function (geo, data) {
    return ['<div class="hoverinfo">' + data.date,
        '<br/>date: ' + data.date + '',
        '<br/>city: ' + data.city + '',
        '<br/>venue: ' + data.venue + '',
        '</div>'].join('');
    }
});

        // usgigmap.selectAll("circles.points")
        // .data(data)
        // .enter()
        // .append("circle")
        // .attr("r",5)
        // .attr("transform", function(d) {return "translate(" + projection([d.longitude,d.latitude]) + ")";});