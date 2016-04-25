var width = window.innerWidth;
var height = window.innerHeight;
score = 0;
$('.scoreMessage').html("You failed to summon the puppy army D: REMEMBER: <code>src</code> we need to get the image, and <code>alt</code> we describe the image.");
// put score in results modal
$('.score').html(score);
    function loadImages(sources, callback) {
        var assetDir = '/assets/levels/5/';
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
            container: 'level5',
            width: 410,
            height: 430
        });
        var background = new Konva.Layer();
        var codeLayer = new Konva.Layer();
        var codeShapes = [];
        score = 0;

        // image positions
        var codes = {
            src: {
                x: 10,
                y: 350
            },
            alt: {
                x: 220,
                y: 350
            }
        };

        var outlines = {
            src_black: {
                x: 145,
                y: 65
            },
            alt_black: {
                x: 118,
                y: 106
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
                    snapTo(code, "src");
                    snapTo(code, "alt");

                    

                    // if in right place give 1 point 
                    if(isNearOutline(code, outlines[privKey + '_black'])) {
                        if(privKey == code.id()){
                            score += 1;

                            $('.score').html(score);
                            //change to match score
                            if(score >= 2) {
                                var text = '';
                                // put new score in modal
                                $('.scoreMessage').html("Haha, that's right HexaBunnies! Fear the power of our puppy army <section class='section'><img class='responsive-img' src='/images/puppy_army.jpg' alt='cute puppy army'/></section>");
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
        src: 'src.png',
        src_glow: 'src_glow.png',
        src_black: 'src_outline.png',
        alt: 'alt.png',
        alt_glow: 'alt_glow.png',
        alt_black: 'alt_outline.png'
    };

    loadImages(sources, initStage);