const dataJson = async(json) => {
    try {
        const response = await fetch(json);

        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status}`);
        }

        const data = await response.json();
        // return data;
        console.log(data);
    } catch (error) {
        console.error('Error al cargar el archivo JSON:', error);
    }
}
dataJson("./data.json");