var FONT = 32;
var ROWS = 10;
var COLS = 15;
var ACTORS = 10;
var map;
var screen;

var game = new Phaser.Game(COLS * FONT * 0.6, ROWS * FONT, Phaser.AUTO, null, {
    create: create
})

function create() {
        // init keyboard commands
    game.input.keyboard.addCallbacks(null, null, onKeyUp);
    initMap();

    screen = [];
        for (var y = 0; y < ROWS; y++) {
                var newRow = [];
                screen.push(newRow);
                for (var x = 0; x < COLS; x++)
                        newRow.push( initCell('', x, y) );
        }
	drawMap();
}

function initCell(chr, x, y) {
        // add a single cell in a given position to the ascii display
        var style = { font: FONT + "px monospace", fill:"#fff"};
        return game.add.text(FONT*0.6*x, FONT*y, chr, style);
}

function drawMap() {
    for (var y = 0; y < ROWS; y++)
        for (var x = 0; x < COLS; x++)
            screen[y][x].content = map[y][x];
}
 
function onKeyUp(event) {
        switch (event.keyCode) {
                case Keyboard.LEFT:
 					console.log("left!");
                case Keyboard.RIGHT:
 					console.log("right!");
                case Keyboard.UP:
 					console.log("up!");
                case Keyboard.DOWN:
 					console.log("down!");
        }
}

function initMap() {
        // create a new random map
        map = [];
        for (var y = 0; y < ROWS; y++) {
                var newRow = [];
                for (var x = 0; x < COLS; x++) {
                     if (Math.random() > 0.8)
                        newRow.push('#');
                    else
                        newRow.push('.');
                }
                map.push(newRow);
        }
}
