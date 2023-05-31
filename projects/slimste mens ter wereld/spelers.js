class speler {
    constructor(str, sec) {
        this.naam = str;
        this.score = sec;
        this.actief = false;
        this.frames = 0;
    }

    show(x, y) {
        push();
        fill(255);
        strokeWeight(0);
        textSize(25);
        textAlign(LEFT, TOP);
        text(this.naam, x + 10, y + 10);
        textStyle(BOLD);
        textAlign(RIGHT, TOP);
        text(this.score, width - 30, y + 10);
        pop();
    }

    display() {
        //rect(20, 20, (3*width)/5, height - 40);
        push();
        fill(255);
        strokeWeight(0);
        textSize(70);
        textAlign(CENTER, CENTER);
        text(this.naam, (1.5 * width) / 5, height / 5);
        textStyle(BOLD);
        text(this.score, (1.5 * width) / 5, (2 * height) / 5);
        pop();

        //seconden aftellen
        if (this.actief) {
            this.frames++;
            if (this.frames == 30) {
                this.score--;
                this.frames = 0;

                if (this.score == 0) {
                    spelers.splice(0, 1);
                }
            }
        }
    }
}