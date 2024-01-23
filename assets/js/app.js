const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name');
const $b = document.querySelector('.blog'); // Cambiado de #blog a .blog
const $l = document.querySelector('.location'); // Se agregó para la ubicación

async function displayUser(username) { //se agregó async
    $n.textContent = 'cargando...';
    try { //Se agrego try para el catch
        const response = await fetch(`${usersEndpoint}/${username}`);
        const data = await response.json(); // Parsear la respuesta a JSON
        console.log(data);
        $n.textContent = `Nombre: ${data.name}`;
        $b.textContent = `Blog: ${data.blog}`;
        $l.textContent = `Ubicación: ${data.location}`;
    } catch (err) {
        handleError(err);
    }
}

function handleError(err) {
    console.log('OH NO!');
    console.log(err);
    $n.textContent = `Algo salió mal: ${err}`; //faltaba $ en n.textContent
}

displayUser('stolinski').catch(handleError);