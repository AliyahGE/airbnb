const searchInput = document.querySelector('#searchInput');
const mainActividadesGrid = document.querySelector('#mainActividadesGrid');


function setupSearch() {
    
}

function showLoading() {
    actividadesGrid.textContent = '';

    const loading = document.createElement('p');
    loading.textContent = 'Cargando experiencias...';
    loading.classList.add('loading');
    actividadesGrid.appendChild(loading);
}

function capitalizeFirstLetter(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}