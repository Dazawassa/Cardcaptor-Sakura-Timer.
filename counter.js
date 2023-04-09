// Gets the tag labeled "Timer" and assigns it to "heading."
var heading = document.querySelector('timer');
// Sets "seconds" to 0.
var seconds = 0;
// Sets "counter" to "false".
var counter = false;

// Function to stop and start the timer.
function startTimer() {
    // Flips false to true and backwards.
    counter = !counter;
  }

// Resets the timer.
function timerReset() {
    // Sets "seconds" to 0.
    seconds = 0;
    // Sets "minutes" to 0.
    minutes = 0;
    // Resets displayed text.
    heading.innerText = '00:00';
  }
  
  // Sets intervals.
  setInterval(function() {
    // If "counter" is set to 0 then do nothing.
    if (counter == false) {
      // Do nothing
    // If it is not false do this.
    } else {
      // Increases seconds by 1 every second.
      seconds += 1;
      heading.innerText = formatTime(seconds);
    }
  }, 1000);
  
  // Function to format the time.
  function formatTime(seconds) {
    // "minutes" = "seconds" divided by 60.
    var minutes = Math.floor(seconds / 60);
    // "seconds" = "seconds" and the remainder.
    seconds = seconds % 60;
    // Return value.
    return (
      String(minutes).padStart(2, '0') + ':' + String(seconds).padStart(2, '0')
    );
  }
