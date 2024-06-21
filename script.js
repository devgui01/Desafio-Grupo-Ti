const images = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg'];
let currentIndex = 0;
let votes = {};

document.getElementById('startButton').addEventListener('click', function() {
  window.location.href = 'votacao.html';
});

function nextVote() {
  if (currentIndex >= images.length - 1) {
    window.location.href = 'ranking.html';
    return;
  }

  currentIndex++;
  window.location.href = 'votacao.html';
}

function vote(image) {
  if (!votes[image]) {
    votes[image] = 0;
  }

  votes[image]++;
  nextVote();
}
