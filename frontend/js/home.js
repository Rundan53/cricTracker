const pName = document.getElementById('pName')
const dateOfBirth = document.getElementById('dob')
const photoUrl = document.getElementById('photoUrl')
const birthPlace = document.getElementById('birthplace')
const career = document.getElementById('career')
const category = document.getElementById('category')
const matches = document.getElementById('matches')
const runs = document.getElementById('runs')
const wickets = document.getElementById('wickets')
const fifties = document.getElementById('fifties')
const centuries = document.getElementById('centuries')
const average = document.getElementById('average')



const infoPostForm = document.getElementById('infoForm');
const searchForm = document.getElementById('searchForm')

window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const playerName = urlParams.get('name');

    if (playerName) {
        axios.get(`http://localhost:3000/player/${playerName}`)
            .then((res) => {
                autoFillForm(res.data);
            })
            .catch(err => alert(err.message));
    }
})

infoPostForm.addEventListener('submit', (event) => {
    event.preventDefault();
    postData();
});

searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const search = document.getElementById('search').value;
    const redirectUrl = `./playerinfo.html?search=${encodeURIComponent(search)}`;
    window.location.href = redirectUrl;
});


function postData() {
    let cricDetails = {
        name: pName.value,
        dateOfBirth: dateOfBirth.value,
        photoUrl: photoUrl.value,
        birthPlace: birthPlace.value,
        career: career.value,
        category: category.value,
        matches: matches.value,
        runs: runs.value,
        wickets: wickets.value,
        fifties: fifties.value,
        centuries: centuries.value,
        average: average.value
    }

    axios.post('http://localhost:3000/player', cricDetails)
        .then((res) => {
            console.log(res.data);
            alert('Succesfully saved');
            window.location.href = `./home.html`;
            console.log(res.data);
        })
        .catch(err => alert(err.message));
}


function autoFillForm(data) {
    pName.value = data.name;
    dateOfBirth.value = data.dateOfBirth;
    photoUrl.value = data.photoUrl;
    birthPlace.value = data.birthPlace;
    career.value = data.career;
    category.value = data.category;
    matches.value = data.matches;
    runs.value = data.runs;
    wickets.value = data.wickets;
    fifties.value = data.fifties;
    centuries.value = data.centuries;
    average.value = data.average;
}
