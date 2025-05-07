fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const regionList = document.getElementById('region-list');
        
        const regions = data.map(entry => entry.region);
        
        regions.forEach(region => {
            const li = document.createElement('li');
            li.textContent = region;
            regionList.appendChild(li);
        });
    })
    .catch(error => {
        console.error('Error al cargar los datos:', error);
    });
