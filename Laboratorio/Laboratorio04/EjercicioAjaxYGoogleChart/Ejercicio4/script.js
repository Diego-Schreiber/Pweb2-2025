fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const region = data.find(r => r.region.toLowerCase() === 'arequipa');
    if (!region) {
      alert("No se encontraron datos para la región Arequipa.");
      return;
    }

    const fechas = region.confirmed.map(d => d.date);
    const valores = region.confirmed.map(d => parseInt(d.value));

    const ctx = document.getElementById('graficoArequipa').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: fechas,
        datasets: [{
          label: 'Casos confirmados',
          data: valores,
          borderColor: 'rgba(255, 99, 132, 1)',
          fill: false,
          tension: 0.1
        }]
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
  })
  .catch(error => console.error('Error al cargar los datos:', error));
