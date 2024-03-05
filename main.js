img="";
status = ""
objects = []
function setup(){
    canvas=createCanvas(640,420);
    canvas.center()
    objectDetector = ml5.objectDetector('cocossd', modelloaded);
    document.getElementById("status").innerHTML = "status: detecting objects"
}
function preload(){
    img=loadImage("dog_cat.jpg");

}
function draw(){
    image(img, 0, 0, 640, 420);
    if(status != "" ){
        for(i=0; i<objects.length; i++){
            document.getElementById("status").innerHTML = "status: objects detected"
            fill("#8E402A");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " "  + percent + "%", objects[i].x +10, objects[i].y + 15);
            noFill();
            stroke("#8E402A");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}

function modelloaded(){
    console.log("modelloaded")
    status = true
    objectDetector.detect(img, gotresult);
    
}
function gotresult(error, results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results) 
        objects=results
    }
}