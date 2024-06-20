document.getElementById('startButton').addEventListener('click', function() {
    document.querySelector('.toolbar').style.display = 'block';
    document.querySelector('.profile').style.display = 'block';
    document.querySelector('.ranking').style.display = 'block';
    this.style.display = 'none'; // Esconde o botão "Iniciar"
    document.getElementById('title').style.display = 'none'; // Esconde o título "FaceMatch"
});

document.getElementById('homeLink').addEventListener('click', function() {
    document.querySelector('.toolbar').style.display = 'none';
    document.querySelector('.profile').style.display = 'none';
    document.querySelector('.ranking').style.display = 'none';
    document.getElementById('startButton').style.display = 'block'; // Mostra o botão "Iniciar"
    document.getElementById('title').style.display = 'block'; // Mostra o título "FaceMatch"
});

const people = [
    { name: 'Pessoa 1', votesBeautiful: 0, votesUgly: 0 },
    { name: 'Pessoa 2', votesBeautiful: 0, votesUgly: 0 },
    // Adicione mais pessoas aqui
];

let currentIndex = 0;

function showPerson(index) {
    const person = people[index];
    document.getElementById('personName').innerText = person.name;
    // document.getElementById('personImage').src = person.image; // Adicione a propriedade 'image' aos objetos de pessoas, se necessário
}

document.getElementById('beautifulButton').addEventListener('click', function() {
    people[currentIndex].votesBeautiful++;
    updateRanking();
    nextPerson();
});

document.getElementById('uglyButton').addEventListener('click', function() {
    people[currentIndex].votesUgly++;
    updateRanking();
    nextPerson();
});

function nextPerson() {
    currentIndex = (currentIndex + 1) % people.length;
    showPerson(currentIndex);
}

function updateRanking() {
    const rankingList = document.getElementById('rankingList');
    rankingList.innerHTML = '';
    people.forEach(person => {
        const rankingItem = document.createElement('div');
        rankingItem.className = 'rankingItem';
        rankingItem.innerHTML = `${person.name}<br>Bonita: ${person.votesBeautiful}<br>Feia: ${person.votesUgly}`;
        rankingList.appendChild(rankingItem);
    });
}

// Inicialize a primeira pessoa
showPerson(currentIndex);
