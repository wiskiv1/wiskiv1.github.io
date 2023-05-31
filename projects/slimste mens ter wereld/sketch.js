var spelers = [];
var actief;
var x = {
  naam: "",
  score: "",
  type: 0
}
var bezig = false;

var penalty = 20;

function setup() {
  createCanvas(displayWidth - 3, displayHeight - 3);
  frameRate(30);
}

function draw() {
  background(150, 0, 0);

  if (!bezig) {
    push();
    fill(0, 0);
    stroke(255);
    strokeWeight(4);
    rectMode(CENTER);
    rect(width / 2, height / 2, width / 2, 250);
    rect(width / 2, height / 2 + 70, 150, 45);
    strokeWeight(1);
    fill(255);
    textSize(30);
    textStyle(BOLD);
    textAlign(CENTER)
    text("NAAM:", width / 2, height / 2 - 85);
    text(x.naam, width / 2, height / 2 - 45);
    text("SECONDEN:", width / 2, height / 2 - 5);
    text(x.score, width / 2, height / 2 + 35);
    text("start spel", width / 2, height / 2 + 75)
    pop();

    push();
    fill(255);
    textSize(20);
    textAlign(CENTER)
    for (i = 0; i < spelers.length; i++) {
      text(spelers[i].naam + " " + spelers[i].score, width / 2, height / 2 + 155 + i * 30);
    }
    pop();
  } else {

    push();
    fill(0, 0);
    stroke(255);
    strokeWeight(4);
    rect(20, 20, (3 * width) / 5, height - 40);
    for (let i = 1; i < spelers.length; i++) {
      rect((3 * width) / 5 + 30, -30 + (i * 50), (2 * width) / 5 - 40, 40);
      spelers[i].show((3 * width) / 5 + 30, -30 + (i * 50));
    }

    spelers[0].display();

    rectMode(CENTER)
    rect((1.5 * width) / 5, (3 * height) / 5, 200, 45);
    rect((1.5 * width) / 5, (3 * height) / 5 + 60, 200, 45);
    rect((1.5 * width) / 5, (3 * height) / 5 + 120, 200, 45);
    fill(255);
    strokeWeight(0);
    textSize(30);
    textAlign(CENTER, CENTER);
    text("start/stop", (1.5 * width) / 5, (3 * height) / 5);
    text("juist antwoord", (1.5 * width) / 5, (3 * height) / 5 + 60);
    text("volgende", (1.5 * width) / 5, (3 * height) / 5 + 120);
    pop();


    if (spelers.length == 1) {
      spelers[0].actief = false;
    }
  }


}


function keyPressed() {
  if (!bezig) {
    if (keyCode == ENTER) {
      x.type++;
    } else if (keyCode == BACKSPACE && x.type == 0) {
      x.naam = "";
    } else if (keyCode == BACKSPACE && x.type == 1) {
      x.score = "";
    } else if (x.type == 0) {
      x.naam += key;
    } else if (x.type == 1) {
      x.score += key;
    }

    if (x.type == 2) {
      spelers.push(new speler(x.naam, int(x.score)));
      x.naam = "";
      x.score = "";
      x.type = 0;
    }
  }

}

function mouseClicked() {
  if ((mouseX < width / 2 + 75) && (mouseX > width / 2 - 75) && (mouseY < height / 2 + 93) && (mouseY > height / 2 + 47)) {
    bezig = true;
    sorteer();

  } else if ((mouseX < (1.5 * width) / 5 + 100) && (mouseX > (1.5 * width) / 5 - 100) && (mouseY < (3 * height) / 5 + 23) && (mouseY > (3 * height) / 5 - 23)) {
    console.log("start/stop");
    spelers[0].actief = !spelers[0].actief;

  } else if ((mouseX < (1.5 * width) / 5 + 100) && (mouseX > (1.5 * width) / 5 - 100) && (mouseY < (3 * height) / 5 + 83) && (mouseY > (3 * height) / 5 + 43)) {
    console.log("juist");

    spelers[0].actief = false;
    for (i = spelers.length - 1; i > 0; i--) {
      spelers[i].score -= penalty;

      if (spelers[i].score <= 0) {
        spelers.splice(i, 1);
      }
    }
    sorteer();
    spelers[0].actief = true;

  } else if ((mouseX < (1.5 * width) / 5 + 100) && (mouseX > (1.5 * width) / 5 - 100) && (mouseY < (3 * height) / 5 + 143) && (mouseY > (3 * height) / 5 + 103)) {
    console.log("volgende");
    spelers[0].actief = false;
    for (i = 0; i < spelers.length - 1; i++) {
      swap(i, i + 1);
    }
    spelers[0].actief = true;
  }
}

function sorteer() {
  var temp = 0;
  for (i = 0; i < spelers.length - 1; i++) {
    if (spelers[i].score > spelers[i + 1].score) {
      swap(i, i + 1);
      temp++;
    }
  }

  if (temp != 0) {
    sorteer();
  }
}

function swap(x, y) {
  var temp = spelers[x];
  spelers[x] = spelers[y];
  spelers[y] = temp;
}