nosex=0;
nosey=0;

function preload(){
cimage= loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png");
}

function setup(){
    canvas=createCanvas(450, 450);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(450, 450);
    video.hide();

poseNet= ml5.poseNet(video, modelLoaded);

poseNet.on('pose',  gotPoses)
}

function draw(){
    image( video, 0, 0, 450, 450);
   image(cimage, nosex-10, nosey-10, 40, 40)
}

function takesnap(){
    save('myimage');
}

function modelLoaded(){
    console.log("modelLoadedSucessfully!");
}

function gotPoses(results){
    if(results.length >0)
    {
        console.log(results);
        console.log("nosex =" +results[0].pose.nose.x);
        console.log("nosey =" +results[0].pose.nose.y);
         nosex=results[0].pose.nose.x;
         nosey=results[0].pose.nose.y;
    }
}