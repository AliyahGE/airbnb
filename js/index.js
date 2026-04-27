const searchInput = document.querySelector('#SearchInput');
const pisosGridGrid = document.querySelector('#mainPisosGrid');


function setupSearch() {
    
}

function showLoading() {
    pisosGrid.textContent = '';

    const loading = document.createElement('p');
    loading.textContent = 'Cargando alojamientos...';
    loading.classList.add('loading');
    pisosGrid.appendChild(loading);
}

function capitalizeFirstLetter(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}