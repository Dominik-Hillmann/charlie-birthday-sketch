const HEIGHT = 500;
const WIDTH = 800;
const MAX_SPEED = 15;
var button;

function setup()
{
   createCanvas(WIDTH, HEIGHT);
   background(0, 0, 0);
   button = new Button
   (
      random(WIDTH),
      random(HEIGHT),
      random(0 - MAX_SPEED, MAX_SPEED),
      random(0 - MAX_SPEED, MAX_SPEED),
      20, // definiert button.size
   );

   button.display = function()
   {
      ellipse(this.x, this.y, this.size, this.size);
   }

   button.move = function()
   {
      this.x += this.xSpeed;
      this.y += this.ySpeed;
   }

   button.checkEdges = function()
   {
      // bei Beruehrung neuen xSpeed, ySpeed, sodass zufaellig innerhalb des 180 Grad-Winkels zurueckgeworfen
      // check borders on the left and on the right

      if((this.x + this.size) > WIDTH)
      {
         console.log("rechts raus");
      }
      else if((this.x - this.size) < 0)
      {
         console.log("links raus");
      }

      //check the borders at bottom and on top
      if((this.y + this.size) > HEIGHT)
      {
         console.log("oben raus");
      }
      else if((this.y - this.size) < 0)
      {
         console.log("unten raus");
      }
      button.checkEdges = NULL;
   }
}

function draw()
{
   stroke(255, 255, 255);
   background(0, 0, 0);
   //console.log(button);
   button.display();
   button.move();
   button.checkEdges();
   console.log("xSpeed: " + button.xSpeed + " ySpeed: " + button.ySpeed);
}

// random Funktion nicht nutzbar ausserhalb von setup() oder draw()
// TODO: wv xSpeed und ySpeed als max in random()?
