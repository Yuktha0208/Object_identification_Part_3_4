img="";
status="";

function preload(){
    img=loadImage("bottle.jpg");
}

function setup(){
    canvas=createCanvas(640,420);
    canvas.center();

    Object_Detector= ml5.objectDetector("cocossd",ModelLoaded);

    document.getElementById("heading3").innerHTML="Status: Detecting Objects";
}

function draw(){
    image(img,0,0,640,420);

    if(status != ""){
        for(i=0;i< object.length; i++){
          document.getElementById("heading3").innerHTML="Status: Object Detected";
          fill("red");
          percent=floor(object[i].confidence * 100);
          text(object[i].label + " " + percent + "%",object[i].x,object[i].y);
          noFill();
          stroke("red");
          rect(object[i].x , object[i].y , object[i].width , object[i].height);
        }
    }
}

function ModelLoaded(){
    console.log("Model Loaded");
    status= true;
    Object_Detector.detect(img, gotResults)
}

function gotResults(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
}

function back(){
    window.location="index.html"
}