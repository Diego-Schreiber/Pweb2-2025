fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const lista = document.getElementById('lista-regiones');

    data.forEach(region => {
      const confirmados = region.confirmed;
      let total = 0;

      if (confirmados.length > 0) {
        const ultimo = confirmados[confirmados.length - 1];
        total = parseInt(ultimo.value);
      }

      const item = document.createElement('li');
      item.textContent = `${region.region}: ${total} casos confirmados`;
      lista.appendChild(item);
    });
  })
  .catch(error => {
    console.error('Error al cargar los datos:', error);
  });
