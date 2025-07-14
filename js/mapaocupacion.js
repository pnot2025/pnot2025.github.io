let map = L.map('map').setView([-16.2588034, -64.9609351], 6)


let OpenSMap = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png'
).addTo(map);


// escala
new L.control.scale({ imperial: false }).addTo(map)

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


// etnias

function etnias(feature, layer) {
  if (feature.properties && feature.properties.ETNIAS) {
    layer.bindPopup("<strong>ETNIAS: </strong>" + feature.properties.ETNIAS
      + "<br><strong>DEPARTAMENTO: </strong>" + feature.properties.DEPARTAMEN
      + "<br><strong>PROVINCIA: </strong>" + feature.properties.PROVINCIA
      + "<br><strong>MUNICIPIO: </strong>" + feature.properties.MUN_TIOC


    );
  }
}


function style_etnias(feature) {
  switch (String(feature.properties['ETNIAS'])) {
    case 'AFROBOLIVIANO':
      return {
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(116,215,153,1.0)',
        interactive: true,
      }
      break;
    case 'ARAONA':
      return {
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(21,181,234,1.0)',
        interactive: true,
      }
      break;
    case 'AYMARA':
      return {
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(104,160,200,1.0)',
        interactive: true,
      }
      break;
    case 'AYOREO':
      return {
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(152,41,211,1.0)',
        interactive: true,
      }
      break;
    case 'BAURE':
      return {
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(235,137,63,1.0)',
        interactive: true,
      }
      break;
    case 'CANICHANA':
      return {
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(227,221,105,1.0)',
        interactive: true,
      }
      break;
    case 'CAVINABO':
      return {
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(115,230,136,1.0)',
        interactive: true,
      }
      break;
    case 'CAYUBABA':
      return {
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(144,63,231,1.0)',
        interactive: true,
      }
      break;
    case 'CHACOBO':
      return {
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(201,84,76,1.0)',
        interactive: true,
      }
      break;
    case 'CHIMAN':
      return {
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(224,14,186,1.0)',
        interactive: true,
      }
      break;
    case 'CHIQUITANO':
      return {
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(109,225,51,1.0)',
        interactive: true,
      }
      break;
    case 'ESE EJJA':
      return {
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(106,222,168,1.0)',
        interactive: true,
      }
      break;
    case 'GUARANI':
      return {
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(228,155,132,1.0)',
        interactive: true,
      }
      break;
    case 'GUARAYO':
      return {
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(201,108,220,1.0)',
        interactive: true,
      }
      break;
    case 'JUAQUINIANO':
      return {
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(119,220,227,1.0)',
        interactive: true,
      }
      break;
    case 'LECO':
      return {
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(23,215,161,1.0)',
        interactive: true,
      }
      break;
    case 'MACHINERI':
      return {
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(178,233,120,1.0)',
        interactive: true,
      }
      break;
    case 'MORA':
      return {
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(122,208,123,1.0)',
        interactive: true,
      }
      break;
    case 'MOSETON':
      return {
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(222,60,106,1.0)',
        interactive: true,
      }
      break;
    case 'MOVIMA':
      return {
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(62,69,204,1.0)',
        interactive: true,
      }
      break;
    case 'MOXEIO':
      return {
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(218,236,102,1.0)',
        interactive: true,
      }
      break;
    case 'PACAHUARA':
      return {
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(70,214,200,1.0)',
        interactive: true,
      }
      break;
    case 'PAICONECA':
      return {
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(83,64,206,1.0)',
        interactive: true,
      }
      break;
    case 'QUECHUA':
      return {
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(53,230,17,1.0)',
        interactive: true,
      }
      break;
    case 'REYESANO':
      return {
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(81,14,238,1.0)',
        interactive: true,
      }
      break;
    case 'SIRIONA':
      return {
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(219,197,119,1.0)',
        interactive: true,
      }
      break;
    case 'TACANA':
      return {
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(34,80,230,1.0)',
        interactive: true,
      }
      break;
    case 'TAPIETE':
      return {
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(50,115,214,1.0)',
        interactive: true,
      }
      break;
    case 'TONALLA':
      return {
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(238,164,54,1.0)',
        interactive: true,
      }
      break;
    case 'URU':
      return {
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(206,92,145,1.0)',
        interactive: true,
      }
      break;
    case 'WEENHAYEK':
      return {
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(214,97,110,1.0)',
        interactive: true,
      }
      break;
    case 'YAMINAGUA':
      return {
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(207,114,207,1.0)',
        interactive: true,
      }
      break;
    case 'YUQUI':
      return {
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(190,225,114,1.0)',
        interactive: true,
      }
      break;
    case 'YURACARE':
      return {
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(208,122,178,1.0)',
        interactive: true,
      }
      break;
  }
}

let Etnias = L.geoJson(json_etnias_0, {
  onEachFeature: etnias,
  style: style_etnias
})

// media tension

function popupmediaT(feature, layer) {
  if (feature.properties && feature.properties.TITULAR) {
    layer.bindPopup("<strong>Nombre: </strong>" + feature.properties.TITULAR
      + "<br><strong>Sistema: </strong>" + feature.properties.SIN
    );
  }
}

function stylemediaT() {
  return {
    opacity: 1,
    color: 'rgba(255,135,43,1.0)',
    dashArray: '',
    lineCap: 'square',
    lineJoin: 'bevel',
    weight: 1.0,
    fillOpacity: 0,
    interactive: true,
  }
}

let mediaT = L.geoJson(capa_mediaT, {
  onEachFeature: popupmediaT,
  style: stylemediaT
})

