fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const datasets = [];
    let etiquetas = [];

    data.forEach(region => {
      if (region.confirmed && region.confirmed.length > 0) {
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

    const ctx = document.getElementById('graficoComparativo').getContext('2d');
    new Chart(ctx, {
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
  })
  .catch(error => console.error('Error al cargar los datos:', error));

function getRandomColor() {
  const r = Math.floor(Math.random() * 200);
  const g = Math.floor(Math.random() * 200);
  const b = Math.floor(Math.random() * 200);
  return `rgb(${r}, ${g}, ${b})`;
}

