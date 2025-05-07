fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const regiones = data.map(region => region.region);
    
    const form = document.getElementById('form-regiones');
    regiones.forEach(region => {
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.id = region;
      checkbox.name = 'region';
      checkbox.value = region;

      const label = document.createElement('label');
      label.setAttribute('for', region);
      label.textContent = region;

      const br = document.createElement('br');

      form.appendChild(checkbox);
      form.appendChild(label);
      form.appendChild(br);
    });

    const ctx = document.getElementById('graficoComparativo').getContext('2d');
    let chart;

    function crearGrafico(regionesSeleccionadas) {
      const datasets = [];
      let etiquetas = [];

      regionesSeleccionadas.forEach(regionNombre => {
        const region = data.find(r => r.region.toLowerCase() === regionNombre.toLowerCase());

        if (region && region.confirmed.length > 0) {
          const fechas = region.confirmed.map(d => d.date);
          const valores = region.confirmed.map(d => parseInt(d.value) || 0);

          if (etiquetas.length === 0) etiquetas = fechas;  

          datasets.push({
            label: region.region,
            data: valores,
            borderWidth: 2,
            fill: false,
            tension: 0.1,
            borderColor: getRandomColor()  
          });
        }
      });

      // Si el gráfico ya existe, lo destruimos para crear uno nuevo
      if (chart) {
        chart.destroy();
      }

      chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: etiquetas,  
          datasets: datasets   
        },
        options: {
          responsive: true,
          scales: {
            x: {
              title: { display: true, text: 'Fecha' }
            },
            y: {
              title: { display: true, text: 'Confirmados' },
              beginAtZero: true
            }
          }
        }
      });
    }

    function getRandomColor() {
      const r = Math.floor(Math.random() * 200);
      const g = Math.floor(Math.random() * 200);
      const b = Math.floor(Math.random() * 200);
      return `rgb(${r}, ${g}, ${b})`;
    }

    form.addEventListener('change', () => {
      const selectedRegions = Array.from(form.elements)
        .filter(input => input.checked)
        .map(input => input.value);

      if (selectedRegions.length > 0) {
        crearGrafico(selectedRegions);
      }
    });

    crearGrafico(regiones.slice(0, 1));  
  })
  .catch(error => console.error('Error al cargar los datos:', error));
