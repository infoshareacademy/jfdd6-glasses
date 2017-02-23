//------------ ZMIANY ADAMA

//ekran przed startem
document.getElementById('see-game').addEventListener("click", seeGame);
document.getElementById('start-btn').setAttribute('disabled', true);

function seeGame() {
  document.getElementById('before-start').style.display = "none";
  document.getElementById('start-btn').disabled = false;
}


// ------------- SYLWIA -------------
var i, projector, dog, score;

//wypełnienie bloku
var block = document.getElementById('block');
/*
 for (i = 0; i < 8; i++) {
 var floor = "clear: left;";
 for (var j = 0; j < 6; j++) {
 var flat = document.createElement('div');
 flat.setAttribute('style', floor);
 floor = "";
 flat.className = 'flats';
 block.appendChild(flat);
 }
 }
 */
// jeżeli wypełniamy przestrzeń ograniczoną wymiarami, wystarczy taka funkcja:
for (i = 0; i < 35; i++) {
  var flat = document.createElement('div');
  flat.className = 'flats';
  block.appendChild(flat);
}

//wybieranie okna
var blankFlats = document.getElementsByClassName('flats');

var screening = function (screen) {
  var draw = Math.floor(Math.random() * 35);
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
  document.getElementById('start-btn').setAttribute('disabled', true);

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

}

function stopGame(type) {
  clearInterval(projector);
  clearInterval(dog);
  clearing('projector');
  clearing('dog');
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
    blankFlats[i].style.backgroundColor = "#b3b3b3";
  }
}

function startOfGame() {
  document.getElementById('start-btn').removeAttribute('disabled');
  for (i = 0; i < blankFlats.length; i++) {
    blankFlats[i].style.backgroundColor = "";
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