'use strict'

function first() {
    //do something
    setTimeout(function() { //sets timer for 500 miliseconds
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second(); // second function works earlier than first 
//it means that some function can work later than others regarding the numbers of calling

function learnJS(lang, callback) {
    console.log(`I learn: ${lang}`); // only after first func is done
    callback();                      // second starts
}

learnJS('JavaScript', function() {  // anonymus func that we give
    console.log(`I did this class`); // posledovatelnost funct 
})

function done() {
    console.log('Done')
}

learnJS('JavaScript', done); // not anonymus func

