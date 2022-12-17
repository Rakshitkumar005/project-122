function preload(){
} 
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    
   
    }
    
function draw(){
    image(video,230,150,220,200)
    fill(255,0,0)
    stroke(255,0,0)
    circle(50,50,80)
    circle(50,380,80) 
    circle(590,50,80)
    circle(590,380,80)
    fill(0,128,0)
    stroke(0,128,0)
    rect(90,40,460,20)
    rect(90,370,460,20)
    rect(40,90,20,250)
    rect(580,90,20,250)
}
function take_Sanpshot(){
    save('myFilterImage.png')
}
    