let attemtps = 0;
let Score = 0;

function guess(userGuess) {
    //increassing attempts by 1
    attemtps++;

    document.getElementById("attemtps").innerHTML = attemtps;
    //Genertaing random number
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    //determining the correct answer
    const correctanswer = randomNumber % 2 == 0 ? "even" : "odd";
    //sfx function
    function sfx(iscorrect ) {
        let audio = iscorrect
         ? document.getElementById("correct") 
         : document.getElementById("wrong");
        audio.pause();
        audio.currentTime = 0;
        audio.play();

    }
    if (correctanswer == userGuess) {
        //update the display//
        document.getElementById("display").innerHTML =
            "correct! the number is" + randomNumber;
        //increasing the player score//
        Score++
        // updateing the player score faild//
        document.getElementById("Score").innerHTML = Score;
        //playing the sfx//
        sfx(true);
    }
    else {
        //update the display//
        document.getElementById("display").innerHTML =
            "wrong! the number is" + randomNumber;
        //playing the sfx//
        sfx(false);
    }
}
