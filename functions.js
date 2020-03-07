function update(context, tiles){
    emptyGame(context);
    for(var i=0; i<4; i++){
        for(var j=0; j<4; j++){
            if(tiles[i][j].value !== 0){
                drawBox(context, tiles[i][j].x, tiles[i][j].y, tileSize, colorMaker(tiles[i][j].value));
                drawNumber(context, tiles[i][j].value, tiles[i][j].x, tiles[i][j].y);
            }
            var newX = 20+i*(tileSize+20);
            var newY = 20+j*(tileSize+20);
            tiles[i][j].x = newX;
            tiles[i][j].y = newY;
        }
    }
}

function start(context){
    keyFlag = 1;

    context.filter = 'blur(0px)';
    var a = document.getElementById("title");
    a.style.fontSize = "72px";
    a.innerHTML = "2048";

    //fill color full canvas
    drawBox(context, 0, 0, 500,"#BBADA0");

    //draw squares
    for(var i=0; i<4; i++){
        for(var j=0; j<4; j++){
            //create new positions
            var newX = 20+i*(tileSize+20);
            var newY = 20+j*(tileSize+20)
            
            //create new tile
            drawBox(context, newX, newY, tileSize, colorMaker(0));

            var tile = {
                size: tileSize,
                x: newX,
                y: newY,
                value: 0
            };
            tiles[i][j] = tile;
        }
    }

    createRandomNewTile(tiles, 4);
    createRandomNewTile(tiles, 2);
}

function emptyGame(context){
    drawBox(context, 0, 0, 500,"#B8ACA0");

    for(var i=0; i<4; i++){
        for(var j=0; j<4; j++){
            var newX = 20+i*(tileSize+20);
            var newY = 20+j*(tileSize+20);
            drawBox(context, newX, newY, tileSize, colorMaker(0));
        }
    }
}

function gameOver(context){
    var a = document.getElementById("title");
    a.style.fontSize = "60px";
    a.innerHTML = "GAME OVER";
    keyFlag = 0;
    context.filter = 'blur(4px)';
}

function createRandomNewTile(tiles, val){
    var x = Math.floor(Math.random() * Math.floor(4));
    var y = Math.floor(Math.random() * Math.floor(4));
    console.log(x+" "+y);
    if(tiles[x][y].value === 0){
        drawBox(context, tiles[x][y].x, tiles[x][y].y, tileSize, colorMaker(val));
        drawNumber(context, val, tiles[x][y].x, tiles[x][y].y);
        tiles[x][y].value = val;
    }
    else{
        createRandomNewTile(tiles, val);
    }
}

function drawBox(context, x, y, size, color){
    context.beginPath();
    context.rect(x, y, size, size);
    context.fillStyle = color;
    context.fill();
}

function drawNumber(context, number, x, y){
    context.font = "700 40px Helvetica";
    context.fillStyle = "#776D63";
    context.textAlign = "center";
    context.fillText(number.toString(), x+50, y+65);
}

function colorMaker(value){
    if(value==0)
        return "#CCC0B4";
    else if(value==2)
        return "#EEE4DA";
    else if(value==4)
        return "#ECE0CA";
    else if(value==8)
        return "#F2B179";
    else if(value==16)
        return "#EC8D53";
    else if(value==32)
        return "#F57C5F";
    else if(value==64)
        return "#E95839";
    else if(value==128)
        return "#EDCF72";
    else if(value==256)
        return "#EDCC61";
    else if(value==512)
        return "#EDC850";
    else if(value==1024)
        return "#EDC53F";
    else if(value==2048)
        return "#EDC22E";
}
