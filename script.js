function setup() {
    createCanvas(400, 250);
    player = new Sprite(1,1,20,20)
    startX = 40;
    startY = 100;
    tileW = 5;
    tileH = 5;
    tileSize = 10;

    walkable = new Group()

    track = new walkable.Group()
    track.collider = "s"
    track.img = "track.png"
    track.tile = "b"
    track.w = tileSize
    track.h = tileSize

    grass = new walkable.Group()
    grass.collider = "s"
    grass.img = "grass.png"
    grass.tile = "g"
    grass.w = tileSize
    grass.h = tileSize
  }
  
  function draw() {
    background(220);
    //Camera.on()
    //Camera.x = car.x
    //Camera.zoom = z
    //Camera.off()
    if(kb.pressing("a")){
      if (kb.pressing("shift")){
      player.vel.x = -4
      }
      else{
     player.vel.x = -2
      }
    }
    else if (kb.pressing("d")){
     if (kb.pressing("shift")){
      player.vel.x = 4
      }
      else{
     player.vel.x = 2
    }
    }
    else if (kb.pressing("w")){
     player.vel.y = -3
    }
    else if (kb.pressing("s")){
        player.vel.y = 3
       }
    else{
     if (player.vel.x > 0){
      player.vel.x -= 0.1
     }
      else if(player.vel.x < 0){
       player.vel.x += 0.1 
      }
    }
  }

  function draw() {
    tilesGroup = new Tiles(
      [
        "gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg",
"gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg",
"gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg",
"gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg",
"gggggggggggggggggggbbbbbbbbbbbbbbbbbbbbbbbbbgggggggggggggggggggggggggggggggggggg",
"ggggggggggggggbbbbb........................bbbbbbggggggggggggggggggggggggggggggg",
"ggggggggggggbb..................................bbbbbggggggggggggggggggggggggggg",
"ggggggggggbbb.......................................bbbbbggggggggggggggggggggggg",
"gggggggggbb.............................................bbbbgggggggggggggggggggg",
"ggggggggbb..................................................bbbggggggggggggggggg",
"ggggggbbb.....................................................bbgggggggggggggggg",
"gggggbbb.......................................................bbggggggggggggggg",
"ggggbb..........................................................bbgggggggggggggg",
"ggggb.................bbbbbbbbbbbbbbbbbbbb.......................bbggggggggggggg",
"gggb................bbbggggggggggggggggggbbbbbb...................bbgggggggggggg",
"ggbb.............bbbggggggggggggggggggggggggggbbbb.................bbggggggggggg",
"ggb.............bbgggggggggggggggggggggggggggggggbbbb...............bbgggggggggg",
"gbb...........bbgggggggggggggggggggggggggggggggggggggbb..............bgggggggggg",
"gb...........bbgggggggggggggggggggggggggggggggggggggggbbb............bbggggggggg",
"gb..........bbggggggggggggggggggggggggggggggggggggggggggbb............bggggggggg",
"bb........bbbggggggggggggggggggggggggggggggggggggggggggggbbb..........bbgggggggg",
"b.........bbgggggggggggggggggggggggggggggggggggggggggggggggb...........bbggggggg",
"b..........bbgggggggggggggggggggggggggggggggggggggggggggggggb...........bggggggg",
"b...........bbbgggggggggggggggggggggggggggggggggggggggggggggbb...........bgggggg",
"bb............bbbggggggggggggggggggggggggggggggggggggggggggggbb..........bbggggg",
"gb..............bbbgggggggggggggggggggggggggggggggggggggggggggb...........bggggg",
"gb.................bbggggggggggggggggggggggggggggggggggggggggggb..........bbgggg",
"gbb.................bbbggggggggggggggggggggggggggggggggggggggggbb..........bgggg",
"ggb....................bbgggggggggggggggggggggggggggggggggggggggb..........bgggg",
"ggbb.....................bbgggggggggggggggggggggggggggggggggggggb..........bbggg",
"gggbb.....................bbbggggggggggggggggggggggggggggggggggggb..........bggg",
"ggggbb......................bbbggggggggggggggggggggggggggggggggggb..........bggg",
"gggggbb.......................bbbggggggggggggggggggggggggggggggggb...........bgg",
"ggggggbb........................bbbggggggggggggggggggggggggggggggb...........bgg",
"gggggggbbb........................bbbbbbbgggggggggggggggggggggggbb...........bbg",
"gggggggggbbb............................bbbbbbbggggggggggggggggbb.............bg",
"gggggggggggbb..................................bbbbbbbbbbbbbbbbb..............bg",
"gggggggggggggbbb..............................................................bg",
"gggggggggggggggbbb............................................................bg",
"ggggggggggggggggggbbbb........................................................bg",
"gggggggggggggggggggggbbbbbbb..................................................bg",
"ggggggggggggggggggggggggggggbbbbbb...........................................bgg",
"gggggggggggggggggggggggggggggggggbbbbbb.....................................bbgg",
"gggggggggggggggggggggggggggggggggggggggbbbbbb..............................bbggg",
"ggggggggggggggggggggggggggggggggggggggggggggbbbbbbb......................bbbgggg",
"gggggggggggggggggggggggggggggggggggggggggggggggggggbbbbbb...........bbbbbbgggggg",
"ggggggggggggggggggggggggggggggggggggggggggggggggggggggggbbbbbbbbbbbbbggggggggggg",
"gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg",
"gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg",
"gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg",
      ],
      startX,
      startY,
      tileW,
      tileH
    );
  }