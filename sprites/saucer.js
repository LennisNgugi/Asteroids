
//create the constructor for the class saucer
function Saucer() {
    //initialisation code will go here

    //create private variables for the x and y coordinates
    var x = 200,
        y = 200,
        vx = 0,
        vy = 0,
        RedWindow = 1,
        GlobeYellow = 1;

    //create the draw function to give us the draw method
    //it accepts one parameter which is the context from the canvas it is drawn on
    Saucer.prototype.draw = function (context) {
        //save the state of the drawing context before we change it
        context.save();
        //set the coordinates of the drawing area of the new shape to x and y
        context.translate(x, y);
        //start the line (path)
        context.beginPath();
        context.fillStyle = "#d3d3d3";
        context.moveTo(30, 12);
        context.lineTo(50, 12);
        context.lineTo(50, 10);
        context.lineTo(50, 0);
        context.lineTo(40, -10);
        context.lineTo(23, -20);
        context.lineTo(-23, -20);
        context.lineTo(-40, -10);
        context.lineTo(-50, 0);
        context.lineTo(-50, 10);
        context.lineTo(-50, 12);
        context.lineTo(-30, 12);
        context.lineTo(-30, 20);
        context.lineTo(30, 20);
        //close the path
        context.closePath();
        context.fill();
        //go ahead and draw the line
        context.stroke();

        DrawWindows(context);
        DrawGlobes(context);

        //restore the state of the context to what it was before our drawing
        context.restore();
    }


    function DrawGlobes(context) {
        //var to store the colour of the globe
        var colour = "";
        //if the value of GlobeYellow is less than 50
        if (GlobeYellow < 50) {
            //set the colour to yellow
            colour = "#ffff00";
        }
        else {
            //otherwise set it to red
            colour = "#ff0000";
       }
        //middle landing globe
        Globe(context, -14, 12, colour);
       
        //increase the value of globe yellow (The larger the increment the faster the flashing effect)
        GlobeYellow += 1;
        //if globe yellow is more than 100 
        if (GlobeYellow > 100) {
            //set it back to 1
            GlobeYellow = 1;
        }
    }


    function DrawWindows(context) {
        //var for the offset of the window to be drawn
        var XOffset = -20,
            //var for loop counter to indicate which window we are drawing
            WindowNo = 1,
            //var to store the colour to use
            Colour = "";
        //loop through each window
        while (WindowNo != 6) {
            //if the red window is being drawn then set the colour to red
            if (WindowNo == RedWindow) {
                //set colour to red
                Colour = "#ff0000";
            }
            else {
                //set colour to white
                Colour = "#ffffff";
            }
            //draw the window
            Window(context, XOffset, -12, Colour);
            //point at the next window
            WindowNo++;
            //work out the position of the next window
            XOffset = XOffset + 10;
        }
        //chage the red window to the next one
        RedWindow = RedWindow + .25;
        //if the red window is 6 thats too many
        if (RedWindow == 6) {
            //set it back to 1
            RedWindow = 1;
        }
    }

    function Window(context, xposn, yposn, colour) {
        context.beginPath();
        context.fillStyle = colour;
        //x, y, radius, start_angle, end_angle, anti-clockwise
        context.arc(xposn, yposn, 3, 0, (Math.PI * 2));
        context.fill();
        context.stroke();
    }

    function Globe(context, xposn, yposn, colour) {
        //begin the path
        context.beginPath();
        //set the fill colour
        context.fillStyle = colour;
        //move to the position to start the globe
        context.moveTo(xposn, yposn);
        //draw the curve from that position to +30px passing toward x+13, y+20
        context.quadraticCurveTo(xposn + 13, yposn + 20, xposn + 30, yposn);
        //fill the globe
        context.fill();
        //draw the globe
        context.stroke();
    }

    Saucer.prototype.move = function ()
    {
        //change the x axis by the x velocity
        x += vx;
        //change the y axis by the y velocity
        y += vy;
    }

    Saucer.prototype.setVector = function(vector)
    {
        //set the vx value based on this vector
        vx = vector.VX;
        //set the vy value based on this vector
        vy = vector.VY;
    }

    //public method to set the vector of the saucer
    Saucer.prototype.accelerate = function (Acceleration) {
        //set vx
        vx += Acceleration.AX;
        //set vy
        vy += Acceleration.AY;
    }

    ////////function to handle keyboard events
    function KeyboardEventHandler(event) {
        //if the up arrow is pressed 
        if (event.keyCode == keyCode.UP) {
            ship.Y -= 5;
        }
    }

    //create a public property called Top
    Object.defineProperty(this, 'Top',
    {
        //getter
        get: function () {
            //return the value of y less height
            return y - 20;
        }
    }
    )

    //create a public property called Bottom
    Object.defineProperty(this, 'Bottom',
    {
        //getter
        get: function () {
            //return the value of y plus height
            return y + 20;
        }
    }
    )

    //create a public property called Left
    Object.defineProperty(this, 'Left',
    {
        //getter
        get: function () {
            //return the value of x less width
            return x - 50;
        }
    }
    )

    //create a public property called Right
    Object.defineProperty(this, 'Right',
    {
        //getter
        get: function () {
            //return the value of x plus width
            return x + 30;
        }
    }
    )
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

    //create a public property called Y (note caps!)
    Object.defineProperty(this, 'Y',
    {
        //getter
        get: function () {
            //return the value of y (lower case)
            return y;
        },
        //setter
        set: function (value) {
            //ste the value of y (lower case)
            y = value;
        }
    }
    )
}