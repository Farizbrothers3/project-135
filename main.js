function setup() {
    canvas = createCanvas(480, 380);
    canvas.center();
}

function draw() {
    image(video, 0, 480, 380);
}

function start()
{
  objectDetector = ml5.objectDector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
    console.log("Model Loaded!");
    stats = true;
    video.loop();
    video.volume(0);
}