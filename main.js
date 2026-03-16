const dataJson = async(json) => {
    try {
        const response = await fetch(json);

        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al cargar el archivo JSON:', error);
    }
}

// Funcion para renderizar las cards de las extensiones
/**
 * 
 * @param {Array} extensions 
 */
const renderExtensions = (extensions) =>{
    const container = document.getElementById("extensions-container");

    // Funcion para filtrar las extensiones segun el filtro seleccionado
    const filteredExtensions = extensions.filter(extension => {
        switch (extension) {
            case "all":
                return true;
            case "active":
                return extension.isActive;
            case "inactive":
                return !extension.isActive;
            default:
                return true;
        }
    });

    // Inyecto las cards de las extensiones filtradas

    container.innerHTML = filteredExtensions.map(extensions => 
        /* html */
        `
            <div class="card">
                <div class="card__content">
                    <img src="${extensions.icon}" alt="${extensions.name} icon" class="card__icon">
                    <div class="card__info">
                        <h2 class="card__name">${extensions.name}</h2>
                    </div>
                </div>
                <button class="card__button">
                    <span class="card__button-remove">Remove</span>
                </button>
            </div>
        `
    ).join("");
}
dataJson("./data.json");
// renderExtensions("all");