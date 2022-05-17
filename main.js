nosex=0;
nosey=0;
righthandx=0;
lefthandx=0;
difference=0;
function setup(){
    canvas=createCanvas(400,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(440,400);
    poseNet=ml5.poseNet(video,modelloaded);
   poseNet.on('pose',gotPoses)
}
function modelloaded(){
    console.log("model is loaded")
}
function draw(){
    background("black");
    textSize(difference);
    fill("red");
    text("hartaj",nosex,nosey);
}
function gotPoses(results){
 if(results.length>0){
     console.log(results);
     nosex=results[0].pose.nose.x;
     nosey=results[0].pose.nose.y;
    righthandx=results[0].pose.rightWrist.x;
    lefthandx=results[0].pose.leftWrist.x;
    difference=floor(lefthandx-righthandx);
 }
}