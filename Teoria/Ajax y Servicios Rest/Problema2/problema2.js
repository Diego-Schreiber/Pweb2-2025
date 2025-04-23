  function generarColorAleatorio() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return 'rgb(' + r + ',' + g + ',' + b + ')';
  }

  async function cargarDatos() {
   try {
    const respuesta = await fetch('data.json');
    const datos = await respuesta.json();
    return datos;
   } catch (error) {
      console.error('Error al cargar el archivo JSON:', error);
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
    const select = document.getElementById('tipo-dato');
    return select.value;
  }

  function prepararDatosParaGrafico(dataJson, regionesSeleccionadas, tipoDato) {
    const datasets = [];
    let etiquetas = [];
  
    regionesSeleccionadas.forEach(regionNombre => {
      const region = dataJson.find(r => r.region === regionNombre);
  
      if (region && region[tipoDato] && region[tipoDato].length > 0) {
        const valores = region[tipoDato].map(item => parseInt(item.value));
        const fechas = region[tipoDato].map(item => item.date);
  
        if (etiquetas.length === 0) {
          etiquetas = fechas;
        }
  
        datasets.push({
          label: regionNombre,
          data: valores,
          borderColor: generarColorAleatorio(),
          fill: false
        });
      }
    });
  
    return { etiquetas, datasets };
  }

  let grafico;
  function graficar(etiquetas, datasets) {
    const ctx = document.getElementById('grafico').getContext('2d');
  
    if (grafico) {
      grafico.destroy();
    }
  
    grafico = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: etiquetas,
        datasets: datasets
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Comparación de regiones por tipo de dato seleccionado'
          }
        }
      }
    });
  }
