const map = ol.Map({
    target:'map',
    view: new ol.View({
        center: ol.proj.fromLonLat([29,41]),
        zoom: 12
    })
})

const osmLayer = new ol.layer.Tile({
    source: new ol.source.OSM(),

    }
)

map.addLayer(osmLayer);