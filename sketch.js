let osc;
let playing = false;
let mySound0
let mySound1
let mySound2
let mySound3
let mySound4
let mySound5
let mySound6
let mySound7
let backgroundColor

//let gravity = 5
//let point1 = createVector(width-500,height-1000)

function preload() {
  soundFormats('mp3', 'ogg');
  mySound0 = loadSound('snare_drum.mp3');
  mySound1 = loadSound('what_drums.mp3');
  mySound2 = loadSound('why_drums.mp3');
  mySound3 = loadSound('freakin_drums.mp3');
  mySound4 = loadSound('Nah_drums.mp3');
  mySound5 = loadSound('Bruh_2_drums.mp3');
  mySound6 = loadSound('a_drums.mp3');
  mySound7 = loadSound('heck_drums.mp3');


}

function setup() {
  createCanvas(windowWidth,windowHeight)
  backgroundColor = color(0, 150,255);
  textAlign(CENTER);
  //mySound.setVolume(0.1);
  //mySound.play();
  angleMode(DEGREES)
}


function draw() {
  background(backgroundColor)
  push()
  textSize(30)
  text('+', width/2, height/2);
  pop()
  push()
  textSize(100)
  text('The Wordstument', width/2, height/2 - 1000)
  pop()


//Left Symbol
    push()
    stroke(0)
    strokeWeight(5)
      push()
      strokeWeight(10)
      line(width/2-1100, height-2100, width/2-1100, height-1900)
      line(width/2-1100, height-2000, width/2-1300, height-1800)
      line(width/2-1300, height-1900, width/2-1300, height-800)

      pop()
     
      push()
      //rotate(30)
      ellipse(width/2-1100, height-2100, 400, 100)
      arc(width/2-1100, height-2100, 35, 25, 180, 360)
      //attempt at rotating with arc
      //arc(width-2500, height-1100, 400, 100, 270, 180)

      pop()
    pop()


//Drum 1
  push()
    strokeWeight(5)
    rect(width/2-800, height-1900, 400, 300)
  pop()

    push()
      stroke(0)
      strokeWeight(7)
      ellipse(width/2-600, height-1900, 400, 100)
      arc(width/2-600, height-1600, 400, 100, 360, 180)
    pop()

    push()
      stroke(255)
      strokeWeight(3)
      line(width/2-800, height-1600, width/2-400, height- 1600)
    pop()


//Drum 2
    //body of drum
    push()
      noStroke()
      rect(width/2-350, height-2000, 300, 300)
    pop()

    //sides of drum
    push()
      strokeWeight(5)
      line(width/2-350, height-2000, width/2-350, height-1700)
      line(width/2-50, height-2000, width/2-50, height-1700)
    pop() 

    //top and bottom of drum
    push()
      strokeWeight(5)
      arc(width/2-200, height-2000, 300, 100, 180, 360)
      arc(width/2-200, height-2000, 300, 100, 360, 180)
      arc(width/2-200, height-1700, 300, 100, 360, 180)
    pop()



//Drum 3
    //body of drum
    push()
      noStroke()
      rect(width/2+350, height-1800, 300, 200)
    pop()

    //top of drum
    push()
      strokeWeight(5)
      ellipse(width/2+500, height-1800, 300, 100)
    pop()

    //bottom of drum
    push()
      strokeWeight(5)
      arc(width/2 +500, height-1600, 300, 100, 360, 180)
    pop()


//Chonk Drum
    push()
      strokeWeight(7)
      //outside ring
      ellipse(width/2 , height-1300, 800, 800)
      //inside ring
      ellipse(width/2, height-1300, 750, 750)
      textSize(300)
      text('R', width / 2, height-1200)
    pop()

//Right Symbol 
    push()
      strokeWeight(5)
      ellipse(width/2+1100, height-2200, 400, 150)
      arc(width/2+1100, height -2200, 35, 25, 180, 360)

    pop()
  

//Symbol Short
    push()
    strokeWeight(4)
      push()
      strokeWeight(10)
      line(width/2+1000, height-1800, width/2 +1000, height-1400)
      pop()
    fill(0)
    rect(width/2 + 990, height-1600, 20, 20)
    pop() 

    push()
    stroke(0)
    strokeWeight(5)
    ellipse(width/2 +1000, height-1800, 300, 100) //x,y,w,h
    arc(width/2 +1000, height- 1800, 35, 25, 180, 360)
    pop()


    //line to stand & drum 6
    push()
      
          push()
          strokeWeight(10)
          line(width/2 +1000, height-1600, width/2 +1200, height-1500)
          fill(0)
          rect(width/2 +1200, height-1500, 25, 25)
          pop()
          //line from right symbol 
          push()
          strokeWeight(10)
          line(width/2 +1100, height-2200, width/2+ 1400, height-2000)
          line(width/2 +1200, height-2150, width/2 +1200, height-1500)
          line(width/2 +1200, height-1500, width/2 +1200, height-1000)

          //Stand Legs Right Symbols
          line(width/2 +1200, height-1000, width/2 +800, height-500)
          pop()
          //move these lines upward so they dont stick out ^^^
    pop()

          //Bottom of floor
          push()
          strokeWeight(30)
          line(0, height-900, windowWidth, height-900 )

          pop()

}

function mouseClicked() {


  print(int(mouseX), int(mouseY))

      // test if we clicked in a drum 
    //if (mouseX > ____ && mouseX < ____ && mouseY > ____ && mouseY < ____) {
      //  playing=true } else { 
        //playing= false
      
        print('button clicked')
        //mySound.play();
  

      //Left Symbol
      if (mouseX > width/2-1300 && mouseX < width/2- 900 && mouseY < height-2050 && mouseY > height-2150) {
        print('Left Symbol')
        mySound1.play();
        //ellipse(width/2-1100, height-2100, 400, 100
      }

      //Drum 1 Sound
      if (mouseX > width/2-1000 && mouseX < width/2-400 && mouseY < 1465 && mouseY > 1060) {
        print('Drum 1')
        mySound2.play();
      }
        // rect(width/2-800, height-1900, 400, 300)

      //Drum 2 Sound //left bound && right bound
      if (mouseX > width/2-400 && mouseX < width/2-50 && mouseY > 965 && mouseY < 1365) {
        print('Drum 2')
        mySound3.play();
      }



      //Chonky Drum Sound
      if (mouseX > width/2 -400 && mouseX < width/2 +400  && mouseY > height/2-400 && mouseY < height/2+600 ) {
        print('Chonky Drum')
        mySound4.play();
      //ellipse(width/2 , height-1300, 800, 800)
      }


      //Drum 3 Sound
      if (mouseX > width/2 +50 && mouseX < width/2 +650 && mouseY > 1170 && mouseY < 1468 ) {
        print('Drum 3')
        mySound5.play();
     
      }
      //Small Symbol
      if (mouseX > width/2 +700 && mouseX < width/2 +1300 && mouseY > 1160 && mouseY < 1260) {
        print('Drum 4')
        mySound6.play();

        //ellipse(width/2 +1000, height-1800, 300, 100)
      }

      //Right Symbol
      if (mouseX > width/2 +700 && mouseX < width/2 +1300 && mouseY > 740 && mouseY < 885) {
        print('Drum 5')
        mySound7.play();

      }

      //ellipse(width/2+1100, height-2200, 400, 150)

}