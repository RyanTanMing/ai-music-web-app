song=""
function setup() {
    canvas=createCanvas(500,500)
    canvas.center()
    video=createCapture(VIDEO)
    video.hide()
    pn=ml5.poseNet(video,model_loaded)
    pn.on("pose",got_poses)
}
function draw() {
    image(video, 0,0,500,500)
}
function preload() {
    song=loadSound("music.mp3")
}
function play() {
    song.play()
}
function stop() {
    song.stop()
}
leftwristX=0
leftwristY=0
rightwristX=0
rightwristY=0


    pn=ml5.poseNet(video,model_loaded)
    pn.on("pose",got_poses)

function model_loaded() {
    console.log("poseNet has been loaded")
}
function got_poses(results) {
    if (results.length>0) {
        console.log(results)
        leftwristX=results[0].pose.leftWrist.x
        leftwristY=results[0].pose.leftWrist.y
        rightwristX=results[0].pose.rightWrist.x
        rightwristY=results[0].pose.rightWrist.y
        console.log(leftwristX,leftwristY)
        console.log(rightwristX,rightwristY)
    }
}