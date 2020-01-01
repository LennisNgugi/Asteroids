
//create the constructor for the class square
function Square() {
    //initialisation code will go here

    //create private variables for the x and y coordinates
    var x = 0,
        y = 0

    //create a public property called X (note caps!)
    Object.defineProperty(this, 'X',
    {
        //getter
        get: function () {
            //return the value of x (lower case)
            return x;
        },
        //setter
        set: function (value) {
            //ste the value of x (lower case)
            x = value;
        }
    }
    )

    //create the draw function to give us the draw method
    //it accepts one parameter which is the context from the canvas it is drawn on
    Square.prototype.draw = function (context) {
        //start the line (path)
        context.beginPath();
        //set the start coordinates
        context.moveTo(x, y);
        //draw the top line
        context.lineTo(x + 29, y);
        //draw the right side
        context.lineTo(x + 29, y + 29);
        //draw the bottom line
        context.lineTo(x, y + 29);
        //close the path
        context.closePath();
        //fill the shape
        context.fill();
        //go ahead and draw the line
        context.stroke();
    }

    //create the public move method by adding it to the classes prototype
    Square.prototype.move = function () {
        //change the value of the x axis for the shape
        x++;
    }
}