// Create a data value for each feature
(async () => {
    const topology = await fetch(
        'https://code.highcharts.com/mapdata/custom/world-highres.topo.json'
    ).then(response => response.json());

    const data = [
        // Define your country data entries as provided by Highcharts
    ];

    // Initialize the chart
    Highcharts.mapChart('container', {
        chart: {
            map: topology
        },
        title: {
            text: 'The history of the coffee bean ☕'
        },
        legend: {
            enabled: false
        },
        tooltip: {
            useHTML: true,
            headerFormat: '<b>{point.key}</b>:<br/>',
            pointFormat: '{point.info}'
        },
        mapView: {
            fitToGeometry: {
                type: 'MultiPoint',
                coordinates: [
                    // Alaska west
                    [-164, 54],
                    // Greenland north
                    [-35, 84],
                    // New Zealand east
                    [179, -38],
                    // Chile south
                    [-68, -55]
                ]
            }
        },
        series: [
            {
                data,
                keys: ['hc-key', 'color', 'info'],
                name: 'Coffee'
            },
            // ... Other series configurations as needed
        ]
    });
})();
