var car,wall;

function setup() {
  createCanvas(1000, 400);

  wall = createSprite(900,200,25,300);
  wall.shapeColor ="lightpink";
  
  car = createSprite(100,190,50,50);
  car.shapeColor ="lightpink"
  car.velocityX= 10;

  speed=random(55,90);
  weight=random(400,1500);
  
}

function draw() {

  background("skyblue");
  drawSprites();

  fill("black");
  textSize(25);
  text("GLOBAL CAR SAFETY ORGANIZATION",250,50);
  
  car.collide(wall,deformation);
  
  textSize(15);
  text("Deformation is : > 180 ===> Car is Lavender ===> Lethal for the Passangers",30,340);
  text("Deformation is : < 180 && > 100 ===> Car is Yellow ===> Average for the Passangers",30,360);
  text("Deformation is : < 100 ===> Car is LightGreen ===> Good for the Passangers",30,380);
}

function deformation(){

  var deformation=(0.5 * weight * speed * speed)/22500;
  console.log(deformation);
  
	if(deformation>180)
	{
    
    car.shapeColor="lavender";
	}

	if(deformation<180 && deformation>100)
	{
    
		car.shapeColor="yellow";
	}

	if(deformation<100)
	{
    
		car.shapeColor="lightgreen";
  }
  text("Deformation is "+deformation,300,300);
}