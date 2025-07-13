let map = L.map('map').setView([-16.2588034,-64.9609351], 6)


let OpenSMap = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png'
   ).addTo(map);

   
// escala
   new L.control.scale({imperial: false}).addTo(map)

// Departamento

function popupdepartamentos(feature, layer) {
  if (feature.properties && feature.properties.DEPARTAMEN) {
    layer.bindPopup("<strong>DEPARTAMENTO: </strong>" + feature.properties.DEPARTAMEN
    );
  }
}

function departamento() {
  return {

    opacity: 1,
    color: 'rgba(35,35,35,1.0)',
    dashArray: '',
    lineCap: 'butt',
    lineJoin: 'miter',
    weight: 3.0,
    fillOpacity: 0,
    interactive: true,
  }
}

let Departamentos = L.geoJson(json_departamento_2, {
  onEachFeature: popupdepartamentos,
  style: departamento
})


// municipios

function popupmunicipio(feature, layer) {
  if (feature.properties && feature.properties.DEPARTAMEN) {
    layer.bindPopup("<strong>DEPARTAMENTO: </strong>" + feature.properties.DEPARTAMEN
      + "<br><strong>PROVINCIA: </strong>" + feature.properties.PROVINCIA
      + "<br><strong>MUNICIPIO: </strong>" + feature.properties.MUN_TIOC

    );
  }
}

function municipios() {
  return {

    opacity: 1,
    color: 'rgba(35,35,35,1.0)',
    dashArray: '',
    lineCap: 'butt',
    lineJoin: 'miter',
    weight: 1.0,
    fillOpacity: 0,
    interactive: true,
  }
}


let Municipios = L.geoJson(json_municipios4326_1, {
  onEachFeature: popupmunicipio,
  style: municipios
})

let baselayer = {
  //"Capas Base": {
  "Open street Map": OpenSMap,


};

let overlays = {

  //"Capas DGOU": {
  "Departamentos": Departamentos,
  "Municipios": Municipios,

};

L.control.layers(baselayer, overlays, { collapsed: false }).addTo(map);
