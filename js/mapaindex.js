let map = L.map('map').setView([-16.2588034,-64.9609351], 6)


let OpenSMap = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png'
   ).addTo(map);

   
// escala
   new L.control.scale({imperial: false}).addTo(map)

   let pobla = L.tileLayer.wms("https://geoserver.planificacion.gob.bo/geoserver/infocapa/wms?", {
    layers: "layer_amenaza_de_helada_x7yef",
    interactive: false,
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    
  });

     let incendio = L.tileLayer.wms("https://geoserver.planificacion.gob.bo/geoserver/infocapa/wms?", {
    layers: "layer_amenaza_de_incendios_oexlsh",
    interactive: false,
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    
  });

       let prueba = L.tileLayer.wms("https://geoserver.planificacion.gob.bo/geoserver/pnot2025metropolizacion/wms?", {
    layers: "pnot2025metropolizacion:evapotranspiracion_real_por_unidad_hidrografica",
    interactive: false,
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    
  });

let baselayer = {
//"Capas Base": {
    "Open street Map": OpenSMap,


};

let overlays = {

//"Capas DGOU": {
    "Amenaza de helada": pobla,
    "Amenaza de incendios": incendio,
   "prueba": prueba,


};

L.control.layers(baselayer, overlays, {collapsed: false}).addTo(map);
