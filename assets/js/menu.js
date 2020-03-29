
  
  //.drawText({text:"CLICK TO PLAY", x:screenWidth*0.5, y:screenHeight*0.5, fontSize:20, fontStyle:"bold", color:"#08F", textAlign:"center"});

/*var second = 0, minute = 0; hour = 0;
var timer = document.querySelector(".timer");
var interval;
function startTimer(){
    interval = setInterval(function(){
        timer.innerHTML = minute+"minutes "+second+"seconds";
        second++;
        if(second == 60){
            minute++;
            second=0;
        }
        if(minute == 60){
            hour++;
            minute = 0;
        }
    },1000);
}*/

/*function displayTime() { //creates timer in score panel
    const minutes = 0;
    const seconds = 0;
    const timer = document.querySelector('.timer');
    clock.innerHTML = time;
    if (seconds < 10) {
        clock.innerHTML = `${minutes}:0${seconds}`;
    } else {
        clock.innerHTML = `${minutes}:${seconds}`;
    }
}*/

/*function startClock() { //prints seconds in dev console
    clockId = setInterval(() => {
        time++;
        displayTime();
    }, 1000);
}*/

// Start timer on the first card click
/*function startTimer() {
  let clicks = 0;
  $(".card").on("click", function() {
    clicks += 1;
    if (clicks === 1) {
      var sec = 0;
      function time ( val ) { return val > 9 ? val : "0" + val; }
      timer = setInterval( function(){
        $(".seconds").html(time(++sec % 60));
        $(".minutes").html(time(parseInt(sec / 60, 10)));
      }, 1000);
    }
  })
 }*/

 // MARIOKART card game title stylen
 // win function + modal
 // loading needs to be fixed
 // add a song
 // add a username
 // timer should be set upon first click instead of counting down immediatelly
 // reset button now resets to the main screen but it should only refresh the first page
 // add music