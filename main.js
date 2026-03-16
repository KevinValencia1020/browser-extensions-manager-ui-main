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

    
}
dataJson("./data.json");
// renderExtensions("all");