
let canvas;

let canvasContext;



window.onload = function() {
    console.log('Hello World!'); // Hello World! to print in console
    canvas = document.getElementById('gameCanvas'); //grab our canvas from the html
    canvasContext = canvas.getContext('2d');
    canvasContext.fillStyle = 'black'; // fill the canvas with a background color
    
    // canvas.width is getting the 1600px and canvas.height is getting the 1200px which corresponds to the bottom right corner
    canvasContext.fillRect(0, 0, canvas.width, canvas.height); // 0, 0 is the x, y cordinate of the top left corner;

    canvasContext.fillStyle = 'red';
    canvasContext.fillRect(50, 500, 50, 200)

    canvasContext.fillStyle = 'blue';
    canvasContext.fillRect(1500, 500, 50, 200)
}











 



