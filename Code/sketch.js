// Copyright (c) 2019 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
PoseNet example using p5.js
=== */

let video;
let poseNet;
let poses = [];

function setup() {
  createCanvas(300, 300);
  video = createCapture(VIDEO);
  video.size(width, height);

  // Create a new poseNet method with a single detection
  poseNet = ml5.poseNet(video, modelReady);
  // This sets up an event that fills the global variable "poses"
  // with an array every time new poses are detected
  poseNet.on('pose', function(results) {
    poses = results;
    if (poses.length > 0) {
    pose = poses[0].pose;
    skeleton = poses[0].skeleton;

  print(pose)
    let x1 = pose.keypoints[9].position.x;
    let y1 = pose.keypoints[9].position.y;
    let x2 = pose.keypoints[10].position.x;
    let y2 = pose.keypoints[10].position.y;
    let nose_x=pose.keypoints[0].position.x;
    let nose_y=pose.keypoints[0].position.y;
    let slope = (y2-y1)/(x2-x1);
    
    let mp_y=(y1+y2)/2;
    let mp_x=(x1+x2)/2;


  // let dist_noseToHands=Math.sqrt((Math.pow((nose_x-mp_x),2))-(Math.pow((nose_y-mp_y),2)))
  // print(dist_noseToHands)
   print(mp_y)
    
  
    let dist=Math.sqrt((Math.pow((x1-x2),2))-(Math.pow((y1-y2),2)))
    
 
    //print(slope);
    if(mp_y>300)
    {
      print('nothing')
      eel.doNothing();
    }
   else if (slope < -0.5){
      print('right')
      eel.pressBtnD()

    }
    else if (slope>0.5){
      print('left')
      eel.pressBtnA()
           
    }
    
    else if(dist >120){
      print('straight')
      eel.pressBtnW()
      
 
    }
  
    else if(dist<110){
      print('back')
      eel.pressBtnS()
      
 
    }
    else {
      print('Nothing')
    }
  }
  });
  //////OURCODE///////////

  ///////////////////////
  // Hide the video element, and just show the canvas
  video.hide();
}

function modelReady() {
  select('#status').html('Model Loaded');
}

function draw() {
  image(video,0, 0, width, height);

  // We can call both functions to draw all keypoints and the skeletons
  drawKeypoints();
  drawSkeleton();
}

// A function to draw ellipses over the detected keypoints
function drawKeypoints()  {
  // Loop through all the poses detected
  for (let i = 0; i < poses.length; i++) {
    // For each pose detected, loop through all the keypoints
    let pose = poses[i].pose;
    for (let j = 0; j < pose.keypoints.length; j++) {
      // A keypoint is an object describing a body part (like rightArm or leftShoulder)
      let keypoint = pose.keypoints[j];
      // Only draw an ellipse is the pose probability is bigger than 0.2
      if (keypoint.score > 0.2) {
        fill(0, 255, 0);
        noStroke();
        ellipse(keypoint.position.x, keypoint.position.y, 10, 10);
      }
    }
  }

}

// A function to draw the skeletons
function drawSkeleton() {
  // Loop through all the skeletons detected
  for (let i = 0; i < poses.length; i++) {
    let skeleton = poses[i].skeleton;
    // For every skeleton, loop through all body connections
    for (let j = 0; j < skeleton.length; j++) {
      let partA = skeleton[j][0];
      let partB = skeleton[j][1];
      stroke(0, 255, 0);
      line(partA.position.x, partA.position.y, partB.position.x, partB.position.y);
    }
  }
}