// alta tension

function popupaltaT(feature, layer) {
  if (feature.properties && feature.properties.empresa) {
    layer.bindPopup("<strong>Empresa: </strong>" + feature.properties.empresa
      + "<br><strong>Nivel de Voltage: </strong>" + feature.properties.nivel_volt
      + "<br><strong>Linea: </strong>" + feature.properties.linea
    );
  }
}


function style_altaT() {
  return {
    opacity: 1,
    color: 'rgba(234,0,27,1.0)',
    dashArray: '',
    lineCap: 'square',
    lineJoin: 'bevel',
    weight: 3.0,
    fillOpacity: 0,
    interactive: true,
  }
}

let altaT = L.geoJson(json_lat_2024_1, {
  onEachFeature: popupaltaT,
  style: style_altaT
})

// atractivos turisticos

function popupturisticos(feature, layer) {
  if (feature.properties && feature.properties.JERARQUIA) {
    layer.bindPopup("<strong>Jerarquia: </strong>" + feature.properties.JERARQUIA
      + "<br><strong>Nombre: </strong>" + feature.properties.NOMBRE
      + "<br><strong>Sitio Turistico: </strong>" + feature.properties.SITIOS_TUR
    );
  }
}


function style_atractivos() {

  return {

    radius: 4.799999999999997,
    opacity: 1,
    color: 'rgba(50,87,128,1.0)',
    dashArray: '',
    lineCap: 'butt',
    lineJoin: 'miter',
    weight: 2.0,
    fill: true,
    fillOpacity: 1,
    fillColor: 'rgba(72,123,182,1.0)',
    interactive: true,

  }

}

let atractivosturisticos = L.geoJson(atractivos, {
  onEachFeature: popupturisticos,
  pointToLayer: function (feature, latlng) {
    var context = {
      feature: feature,
      variables: {}
    };
    return L.circleMarker(latlng, style_atractivos(feature));
  },
})




// Plantas industriales

function popupPlantas(feature, layer) {
  if (feature.properties && feature.properties.PROY_SISIN) {
    layer.bindPopup("<strong>Proyecto: </strong>" + feature.properties.PROY_SISIN
      + "<br><strong>Entidad Ejecutora: </strong>" + feature.properties.ENTID_EJEC
      + "<br><strong>Fuente de Financiamiento: </strong>" + feature.properties.FUENT_FINA
    );
  }
}


function style_plantas() {

  return {

    radius: 4.799999999999997,
    opacity: 1,
    color: 'rgba(0,0,0,1.0)',
    dashArray: '',
    lineCap: 'butt',
    lineJoin: 'miter',
    weight: 2.0,
    fill: true,
    fillOpacity: 1,
    fillColor: 'rgba(63, 63, 63,1.0)',
    interactive: true,

  }

}

let plantasIndustriales = L.geoJson(plantas, {
  onEachFeature: popupPlantas,
  pointToLayer: function (feature, latlng) {
    var context = {
      feature: feature,
      variables: {}
    };
    return L.circleMarker(latlng, style_plantas(feature));
  },
})

// patrimonio cultural

function popupPatri(feature, layer) {
  if (feature.properties && feature.properties.DEPARTAMEN) {
    layer.bindPopup("<strong>Departamento: </strong>" + feature.properties.DEPARTAMEN
      + "<br><strong>Municipio: </strong>" + feature.properties.MUNICIPIO
      + "<br><strong>Clasificación: </strong>" + feature.properties.CLASIFICAC
            + "<br><strong>Sistema: </strong>" + feature.properties.Sistema_de
    );
  }
}


  function style_patrimonio(feature) {
            if (feature.properties['TOTAL'] >= 1.000000 && feature.properties['TOTAL'] <= 0.000000 ) {
                return {

                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(255,255,255,1.0)',
                interactive: true,
            }
            }
            if (feature.properties['TOTAL'] >= 0.000000 && feature.properties['TOTAL'] <= 4.000000 ) {
                return {

                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(218,0,0,1.0)',
                interactive: true,
            }
            }
            if (feature.properties['TOTAL'] >= 4.000000 && feature.properties['TOTAL'] <= 14.000000 ) {
                return {

                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(255,156,57,1.0)',
                interactive: true,
            }
            }
            if (feature.properties['TOTAL'] >= 14.000000 && feature.properties['TOTAL'] <= 46.000000 ) {
                return {

                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(255,240,25,1.0)',
                interactive: true,
            }
            }
            if (feature.properties['TOTAL'] >= 46.000000 && feature.properties['TOTAL'] <= 158.000000 ) {
                return {

                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(100,230,52,1.0)',
                interactive: true,
            }
            }
            if (feature.properties['TOTAL'] >= 158.000000 && feature.properties['TOTAL'] <= 281.000000 ) {
                return {

                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(0,184,25,1.0)',
                interactive: true,
            }
            }
        }

let Patrimonio = L.geoJson(json_tipologiaPatrimonio_0, {
  onEachFeature: popupPatri,
style: style_patrimonio
})



let baselayer = {
  
  "Open street Map": OpenSMap,


};

let overlays = {
  "Departamentos": Departamentos,
  "Municipios": Municipios,
  "Etnias": Etnias,
  "Media Tension": mediaT,
  "Alta Tension": altaT,
  "Atractivos Turisticos": atractivosturisticos,
  "Plantas industriales": plantasIndustriales,
  "Patrimonio Cultural": Patrimonio


};

L.control.layers(baselayer, overlays, { collapsed: false }).addTo(map);
