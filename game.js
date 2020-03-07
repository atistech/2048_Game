var gameArea = document.getElementById("gameArea");
var context = gameArea.getContext("2d");
var tileSize = 100;
var tiles = [
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null]
];

var keyFlag = 0;


start(context, tiles);
//gameOver(context);

document.getElementById("new").addEventListener("click", function () {
    start(context, tiles);
});

document.onkeydown = function (event) {
    if (keyFlag == 1) {
        //Left
        if (event.keyCode == 37) {
            swipeLeft();
        }
        //Up
        else if (event.keyCode == 38) {
            swipeUp();
        }
        //Right
        else if (event.keyCode == 39) {
            swipeRight();
        }
        //Dowm
        else if (event.keyCode == 40) {
            swipeDown();
        }
    }
};



function swipeRight() {
    for (var a = 0; a < 16; a++) {
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 4; j++) {
                var current = tiles[i][j];
                if (current.value != 0) {
                    if (i < 3) {
                        var next = tiles[i + 1][j];
                        if (next.value === 0) {
                            next.value = current.value;
                            current.value = 0;
                        } else if (next.value === current.value) {
                            next.value += current.value;
                        }
                    }
                }
            }
        }
    }
    update(context, tiles);
    createRandomNewTile(tiles, 2);
}


function swipeLeft() {
    for (var a = 0; a < 16; a++) {
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 4; j++) {
                var current = tiles[i][j];
                if (current.value === 2048)
                    break;
                if (current.value != 0) {
                    if (i > 0) {
                        var before = tiles[i - 1][j];
                        if (before.value === 0) {
                            before.value = current.value;
                            current.value = 0;
                        } else if (before.value === current.value) {
                            before.value += current.value;
                        }
                    }
                }
            }
        }
    }
    update(context, tiles);
    createRandomNewTile(tiles, 2);
}

function swipeUp() {
    for (var a = 0; a < 16; a++) {
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 4; j++) {
                var current = tiles[i][j];
                if (current.value != 0) {
                    if (j > 0) {
                        var upper = tiles[i][j - 1];
                        if (upper.value === 0) {
                            upper.value = current.value;
                            current.value = 0;
                        } else if (upper.value === current.value) {
                            upper.value += current.value;
                        }
                    }
                }
            }
        }
    }
    update(context, tiles);
    createRandomNewTile(tiles, 2);
}

function swipeDown() {
    for (var a = 0; a < 16; a++) {
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 4; j++) {
                var current = tiles[i][j];
                if (current.value != 0) {
                    if (j < 3) {
                        var downer = tiles[i][j + 1];
                        if (downer.value === 0) {
                            downer.value = current.value;
                            current.value = 0;
                        } else if (downer.value === current.value) {
                            downer.value += current.value;
                        }
                    }
                }
            }
        }
    }
    update(context, tiles);
    createRandomNewTile(tiles, 2);
}