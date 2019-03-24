// var map = new Datamap({
//   element: document.getElementById('container'),
//   fills: {
//     defaultFill: '#74b9ff'
//   }
// });
// $.get('data/travel.csv', function(data){
//     var test = $.csv.toObjects(data);
//     console.log(test)
// })

var map = new Datamap({
    element: document.getElementById('container'),
    responsive: true,
    fills: {
        VISITED: '#fab1a0',
        defaultFill: '#74b9ff'
    },
    data: {
        CHE: {
            fillKey: 'VISITED',
            cities: "Geneve, Lausanne, Zurich"
        },
        IDN: {
            fillKey: 'VISITED',
            cities: "Denpasar, Depok, Jakarta"
        },
    },
    geographyConfig: {
        popupTemplate: function(geo, data) {
            return ['<div class="hoverinfo"><strong>',
                    'Places I visited ' + geo.properties.name,
                    ': ' + data.cities,
                    '</strong></div>'].join('');
        }
    }
});

// resize with jQuery
$(window).on('resize', function() {
    map.resize();
});

