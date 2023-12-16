const urlParams = new URLSearchParams(window.location.search);

const playerName = urlParams.get('search');

const editBtn = document.getElementById('editButton')

window.addEventListener('DOMContentLoaded',()=> getPlayerData(playerName))


editBtn.addEventListener('click',()=> {
    window.location.href = `./home.html?name=${encodeURIComponent(playerName)}`;
})


function getPlayerData(playerName) {
    console.log(playerName);
    axios.get(`http://localhost:3000/player/${playerName}`)
    .then((res)=> {
        console.log(res.data);
        showOnScreen(res.data);
    })
    .catch(err=> alert(err.message));
}


function showOnScreen(data) {
    let name = document.createTextNode(`${data.name}`);
    let dateOfBirth = document.createTextNode(`${data.dateOfBirth}`);
    let birthPlace = document.createTextNode(`${data.birthPlace}`);
    let career = document.createTextNode(`${data.career}`);
    let category = document.createTextNode(`${data.category}`);
    let matches = document.createTextNode(`${data.matches}`);
    let runs = document.createTextNode(`${data.runs}`);
    let wickets = document.createTextNode(`${data.wickets}`);
    let fifties = document.createTextNode(`${data.fifties}`);
    let centuries = document.createTextNode(`${data.centuries}`);
    let average = document.createTextNode(`${data.average}`);


    document.getElementById('image').src = data.photoUrl;
    document.getElementById('name').firstChild.appendChild(name);
    document.getElementById('category').firstChild.appendChild(category);
    document.getElementById('dob').firstChild.appendChild(dateOfBirth);
    document.getElementById('birthPlace').firstChild.appendChild(birthPlace);
    document.getElementById('matches').firstChild.appendChild(matches);
    document.getElementById('runs').firstChild.appendChild(runs);
    document.getElementById('wickets').firstChild.appendChild(wickets);
    document.getElementById('fifties').firstChild.appendChild(fifties);
    document.getElementById('centuries').firstChild.appendChild(centuries);
    document.getElementById('average').firstChild.appendChild(average);
    document.getElementById('career').appendChild(career);
}