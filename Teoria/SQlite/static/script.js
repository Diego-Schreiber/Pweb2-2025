document.addEventListener('DOMContentLoaded', function() {
    fetch('/api/movies')
        .then(response => response.json())
        .then(data => {
            const list = document.getElementById('movie-list');
            data.forEach(movie => {
                const item = document.createElement('li');
                item.textContent = `${movie.Title} (${movie.Year})`;
                list.appendChild(item);
            });
        });
});
