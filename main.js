img="";
status="";

function preload(){
    img=loadImage("dog_cat.jpg");
}

function setup(){
    canvas=createCanvas(640,420);
    canvas.center();

    Object_Detector= ml5.objectDetector("cocossd",ModelLoaded);

    document.getElementById("heading3").innerHTML="Status: Detecting Objects";
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