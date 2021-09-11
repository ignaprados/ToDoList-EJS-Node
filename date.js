//jshint esversion: 6

  //get the system date 

module.exports.getDate = getDate;

function getDate() {
    
    let today = new Date();
  
    // set display options for date - long is characters for weekday like Thursday, numeric is date in #
    let options = {
        weekday: "long",
        day: "numeric",
        month: "numeric",
        year: "numeric"
    };
    
    // set variable day to use the options to display the day
    return today.toLocaleDateString("en-US", options);
}