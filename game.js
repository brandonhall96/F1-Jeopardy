
let canvas;

let canvasContext;

let ballX = 50;

let ballSpeedX = 5;



window.onload = function() {
    console.log('Hello World!'); // Hello World! to print in console
    canvas = document.getElementById('gameCanvas'); //grab our canvas from the html
    canvasContext = canvas.getContext('2d');
    
    
    
    let fps = 100; // this will be used to calculate our framerate
    setInterval (function() {         //were changing the speed the computer calculates and displays our changes
        moveEverything();
        drawAll();
        
 }, 1000/fps );
  
}
   




function drawAll() {


    console.log(ballX) // printing the location of the ball
     // fill the canvas with a background color
    
    // canvas.width is getting the 1600px and canvas.height is getting the 1200px which corresponds to the bottom right corner
    colorRect(0, 0, canvas.width, canvas.height, 'black'); // 0, 0 is the x, y cordinate of the top left corner;

    
    
    
    
    
    // this colors paddle 1 red
    colorRect(50, 500, 50, 200, 'red')

   // this colors paddle2
    colorRect(1500, 500, 50, 200, 'blue') // 1500px from the left, 500 px from the top

    //this colors the ball
    // colorRect(ballX, 200, 20, 20, 'white');
    canvasContext.fillStyle = 'white';
    canvasContext.beginPath();
    canvasContext.arc(ballX, 200, 20, 20, math.PI*2, true);
    canvasContext.fill();
}


function colorRect(leftX, topY, width, height, drawColor) {
    
    canvasContext.fillStyle = drawColor;
    canvasContext.fillRect(leftX, topY, width, height);



}








function moveEverything() {
    
    ballX = ballX + ballSpeedX; // an equal takes the valiue on the right side and copys it to the left
    
    if(ballX > canvas.width) { //when the ball reaches the max width we change its direction into the neg direction
        ballSpeedX = -ballSpeedX; //we kept its same speed as it bounced back. THis is the right side
    }

    if (ballX < 0 ) {
        ballSpeedX = -ballSpeedX
    }

}












 



