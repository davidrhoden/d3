var usgigmap = new Datamap({element: document.getElementById('container'), scope: 'usa' });

usgigmap.bubbles(anmshows, function (error, data) {
    var svg = $(".datamap");
    console.log(svg);
    svg.selectAll("circles.points")
        .data(data)
        .enter()
        .append("circle")
        .attr("transform", function (d) {
            return "translate(" + projection([d.longitude,d.latitude]) + ")";
        })
        .attr("r", 5)
        .style("fill", "red");
    }, {
    popupTemplate: function (geo, data) {
    return ['<div class="hoverinfo">' + data.date,
        '<br/>date: ' + data.date + '',
        '<br/>city: ' + data.city + '',
        '<br/>venue: ' + data.venue + '',
        '</div>'];
        // '</div>'].join('');
    }
});

        // usgigmap.selectAll("circles.points")
        // .data(data)
        // .enter()
        // .append("circle")
        // .attr("r",5)
        // .attr("transform", function(d) {return "translate(" + projection([d.longitude,d.latitude]) + ")";});