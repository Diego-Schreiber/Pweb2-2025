async function cargarDatos() {
  try {
    const respuesta = await fetch('data.json');
    const datos = await respuesta.json();
    return datos;
  } catch (error) {
   //alert('Error al cargar data.json');
    return [];
  }
}

function obtenerRegionesSeleccionadas() {
  const checkboxes = document.querySelectorAll('.checkbox-grid input[type="checkbox"]');
  const regiones = [];

  checkboxes.forEach(checkbox => {
    if (checkbox.checked) {
      regiones.push(checkbox.value);
    }
  });

  return regiones;
}

function obtenerTipoDatoSeleccionado() {
  return document.getElementById('tipo-dato').value;
}

function prepararTotalesPorRegion(dataJson, regionesSeleccionadas, tipoDato) {
  const labels = [];
  const valores = [];

  regionesSeleccionadas.forEach(nombreRegion => {
    const region = dataJson.find(r => r.region === nombreRegion);

    if (region && region[tipoDato]) {
      const total = region[tipoDato]
        .map(entry => parseInt(entry.value))
        .reduce((sum, val) => sum + val, 0);

      labels.push(nombreRegion);
      valores.push(total);
    }
  });

  return { labels, valores };
}

function generarColorAleatorio() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return 'rgb(' + r + ',' + g + ',' + b + ')';
}

let grafico;

function graficarTotales(labels, valores, tipoDato) {
  const ctx = document.getElementById('grafico').getContext('2d');

  if (grafico) {
    grafico.destroy();
  }

  grafico = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: `Total de ${tipoDato}`,
        data: valores,
        backgroundColor: labels.map(() => generarColorAleatorio())
      }]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: `Comparación total por región (${tipoDato})`
        }
      }
    }
  });
}

async function ejecutarGraficoTotales() {
  //alert("Generando gráfico de totales...");

  const regiones = obtenerRegionesSeleccionadas();
  const tipoDato = obtenerTipoDatoSeleccionado();

  if (regiones.length === 0) {
    //alert("Selecciona al menos una región.");
    return;
  }

  const datos = await cargarDatos();
  const { labels, valores } = prepararTotalesPorRegion(datos, regiones, tipoDato);

  //alert("Datos procesados. Graficando...");
  graficarTotales(labels, valores, tipoDato);
}

