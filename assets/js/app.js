const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name');
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');

async function displayUser(username) {
  try {


    $n.textContent = 'cargando...';
    const response = await fetch(`${usersEndpoint}/${username}`);
    const data = await response.json();
    console.log(data);
    $n.textContent = `Nombre: ${data.name}`;
    $b.textContent = `Blog ${data.blog }`;
    $l.textContent = `Location: ${data.location}`;
  } catch(err){
    handleError(err);
  }
}


function handleError(err) {
    console.log('OH NO!');
    console.log(err);
    $n.textContent = `Algo salió mal: ${err}`
  }
  displayUser('stolinski').catch(handleError);