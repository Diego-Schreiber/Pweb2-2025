document.addEventListener('DOMContentLoaded', function() {
    fetch('/api/movies')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar las películas');
            }
            return response.json();
        })
        .then(data => {
            const list = document.getElementById('movie-list');
            data.forEach(movie => {
                const item = document.createElement('li');
                item.textContent = `${movie.Title} (${movie.Year}) - Score: ${movie.Score}`;
                list.appendChild(item);
            });
        })
        .catch(error => {
            const list = document.getElementById('movie-list');
            const item = document.createElement('li');
            item.textContent = `Error: ${error.message}`;
            list.appendChild(item);
        });
});
