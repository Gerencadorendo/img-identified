stattus=""
objects=[]
function preload(){
    img=loadImage("co.webp")
}

function setup(){
    canvas= createCanvas(640, 420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status: Detectando Objeto"
}


function draw(){
    image(img, 0, 0, 640, 420)
    // fill("red")
    // textSize(40)
    // text("Dog", 224, 40)
    // noFill()
    // stroke("red")
    // rect(105, 55, 230, 345)

    // fill("blue")
    // textSize(40)
    // text("Cat", 400, 50)
    // noFill()
    // stroke("blue")
    // rect(320, 55, 245, 335)

    if(stattus == true){
        for(i=0; i<objects.length; i++){
            document.getElementById("status").innerHTML = "Objetos Detectados"
            stroke("yellow")
            noFill()
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height)
            fill("green")
            textSize(40)
            text(objects[i].label, objects[i].x, objects[i].y)
        }
    }
}

function modelLoaded(){
    console.log("modelo carregado")
    stattus=true;
    objectDetector.detect(img, gotResult);
    document.getElementById("status").innerHTML = "Detectando Objetos"
}

function gotResult(error,results){
    if(error){
        console.error(error)
    }
    else{
        console.log(results)
        objects = results
    }
}