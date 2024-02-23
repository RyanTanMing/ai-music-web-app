song = ""
song2 = ""
scoreleftwrist = 0
scorerightwrist = 0
song_status=""
song2_status=""
function setup() {
    canvas = createCanvas(500, 500)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide()
    pn = ml5.poseNet(video, model_loaded)
    pn.on("pose", got_poses)
}
function draw() {
    image(video, 0, 0, 500, 500)
    song_status=song.isPlaying()
    song2_status=song.isPlaying()
    fill("red")
    stroke("red")
    if (scoreleftwrist > 0.1) {
        circle(leftwristX, leftwristY, 20)
        song2.stop()
        if (song_status==false) {
            song.play()
        }
        n = Number(leftwristY)
        n1 = floor(n)
       song.play()
    }
    if (scorerightwrist > 0.1) {
        circle(rightwristX, rightwristY, 20)
        song.stop()
        if (song2_status==false) {
            song2.play()
        }
        n = Number(rightwristY)
        n1 = floor(n)
        song.play()
    }
}
function preload() {
    song = loadSound("music.mp3")
    song2 = loadSound("1_In1_In_His_Hands (1).mp3")
}
function play() {
    song.play()
    song.setVolume(1)
    song.rate(1)
}
function stop() {
    song.stop()
}
leftwristX = 0
leftwristY = 0
rightwristX = 0
rightwristY = 0




function model_loaded() {
    console.log("poseNet has been loaded")
}
function got_poses(results) {
    if (results.length > 0) {
        console.log(results)
        leftwristX = results[0].pose.leftWrist.x
        leftwristY = results[0].pose.leftWrist.y
        scoreleftwrist = results[0].pose.keypoints[9].score
        rightwristX = results[0].pose.rightWrist.x
        rightwristY = results[0].pose.rightWrist.y
        scorerightwrist = results[0].pose.keypoints[17].score
        console.log(leftwristX, leftwristY)
        console.log(rightwristX, rightwristY)
    }
}