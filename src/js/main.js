$(document).ready(function(){

    var map;

    d3.csv("src/data/travel.csv", function(error, data){
        var totalCountry = 0;
        var totalCities = 0;
        var mapdata = {};
        data.forEach(function(d){
            totalCountry += 1
            totalCities += d.cities.split(",").length
            mapdata[d.country] = {
                fillKey: 'VISITED',
                cities: d.cities,
            }
        })
        $("#countries").text(totalCountry)
        $("#cities").text(totalCities)

        map = new Datamap({
            element: document.getElementById('container'),
            responsive: true,
            fills: {
                VISITED: '#fab1a0',
                defaultFill: '#74b9ff'
            },
            data: mapdata,
            geographyConfig: {
                popupTemplate: function(geo, data) {
                    return ['<div class="hoverinfo"><strong>',
                            'Places I visited in ' + geo.properties.name,
                            ': ' + data.cities,
                            '</strong></div>'].join('');
                }
            }
        });
    })

    // set current timestamp
    var today = new Date();
    var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    $("#now").text(today.toString())

    // resize with jQuery
    $(window).on('resize', function() {
        map.resize();
    });
})
