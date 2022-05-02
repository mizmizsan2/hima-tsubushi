
let c1 = []; //配列に

class object {
    constructor(x, y, mx, my, s) {
        this.x1 = x;
        this.y1 = y;
        this.mx1 = mx;
        this.my1 = my;
        this.x2 = x;
        this.y2 = y;
        this.mx2 = mx;
        this.my2 = my;
        this.s = s;
        this.dis1;
        this.dis2;
    }
    moveUp() {
        fill(0, 255, 255);
        ellipse(this.x1, this.y1, this.s, this.s);
        this.x1 += this.mx1;
        this.y1 += this.my1;
        if (this.x1 <= -50) {
            this.x1 = 420;
            this.y1 = random(-50, 830);
            this.mx1 = random(-4, 4);
            this.my1 = random(-4, 4);
        }
        if (this.x1 >= 420) {
            this.x1 = -50;
            this.y1 = random(-50, 830);
            this.mx1 = random(-4, 4);
            this.my1 = random(-4, 4);
        }

        if (this.y1 < -50) {
            this.x1 = random(-50, 420);
            this.y1 = 830;
            this.mx1 = random(-4, 4);
            this.my1 = random(-4, 4);
        }
        if (this.y1 > 830) {
            this.x1 = random(-50, 420);
            this.y1 = -50;
            this.mx1 = random(-4, 4);
            this.my1 = random(-4, 4);
        }

    }

    moveDown() {
        fill(255, 255, 0);
        ellipse(this.x2, this.y2, this.s, this.s);
        this.x2 += this.mx2;
        this.y2 += this.my2;
        if (this.x2 < -50) {
            this.x2 = 420;
            this.y2 = random(-50, 830);
            this.mx2 = random(-4, 4);
            this.my2 = random(-4, 4);
        }
        if (this.x2 > 420) {
            this.x2 = -50;
            this.y2 = random(-50, 830);
            this.mx2 = random(-4, 4);
            this.my2 = random(-4, 4);
        }

        if (this.y2 < -50) {
            this.x2 = random(-50, 420);
            this.y2 = 830;
            this.mx2 = random(-4, 4);
            this.my2 = random(-4, 4);
        }
        if (this.y2 > 830) {
            this.x2 = random(-50, 420);
            this.y2 = -50;
            this.mx2 = random(-4, 4);
            this.my2 = random(-4, 4);
        }

    }

    del() {
        // console.log(`x:${mouseX}, y:${mouseY}`);
        this.dis1 = dist(this.x1, this.y1, mouseX, mouseY);
        this.dis2 = dist(this.x2, this.y2, mouseX, mouseY);
        if (this.dis1 < this.s / 2) {
            return 1;

        } else if (this.dis2 < this.s / 2) {
            return 2;
        }
        else {
            return 0;
        }
    }
}


function setup() {
    createCanvas(390, 800);
    background(0);

    scoreResult = 0;
    scene = "start";


}

function draw() {
    if (scene == "start")
        startScene();

    if (scene == "play") {
        background(180, 180, 255);

        // background(0);
        fill(255);
        translate(12, 12);
        // 現在のキャンバスの原点を左上隅とする矩形を描く
        // if(c.length > 0){
        for (let i = 0; i < 5; i++) {
            c1.push(new object(0, 0, random(-4, 4), random(-4, 4), 60)); //pushは関数
            c1[i].moveUp();
            if (c1[i].del() == 1 && mouseIsPressed) {
                c1.splice(i, 1);
                console.log('up');
                scoreCal(10);
            }
        }

        for (let i = 0; i < 5; i++) {
            c1.push(new object(0, 0, random(-4, 4), random(-4, 4), 60)); //pushは関数
            c1[i].moveDown();
            if (c1[i].del() == 2 && mouseIsPressed) {
                c1.splice(i, 1);
                console.log('down');
                scoreCal(-10);
            }
        }
        scoreText();
    }
}

function scoreCal(score) {
    scoreResult += score;
}

function scoreText() {
    fill(0);
    textSize(24);
    text("score→" + scoreResult, 10, 30);
}

function startScene() {
    background(255, 0, 255);
    fill(0);
    textSize(48);
    text("スタート画面", 50, 400);
    text("Enter押せ", 50, 500);
    if (keyIsPressed)
        scene = "play";

}

