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

   button.display = function()
   {
      image(img, button.x - (img.width / 2), button.y - (img.height / 2));
   }

   button.move = function()
   {
      this.x += this.xSpeed;
      this.y += this.ySpeed;
   }

   button.checkEdges = function()
   {
      // check borders on the left and on the right if touched, throw back within 180 degrees
      if((this.x + this.size) > WIDTH) // RIGHT
      {
         this.xSpeed = random(0 - MAX_SPEED, -5); // only negative xSpeed so button goes to the right
         this.ySpeed = random(0 - MAX_SPEED, MAX_SPEED);
      }
      else if((this.x - this.size) < 0) // LEFT
      {
         this.xSpeed = random(5, MAX_SPEED);
         this.ySpeed = random(0 - MAX_SPEED, MAX_SPEED);
      }
      //check the borders at bottom and on top
      if((this.y + this.size) > HEIGHT) // BOTTOM
      {
         this.xSpeed = random(0 - MAX_SPEED, MAX_SPEED);
         this.ySpeed = random(0 - MAX_SPEED, -5);
      }
      else if((this.y - this.size) < 0) // TOP
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
      button.xSpeed = random(0 - MAX_SPEED, MAX_SPEED);
      button.xSpeed = random(0 - MAX_SPEED, MAX_SPEED);
      console.log("JA");
   }
   else
      console.log("NEIN");
   return false; // to prevent default browser behaviour from reacting to the mouse click
}

function draw()
{
   background(0, 0, 0, 75); // alpha of 75 so the face will have a behind it

   // written stuff in the background
   stroke(0, 0, 0);
   fill(255, 255, 255);
   textSize(32);
   text(score.current.toString(), 25, 25, 600, 600);
   text(score.currentString(), 100, 225, 600, 600);

   // creating link when goal score is reached
   if((score.current >= score.goal) && !(score.created))
   {
      document.
   }

   // button animation
   button.display();
   button.move();
   button.checkEdges();
}

// random Funktion nicht nutzbar ausserhalb von setup() oder draw()
/* TODO
- wv xSpeed und ySpeed als max in random()?
- Zähler, wie oft er geklickt hat CHANGED
- Verschönerung mit Bild und Farben CHANGED
- im Hintergrund etwas hinschreiben CHANGED
- Canvas in das Dokument einbinden und Kreation des Links (einmalig, wenn Grenze überschritte und Test, ob schon da)
*/
