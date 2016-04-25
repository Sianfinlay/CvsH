var width = window.innerWidth;
var height = window.innerHeight;
score = 0;
// initiate scores for dislay and input
$('.scoreMessage').html("Your Attacks weren't powerful enough. REMEMBER: Bold words are <code>&lt;strong&gt;</code> and slanted words are <code>&lt;em&gt;</code>");
// put score in results modal
$('.score').html(score);
$('#newScore').val(score);
    function loadImages(sources, callback) {
        // change to match which level it is
        var assetDir = '/assets/levels/2/';
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

        if(ax > o.x - 50 && ax < o.x + 50 && ay > o.y - 50 && ay < o.y + 50) {
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
            container: 'level2',
            width: 410,
            height: 430
        });
        var background = new Konva.Layer();
        var codeLayer = new Konva.Layer();
        var codeShapes = [];
        score = 0;

        // image positions
        var codes = {
            strongstart: {
                x: 10,
                y: 350
            },
            strongend: {
                x: 160,
                y: 350
            },
            emstart: {
                x: 10,
                y: 400
            },
            emend: {
                x: 160,
                y: 400
            }
        };

        var outlines = {
            strongstart_black: {
                x: 166,
                y: 95
            },
            strongend_black: {
                x: 219,
                y: 145
            },
            emstart_black: {
                x: 28,
                y: 195
            },
            emend_black: {
                x: 145,
                y: 245
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
                    snapTo(code, "strongstart");
                    snapTo(code, "strongend");
                    snapTo(code, "emstart");
                    snapTo(code, "emend");

                    

                    // if in right place give 1 point 
                    if(isNearOutline(code, outlines[privKey + '_black'])) {
                        if(privKey == code.id()){
                            score += 1;

                            $('.score').html(score);
                            //change to match score
                            if(score >= 4) {
                                var text = '';
                                // put new score in modal
                                $('.scoreMessage').html("<strong><em>Congrats, you are a real threat to those mean HexaBunnies now!</em></strong>");
                                $('.score').html(score);
                                $('#newScore').val(score);
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
                           $('#newScore').val(score);
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
        strongstart: 'strong-start.png',
        strongstart_glow: 'strong-start_glow.png',
        strongstart_black: 'strong-start_outline.png',
        strongend: 'strong-end.png',
        strongend_glow: 'strong-end_glow.png',
        strongend_black: 'strong-end_outline.png',
        emstart: 'em-start.png',
        emstart_glow: 'em-start_glow.png',
        emstart_black: 'em-start_outline.png',
        emend: 'em-end.png',
        emend_glow: 'em-end_glow.png',
        emend_black: 'em-end_outline.png'
    };

    loadImages(sources, initStage);