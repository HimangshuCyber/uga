canvas = document.getElementById("myCanvas");
ctx = canvas.getContext('2d');
// Create a reference for the canvas

img_width = 500;
img_height = 300;

var img_image = "Alpkey.png";

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); //defining a variable with a new image
	img_imgTag.onload = uploadimg(); // setting a function, onloading this variable
	img_imgTag.src = img_image;   // load image
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

window.addEventListener("keydown", my_keydown)
//Write a code to grab the key-pressed event

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	

	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90)){
			aplhabetkey();
			document.getElementById("d1").innerHTML="You pressed Alphabet Keys";
			console.log("alpha");
		}
		else{
			otherkey()
			document.getElementById("d1").innerHTML = "You pressed Other Keys. (Too lazy to put what)";
			console.log("other")
		}
		if(keyPressed >= 48 && keyPressed<=57){
			numberkey();
			document.getElementById("d1").innerHTML="You pressed number key";
			console.log("num");
		}
		if(keyPressed >= 34 && keyPressed<=40){
			arrowkey();
			document.getElementById("d1").innerHTML="You pressed arrow keys";
			console.log("arr");
		}
		if(keyPressed == 17 || keyPressed == 18 || keyPressed == 27){
			specialkey()
			document.getElementById("d1").innerHTML="You pressed special keys";
			console.log("special");
		}
	}
function aplhabetkey(){
    img_image = "Alpkey.png";
	add();
	
}

function numberkey()
{
	img_image = "numkey.png";
	add();
}
function arrowkey()
{
	img_image = "Arrkey.png";
	add();
}
function specialkey()
{
	img_image = "spkey.png";
	add();	
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}
	
