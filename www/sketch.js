
let c1 = []; //配列に

class object {
    constructor(x, y, mx, my, s) {
        this.x = x;
        this.y = y;
        this.mx = mx;
        this.my = my;
        this.s = s;
        this.dis;
    }
    move() {
        fill(0, 255, 255);
        ellipse(this.x, this.y, this.s, this.s);
        this.x += this.mx;
        this.y += this.my;
        if (this.x <= -50 || this.x >= 420) {
            this.x = -50;
            this.y = random(-50, 830);
            this.mx = random(-4, 4);
            this.my = random(-4, 4);
        }
        if (this.y <= -50 || this.y >= 830) {
            this.x = random(-50, 420);
            this.y = -50;
            this.mx = random(-4, 4);
            this.my = random(-4, 4);
        }

    }

    del() {
   
    // console.log(`x:${mouseX}, y:${mouseY}`);

    this.dis = dist(this.x, this.y, mouseX, mouseY);
    if (this.dis < this.s / 2) {
        return 1;

    } else {
        return 0;
    }

}

}
function setup() {
    createCanvas(390, 800);
    background(0);


}

function draw() {
    background(180, 180, 255);

    // background(0);
    fill(255);
    translate(12, 12);
    // 現在のキャンバスの原点を左上隅とする矩形を描く
    // if(c.length > 0){
    for (let i = 0; i <= 10; i++) {
        c1.push(new object(0, 0, random(-4, 4), random(-4, 4), 60)); //pushは関数
        c1[i].move();
        if (c1[i].del() == 1  && mouseIsPressed)
            c1.splice(i, 1);
    }
    // }

}

