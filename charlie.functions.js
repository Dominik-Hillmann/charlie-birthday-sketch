// constructor for buttons
var Button = function(x, y, xSpeed, ySpeed, size)
{
   this.x = x;
   this.y = y;
   this.xSpeed = xSpeed;
   this.ySpeed = ySpeed;
   this.size = size;
}

// checks whether a click takes place within a radius of (distance), probably 20px or so
var isWithinDistance = function(xMouse, yMouse, xButton, yButton, distance)
{
   if(Math.sqrt(Math.pow(xMouse - xButton, 2) + Math.pow(yMouse - yButton, 2)) <= distance)
      return true;
   else
      return false;
}

// saves current points, where they need to be and ...
var score =
{
   current : 0,
   total: 0,
   goal : 42,
   created: false,
};
// ... what the string is that has to be displayed according to current score
score.currentString = function()
{
   // deliberate fallthrough to return strings in range of cases
   switch (this.current)
   {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
         return "KLICK MICH HART DU SAU!";
         break;
      case 5:
      case 6:
      case 7:
         return "Hm. Eine gute Gelegenheit, dich ein wenig zu beleidigen.\nDu stinkst. Sehr sogar.";
      case 8:
      case 9:
         return "Eigentlich wollen wir dich nur nerven.";
         break;
      case 10:
      case 11:
      case 12:
         return "Ein Tipp: du musst deine Nase treffen.";
         break;
      case 13:
      case 14:
         return "Wie lange das wohl noch dauert?";
         break;
      case 15:
      case 16:
      case 17:
      case 18:
      case 19:
         return "Ehrlich Charlie, du stinkst.";
         break;
      case 20:
      case 21:
         return "Gibt es Probleme mit dem Spiel? Dann ruf mich Angela!\nNein ehrlich. Ist mir egal.";
         break;
      case 22:
      case 23:
      case 24:
         return "Herzlichen Glückwunsch! Nur noch " + (1000 - score.current) + " Klicks!";
         break;
      case 25:
      case 26:
      case 27:
         return "Pro-Tipp: Alt + F4.";
         break;
      case 28:
      case 29:
         return "Das ist viel zu langsam, Charlie.\nDu hast das Geschenk nicht verdient.";
         break;
      case 30:
      case 31:
      case 32:
         return "Kommst du dir eigentlich blöd vor?";
         break;
      case 33:
      case 34:
         return "Eine Fischflocke besteht aus einer\nverwesten Blume und drei Eimern Quadratnudeln.";
         break;
      case 35:
      case 36:
         return "Wir könnten dich hier bis zur Fingerarthrose treiben.\nDas weißt du hoffentlich.";
         break;
      case 37:
      case 38:
         return "Aber wir sind gütig. Nicht jetzt. Aber bald.";
         break;
      case 39:
      case 40:
      case 41:
      case 42:
         return "*leises Räuspern*";
         break;
      default:
         return "ABBRUCH! Gib ihm das kleinere Geschenk.";
         break;
   }
}
