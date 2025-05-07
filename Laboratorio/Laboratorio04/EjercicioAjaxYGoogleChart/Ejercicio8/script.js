fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const regionesExcluidas = ['lima', 'callao'];
    const regiones = data.filter(region => !regionesExcluidas.includes(region.region.toLowerCase()));

    const form = document.getElementById('form-regiones');
    regiones.forEach(region => {
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.id = region.region;
      checkbox.name = 'region';
      checkbox.value = region.region;

      const label = document.createElement('label');
      label.setAttribute('for', region.region);
      label.textContent = region.region;

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
        const region = regiones.find(r => r.region.toLowerCase() === regionNombre.toLowerCase());

        if (region && region.confirmed.length > 0) {
          const fechas = region.confirmed.map(d => d.date);
          const valores = region.confirmed.map((d, index) => {
            if (index === 0) return parseInt(d.value) || 0;
            const prevValue = parseInt(region.confirmed[index - 1].value) || 0;
            return (parseInt(d.value) || 0) - prevValue; 
          });

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
              title: { display: true, text: 'Confirmados por día' },
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
