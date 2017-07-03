const HEIGHT = 500;
const WIDTH = 800;
const MAX_SPEED = 15;
const SIZE = 40;
var button;
var img;

function setup()
{
   createCanvas(WIDTH, HEIGHT);
   background(0, 0, 0);
   img = loadImage("charliekopf.png");
   button = new Button
   (
      random(WIDTH),
      random(HEIGHT),
      random(0 - MAX_SPEED, MAX_SPEED),
      random(0 - MAX_SPEED, MAX_SPEED),
      SIZE, // definiert button.size
   );

   button.display = function()
   {
      noStroke();
      ellipse(this.x, this.y, this.size, this.size);
   }

   button.move = function()
   {
      this.x += this.xSpeed;
      this.y += this.ySpeed;
   }

   button.checkEdges = function()
   {
      // check borders on the left and on the right if touched, throw back within 180 degrees
      if((this.x + this.size) > WIDTH) // RECHTS
      {
         this.xSpeed = random(0 - MAX_SPEED, -5); // nach links, als nur negatives xSpeed
         this.ySpeed = random(0 - MAX_SPEED, MAX_SPEED);
      }
      else if((this.x - this.size) < 0) // LINKS
      {
         this.xSpeed = random(5, MAX_SPEED); // strikt positives x, damit wieder nach rechts
         this.ySpeed = random(0 - MAX_SPEED, MAX_SPEED);
      }
      //check the borders at bottom and on top
      if((this.y + this.size) > HEIGHT) // UNTEN
      {
         this.xSpeed = random(0 - MAX_SPEED, MAX_SPEED);
         this.ySpeed = random(0 - MAX_SPEED, -5);
      }
      else if((this.y - this.size) < 0) // OBEN
      {
         this.xSpeed = random(0 - MAX_SPEED, MAX_SPEED);
         this.ySpeed = random(5, MAX_SPEED);
      }
   }
}

function mouseClicked()
{
   if(isWithinDistance(mouseX, mouseY, button.x, button.y, SIZE))
   {
      score.current++;
      // score, Zahl hoch Bildschrim, Drückanimation, andereRIchting
      button.xSpeed = random(0 - MAX_SPEED, MAX_SPEED);
      button.xSpeed = random(0 - MAX_SPEED, MAX_SPEED);
      console.log("JA");
   }
   else
   {
      console.log("NEIN");
   }
   return false; // to prevent default browser behaviour to react to the mouse click
}

function draw()
{
   background(0, 0, 0);
   image(img, 0, 0);
   // written stuff
   stroke(0, 0, 0);
   fill(255, 255, 255);
   textSize(32);
   text(score.current.toString(), 0, 0, 600, 600);
   text(score.currentString(), 50, 50, 600, 600);

   // button animation
   button.display();
   button.move();
   button.checkEdges();
}

// random Funktion nicht nutzbar ausserhalb von setup() oder draw()
/* TODO
- wv xSpeed und ySpeed als max in random()?
- Zähler, wie oft er geklickt hat CHANGED
- Verschönerung mit Bild und Farben
- im Hintergrund etwas hinschreiben
*/
