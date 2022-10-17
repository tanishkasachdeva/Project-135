status="";

function setup()
{
    canvas=createCanvas(370,360);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(370,360);
    video.hide();
}

function start()
{
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
    document.getElementById("input_object_name").value;
}

function modelLoaded()
{
    console.log("Model Loaded!");
    status=true;
}

function draw()
{
    image(video,0,0,370,360);
}