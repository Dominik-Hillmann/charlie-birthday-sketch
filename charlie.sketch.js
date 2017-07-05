const HEIGHT = 500;
const WIDTH = 800;
const MAX_SPEED = 20;
const MIN_SPEED = 10;
const SIZE = 40;
var button;
var img;
var linkPresent = "https://www.jumphouse.de/leipzig/";

function setup()
{
   createCanvas(WIDTH, HEIGHT);
   background(0, 0, 0);

   // define variables here because they are defined with p5 functions that can only be used within setup() or draw()
   img = loadImage("charliekopf.png");
   button = new Button
   (
      random(WIDTH),
      random(HEIGHT),
      random(0 - MAX_SPEED, MAX_SPEED),
      random(0 - MAX_SPEED, MAX_SPEED),
      SIZE // defines button.size and therefore the range within a click will add to scrore.current
   );

   // draws picture at button's location
   button.display = function()
   {
      image(img, button.x - (img.width / 2), button.y - (img.height / 2));
   }

   button.move = function()
   {
      this.x += this.xSpeed;
      this.y += this.ySpeed;
   }

   // checks whether direction has to be changed because button is near the edges
   button.checkEdges = function()
   {
      // check borders on the left and on the right: if touched, throw back within 180 degrees
      if((this.x + this.size) > WIDTH) // RIGHT
      {
         this.xSpeed = random(0 - MAX_SPEED, 0 - MIN_SPEED); // only negative xSpeed so button goes to the right
         this.ySpeed = random(0 - MAX_SPEED, MAX_SPEED);
      }
      else if((this.x - this.size) < 0) // LEFT
      {
         this.xSpeed = random(MIN_SPEED, MAX_SPEED);
         this.ySpeed = random(0 - MAX_SPEED, MAX_SPEED);
      }
      //check the borders at bottom and on top
      if((this.y + this.size) > HEIGHT) // BOTTOM
      {
         this.xSpeed = random(0 - MAX_SPEED, MAX_SPEED);
         this.ySpeed = random(0 - MAX_SPEED, 0 - MIN_SPEED);
      }
      else if((this.y - this.size) < 0) // TOP
      {
         this.xSpeed = random(0 - MAX_SPEED, MAX_SPEED);
         this.ySpeed = random(MIN_SPEED, MAX_SPEED);
      }
   }
}

// what is to be done when mouse click in canvas is registered
function mouseClicked()
{
   if(isWithinDistance(mouseX, mouseY, button.x, button.y, SIZE))
   {
      score.current++;
      // change direction of button to make behaviour less predictible
      button.xSpeed = random(0 - MAX_SPEED, MAX_SPEED);
      button.xSpeed = random(0 - MAX_SPEED, MAX_SPEED);
      console.log("JA");
   }
   else
      console.log("NEIN");
   //return false; // to prevent default browser behaviour from reacting to the mouse click
}

function draw()
{
   background(0, 0, 0, 75); // alpha of 75, so the face will have a track behind it

   // written stuff in the background
   stroke(0, 0, 0);
   fill(255, 255, 255);
   textSize(32);
   text(score.current.toString(), 25, 25, 600, 600);
   text(score.currentString(), 100, 225, 600, 600);

   // creating link when goal score is reached
   if((score.current >= score.goal) && !(score.created))
   {
      score.created = true;
      var link = document.getElementsByTagName("body")[0].appendChild(document.createElement("p"));
      link = link.appendChild(document.createElement("a")).appendChild(document.createTextNode("Nimm das und RENNE!"));
      document.getElementsByTagName("a")[0].href = linkPresent;
      document.getElementsByTagName("p")[0].style.color = "white";
   }

   // button animation
   button.display();
   button.move();
   button.checkEdges();
}
