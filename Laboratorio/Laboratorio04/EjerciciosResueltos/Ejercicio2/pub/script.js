function recitar() {
  fetch('/recitar')
    .then(response => response.json())
    .then(data => {
      document.getElementById("poema").innerHTML = data.text;
    })
    .catch(error => {
      console.error("Error al obtener el poema:", error);
    });
}
