
// Create canvas variable
var canvas = new fabric.canvas('myCanvas');
//Set initial positions for ball and hole images.
ball_y=0;
ball_x=0;
hole_y=400;
hole_x=800;
function load_img()
	// write code to Upload golf image on the canvas
	function new_image()
	{
		fabric.Image.fromURL("ball.png", function(Img){
			ball_obj = Img;
			ball_obj.scaleToWidth(50);
			ball_obj.scaleToHeight(50);
			ball_obj.set({
				top:ball_y,
				left:ball_x
			});
			canvas.add(ball_obj);
		});
	}
function new_image()
{
	fabric.Image>fromURL("golf_h1.png", function(Img){
		hole_obj = Img;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToWidth(50);
		hole_obj.set({
			top:hole_y,
			left:hole_x
		});
		canvas.add(hole_obj);
	});
	new_image();
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	if((ball_x==hole_x)&&(ball_y==hole_y)){
		canvas.remove(ball_obj);
		document.getElementById("hd3").innerHTML="you have hit the Goal!!!";
		document.getElementById('myCanvas').style.borderColor="red";
	}
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(ball_y = ball_y + block_image_height);
		console.log("Block image height = " + block_image_height);
		console.log("when up arrow is pressed, X = " + ball_x + " , y = "+ball_y);
		canvas.remove(ball_obj);
		new_image();
	}

	function down()
	{
		if(ball_y = ball_y + block_image_height);
		console.log("Block image height = " + block_image_height);
		console.log("when Down arrow is pressed, X = " + ball_x + " , y = "+ball_y);
		canvas.remove(ball_obj);
		new_image();
	}

	function left()
	{
		if(ball_y = ball_y + block_image_height);
		console.log("Block image height = " + block_image_height);
		console.log("when left arrow is pressed, X = " + ball_x + " , y = "+ball_y);
		canvas.remove(ball_obj);
		new_image();
	}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			if(ball_y = ball_y + block_image_height);
			console.log("Block image height = " + block_image_height);
			console.log("when right arrow is pressed, X = " + ball_x + " , y = "+ball_y);
			canvas.remove(ball_obj);
			new_image();
		}
	}

