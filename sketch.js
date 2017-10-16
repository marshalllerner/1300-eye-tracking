var table;

function preload() {
  //table is comma separated value "csv"
  //and has a header specifying the columns labels
  table = loadTable("PUT YOUR CSV NAME HERE", "csv", "header");
}

//create a global index, and initialize it to 1
index = 1;

function setup() {
  //create canvas and load background image
  //(make sure that your background image isn't
  //too big of a file, as its going to be 
  //rerendered a lot)

  //initialize variables and store the columns in
  //them, using the getColumn accessor

  //find the max and min epoch times
  //so that you can map them into usable
  //time intervals

  //initialize an list to store the time values
  //then map each epoch time value to a reasonable
  //range and add them to the list
  //Heres a map() example:
  //m = map(value, 0, 100, 0, width);

  //draw realtimes by calling anonymous function after timeouts - 
  //note that we have to redraw the entire background image and 
  //every line each time too because of the way processing
  //draw works :'(
  for () {
    setTimeout(function () {
      //redraw the background

      //draw every everyline again

      //call redraw()

      //increment the global index
    }, 
    //this is where the timeout goes :)
    );
  }
}
