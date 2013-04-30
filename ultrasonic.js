console.log('Ultrasonic sensing start ...');
var firmata = require('firmata');
var TP = 11; //Trig pin
var EP = 12; //Echo pin
var Led = 13; //Led pin
var board = new firmata.Board('/dev/ttyACM0', function(err){
        if(err){
                console.log(err);
                return;
                }
        console.log('Connect to Arduino');
        console.log(
                'Firmware: ' + board.firmware.name +
                '-' + board.firmware.version.major +
                '-' + board.firmware.version.minor
                 );
        board.pinMode(TP, board.MODES.OUTPUT);
        board.pinMode(EP, board.MODES.INPUT);
        board.pinMode(Led, board.MODES.OUTPUT);
        setInterval(
                console.log('Blink');
                board.digitalWrite(LedPin, board.HIGH);
                ,500)
});
