//oscillators
	let osc
	let osc2
//envelopes
	let env
	let env2
//noises
	let noise
	let noise_env
	let noise2
	let noise_env2
//images
	let pio 

//other setup variables
let frequency = 50

let circle_radius = 0
let circle_x = 0
let circle_y = 0
															//make a voice element to instrument
//function preload()
//	pio = loadImage('pio.jpg')
//	image(pio, mouseX, mouseY)

function setup() {

    let canvas = createCanvas(windowWidth, windowHeight)
    canvas.parent("p5")

    
    // create new oscillator 
    osc = new p5.Oscillator()
    osc.setType("square") // "sine" "square" "sawtooth"
    osc.amp(0)  // set initial amplitude to 0


    // create new envelope
    env = new p5.Envelope()
    env.setADSR(0.2, 0.1, 0.1, 0.5)

	
    // create new noise maker
    noise = new p5.Noise()
    noise.setType("white") // "brown" "pink" "tyoe of noise"
    noise.amp(0)  // set initial amplitude to 0

    noise_env = new p5.Envelope()
    noise_env.setADSR(0.01, 0.1, 0, 0)

}


function draw() {

    noStroke()

    // map the red value of our background fill to the frequency variable
    fill( map(frequency, 50, 2000, 0, 255) , 0, 0)
    rect(0, 0, width, height)

    // make a circle
    fill(255, 255, 0)
    ellipse(circle_x, circle_y, circle_radius, circle_radius)
    if (circle_radius > 0 && mouseIsPressed == false) {
        circle_radius -= 5
    }

    // button that toggles with osc type
    push()
    noStroke()
    if (osc.getType() == 'sine') {
        fill(0, 255, 0)
    } else {
        fill(0, 0, 255)
    }
    rect(10, 10, 30, 30)
    pop()


    // 2nd osc Button
    push()
	noStroke()
	if (osc.getType() == 'sawtooth') {
		fill(255, 0, 0)
	}else {
		fill(123, 123, 3)
	}
	rect(10, 50, 30, 30)
	pop()



}
function windowResized() {    
    resizeCanvas(windowWidth, windowHeight)
}


function mousePressed() {

    // trigger the osc envelope
    osc.start()
    osc.amp(env)
    env.triggerAttack()

    // trigger the noise envelope
    noise.start()
    noise.amp(noise_env)
    noise_env.triggerAttack()

    // set the circle to the mouse position and increase its radius
    circle_radius = 100
    circle_x = mouseX
    circle_y = mouseY

    mouseDragged()
}

function mouseReleased() {

    // "release" the envelopes
    env.triggerRelease()
    noise_env.triggerRelease()
 

}

function mouseDragged() {

    // map the mouse position to a frequency variable
    frequency = map(mouseY, 0, height, 2000, 50)
    osc.freq(frequency) // set the osc to this frequency

    // track the mouse position with circle variables
    circle_x = mouseX
    circle_y = mouseY

    // map pan to mouseX
    let pan = map(mouseX, 0, width, -1, 1)
    osc.pan(pan)

}

function mouseClicked() {

    // test if we clicked in a button 
    if (mouseX > 10 && mouseX < 40 && mouseY > 10 && mouseY < 40) {
        print('button clicked')
        if (osc.getType() == 'square') {
            osc.setType('sine')
        } else {
            osc.setType('square')
        }
    }



    //test if 2nd button is clicked
    if (mouseX > 10 && mouseX < 40 && mouseY > 50 && mouseY < 80) {
    	print('button 2 clicked')
    	if (osc2.getType() == 'sawtooth') {
    		osc2.setType('sawtooth')
    	} else {
    		osc2.setType('sawtooth')
   		}
   	}

}

// add these to make it work for touch screens
function touchStarted() {
    mousePressed()   
    mouseClicked()
}

function touchEnded() {
    mouseReleased()   
}