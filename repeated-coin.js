// Use a for loop to simulate flipping a coin 100 times.
var randomInt = require('random-int');
for (var count = 1; count <= 100; count++) {
  let coin = randomInt(1, 100)
  if (coin % 2 == 0) {
    let times = 0;
    times++;
    console.log(times);
  } else {
    let timesTails = 1;
    timesTails++;
    console.log(timesTails);
  }
}

// Think carefully about how you could use Math.random() or random-int to do this.
// (There are several possible answers.)
// Keep track of how many of the flips are heads.
// Print out the total number of flips and the total number of heads at the end.
// How often is it exactly 50/100? Fun fact: this should only happen about 8% of the time.