var width = window.innerWidth;
var height = window.innerHeight;
score = 0;
// initiate scores for dislay and input
$('.scoreMessage').html("It's okay, you can try again next time. REMEMBER: <code>&lt;opening&gt;</code> and <code>&lt;/closing&gt;</code>");
// put score in results modal
$('.score').html(score);
$('#newScore').val(score);
    function loadImages(sources, callback) {
        var assetDir = '/assets/levels/1/';
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
            container: 'level1',
            width: 410,
            height: 430
        });
        var background = new Konva.Layer();
        var codeLayer = new Konva.Layer();
        var codeShapes = [];
        score = 0;

        // image positions
        var codes = {
            pstart: {
                x: 10,
                y: 350
            },
            pend: {
                x: 160,
                y: 350
            }
        };

        var outlines = {
            pstart_black: {
                x: 30,
                y: 49
            },
            pend_black: {
                x: 230,
                y: 100
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
                    snapTo(code, "pstart");
                    snapTo(code, "pend");

                    

                    // if in right place give 1 point 
                    if(isNearOutline(code, outlines[privKey + '_black'])) {
                        if(privKey == code.id()){
                            score += 1;

                            $('.score').html(score);
                            $('#newScore').val(score);
                            //change to match score
                            if(score >= 2) {
                                var text = '';
                                // put new score in modal
                                $('.scoreMessage').html("You've learnt you first Element! Keep this up and you'll beat those HexaBunnies back to their planet!");
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
        pstart: 'p-start.png',
        pstart_glow: 'p-start_glow.png',
        pstart_black: 'p-start_outline.png',
        pend: 'p-end.png',
        pend_glow: 'p-end_glow.png',
        pend_black: 'p-end_outline.png'
    };

    loadImages(sources, initStage);