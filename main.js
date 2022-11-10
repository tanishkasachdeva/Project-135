status="";
objects=[];

function setup()
{
    canvas=createCanvas(370,360);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(370,360);
    video.hide();
}

function draw()
{
    image(video,0,0,370,360);
    if (status!="")
    {

        for(i=0;i<objects.length;i++)
        {
            percent=floor(objects[i].confidence*100);
            text(objects[i].label+percent+"%",objects[i].x+15,objects[i].y+15);
            stroke("#FF0000");
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);

            if(objects[i].label==object_name)
          {
            video.stop();
            objectDetector.detect(gotResults);
            document.getElementById("status").innerHTML=object_name+" Found";
            api=window.speechSynthesis();
            utterThis=SpeechSynthesisUtterance(object_name); 
            api.speak(utterThis);
          }
          else
          {
            document.getElementById("status").innerHTML=object_name+" Not Found";
          }
        } 

        
    }
   
}

function start()
{
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
    object_name=document.getElementById("input_object_name").value;
}

function modelLoaded()
{
    console.log("Model Loaded!");
    status=true;
}



function gotResults(error,results)
{
    if (error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
        objects=results;
    }
}