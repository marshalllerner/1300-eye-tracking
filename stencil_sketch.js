var table;

function preload() {
  //Replace temp.csv with your csv filename
  table = loadTable("temp.csv", "csv", "header");
}

function setup() {
  //Create a canvas and load background image
  
  //You only care about the EpochTime, the X and the Y values
  //Make sure that you map the epoch time values into a suitable
  //range - if you leave them as is, it'll be about 45 years
  //before you see anything on the screem ;)

  //Try making a list of (x,y,time) triples - this should help you
  //organize the setTimeout() calls (and your thoughts!)
  

  //Because of the way processing draws, you'll have to
  //call setTimeout with an anonymous function for each
  //x,y and time value - luckily, we've provided you a
  //little template in which to structure your code!

  //Make sure you redraw every line each time, as well as the
  //background image

  //Hint: you might need a global index variable
  
  for (var i = ?; i < xytime.length; i++) {
    setTimeout(function () {
      //Put your line draw code here!
    },
      //This is where your timeout goes :)
    );
  }
}