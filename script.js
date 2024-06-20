const images = [
    //{ name: 'Guilherme Souza', src: 'imagens/GuilhermeSouza.jpg', beautiful: 0, ugly: 0 },
    { name: 'Pessoa1', src: 'imagens/Pessoa.jpg', beautiful: 0, ugly: 0 },
    { name: 'Pessoa2', src: 'imagens/Pessoa.jpg', beautiful: 0, ugly: 0 },
    // { name: 'Osvaldo Coelho', src: 'imagens/Flor.jpeg.jpg', beautiful: 0, ugly: 0 },
    // { name: 'Jullya Pinheiro', src: 'imagens/image5.jpg', beautiful: 0, ugly: 0 },
    // { name: 'Ernandes Carvalho', src: 'imagens/image6.jpg', beautiful: 0, ugly: 0 },
    // { name: 'José Pietro', src: 'imagens/image7.jpg', beautiful: 0, ugly: 0 },
    // { name: 'Eloyse Santos', src: 'imagens/image8.jpg', beautiful: 0, ugly: 0 },
    // { name: 'Fernanda Castrito', src: 'imagens/image9.jpg', beautiful: 0, ugly: 0 },
    // { name: 'Maria José', src: 'imagens/image10.jpg', beautiful: 0, ugly: 0 }
];

const startScreen = document.getElementById('start-screen');
const voteScreen = document.getElementById('vote-screen');
const startButton = document.getElementById('start-button');
const backButton = document.getElementById('back-button');
const randomImage = document.getElementById('random-image');
const personName = document.getElementById('person-name');
const beautifulButton = document.getElementById('beautiful-button');
const uglyButton = document.getElementById('ugly-button');
const beautifulRanking = document.getElementById('beautiful-ranking');
const uglyRanking = document.getElementById('ugly-ranking');

let currentImage = null;
let votedImages = new Set();

function getRandomImage() {
    if (votedImages.size === images.length) {
        alert("Você já votou em todas as pessoas!");
        return;
    }

    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * images.length);
    } while (votedImages.has(randomIndex));

    currentImage = images[randomIndex];
    personName.textContent = currentImage.name;
    randomImage.src = currentImage.src;
}

function updateRanking() {
    beautifulRanking.innerHTML = '';
    uglyRanking.innerHTML = '';

    const sortedBeautiful = [...images].sort((a, b) => b.beautiful - a.beautiful);
    const sortedUgly = [...images].sort((a, b) => b.ugly - a.ugly);

    sortedBeautiful.slice(0, 5).forEach(image => {
        const li = document.createElement('li');
        li.textContent = `${image.name} (${image.beautiful})`;
        beautifulRanking.appendChild(li);
    });

    sortedUgly.slice(0, 5).forEach(image => {
        const li = document.createElement('li');
        li.textContent = `${image.name} (${image.ugly})`;
        uglyRanking.appendChild(li);
    });
}

startButton.addEventListener('click', () => {
    startScreen.classList.add('hidden');
    voteScreen.classList.remove('hidden');
    getRandomImage();
});

backButton.addEventListener('click', () => {
    voteScreen.classList.add('hidden');
    startScreen.classList.remove('hidden');
    votedImages.clear(); // Reseta os votos quando voltar para a tela inicial
});

beautifulButton.addEventListener('click', () => {
    if (currentImage) {
        currentImage.beautiful++;
        votedImages.add(images.indexOf(currentImage));
        updateRanking();
        getRandomImage();
    }
});

uglyButton.addEventListener('click', () => {
    if (currentImage) {
        currentImage.ugly++;
        votedImages.add(images.indexOf(currentImage));
        updateRanking();
        getRandomImage();
    }
});
