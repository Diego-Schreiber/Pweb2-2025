fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const regionesTotales = data.map(region => {
      const total = region.confirmed.reduce((suma, dia) => suma + parseInt(dia.value), 0);
      return {
        nombre: region.region,
        total: total
      };
    });

    // Ordenar de mayor a menor y tomar los 10 primeros
    const top10 = regionesTotales
      .sort((a, b) => b.total - a.total)
      .slice(0, 10);

    const lista = document.getElementById('top10-lista');
    top10.forEach(region => {
      const item = document.createElement('li');
      item.textContent = `${region.nombre}: ${region.total} casos acumulados`;
      lista.appendChild(item);
    });
  })
  .catch(error => {
    console.error('Error al cargar los datos:', error);
  });
