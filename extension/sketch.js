var capture;
var tracker;

function setup() { 
    let c = createCanvas(windowWidth,windowHeight);
    c.position(0,0);
    capture = createCapture(VIDEO);
    capture.size(windowWidth, windowHeight);
    //capture.size(800,800);
    capture.hide();
    colorMode(HSB);
    tracker = new clm.tracker();
    tracker.init();
    tracker.start(capture.elt);
    clear();
}

function draw() {
    //background(0);
    clear();
    //translate(width,0);
    //scale(-1.0,1.0);
    //image(capture, 0, 0, 800, 800);
    var positions = tracker.getCurrentPosition();

    if (positions.length > 0) {
        
        noStroke();
        let dis = abs(windowWidth/2-positions[62][0]);
        //let dis = int(dist(windowWidth/2, windowHeight-20, positions[62][0], windowHeight-20));
        let size = map(dis, 0, windowWidth/2, 10, 3000);
        let col = map(dis, 0, windowWidth/2, 70, 0);
        fill(col,100,80);
        ellipse(windowWidth/2, 0, size, size);

    }
}
