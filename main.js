canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var car1_width = 120;
var car1_height = 70;
var car1_image = "https://i.postimg.cc/YqdnnNX1/car1.png";
var car1_x = 10;
var car1_y = 10;

var car2_width = 120;
var car2_height = 70;
var car2_image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5YenVd4uiZGmPRP9nGrPer_dDR9lkIME0vaWvvD4K4ggfXhOes7_IBFNHhX985TH1E34&usqp=CAUg";
var car2_x = 10;
var car2_y = 100;


var background_image = "https://i.postimg.cc/bv5d35nK/racing.jpg";

function add(){
    background_imgTAG = new Image();
    background_imgTAG.onload = uploadbackground();
    background_imgTAG.src = background_image;

    car1_imgTAG = new Image();
    car1_imgTAG.onload = uploadcar1();
    car1_imgTAG.src = car1_image;

    car2_imgTAG = new Image();
    car2_imgTAG.onload = uploadcar2();
    car2_imgTAG.src = car2_image;
}

function uploadbackground(){
    ctx.drawImage(background_imgTAG, 0, 0, canvas.width, canvas.height);
}

function uploadcar1(){
    ctx.drawImage(car1_imgTAG, car1_x, car1_y, car1_width, car1_height);
}

function uploadcar2(){
    ctx.drawImage(car2_imgTAG, car2_x, car2_y, car2_width, car2_height);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38')
    {
        car1_up();
        console.log("Up Arrow Key");
    }

    if(keyPressed == '40')
    {
        car1_down();
        console.log("Down Arrow Key");
    }
    
    if(keyPressed == '37')
    {
        car1_left();
        console.log("Left Arrow Key");
    }

    if(keyPressed == '39')
    {
        car1_right();
        console.log("Right Arrow Key");
    }

    if(keyPressed == '87')
    {
        car2_up();
        console.log("W");
    }
    
    if(keyPressed == '83')
    {
        car2_down();
        console.log("S");
    }

    if(keyPressed == '65')
    {
        car2_left();
        console.log("A");
    }

    if(keyPressed == '68')
    {
        car2_right();
        console.log("D");
    }

        if(car1_x > 700)
        {
            console.log("car1");
            document.getElementById('game_status').innerHTML = "Car 1 Won!!";
        }
        else if(car2_x > 700)
        {
            console.log("car2");
            document.getElementById('game_status').innerHTML = "Car 2 Won!!";
        }
}
function car1_up(){
    if( car1_y >= 0){
        car1_y=car1_y - 10;
        console.log("When up arrow key is pressed, x = " + car1_x + " | y = " + car1_y);
        uploadbackground();
        uploadcar1();
    uploadcar2();
    }
    }

function car1_down(){
    if( car1_y <=500){
        car1_y=car1_y + 10;
        console.log("When down arrow key is pressed, x = " + car1_x + " | y = " + car1_y);
        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
    }

function car1_left(){
    if( car1_x >= 0){
        car1_x=car1_x - 10;
        console.log("When left arrow key is pressed, x = " + car1_x + " | y = " + car1_y);
        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
    }

function car1_right(){
    if( car1_x <=700){
        car1_x=car1_x + 10;
        console.log("When right arrow key is pressed, x = " + car1_x + " | y = " + car1_y);
        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
    }


function car2_up(){
    if( car2_y >= 0){
        car2_y=car2_y - 10;
        console.log("When W key is pressed, x = " + car2_x + " | y = " + car2_y);
        uploadbackground();
        uploadcar1();
        uploadcar2();
        }
        }

    function car2_down(){
        if( car2_y <= 500){
            car2_y=car2_y + 10;
            console.log("When S key is pressed, x = " + car2_x + " | y = " + car2_y);
            uploadbackground();
            uploadcar1();
            uploadcar2();
        }
        }

    function car2_left(){
        if( car2_x >= 0){
            car2_x=car2_x - 10;
            console.log("When A key is pressed, x = " + car2_x + " | y = " + car2_y);
            uploadbackground();
            uploadcar1();
            uploadcar2();
        }
        }

    function car2_right(){
        if( car2_x <= 700){
            car2_x=car2_x + 10;
            console.log("When D key is pressed, x = " + car2_x + " | y = " + car2_y);
            uploadbackground();
            uploadcar1();
            uploadcar2();
        }
        }