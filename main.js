var musi_cmp3_1 ="music.mp3";
var music_mp3_2 = "music2.mp3"; 

leftwristx = 0;
rightwristx = 0;
leftwristy =0;
rightwristy= 0;

score_leftwrist = 0;
status_left = "";
score_rightwrist = 0;
status_right = "";

function preload(){
    loadSound("music.mp3");
    loadSound("music2.mp3")
}

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.poseNet(video,modelloaded);
    posenet.on("pose", gotposes)
}

function modelloaded(){
    console.log("Model is loaded");
}

function gotposes(results){
if(results.length > 0){
console.log(results);

score_leftwrist = results[0].pose.keypoints[9].score;
score_rightwrist = results[0].pose.keypoints[10].score;

lefttwristx = results[0].pose.leftWrist.x;
righttwristx = results[0].pose.rightWrist.x;
lefttwristy = results[0].pose.leftWrist.y;
righttwristy = results[0].pose.rightWrist.y;
}
}

function draw(){
    image(video,0,0,600,500);
    fill("blue");
    stroke("white");
    status_left = song.isPlaying();
    if(score_leftwrist > 0.2){
    circle(leftwristx,leftwristy,23);
    if(status_left == true){
        song.play(music.mp3);
        document.getElementById("song_changer").innerHTML = "The first song is playing";
    }

    }

    status_right = song.isPlaying();
    if(score_rightwrist > 0.2){
    circle(rightwristx,rightwristy,23);
    if(status_right == true){
        song.play(music2.mp3);
        document.getElementById("song_changer").innerHTML = "The second song is playing";
    }

    }
    
}