var width = window.innerWidth;
var height = window.innerHeight;
score = 0;
// change to display lose messsage for the level
$('.scoreMessage').html("There's just too many HexaBunnies! REMEMBER: 1,2,3 is an ordered list, without is just an unordered list.");
// put score in results modal
$('.score').html(score);
    function loadImages(sources, callback) {
        // change to match which level it is
        var assetDir = '/assets/levels/3/';
        var images = {};
        var loadedImages = 0;
        var numImages = 0;
        for(var src in sources) {
            numImages++;
        }
        for(var src in sources) {
            images[src] = new Image();
            images[src].onload = function() {
                if(++loadedImages >= numImages) {
                    callback(images);
                }
            };
            images[src].src = assetDir + sources[src];
        }
    }
    function isNearOutline(code, outline) {
        var a = code;
        var o = outline;
        var ax = a.getX();
        var ay = a.getY();

        if(ax > o.x - 20 && ax < o.x + 20 && ay > o.y - 20 && ay < o.y + 20) {
            return true;
        }
        else {
            return false;
        }
    }
    function drawBackground(background, backImg, text) {
        var context = background.getContext();
        context.drawImage(backImg, 0, 0);
        context.setAttr('font', '20pt Calibri');
        context.setAttr('textAlign', 'center');
        context.setAttr('fillStyle', 'black');
        context.fillText(text, background.getStage().getWidth() / 2, 300);
    }

    function initStage(images) {
        var stage = new Konva.Stage({
            container: 'level3',
            width: 422,
            height: 530
        });
        var background = new Konva.Layer();
        var codeLayer = new Konva.Layer();
        var codeShapes = [];
        score = 0;

        // image positions
        var codes = {
            gingerOL: {
                x: 0,
                y: 400
            },
            mintOL: {
                x: 140,
                y: 400
            },
            twilightOL: {
                x: 0,
                y: 450
            },
            gingerUL: {
                x: 140,
                y: 450
            },
            mintUL: {
                x: 280,
                y: 400
            },
            twilightUL: {
                x: 280,
                y: 450
            }
        };

        var outlines = {
            gingerOL_black: {
                x: 105,
                y: 65
            },
            mintOL_black: {
                x: 105,
                y: 99
            },
            twilightOL_black: {
                x: 105,
                y: 133
            },
            gingerUL_black: {
                x: 105,
                y: 245
            },
            mintUL_black: {
                x: 105,
                y: 280
            },
            twilightUL_black: {
                x: 105,
                y: 314
            }
        };

        // create draggable animals
        for(var key in codes) {
            // anonymous function to induce scope
            (function() {
                var privKey = key;
                var snip = codes[key];

                var code = new Konva.Image({
                    image: images[key],
                    x: snip.x,
                    y: snip.y,
                    draggable: true,
                    id: key
                });
                console.log("snip:"+ JSON.stringify(snip));
                function snapTo(code, outlineSnap) {
                    var outline = outlines[outlineSnap + '_black'];
                    if(isNearOutline(code, outline)) {
                        code.position({
                            x : outline.x,
                            y : outline.y
                        });
                        
                        console.log("privKey:"+ privKey);
                        console.log("Key:"+ key);
                        console.log(code.id());
                        codeLayer.draw();
                        var testKey = privKey+ "_black";
                        

                        /*if(code.id() == outlineSnap) {
                            setTimeout(function() {
                                code.draggable(false);
                            }, 50);
                        }*/
                    }
                }


                code.on('dragstart', function() {
                    this.moveToTop();
                    codeLayer.draw();
                });
                console.log("key before:"+ key);
                /*
                       * check if code is in the right spot and
                       * snap into place if it is
                       */
                code.on('dragend', function() {
                    snapTo(code, "gingerOL");
                    snapTo(code, "mintOL");
                    snapTo(code, "twilightOL");
                    snapTo(code, "gingerUL");
                    snapTo(code, "mintUL");
                    snapTo(code, "twilightUL");

                    

                    // if in right place give 1 point 
                    if(isNearOutline(code, outlines[privKey + '_black'])) {
                        if(privKey == code.id()){
                            score += 1;

                            $('.score').html(score);
                            //change to match score
                            if(score >= 6) {
                                var text = '';
                                // put new score in modal
                                $('.scoreMessage').html("1 HexaBunny, 2 HexaBunnies, 3 HexaBunnies... you can take 'em all on!");
                                $('.score').html(score);
                                drawBackground(background, images.background, text);
                            }
                            console.log(score);
                        }
                    }

                    // not in right place give take away 
                    if(!isNearOutline(code, outlines[privKey + '_black'])) {                     
                        codeLayer.draw();
                        if(score == 0){
                            console.log("no score")
                        }
                        else {
                           score -= 1; 
                        }
                        console.log(score);
                    }

                });
                // make code glow on mouseover
                code.on('mouseover', function() {
                    code.image(images[privKey + '_glow']);
                    codeLayer.draw();
                    document.body.style.cursor = 'pointer';
                });
                // return code on mouseout
                code.on('mouseout', function() {
                    code.image(images[privKey]);
                    codeLayer.draw();
                    document.body.style.cursor = 'default';
                });

                code.on('dragmove', function() {
                    document.body.style.cursor = 'pointer';
                });

                codeLayer.add(code);
                codeShapes.push(code);
            })();
        }

        // create animal outlines
        for(var key in outlines) {
            // anonymous function to induce scope
            (function() {
                var imageObj = images[key];
                var out = outlines[key];

                var outline = new Konva.Image({
                    image: imageObj,
                    x: out.x,
                    y: out.y
                });

                codeLayer.add(outline);
            })();
        }

        stage.add(background);
        stage.add(codeLayer);
        drawBackground(background, images.background, " ");
    }

    var sources = {
        background: 'background.png',
        gingerOL: 'ginger-ol.png',
        gingerOL_glow: 'ginger-ol_glow.png',
        gingerOL_black: 'ginger-ol_outline.png',
        mintOL: 'mint-ol.png',
        mintOL_glow: 'mint-ol_glow.png',
        mintOL_black: 'mint-ol_outline.png',
        twilightOL: 'twilight-ol.png',
        twilightOL_glow: 'twilight-ol_glow.png',
        twilightOL_black: 'twilight-ol_outline.png',
        gingerUL: 'ginger-ul.png',
        gingerUL_glow: 'ginger-ul_glow.png',
        gingerUL_black: 'ginger-ul_outline.png',
        mintUL: 'mint-ul.png',
        mintUL_glow: 'mint-ul_glow.png',
        mintUL_black: 'mint-ul_outline.png',
        twilightUL: 'twilight-ul.png',
        twilightUL_glow: 'twilight-ul_glow.png',
        twilightUL_black: 'twilight-ul_outline.png'
    };

    loadImages(sources, initStage);