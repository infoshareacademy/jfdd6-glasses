//------------ ZMIANY ADAMA

//ekran przed startem
document.getElementById('see-game').addEventListener("click", seeGame);
var startButton = document.getElementById('start-btn');
startButton.setAttribute('disabled', true);

function seeGame() {
  document.getElementById('before-start').style.display = "none";
  startButton.disabled = false;
  startButton.classList.remove("disabled");
}


// ------------- SYLWIA -------------
startButton.onclick = startGame;

var i, projector, dog, popcorn, score;

//wypełnienie bloku
var block = document.getElementById('block');

for (i = 0; i < 35; i++) {
  var flat = document.createElement('div');
  flat.className = 'flats';
  block.appendChild(flat);
}

//wybieranie okna
var blankFlats = document.getElementsByClassName('flats');

var screening = function (screen) {
  var draw = Math.floor(Math.random() * 36);
  blankFlats[draw].classList.add(screen);
};

//usuwanie obrazka
var clearing = function (screen) {
  var activeFlats = document.getElementsByClassName(screen)[0];
  if (activeFlats) {
    activeFlats.classList.remove(screen);
  }
};

function startGame() {
  var counter = 0;
  score = 0;
  document.getElementById('points').innerHTML = '0';
  startButton.setAttribute('disabled', true);
  startButton.classList.add("disabled");

  projector = setInterval(function () {
    clearing('projector');
    screening('projector');

    if (counter === 10) {
      stopGame('end');
    }
    counter++;
  }, 1000);

  dog = setInterval(function () {
    clearing('dog');
    screening('dog');
  }, 1250);

// ------------- ZMIANY KRZYŚKA
  var popcornAppear = (1900 + Math.random() * 4000);

  popcorn = setInterval(function () {
    screening('popcorn');

    popcornHide = setTimeout(function () {
      clearing('popcorn');

    }, 750);

  }, popcornAppear);
// --------------
}

function stopGame(type) {
  clearInterval(projector);
  clearInterval(dog);
  clearInterval(popcorn);
  clearing('projector');
  clearing('dog');
  clearing('popcorn');
  endOfGame();

  if (type === 'end') {
    endOfTime();
  }
  if (type === 'dog') {
    walkTime();
  }
}

function endOfGame() {
  for (i = 0; i < blankFlats.length; i++) {
    blankFlats[i].classList.add("flats-shutdown");
  }
}

function startOfGame() {
  startButton.removeAttribute('disabled');
  startButton.classList.remove("disabled");
  for (i = 0; i < blankFlats.length; i++) {
    blankFlats[i].classList.remove("flats-shutdown");
  }
}

function endOfTime() {
  document.getElementById('score').innerHTML = score;
  document.getElementById('end').style.display = "block";
}

function walkTime() {
  document.getElementById('walk').style.display = "block";
}

document.onclick = function (shot) {
  var hit = shot.target;

  if (hit.className.match(/\bprojector\b/)) {
    score++;
    document.getElementById('points').innerHTML = score;
  }
  if (hit.className.match(/\bpopcorn\b/)) {
    score += 2;
    document.getElementById('points').innerHTML = score;
  }
  if (hit.className.match(/\bdog\b/)) {
    stopGame('dog');
  }
};

var lift = document.getElementsByClassName('close');
for (i in lift) {
  lift[i].onclick = function () {
    this.parentNode.style.display = "none";
    startOfGame();
  }
}