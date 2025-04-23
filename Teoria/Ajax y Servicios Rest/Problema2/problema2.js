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

