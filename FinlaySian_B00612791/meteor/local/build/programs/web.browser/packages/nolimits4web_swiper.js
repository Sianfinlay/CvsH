(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/nolimits4web_swiper/dist/js/swiper.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/**                                                                                                                    // 1
 * Swiper 3.3.1                                                                                                        // 2
 * Most modern mobile touch slider and framework with hardware accelerated transitions                                 // 3
 *                                                                                                                     // 4
 * http://www.idangero.us/swiper/                                                                                      // 5
 *                                                                                                                     // 6
 * Copyright 2016, Vladimir Kharlampidi                                                                                // 7
 * The iDangero.us                                                                                                     // 8
 * http://www.idangero.us/                                                                                             // 9
 *                                                                                                                     // 10
 * Licensed under MIT                                                                                                  // 11
 *                                                                                                                     // 12
 * Released on: February 7, 2016                                                                                       // 13
 */                                                                                                                    // 14
(function () {                                                                                                         // 15
    'use strict';                                                                                                      // 16
    var $;                                                                                                             // 17
    /*===========================                                                                                      // 18
    Swiper                                                                                                             // 19
    ===========================*/                                                                                      // 20
    var Swiper = function (container, params) {                                                                        // 21
        if (!(this instanceof Swiper)) return new Swiper(container, params);                                           // 22
                                                                                                                       // 23
        var defaults = {                                                                                               // 24
            direction: 'horizontal',                                                                                   // 25
            touchEventsTarget: 'container',                                                                            // 26
            initialSlide: 0,                                                                                           // 27
            speed: 300,                                                                                                // 28
            // autoplay                                                                                                // 29
            autoplay: false,                                                                                           // 30
            autoplayDisableOnInteraction: true,                                                                        // 31
            autoplayStopOnLast: false,                                                                                 // 32
            // To support iOS's swipe-to-go-back gesture (when being used in-app, with UIWebView).                     // 33
            iOSEdgeSwipeDetection: false,                                                                              // 34
            iOSEdgeSwipeThreshold: 20,                                                                                 // 35
            // Free mode                                                                                               // 36
            freeMode: false,                                                                                           // 37
            freeModeMomentum: true,                                                                                    // 38
            freeModeMomentumRatio: 1,                                                                                  // 39
            freeModeMomentumBounce: true,                                                                              // 40
            freeModeMomentumBounceRatio: 1,                                                                            // 41
            freeModeSticky: false,                                                                                     // 42
            freeModeMinimumVelocity: 0.02,                                                                             // 43
            // Autoheight                                                                                              // 44
            autoHeight: false,                                                                                         // 45
            // Set wrapper width                                                                                       // 46
            setWrapperSize: false,                                                                                     // 47
            // Virtual Translate                                                                                       // 48
            virtualTranslate: false,                                                                                   // 49
            // Effects                                                                                                 // 50
            effect: 'slide', // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'                                   // 51
            coverflow: {                                                                                               // 52
                rotate: 50,                                                                                            // 53
                stretch: 0,                                                                                            // 54
                depth: 100,                                                                                            // 55
                modifier: 1,                                                                                           // 56
                slideShadows : true                                                                                    // 57
            },                                                                                                         // 58
            flip: {                                                                                                    // 59
                slideShadows : true,                                                                                   // 60
                limitRotation: true                                                                                    // 61
            },                                                                                                         // 62
            cube: {                                                                                                    // 63
                slideShadows: true,                                                                                    // 64
                shadow: true,                                                                                          // 65
                shadowOffset: 20,                                                                                      // 66
                shadowScale: 0.94                                                                                      // 67
            },                                                                                                         // 68
            fade: {                                                                                                    // 69
                crossFade: false                                                                                       // 70
            },                                                                                                         // 71
            // Parallax                                                                                                // 72
            parallax: false,                                                                                           // 73
            // Scrollbar                                                                                               // 74
            scrollbar: null,                                                                                           // 75
            scrollbarHide: true,                                                                                       // 76
            scrollbarDraggable: false,                                                                                 // 77
            scrollbarSnapOnRelease: false,                                                                             // 78
            // Keyboard Mousewheel                                                                                     // 79
            keyboardControl: false,                                                                                    // 80
            mousewheelControl: false,                                                                                  // 81
            mousewheelReleaseOnEdges: false,                                                                           // 82
            mousewheelInvert: false,                                                                                   // 83
            mousewheelForceToAxis: false,                                                                              // 84
            mousewheelSensitivity: 1,                                                                                  // 85
            // Hash Navigation                                                                                         // 86
            hashnav: false,                                                                                            // 87
            // Breakpoints                                                                                             // 88
            breakpoints: undefined,                                                                                    // 89
            // Slides grid                                                                                             // 90
            spaceBetween: 0,                                                                                           // 91
            slidesPerView: 1,                                                                                          // 92
            slidesPerColumn: 1,                                                                                        // 93
            slidesPerColumnFill: 'column',                                                                             // 94
            slidesPerGroup: 1,                                                                                         // 95
            centeredSlides: false,                                                                                     // 96
            slidesOffsetBefore: 0, // in px                                                                            // 97
            slidesOffsetAfter: 0, // in px                                                                             // 98
            // Round length                                                                                            // 99
            roundLengths: false,                                                                                       // 100
            // Touches                                                                                                 // 101
            touchRatio: 1,                                                                                             // 102
            touchAngle: 45,                                                                                            // 103
            simulateTouch: true,                                                                                       // 104
            shortSwipes: true,                                                                                         // 105
            longSwipes: true,                                                                                          // 106
            longSwipesRatio: 0.5,                                                                                      // 107
            longSwipesMs: 300,                                                                                         // 108
            followFinger: true,                                                                                        // 109
            onlyExternal: false,                                                                                       // 110
            threshold: 0,                                                                                              // 111
            touchMoveStopPropagation: true,                                                                            // 112
            // Unique Navigation Elements                                                                              // 113
            uniqueNavElements: true,                                                                                   // 114
            // Pagination                                                                                              // 115
            pagination: null,                                                                                          // 116
            paginationElement: 'span',                                                                                 // 117
            paginationClickable: false,                                                                                // 118
            paginationHide: false,                                                                                     // 119
            paginationBulletRender: null,                                                                              // 120
            paginationProgressRender: null,                                                                            // 121
            paginationFractionRender: null,                                                                            // 122
            paginationCustomRender: null,                                                                              // 123
            paginationType: 'bullets', // 'bullets' or 'progress' or 'fraction' or 'custom'                            // 124
            // Resistance                                                                                              // 125
            resistance: true,                                                                                          // 126
            resistanceRatio: 0.85,                                                                                     // 127
            // Next/prev buttons                                                                                       // 128
            nextButton: null,                                                                                          // 129
            prevButton: null,                                                                                          // 130
            // Progress                                                                                                // 131
            watchSlidesProgress: false,                                                                                // 132
            watchSlidesVisibility: false,                                                                              // 133
            // Cursor                                                                                                  // 134
            grabCursor: false,                                                                                         // 135
            // Clicks                                                                                                  // 136
            preventClicks: true,                                                                                       // 137
            preventClicksPropagation: true,                                                                            // 138
            slideToClickedSlide: false,                                                                                // 139
            // Lazy Loading                                                                                            // 140
            lazyLoading: false,                                                                                        // 141
            lazyLoadingInPrevNext: false,                                                                              // 142
            lazyLoadingInPrevNextAmount: 1,                                                                            // 143
            lazyLoadingOnTransitionStart: false,                                                                       // 144
            // Images                                                                                                  // 145
            preloadImages: true,                                                                                       // 146
            updateOnImagesReady: true,                                                                                 // 147
            // loop                                                                                                    // 148
            loop: false,                                                                                               // 149
            loopAdditionalSlides: 0,                                                                                   // 150
            loopedSlides: null,                                                                                        // 151
            // Control                                                                                                 // 152
            control: undefined,                                                                                        // 153
            controlInverse: false,                                                                                     // 154
            controlBy: 'slide', //or 'container'                                                                       // 155
            // Swiping/no swiping                                                                                      // 156
            allowSwipeToPrev: true,                                                                                    // 157
            allowSwipeToNext: true,                                                                                    // 158
            swipeHandler: null, //'.swipe-handler',                                                                    // 159
            noSwiping: true,                                                                                           // 160
            noSwipingClass: 'swiper-no-swiping',                                                                       // 161
            // NS                                                                                                      // 162
            slideClass: 'swiper-slide',                                                                                // 163
            slideActiveClass: 'swiper-slide-active',                                                                   // 164
            slideVisibleClass: 'swiper-slide-visible',                                                                 // 165
            slideDuplicateClass: 'swiper-slide-duplicate',                                                             // 166
            slideNextClass: 'swiper-slide-next',                                                                       // 167
            slidePrevClass: 'swiper-slide-prev',                                                                       // 168
            wrapperClass: 'swiper-wrapper',                                                                            // 169
            bulletClass: 'swiper-pagination-bullet',                                                                   // 170
            bulletActiveClass: 'swiper-pagination-bullet-active',                                                      // 171
            buttonDisabledClass: 'swiper-button-disabled',                                                             // 172
            paginationCurrentClass: 'swiper-pagination-current',                                                       // 173
            paginationTotalClass: 'swiper-pagination-total',                                                           // 174
            paginationHiddenClass: 'swiper-pagination-hidden',                                                         // 175
            paginationProgressbarClass: 'swiper-pagination-progressbar',                                               // 176
            // Observer                                                                                                // 177
            observer: false,                                                                                           // 178
            observeParents: false,                                                                                     // 179
            // Accessibility                                                                                           // 180
            a11y: false,                                                                                               // 181
            prevSlideMessage: 'Previous slide',                                                                        // 182
            nextSlideMessage: 'Next slide',                                                                            // 183
            firstSlideMessage: 'This is the first slide',                                                              // 184
            lastSlideMessage: 'This is the last slide',                                                                // 185
            paginationBulletMessage: 'Go to slide {{index}}',                                                          // 186
            // Callbacks                                                                                               // 187
            runCallbacksOnInit: true                                                                                   // 188
            /*                                                                                                         // 189
            Callbacks:                                                                                                 // 190
            onInit: function (swiper)                                                                                  // 191
            onDestroy: function (swiper)                                                                               // 192
            onClick: function (swiper, e)                                                                              // 193
            onTap: function (swiper, e)                                                                                // 194
            onDoubleTap: function (swiper, e)                                                                          // 195
            onSliderMove: function (swiper, e)                                                                         // 196
            onSlideChangeStart: function (swiper)                                                                      // 197
            onSlideChangeEnd: function (swiper)                                                                        // 198
            onTransitionStart: function (swiper)                                                                       // 199
            onTransitionEnd: function (swiper)                                                                         // 200
            onImagesReady: function (swiper)                                                                           // 201
            onProgress: function (swiper, progress)                                                                    // 202
            onTouchStart: function (swiper, e)                                                                         // 203
            onTouchMove: function (swiper, e)                                                                          // 204
            onTouchMoveOpposite: function (swiper, e)                                                                  // 205
            onTouchEnd: function (swiper, e)                                                                           // 206
            onReachBeginning: function (swiper)                                                                        // 207
            onReachEnd: function (swiper)                                                                              // 208
            onSetTransition: function (swiper, duration)                                                               // 209
            onSetTranslate: function (swiper, translate)                                                               // 210
            onAutoplayStart: function (swiper)                                                                         // 211
            onAutoplayStop: function (swiper),                                                                         // 212
            onLazyImageLoad: function (swiper, slide, image)                                                           // 213
            onLazyImageReady: function (swiper, slide, image)                                                          // 214
            */                                                                                                         // 215
                                                                                                                       // 216
        };                                                                                                             // 217
        var initialVirtualTranslate = params && params.virtualTranslate;                                               // 218
                                                                                                                       // 219
        params = params || {};                                                                                         // 220
        var originalParams = {};                                                                                       // 221
        for (var param in params) {                                                                                    // 222
            if (typeof params[param] === 'object' && params[param] !== null && !(params[param].nodeType || params[param] === window || params[param] === document || (typeof Dom7 !== 'undefined' && params[param] instanceof Dom7) || (typeof jQuery !== 'undefined' && params[param] instanceof jQuery))) {
                originalParams[param] = {};                                                                            // 224
                for (var deepParam in params[param]) {                                                                 // 225
                    originalParams[param][deepParam] = params[param][deepParam];                                       // 226
                }                                                                                                      // 227
            }                                                                                                          // 228
            else {                                                                                                     // 229
                originalParams[param] = params[param];                                                                 // 230
            }                                                                                                          // 231
        }                                                                                                              // 232
        for (var def in defaults) {                                                                                    // 233
            if (typeof params[def] === 'undefined') {                                                                  // 234
                params[def] = defaults[def];                                                                           // 235
            }                                                                                                          // 236
            else if (typeof params[def] === 'object') {                                                                // 237
                for (var deepDef in defaults[def]) {                                                                   // 238
                    if (typeof params[def][deepDef] === 'undefined') {                                                 // 239
                        params[def][deepDef] = defaults[def][deepDef];                                                 // 240
                    }                                                                                                  // 241
                }                                                                                                      // 242
            }                                                                                                          // 243
        }                                                                                                              // 244
                                                                                                                       // 245
        // Swiper                                                                                                      // 246
        var s = this;                                                                                                  // 247
                                                                                                                       // 248
        // Params                                                                                                      // 249
        s.params = params;                                                                                             // 250
        s.originalParams = originalParams;                                                                             // 251
                                                                                                                       // 252
        // Classname                                                                                                   // 253
        s.classNames = [];                                                                                             // 254
        /*=========================                                                                                    // 255
          Dom Library and plugins                                                                                      // 256
          ===========================*/                                                                                // 257
        if (typeof $ !== 'undefined' && typeof Dom7 !== 'undefined'){                                                  // 258
            $ = Dom7;                                                                                                  // 259
        }                                                                                                              // 260
        if (typeof $ === 'undefined') {                                                                                // 261
            if (typeof Dom7 === 'undefined') {                                                                         // 262
                $ = window.Dom7 || window.Zepto || window.jQuery;                                                      // 263
            }                                                                                                          // 264
            else {                                                                                                     // 265
                $ = Dom7;                                                                                              // 266
            }                                                                                                          // 267
            if (!$) return;                                                                                            // 268
        }                                                                                                              // 269
        // Export it to Swiper instance                                                                                // 270
        s.$ = $;                                                                                                       // 271
                                                                                                                       // 272
        /*=========================                                                                                    // 273
          Breakpoints                                                                                                  // 274
          ===========================*/                                                                                // 275
        s.currentBreakpoint = undefined;                                                                               // 276
        s.getActiveBreakpoint = function () {                                                                          // 277
            //Get breakpoint for window width                                                                          // 278
            if (!s.params.breakpoints) return false;                                                                   // 279
            var breakpoint = false;                                                                                    // 280
            var points = [], point;                                                                                    // 281
            for ( point in s.params.breakpoints ) {                                                                    // 282
                if (s.params.breakpoints.hasOwnProperty(point)) {                                                      // 283
                    points.push(point);                                                                                // 284
                }                                                                                                      // 285
            }                                                                                                          // 286
            points.sort(function (a, b) {                                                                              // 287
                return parseInt(a, 10) > parseInt(b, 10);                                                              // 288
            });                                                                                                        // 289
            for (var i = 0; i < points.length; i++) {                                                                  // 290
                point = points[i];                                                                                     // 291
                if (point >= window.innerWidth && !breakpoint) {                                                       // 292
                    breakpoint = point;                                                                                // 293
                }                                                                                                      // 294
            }                                                                                                          // 295
            return breakpoint || 'max';                                                                                // 296
        };                                                                                                             // 297
        s.setBreakpoint = function () {                                                                                // 298
            //Set breakpoint for window width and update parameters                                                    // 299
            var breakpoint = s.getActiveBreakpoint();                                                                  // 300
            if (breakpoint && s.currentBreakpoint !== breakpoint) {                                                    // 301
                var breakPointsParams = breakpoint in s.params.breakpoints ? s.params.breakpoints[breakpoint] : s.originalParams;
                var needsReLoop = s.params.loop && (breakPointsParams.slidesPerView !== s.params.slidesPerView);       // 303
                for ( var param in breakPointsParams ) {                                                               // 304
                    s.params[param] = breakPointsParams[param];                                                        // 305
                }                                                                                                      // 306
                s.currentBreakpoint = breakpoint;                                                                      // 307
                if(needsReLoop && s.destroyLoop) {                                                                     // 308
                    s.reLoop(true);                                                                                    // 309
                }                                                                                                      // 310
            }                                                                                                          // 311
        };                                                                                                             // 312
        // Set breakpoint on load                                                                                      // 313
        if (s.params.breakpoints) {                                                                                    // 314
            s.setBreakpoint();                                                                                         // 315
        }                                                                                                              // 316
                                                                                                                       // 317
        /*=========================                                                                                    // 318
          Preparation - Define Container, Wrapper and Pagination                                                       // 319
          ===========================*/                                                                                // 320
        s.container = $(container);                                                                                    // 321
        if (s.container.length === 0) return;                                                                          // 322
        if (s.container.length > 1) {                                                                                  // 323
            var swipers = [];                                                                                          // 324
            s.container.each(function () {                                                                             // 325
                var container = this;                                                                                  // 326
                swipers.push(new Swiper(this, params));                                                                // 327
            });                                                                                                        // 328
            return swipers;                                                                                            // 329
        }                                                                                                              // 330
                                                                                                                       // 331
        // Save instance in container HTML Element and in data                                                         // 332
        s.container[0].swiper = s;                                                                                     // 333
        s.container.data('swiper', s);                                                                                 // 334
                                                                                                                       // 335
        s.classNames.push('swiper-container-' + s.params.direction);                                                   // 336
                                                                                                                       // 337
        if (s.params.freeMode) {                                                                                       // 338
            s.classNames.push('swiper-container-free-mode');                                                           // 339
        }                                                                                                              // 340
        if (!s.support.flexbox) {                                                                                      // 341
            s.classNames.push('swiper-container-no-flexbox');                                                          // 342
            s.params.slidesPerColumn = 1;                                                                              // 343
        }                                                                                                              // 344
        if (s.params.autoHeight) {                                                                                     // 345
            s.classNames.push('swiper-container-autoheight');                                                          // 346
        }                                                                                                              // 347
        // Enable slides progress when required                                                                        // 348
        if (s.params.parallax || s.params.watchSlidesVisibility) {                                                     // 349
            s.params.watchSlidesProgress = true;                                                                       // 350
        }                                                                                                              // 351
        // Coverflow / 3D                                                                                              // 352
        if (['cube', 'coverflow', 'flip'].indexOf(s.params.effect) >= 0) {                                             // 353
            if (s.support.transforms3d) {                                                                              // 354
                s.params.watchSlidesProgress = true;                                                                   // 355
                s.classNames.push('swiper-container-3d');                                                              // 356
            }                                                                                                          // 357
            else {                                                                                                     // 358
                s.params.effect = 'slide';                                                                             // 359
            }                                                                                                          // 360
        }                                                                                                              // 361
        if (s.params.effect !== 'slide') {                                                                             // 362
            s.classNames.push('swiper-container-' + s.params.effect);                                                  // 363
        }                                                                                                              // 364
        if (s.params.effect === 'cube') {                                                                              // 365
            s.params.resistanceRatio = 0;                                                                              // 366
            s.params.slidesPerView = 1;                                                                                // 367
            s.params.slidesPerColumn = 1;                                                                              // 368
            s.params.slidesPerGroup = 1;                                                                               // 369
            s.params.centeredSlides = false;                                                                           // 370
            s.params.spaceBetween = 0;                                                                                 // 371
            s.params.virtualTranslate = true;                                                                          // 372
            s.params.setWrapperSize = false;                                                                           // 373
        }                                                                                                              // 374
        if (s.params.effect === 'fade' || s.params.effect === 'flip') {                                                // 375
            s.params.slidesPerView = 1;                                                                                // 376
            s.params.slidesPerColumn = 1;                                                                              // 377
            s.params.slidesPerGroup = 1;                                                                               // 378
            s.params.watchSlidesProgress = true;                                                                       // 379
            s.params.spaceBetween = 0;                                                                                 // 380
            s.params.setWrapperSize = false;                                                                           // 381
            if (typeof initialVirtualTranslate === 'undefined') {                                                      // 382
                s.params.virtualTranslate = true;                                                                      // 383
            }                                                                                                          // 384
        }                                                                                                              // 385
                                                                                                                       // 386
        // Grab Cursor                                                                                                 // 387
        if (s.params.grabCursor && s.support.touch) {                                                                  // 388
            s.params.grabCursor = false;                                                                               // 389
        }                                                                                                              // 390
                                                                                                                       // 391
        // Wrapper                                                                                                     // 392
        s.wrapper = s.container.children('.' + s.params.wrapperClass);                                                 // 393
                                                                                                                       // 394
        // Pagination                                                                                                  // 395
        if (s.params.pagination) {                                                                                     // 396
            s.paginationContainer = $(s.params.pagination);                                                            // 397
            if (s.params.uniqueNavElements && typeof s.params.pagination === 'string' && s.paginationContainer.length > 1 && s.container.find(s.params.pagination).length === 1) {
                s.paginationContainer = s.container.find(s.params.pagination);                                         // 399
            }                                                                                                          // 400
                                                                                                                       // 401
            if (s.params.paginationType === 'bullets' && s.params.paginationClickable) {                               // 402
                s.paginationContainer.addClass('swiper-pagination-clickable');                                         // 403
            }                                                                                                          // 404
            else {                                                                                                     // 405
                s.params.paginationClickable = false;                                                                  // 406
            }                                                                                                          // 407
            s.paginationContainer.addClass('swiper-pagination-' + s.params.paginationType);                            // 408
        }                                                                                                              // 409
        // Next/Prev Buttons                                                                                           // 410
        if (s.params.nextButton || s.params.prevButton) {                                                              // 411
            if (s.params.nextButton) {                                                                                 // 412
                s.nextButton = $(s.params.nextButton);                                                                 // 413
                if (s.params.uniqueNavElements && typeof s.params.nextButton === 'string' && s.nextButton.length > 1 && s.container.find(s.params.nextButton).length === 1) {
                    s.nextButton = s.container.find(s.params.nextButton);                                              // 415
                }                                                                                                      // 416
            }                                                                                                          // 417
            if (s.params.prevButton) {                                                                                 // 418
                s.prevButton = $(s.params.prevButton);                                                                 // 419
                if (s.params.uniqueNavElements && typeof s.params.prevButton === 'string' && s.prevButton.length > 1 && s.container.find(s.params.prevButton).length === 1) {
                    s.prevButton = s.container.find(s.params.prevButton);                                              // 421
                }                                                                                                      // 422
            }                                                                                                          // 423
        }                                                                                                              // 424
                                                                                                                       // 425
        // Is Horizontal                                                                                               // 426
        s.isHorizontal = function () {                                                                                 // 427
            return s.params.direction === 'horizontal';                                                                // 428
        };                                                                                                             // 429
        // s.isH = isH;                                                                                                // 430
                                                                                                                       // 431
        // RTL                                                                                                         // 432
        s.rtl = s.isHorizontal() && (s.container[0].dir.toLowerCase() === 'rtl' || s.container.css('direction') === 'rtl');
        if (s.rtl) {                                                                                                   // 434
            s.classNames.push('swiper-container-rtl');                                                                 // 435
        }                                                                                                              // 436
                                                                                                                       // 437
        // Wrong RTL support                                                                                           // 438
        if (s.rtl) {                                                                                                   // 439
            s.wrongRTL = s.wrapper.css('display') === '-webkit-box';                                                   // 440
        }                                                                                                              // 441
                                                                                                                       // 442
        // Columns                                                                                                     // 443
        if (s.params.slidesPerColumn > 1) {                                                                            // 444
            s.classNames.push('swiper-container-multirow');                                                            // 445
        }                                                                                                              // 446
                                                                                                                       // 447
        // Check for Android                                                                                           // 448
        if (s.device.android) {                                                                                        // 449
            s.classNames.push('swiper-container-android');                                                             // 450
        }                                                                                                              // 451
                                                                                                                       // 452
        // Add classes                                                                                                 // 453
        s.container.addClass(s.classNames.join(' '));                                                                  // 454
                                                                                                                       // 455
        // Translate                                                                                                   // 456
        s.translate = 0;                                                                                               // 457
                                                                                                                       // 458
        // Progress                                                                                                    // 459
        s.progress = 0;                                                                                                // 460
                                                                                                                       // 461
        // Velocity                                                                                                    // 462
        s.velocity = 0;                                                                                                // 463
                                                                                                                       // 464
        /*=========================                                                                                    // 465
          Locks, unlocks                                                                                               // 466
          ===========================*/                                                                                // 467
        s.lockSwipeToNext = function () {                                                                              // 468
            s.params.allowSwipeToNext = false;                                                                         // 469
        };                                                                                                             // 470
        s.lockSwipeToPrev = function () {                                                                              // 471
            s.params.allowSwipeToPrev = false;                                                                         // 472
        };                                                                                                             // 473
        s.lockSwipes = function () {                                                                                   // 474
            s.params.allowSwipeToNext = s.params.allowSwipeToPrev = false;                                             // 475
        };                                                                                                             // 476
        s.unlockSwipeToNext = function () {                                                                            // 477
            s.params.allowSwipeToNext = true;                                                                          // 478
        };                                                                                                             // 479
        s.unlockSwipeToPrev = function () {                                                                            // 480
            s.params.allowSwipeToPrev = true;                                                                          // 481
        };                                                                                                             // 482
        s.unlockSwipes = function () {                                                                                 // 483
            s.params.allowSwipeToNext = s.params.allowSwipeToPrev = true;                                              // 484
        };                                                                                                             // 485
                                                                                                                       // 486
        /*=========================                                                                                    // 487
          Round helper                                                                                                 // 488
          ===========================*/                                                                                // 489
        function round(a) {                                                                                            // 490
            return Math.floor(a);                                                                                      // 491
        }                                                                                                              // 492
        /*=========================                                                                                    // 493
          Set grab cursor                                                                                              // 494
          ===========================*/                                                                                // 495
        if (s.params.grabCursor) {                                                                                     // 496
            s.container[0].style.cursor = 'move';                                                                      // 497
            s.container[0].style.cursor = '-webkit-grab';                                                              // 498
            s.container[0].style.cursor = '-moz-grab';                                                                 // 499
            s.container[0].style.cursor = 'grab';                                                                      // 500
        }                                                                                                              // 501
        /*=========================                                                                                    // 502
          Update on Images Ready                                                                                       // 503
          ===========================*/                                                                                // 504
        s.imagesToLoad = [];                                                                                           // 505
        s.imagesLoaded = 0;                                                                                            // 506
                                                                                                                       // 507
        s.loadImage = function (imgElement, src, srcset, checkForComplete, callback) {                                 // 508
            var image;                                                                                                 // 509
            function onReady () {                                                                                      // 510
                if (callback) callback();                                                                              // 511
            }                                                                                                          // 512
            if (!imgElement.complete || !checkForComplete) {                                                           // 513
                if (src) {                                                                                             // 514
                    image = new window.Image();                                                                        // 515
                    image.onload = onReady;                                                                            // 516
                    image.onerror = onReady;                                                                           // 517
                    if (srcset) {                                                                                      // 518
                        image.srcset = srcset;                                                                         // 519
                    }                                                                                                  // 520
                    if (src) {                                                                                         // 521
                        image.src = src;                                                                               // 522
                    }                                                                                                  // 523
                } else {                                                                                               // 524
                    onReady();                                                                                         // 525
                }                                                                                                      // 526
                                                                                                                       // 527
            } else {//image already loaded...                                                                          // 528
                onReady();                                                                                             // 529
            }                                                                                                          // 530
        };                                                                                                             // 531
        s.preloadImages = function () {                                                                                // 532
            s.imagesToLoad = s.container.find('img');                                                                  // 533
            function _onReady() {                                                                                      // 534
                if (typeof s === 'undefined' || s === null) return;                                                    // 535
                if (s.imagesLoaded !== undefined) s.imagesLoaded++;                                                    // 536
                if (s.imagesLoaded === s.imagesToLoad.length) {                                                        // 537
                    if (s.params.updateOnImagesReady) s.update();                                                      // 538
                    s.emit('onImagesReady', s);                                                                        // 539
                }                                                                                                      // 540
            }                                                                                                          // 541
            for (var i = 0; i < s.imagesToLoad.length; i++) {                                                          // 542
                s.loadImage(s.imagesToLoad[i], (s.imagesToLoad[i].currentSrc || s.imagesToLoad[i].getAttribute('src')), (s.imagesToLoad[i].srcset || s.imagesToLoad[i].getAttribute('srcset')), true, _onReady);
            }                                                                                                          // 544
        };                                                                                                             // 545
                                                                                                                       // 546
        /*=========================                                                                                    // 547
          Autoplay                                                                                                     // 548
          ===========================*/                                                                                // 549
        s.autoplayTimeoutId = undefined;                                                                               // 550
        s.autoplaying = false;                                                                                         // 551
        s.autoplayPaused = false;                                                                                      // 552
        function autoplay() {                                                                                          // 553
            s.autoplayTimeoutId = setTimeout(function () {                                                             // 554
                if (s.params.loop) {                                                                                   // 555
                    s.fixLoop();                                                                                       // 556
                    s._slideNext();                                                                                    // 557
                    s.emit('onAutoplay', s);                                                                           // 558
                }                                                                                                      // 559
                else {                                                                                                 // 560
                    if (!s.isEnd) {                                                                                    // 561
                        s._slideNext();                                                                                // 562
                        s.emit('onAutoplay', s);                                                                       // 563
                    }                                                                                                  // 564
                    else {                                                                                             // 565
                        if (!params.autoplayStopOnLast) {                                                              // 566
                            s._slideTo(0);                                                                             // 567
                            s.emit('onAutoplay', s);                                                                   // 568
                        }                                                                                              // 569
                        else {                                                                                         // 570
                            s.stopAutoplay();                                                                          // 571
                        }                                                                                              // 572
                    }                                                                                                  // 573
                }                                                                                                      // 574
            }, s.params.autoplay);                                                                                     // 575
        }                                                                                                              // 576
        s.startAutoplay = function () {                                                                                // 577
            if (typeof s.autoplayTimeoutId !== 'undefined') return false;                                              // 578
            if (!s.params.autoplay) return false;                                                                      // 579
            if (s.autoplaying) return false;                                                                           // 580
            s.autoplaying = true;                                                                                      // 581
            s.emit('onAutoplayStart', s);                                                                              // 582
            autoplay();                                                                                                // 583
        };                                                                                                             // 584
        s.stopAutoplay = function (internal) {                                                                         // 585
            if (!s.autoplayTimeoutId) return;                                                                          // 586
            if (s.autoplayTimeoutId) clearTimeout(s.autoplayTimeoutId);                                                // 587
            s.autoplaying = false;                                                                                     // 588
            s.autoplayTimeoutId = undefined;                                                                           // 589
            s.emit('onAutoplayStop', s);                                                                               // 590
        };                                                                                                             // 591
        s.pauseAutoplay = function (speed) {                                                                           // 592
            if (s.autoplayPaused) return;                                                                              // 593
            if (s.autoplayTimeoutId) clearTimeout(s.autoplayTimeoutId);                                                // 594
            s.autoplayPaused = true;                                                                                   // 595
            if (speed === 0) {                                                                                         // 596
                s.autoplayPaused = false;                                                                              // 597
                autoplay();                                                                                            // 598
            }                                                                                                          // 599
            else {                                                                                                     // 600
                s.wrapper.transitionEnd(function () {                                                                  // 601
                    if (!s) return;                                                                                    // 602
                    s.autoplayPaused = false;                                                                          // 603
                    if (!s.autoplaying) {                                                                              // 604
                        s.stopAutoplay();                                                                              // 605
                    }                                                                                                  // 606
                    else {                                                                                             // 607
                        autoplay();                                                                                    // 608
                    }                                                                                                  // 609
                });                                                                                                    // 610
            }                                                                                                          // 611
        };                                                                                                             // 612
        /*=========================                                                                                    // 613
          Min/Max Translate                                                                                            // 614
          ===========================*/                                                                                // 615
        s.minTranslate = function () {                                                                                 // 616
            return (-s.snapGrid[0]);                                                                                   // 617
        };                                                                                                             // 618
        s.maxTranslate = function () {                                                                                 // 619
            return (-s.snapGrid[s.snapGrid.length - 1]);                                                               // 620
        };                                                                                                             // 621
        /*=========================                                                                                    // 622
          Slider/slides sizes                                                                                          // 623
          ===========================*/                                                                                // 624
        s.updateAutoHeight = function () {                                                                             // 625
            // Update Height                                                                                           // 626
            var slide = s.slides.eq(s.activeIndex)[0];                                                                 // 627
            if (typeof slide !== 'undefined') {                                                                        // 628
                var newHeight = slide.offsetHeight;                                                                    // 629
                if (newHeight) s.wrapper.css('height', newHeight + 'px');                                              // 630
            }                                                                                                          // 631
        };                                                                                                             // 632
        s.updateContainerSize = function () {                                                                          // 633
            var width, height;                                                                                         // 634
            if (typeof s.params.width !== 'undefined') {                                                               // 635
                width = s.params.width;                                                                                // 636
            }                                                                                                          // 637
            else {                                                                                                     // 638
                width = s.container[0].clientWidth;                                                                    // 639
            }                                                                                                          // 640
            if (typeof s.params.height !== 'undefined') {                                                              // 641
                height = s.params.height;                                                                              // 642
            }                                                                                                          // 643
            else {                                                                                                     // 644
                height = s.container[0].clientHeight;                                                                  // 645
            }                                                                                                          // 646
            if (width === 0 && s.isHorizontal() || height === 0 && !s.isHorizontal()) {                                // 647
                return;                                                                                                // 648
            }                                                                                                          // 649
                                                                                                                       // 650
            //Subtract paddings                                                                                        // 651
            width = width - parseInt(s.container.css('padding-left'), 10) - parseInt(s.container.css('padding-right'), 10);
            height = height - parseInt(s.container.css('padding-top'), 10) - parseInt(s.container.css('padding-bottom'), 10);
                                                                                                                       // 654
            // Store values                                                                                            // 655
            s.width = width;                                                                                           // 656
            s.height = height;                                                                                         // 657
            s.size = s.isHorizontal() ? s.width : s.height;                                                            // 658
        };                                                                                                             // 659
                                                                                                                       // 660
        s.updateSlidesSize = function () {                                                                             // 661
            s.slides = s.wrapper.children('.' + s.params.slideClass);                                                  // 662
            s.snapGrid = [];                                                                                           // 663
            s.slidesGrid = [];                                                                                         // 664
            s.slidesSizesGrid = [];                                                                                    // 665
                                                                                                                       // 666
            var spaceBetween = s.params.spaceBetween,                                                                  // 667
                slidePosition = -s.params.slidesOffsetBefore,                                                          // 668
                i,                                                                                                     // 669
                prevSlideSize = 0,                                                                                     // 670
                index = 0;                                                                                             // 671
            if (typeof s.size === 'undefined') return;                                                                 // 672
            if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {                                  // 673
                spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * s.size;                               // 674
            }                                                                                                          // 675
                                                                                                                       // 676
            s.virtualSize = -spaceBetween;                                                                             // 677
            // reset margins                                                                                           // 678
            if (s.rtl) s.slides.css({marginLeft: '', marginTop: ''});                                                  // 679
            else s.slides.css({marginRight: '', marginBottom: ''});                                                    // 680
                                                                                                                       // 681
            var slidesNumberEvenToRows;                                                                                // 682
            if (s.params.slidesPerColumn > 1) {                                                                        // 683
                if (Math.floor(s.slides.length / s.params.slidesPerColumn) === s.slides.length / s.params.slidesPerColumn) {
                    slidesNumberEvenToRows = s.slides.length;                                                          // 685
                }                                                                                                      // 686
                else {                                                                                                 // 687
                    slidesNumberEvenToRows = Math.ceil(s.slides.length / s.params.slidesPerColumn) * s.params.slidesPerColumn;
                }                                                                                                      // 689
                if (s.params.slidesPerView !== 'auto' && s.params.slidesPerColumnFill === 'row') {                     // 690
                    slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, s.params.slidesPerView * s.params.slidesPerColumn);
                }                                                                                                      // 692
            }                                                                                                          // 693
                                                                                                                       // 694
            // Calc slides                                                                                             // 695
            var slideSize;                                                                                             // 696
            var slidesPerColumn = s.params.slidesPerColumn;                                                            // 697
            var slidesPerRow = slidesNumberEvenToRows / slidesPerColumn;                                               // 698
            var numFullColumns = slidesPerRow - (s.params.slidesPerColumn * slidesPerRow - s.slides.length);           // 699
            for (i = 0; i < s.slides.length; i++) {                                                                    // 700
                slideSize = 0;                                                                                         // 701
                var slide = s.slides.eq(i);                                                                            // 702
                if (s.params.slidesPerColumn > 1) {                                                                    // 703
                    // Set slides order                                                                                // 704
                    var newSlideOrderIndex;                                                                            // 705
                    var column, row;                                                                                   // 706
                    if (s.params.slidesPerColumnFill === 'column') {                                                   // 707
                        column = Math.floor(i / slidesPerColumn);                                                      // 708
                        row = i - column * slidesPerColumn;                                                            // 709
                        if (column > numFullColumns || (column === numFullColumns && row === slidesPerColumn-1)) {     // 710
                            if (++row >= slidesPerColumn) {                                                            // 711
                                row = 0;                                                                               // 712
                                column++;                                                                              // 713
                            }                                                                                          // 714
                        }                                                                                              // 715
                        newSlideOrderIndex = column + row * slidesNumberEvenToRows / slidesPerColumn;                  // 716
                        slide                                                                                          // 717
                            .css({                                                                                     // 718
                                '-webkit-box-ordinal-group': newSlideOrderIndex,                                       // 719
                                '-moz-box-ordinal-group': newSlideOrderIndex,                                          // 720
                                '-ms-flex-order': newSlideOrderIndex,                                                  // 721
                                '-webkit-order': newSlideOrderIndex,                                                   // 722
                                'order': newSlideOrderIndex                                                            // 723
                            });                                                                                        // 724
                    }                                                                                                  // 725
                    else {                                                                                             // 726
                        row = Math.floor(i / slidesPerRow);                                                            // 727
                        column = i - row * slidesPerRow;                                                               // 728
                    }                                                                                                  // 729
                    slide                                                                                              // 730
                        .css({                                                                                         // 731
                            'margin-top': (row !== 0 && s.params.spaceBetween) && (s.params.spaceBetween + 'px')       // 732
                        })                                                                                             // 733
                        .attr('data-swiper-column', column)                                                            // 734
                        .attr('data-swiper-row', row);                                                                 // 735
                                                                                                                       // 736
                }                                                                                                      // 737
                if (slide.css('display') === 'none') continue;                                                         // 738
                if (s.params.slidesPerView === 'auto') {                                                               // 739
                    slideSize = s.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true);                   // 740
                    if (s.params.roundLengths) slideSize = round(slideSize);                                           // 741
                }                                                                                                      // 742
                else {                                                                                                 // 743
                    slideSize = (s.size - (s.params.slidesPerView - 1) * spaceBetween) / s.params.slidesPerView;       // 744
                    if (s.params.roundLengths) slideSize = round(slideSize);                                           // 745
                                                                                                                       // 746
                    if (s.isHorizontal()) {                                                                            // 747
                        s.slides[i].style.width = slideSize + 'px';                                                    // 748
                    }                                                                                                  // 749
                    else {                                                                                             // 750
                        s.slides[i].style.height = slideSize + 'px';                                                   // 751
                    }                                                                                                  // 752
                }                                                                                                      // 753
                s.slides[i].swiperSlideSize = slideSize;                                                               // 754
                s.slidesSizesGrid.push(slideSize);                                                                     // 755
                                                                                                                       // 756
                                                                                                                       // 757
                if (s.params.centeredSlides) {                                                                         // 758
                    slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;                  // 759
                    if (i === 0) slidePosition = slidePosition - s.size / 2 - spaceBetween;                            // 760
                    if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;                                         // 761
                    if ((index) % s.params.slidesPerGroup === 0) s.snapGrid.push(slidePosition);                       // 762
                    s.slidesGrid.push(slidePosition);                                                                  // 763
                }                                                                                                      // 764
                else {                                                                                                 // 765
                    if ((index) % s.params.slidesPerGroup === 0) s.snapGrid.push(slidePosition);                       // 766
                    s.slidesGrid.push(slidePosition);                                                                  // 767
                    slidePosition = slidePosition + slideSize + spaceBetween;                                          // 768
                }                                                                                                      // 769
                                                                                                                       // 770
                s.virtualSize += slideSize + spaceBetween;                                                             // 771
                                                                                                                       // 772
                prevSlideSize = slideSize;                                                                             // 773
                                                                                                                       // 774
                index ++;                                                                                              // 775
            }                                                                                                          // 776
            s.virtualSize = Math.max(s.virtualSize, s.size) + s.params.slidesOffsetAfter;                              // 777
            var newSlidesGrid;                                                                                         // 778
                                                                                                                       // 779
            if (                                                                                                       // 780
                s.rtl && s.wrongRTL && (s.params.effect === 'slide' || s.params.effect === 'coverflow')) {             // 781
                s.wrapper.css({width: s.virtualSize + s.params.spaceBetween + 'px'});                                  // 782
            }                                                                                                          // 783
            if (!s.support.flexbox || s.params.setWrapperSize) {                                                       // 784
                if (s.isHorizontal()) s.wrapper.css({width: s.virtualSize + s.params.spaceBetween + 'px'});            // 785
                else s.wrapper.css({height: s.virtualSize + s.params.spaceBetween + 'px'});                            // 786
            }                                                                                                          // 787
                                                                                                                       // 788
            if (s.params.slidesPerColumn > 1) {                                                                        // 789
                s.virtualSize = (slideSize + s.params.spaceBetween) * slidesNumberEvenToRows;                          // 790
                s.virtualSize = Math.ceil(s.virtualSize / s.params.slidesPerColumn) - s.params.spaceBetween;           // 791
                s.wrapper.css({width: s.virtualSize + s.params.spaceBetween + 'px'});                                  // 792
                if (s.params.centeredSlides) {                                                                         // 793
                    newSlidesGrid = [];                                                                                // 794
                    for (i = 0; i < s.snapGrid.length; i++) {                                                          // 795
                        if (s.snapGrid[i] < s.virtualSize + s.snapGrid[0]) newSlidesGrid.push(s.snapGrid[i]);          // 796
                    }                                                                                                  // 797
                    s.snapGrid = newSlidesGrid;                                                                        // 798
                }                                                                                                      // 799
            }                                                                                                          // 800
                                                                                                                       // 801
            // Remove last grid elements depending on width                                                            // 802
            if (!s.params.centeredSlides) {                                                                            // 803
                newSlidesGrid = [];                                                                                    // 804
                for (i = 0; i < s.snapGrid.length; i++) {                                                              // 805
                    if (s.snapGrid[i] <= s.virtualSize - s.size) {                                                     // 806
                        newSlidesGrid.push(s.snapGrid[i]);                                                             // 807
                    }                                                                                                  // 808
                }                                                                                                      // 809
                s.snapGrid = newSlidesGrid;                                                                            // 810
                if (Math.floor(s.virtualSize - s.size) - Math.floor(s.snapGrid[s.snapGrid.length - 1]) > 1) {          // 811
                    s.snapGrid.push(s.virtualSize - s.size);                                                           // 812
                }                                                                                                      // 813
            }                                                                                                          // 814
            if (s.snapGrid.length === 0) s.snapGrid = [0];                                                             // 815
                                                                                                                       // 816
            if (s.params.spaceBetween !== 0) {                                                                         // 817
                if (s.isHorizontal()) {                                                                                // 818
                    if (s.rtl) s.slides.css({marginLeft: spaceBetween + 'px'});                                        // 819
                    else s.slides.css({marginRight: spaceBetween + 'px'});                                             // 820
                }                                                                                                      // 821
                else s.slides.css({marginBottom: spaceBetween + 'px'});                                                // 822
            }                                                                                                          // 823
            if (s.params.watchSlidesProgress) {                                                                        // 824
                s.updateSlidesOffset();                                                                                // 825
            }                                                                                                          // 826
        };                                                                                                             // 827
        s.updateSlidesOffset = function () {                                                                           // 828
            for (var i = 0; i < s.slides.length; i++) {                                                                // 829
                s.slides[i].swiperSlideOffset = s.isHorizontal() ? s.slides[i].offsetLeft : s.slides[i].offsetTop;     // 830
            }                                                                                                          // 831
        };                                                                                                             // 832
                                                                                                                       // 833
        /*=========================                                                                                    // 834
          Slider/slides progress                                                                                       // 835
          ===========================*/                                                                                // 836
        s.updateSlidesProgress = function (translate) {                                                                // 837
            if (typeof translate === 'undefined') {                                                                    // 838
                translate = s.translate || 0;                                                                          // 839
            }                                                                                                          // 840
            if (s.slides.length === 0) return;                                                                         // 841
            if (typeof s.slides[0].swiperSlideOffset === 'undefined') s.updateSlidesOffset();                          // 842
                                                                                                                       // 843
            var offsetCenter = -translate;                                                                             // 844
            if (s.rtl) offsetCenter = translate;                                                                       // 845
                                                                                                                       // 846
            // Visible Slides                                                                                          // 847
            s.slides.removeClass(s.params.slideVisibleClass);                                                          // 848
            for (var i = 0; i < s.slides.length; i++) {                                                                // 849
                var slide = s.slides[i];                                                                               // 850
                var slideProgress = (offsetCenter - slide.swiperSlideOffset) / (slide.swiperSlideSize + s.params.spaceBetween);
                if (s.params.watchSlidesVisibility) {                                                                  // 852
                    var slideBefore = -(offsetCenter - slide.swiperSlideOffset);                                       // 853
                    var slideAfter = slideBefore + s.slidesSizesGrid[i];                                               // 854
                    var isVisible =                                                                                    // 855
                        (slideBefore >= 0 && slideBefore < s.size) ||                                                  // 856
                        (slideAfter > 0 && slideAfter <= s.size) ||                                                    // 857
                        (slideBefore <= 0 && slideAfter >= s.size);                                                    // 858
                    if (isVisible) {                                                                                   // 859
                        s.slides.eq(i).addClass(s.params.slideVisibleClass);                                           // 860
                    }                                                                                                  // 861
                }                                                                                                      // 862
                slide.progress = s.rtl ? -slideProgress : slideProgress;                                               // 863
            }                                                                                                          // 864
        };                                                                                                             // 865
        s.updateProgress = function (translate) {                                                                      // 866
            if (typeof translate === 'undefined') {                                                                    // 867
                translate = s.translate || 0;                                                                          // 868
            }                                                                                                          // 869
            var translatesDiff = s.maxTranslate() - s.minTranslate();                                                  // 870
            var wasBeginning = s.isBeginning;                                                                          // 871
            var wasEnd = s.isEnd;                                                                                      // 872
            if (translatesDiff === 0) {                                                                                // 873
                s.progress = 0;                                                                                        // 874
                s.isBeginning = s.isEnd = true;                                                                        // 875
            }                                                                                                          // 876
            else {                                                                                                     // 877
                s.progress = (translate - s.minTranslate()) / (translatesDiff);                                        // 878
                s.isBeginning = s.progress <= 0;                                                                       // 879
                s.isEnd = s.progress >= 1;                                                                             // 880
            }                                                                                                          // 881
            if (s.isBeginning && !wasBeginning) s.emit('onReachBeginning', s);                                         // 882
            if (s.isEnd && !wasEnd) s.emit('onReachEnd', s);                                                           // 883
                                                                                                                       // 884
            if (s.params.watchSlidesProgress) s.updateSlidesProgress(translate);                                       // 885
            s.emit('onProgress', s, s.progress);                                                                       // 886
        };                                                                                                             // 887
        s.updateActiveIndex = function () {                                                                            // 888
            var translate = s.rtl ? s.translate : -s.translate;                                                        // 889
            var newActiveIndex, i, snapIndex;                                                                          // 890
            for (i = 0; i < s.slidesGrid.length; i ++) {                                                               // 891
                if (typeof s.slidesGrid[i + 1] !== 'undefined') {                                                      // 892
                    if (translate >= s.slidesGrid[i] && translate < s.slidesGrid[i + 1] - (s.slidesGrid[i + 1] - s.slidesGrid[i]) / 2) {
                        newActiveIndex = i;                                                                            // 894
                    }                                                                                                  // 895
                    else if (translate >= s.slidesGrid[i] && translate < s.slidesGrid[i + 1]) {                        // 896
                        newActiveIndex = i + 1;                                                                        // 897
                    }                                                                                                  // 898
                }                                                                                                      // 899
                else {                                                                                                 // 900
                    if (translate >= s.slidesGrid[i]) {                                                                // 901
                        newActiveIndex = i;                                                                            // 902
                    }                                                                                                  // 903
                }                                                                                                      // 904
            }                                                                                                          // 905
            // Normalize slideIndex                                                                                    // 906
            if (newActiveIndex < 0 || typeof newActiveIndex === 'undefined') newActiveIndex = 0;                       // 907
            // for (i = 0; i < s.slidesGrid.length; i++) {                                                             // 908
                // if (- translate >= s.slidesGrid[i]) {                                                               // 909
                    // newActiveIndex = i;                                                                             // 910
                // }                                                                                                   // 911
            // }                                                                                                       // 912
            snapIndex = Math.floor(newActiveIndex / s.params.slidesPerGroup);                                          // 913
            if (snapIndex >= s.snapGrid.length) snapIndex = s.snapGrid.length - 1;                                     // 914
                                                                                                                       // 915
            if (newActiveIndex === s.activeIndex) {                                                                    // 916
                return;                                                                                                // 917
            }                                                                                                          // 918
            s.snapIndex = snapIndex;                                                                                   // 919
            s.previousIndex = s.activeIndex;                                                                           // 920
            s.activeIndex = newActiveIndex;                                                                            // 921
            s.updateClasses();                                                                                         // 922
        };                                                                                                             // 923
                                                                                                                       // 924
        /*=========================                                                                                    // 925
          Classes                                                                                                      // 926
          ===========================*/                                                                                // 927
        s.updateClasses = function () {                                                                                // 928
            s.slides.removeClass(s.params.slideActiveClass + ' ' + s.params.slideNextClass + ' ' + s.params.slidePrevClass);
            var activeSlide = s.slides.eq(s.activeIndex);                                                              // 930
            // Active classes                                                                                          // 931
            activeSlide.addClass(s.params.slideActiveClass);                                                           // 932
            // Next Slide                                                                                              // 933
            var nextSlide = activeSlide.next('.' + s.params.slideClass).addClass(s.params.slideNextClass);             // 934
            if (s.params.loop && nextSlide.length === 0) {                                                             // 935
                s.slides.eq(0).addClass(s.params.slideNextClass);                                                      // 936
            }                                                                                                          // 937
            // Prev Slide                                                                                              // 938
            var prevSlide = activeSlide.prev('.' + s.params.slideClass).addClass(s.params.slidePrevClass);             // 939
            if (s.params.loop && prevSlide.length === 0) {                                                             // 940
                s.slides.eq(-1).addClass(s.params.slidePrevClass);                                                     // 941
            }                                                                                                          // 942
                                                                                                                       // 943
            // Pagination                                                                                              // 944
            if (s.paginationContainer && s.paginationContainer.length > 0) {                                           // 945
                // Current/Total                                                                                       // 946
                var current,                                                                                           // 947
                    total = s.params.loop ? Math.ceil((s.slides.length - s.loopedSlides * 2) / s.params.slidesPerGroup) : s.snapGrid.length;
                if (s.params.loop) {                                                                                   // 949
                    current = Math.ceil((s.activeIndex - s.loopedSlides)/s.params.slidesPerGroup);                     // 950
                    if (current > s.slides.length - 1 - s.loopedSlides * 2) {                                          // 951
                        current = current - (s.slides.length - s.loopedSlides * 2);                                    // 952
                    }                                                                                                  // 953
                    if (current > total - 1) current = current - total;                                                // 954
                    if (current < 0 && s.params.paginationType !== 'bullets') current = total + current;               // 955
                }                                                                                                      // 956
                else {                                                                                                 // 957
                    if (typeof s.snapIndex !== 'undefined') {                                                          // 958
                        current = s.snapIndex;                                                                         // 959
                    }                                                                                                  // 960
                    else {                                                                                             // 961
                        current = s.activeIndex || 0;                                                                  // 962
                    }                                                                                                  // 963
                }                                                                                                      // 964
                // Types                                                                                               // 965
                if (s.params.paginationType === 'bullets' && s.bullets && s.bullets.length > 0) {                      // 966
                    s.bullets.removeClass(s.params.bulletActiveClass);                                                 // 967
                    if (s.paginationContainer.length > 1) {                                                            // 968
                        s.bullets.each(function () {                                                                   // 969
                            if ($(this).index() === current) $(this).addClass(s.params.bulletActiveClass);             // 970
                        });                                                                                            // 971
                    }                                                                                                  // 972
                    else {                                                                                             // 973
                        s.bullets.eq(current).addClass(s.params.bulletActiveClass);                                    // 974
                    }                                                                                                  // 975
                }                                                                                                      // 976
                if (s.params.paginationType === 'fraction') {                                                          // 977
                    s.paginationContainer.find('.' + s.params.paginationCurrentClass).text(current + 1);               // 978
                    s.paginationContainer.find('.' + s.params.paginationTotalClass).text(total);                       // 979
                }                                                                                                      // 980
                if (s.params.paginationType === 'progress') {                                                          // 981
                    var scale = (current + 1) / total,                                                                 // 982
                        scaleX = scale,                                                                                // 983
                        scaleY = 1;                                                                                    // 984
                    if (!s.isHorizontal()) {                                                                           // 985
                        scaleY = scale;                                                                                // 986
                        scaleX = 1;                                                                                    // 987
                    }                                                                                                  // 988
                    s.paginationContainer.find('.' + s.params.paginationProgressbarClass).transform('translate3d(0,0,0) scaleX(' + scaleX + ') scaleY(' + scaleY + ')').transition(s.params.speed);
                }                                                                                                      // 990
                if (s.params.paginationType === 'custom' && s.params.paginationCustomRender) {                         // 991
                    s.paginationContainer.html(s.params.paginationCustomRender(s, current + 1, total));                // 992
                    s.emit('onPaginationRendered', s, s.paginationContainer[0]);                                       // 993
                }                                                                                                      // 994
            }                                                                                                          // 995
                                                                                                                       // 996
            // Next/active buttons                                                                                     // 997
            if (!s.params.loop) {                                                                                      // 998
                if (s.params.prevButton && s.prevButton && s.prevButton.length > 0) {                                  // 999
                    if (s.isBeginning) {                                                                               // 1000
                        s.prevButton.addClass(s.params.buttonDisabledClass);                                           // 1001
                        if (s.params.a11y && s.a11y) s.a11y.disable(s.prevButton);                                     // 1002
                    }                                                                                                  // 1003
                    else {                                                                                             // 1004
                        s.prevButton.removeClass(s.params.buttonDisabledClass);                                        // 1005
                        if (s.params.a11y && s.a11y) s.a11y.enable(s.prevButton);                                      // 1006
                    }                                                                                                  // 1007
                }                                                                                                      // 1008
                if (s.params.nextButton && s.nextButton && s.nextButton.length > 0) {                                  // 1009
                    if (s.isEnd) {                                                                                     // 1010
                        s.nextButton.addClass(s.params.buttonDisabledClass);                                           // 1011
                        if (s.params.a11y && s.a11y) s.a11y.disable(s.nextButton);                                     // 1012
                    }                                                                                                  // 1013
                    else {                                                                                             // 1014
                        s.nextButton.removeClass(s.params.buttonDisabledClass);                                        // 1015
                        if (s.params.a11y && s.a11y) s.a11y.enable(s.nextButton);                                      // 1016
                    }                                                                                                  // 1017
                }                                                                                                      // 1018
            }                                                                                                          // 1019
        };                                                                                                             // 1020
                                                                                                                       // 1021
        /*=========================                                                                                    // 1022
          Pagination                                                                                                   // 1023
          ===========================*/                                                                                // 1024
        s.updatePagination = function () {                                                                             // 1025
            if (!s.params.pagination) return;                                                                          // 1026
            if (s.paginationContainer && s.paginationContainer.length > 0) {                                           // 1027
                var paginationHTML = '';                                                                               // 1028
                if (s.params.paginationType === 'bullets') {                                                           // 1029
                    var numberOfBullets = s.params.loop ? Math.ceil((s.slides.length - s.loopedSlides * 2) / s.params.slidesPerGroup) : s.snapGrid.length;
                    for (var i = 0; i < numberOfBullets; i++) {                                                        // 1031
                        if (s.params.paginationBulletRender) {                                                         // 1032
                            paginationHTML += s.params.paginationBulletRender(i, s.params.bulletClass);                // 1033
                        }                                                                                              // 1034
                        else {                                                                                         // 1035
                            paginationHTML += '<' + s.params.paginationElement+' class="' + s.params.bulletClass + '"></' + s.params.paginationElement + '>';
                        }                                                                                              // 1037
                    }                                                                                                  // 1038
                    s.paginationContainer.html(paginationHTML);                                                        // 1039
                    s.bullets = s.paginationContainer.find('.' + s.params.bulletClass);                                // 1040
                    if (s.params.paginationClickable && s.params.a11y && s.a11y) {                                     // 1041
                        s.a11y.initPagination();                                                                       // 1042
                    }                                                                                                  // 1043
                }                                                                                                      // 1044
                if (s.params.paginationType === 'fraction') {                                                          // 1045
                    if (s.params.paginationFractionRender) {                                                           // 1046
                        paginationHTML = s.params.paginationFractionRender(s, s.params.paginationCurrentClass, s.params.paginationTotalClass);
                    }                                                                                                  // 1048
                    else {                                                                                             // 1049
                        paginationHTML =                                                                               // 1050
                            '<span class="' + s.params.paginationCurrentClass + '"></span>' +                          // 1051
                            ' / ' +                                                                                    // 1052
                            '<span class="' + s.params.paginationTotalClass+'"></span>';                               // 1053
                    }                                                                                                  // 1054
                    s.paginationContainer.html(paginationHTML);                                                        // 1055
                }                                                                                                      // 1056
                if (s.params.paginationType === 'progress') {                                                          // 1057
                    if (s.params.paginationProgressRender) {                                                           // 1058
                        paginationHTML = s.params.paginationProgressRender(s, s.params.paginationProgressbarClass);    // 1059
                    }                                                                                                  // 1060
                    else {                                                                                             // 1061
                        paginationHTML = '<span class="' + s.params.paginationProgressbarClass + '"></span>';          // 1062
                    }                                                                                                  // 1063
                    s.paginationContainer.html(paginationHTML);                                                        // 1064
                }                                                                                                      // 1065
                if (s.params.paginationType !== 'custom') {                                                            // 1066
                    s.emit('onPaginationRendered', s, s.paginationContainer[0]);                                       // 1067
                }                                                                                                      // 1068
            }                                                                                                          // 1069
        };                                                                                                             // 1070
        /*=========================                                                                                    // 1071
          Common update method                                                                                         // 1072
          ===========================*/                                                                                // 1073
        s.update = function (updateTranslate) {                                                                        // 1074
            s.updateContainerSize();                                                                                   // 1075
            s.updateSlidesSize();                                                                                      // 1076
            s.updateProgress();                                                                                        // 1077
            s.updatePagination();                                                                                      // 1078
            s.updateClasses();                                                                                         // 1079
            if (s.params.scrollbar && s.scrollbar) {                                                                   // 1080
                s.scrollbar.set();                                                                                     // 1081
            }                                                                                                          // 1082
            function forceSetTranslate() {                                                                             // 1083
                newTranslate = Math.min(Math.max(s.translate, s.maxTranslate()), s.minTranslate());                    // 1084
                s.setWrapperTranslate(newTranslate);                                                                   // 1085
                s.updateActiveIndex();                                                                                 // 1086
                s.updateClasses();                                                                                     // 1087
            }                                                                                                          // 1088
            if (updateTranslate) {                                                                                     // 1089
                var translated, newTranslate;                                                                          // 1090
                if (s.controller && s.controller.spline) {                                                             // 1091
                    s.controller.spline = undefined;                                                                   // 1092
                }                                                                                                      // 1093
                if (s.params.freeMode) {                                                                               // 1094
                    forceSetTranslate();                                                                               // 1095
                    if (s.params.autoHeight) {                                                                         // 1096
                        s.updateAutoHeight();                                                                          // 1097
                    }                                                                                                  // 1098
                }                                                                                                      // 1099
                else {                                                                                                 // 1100
                    if ((s.params.slidesPerView === 'auto' || s.params.slidesPerView > 1) && s.isEnd && !s.params.centeredSlides) {
                        translated = s.slideTo(s.slides.length - 1, 0, false, true);                                   // 1102
                    }                                                                                                  // 1103
                    else {                                                                                             // 1104
                        translated = s.slideTo(s.activeIndex, 0, false, true);                                         // 1105
                    }                                                                                                  // 1106
                    if (!translated) {                                                                                 // 1107
                        forceSetTranslate();                                                                           // 1108
                    }                                                                                                  // 1109
                }                                                                                                      // 1110
            }                                                                                                          // 1111
            else if (s.params.autoHeight) {                                                                            // 1112
                s.updateAutoHeight();                                                                                  // 1113
            }                                                                                                          // 1114
        };                                                                                                             // 1115
                                                                                                                       // 1116
        /*=========================                                                                                    // 1117
          Resize Handler                                                                                               // 1118
          ===========================*/                                                                                // 1119
        s.onResize = function (forceUpdatePagination) {                                                                // 1120
            //Breakpoints                                                                                              // 1121
            if (s.params.breakpoints) {                                                                                // 1122
                s.setBreakpoint();                                                                                     // 1123
            }                                                                                                          // 1124
                                                                                                                       // 1125
            // Disable locks on resize                                                                                 // 1126
            var allowSwipeToPrev = s.params.allowSwipeToPrev;                                                          // 1127
            var allowSwipeToNext = s.params.allowSwipeToNext;                                                          // 1128
            s.params.allowSwipeToPrev = s.params.allowSwipeToNext = true;                                              // 1129
                                                                                                                       // 1130
            s.updateContainerSize();                                                                                   // 1131
            s.updateSlidesSize();                                                                                      // 1132
            if (s.params.slidesPerView === 'auto' || s.params.freeMode || forceUpdatePagination) s.updatePagination();
            if (s.params.scrollbar && s.scrollbar) {                                                                   // 1134
                s.scrollbar.set();                                                                                     // 1135
            }                                                                                                          // 1136
            if (s.controller && s.controller.spline) {                                                                 // 1137
                s.controller.spline = undefined;                                                                       // 1138
            }                                                                                                          // 1139
            var slideChangedBySlideTo = false;                                                                         // 1140
            if (s.params.freeMode) {                                                                                   // 1141
                var newTranslate = Math.min(Math.max(s.translate, s.maxTranslate()), s.minTranslate());                // 1142
                s.setWrapperTranslate(newTranslate);                                                                   // 1143
                s.updateActiveIndex();                                                                                 // 1144
                s.updateClasses();                                                                                     // 1145
                                                                                                                       // 1146
                if (s.params.autoHeight) {                                                                             // 1147
                    s.updateAutoHeight();                                                                              // 1148
                }                                                                                                      // 1149
            }                                                                                                          // 1150
            else {                                                                                                     // 1151
                s.updateClasses();                                                                                     // 1152
                if ((s.params.slidesPerView === 'auto' || s.params.slidesPerView > 1) && s.isEnd && !s.params.centeredSlides) {
                    slideChangedBySlideTo = s.slideTo(s.slides.length - 1, 0, false, true);                            // 1154
                }                                                                                                      // 1155
                else {                                                                                                 // 1156
                    slideChangedBySlideTo = s.slideTo(s.activeIndex, 0, false, true);                                  // 1157
                }                                                                                                      // 1158
            }                                                                                                          // 1159
            if (s.params.lazyLoading && !slideChangedBySlideTo && s.lazy) {                                            // 1160
                s.lazy.load();                                                                                         // 1161
            }                                                                                                          // 1162
            // Return locks after resize                                                                               // 1163
            s.params.allowSwipeToPrev = allowSwipeToPrev;                                                              // 1164
            s.params.allowSwipeToNext = allowSwipeToNext;                                                              // 1165
        };                                                                                                             // 1166
                                                                                                                       // 1167
        /*=========================                                                                                    // 1168
          Events                                                                                                       // 1169
          ===========================*/                                                                                // 1170
                                                                                                                       // 1171
        //Define Touch Events                                                                                          // 1172
        var desktopEvents = ['mousedown', 'mousemove', 'mouseup'];                                                     // 1173
        if (window.navigator.pointerEnabled) desktopEvents = ['pointerdown', 'pointermove', 'pointerup'];              // 1174
        else if (window.navigator.msPointerEnabled) desktopEvents = ['MSPointerDown', 'MSPointerMove', 'MSPointerUp'];
        s.touchEvents = {                                                                                              // 1176
            start : s.support.touch || !s.params.simulateTouch  ? 'touchstart' : desktopEvents[0],                     // 1177
            move : s.support.touch || !s.params.simulateTouch ? 'touchmove' : desktopEvents[1],                        // 1178
            end : s.support.touch || !s.params.simulateTouch ? 'touchend' : desktopEvents[2]                           // 1179
        };                                                                                                             // 1180
                                                                                                                       // 1181
                                                                                                                       // 1182
        // WP8 Touch Events Fix                                                                                        // 1183
        if (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) {                                    // 1184
            (s.params.touchEventsTarget === 'container' ? s.container : s.wrapper).addClass('swiper-wp8-' + s.params.direction);
        }                                                                                                              // 1186
                                                                                                                       // 1187
        // Attach/detach events                                                                                        // 1188
        s.initEvents = function (detach) {                                                                             // 1189
            var actionDom = detach ? 'off' : 'on';                                                                     // 1190
            var action = detach ? 'removeEventListener' : 'addEventListener';                                          // 1191
            var touchEventsTarget = s.params.touchEventsTarget === 'container' ? s.container[0] : s.wrapper[0];        // 1192
            var target = s.support.touch ? touchEventsTarget : document;                                               // 1193
                                                                                                                       // 1194
            var moveCapture = s.params.nested ? true : false;                                                          // 1195
                                                                                                                       // 1196
            //Touch Events                                                                                             // 1197
            if (s.browser.ie) {                                                                                        // 1198
                touchEventsTarget[action](s.touchEvents.start, s.onTouchStart, false);                                 // 1199
                target[action](s.touchEvents.move, s.onTouchMove, moveCapture);                                        // 1200
                target[action](s.touchEvents.end, s.onTouchEnd, false);                                                // 1201
            }                                                                                                          // 1202
            else {                                                                                                     // 1203
                if (s.support.touch) {                                                                                 // 1204
                    touchEventsTarget[action](s.touchEvents.start, s.onTouchStart, false);                             // 1205
                    touchEventsTarget[action](s.touchEvents.move, s.onTouchMove, moveCapture);                         // 1206
                    touchEventsTarget[action](s.touchEvents.end, s.onTouchEnd, false);                                 // 1207
                }                                                                                                      // 1208
                if (params.simulateTouch && !s.device.ios && !s.device.android) {                                      // 1209
                    touchEventsTarget[action]('mousedown', s.onTouchStart, false);                                     // 1210
                    document[action]('mousemove', s.onTouchMove, moveCapture);                                         // 1211
                    document[action]('mouseup', s.onTouchEnd, false);                                                  // 1212
                }                                                                                                      // 1213
            }                                                                                                          // 1214
            window[action]('resize', s.onResize);                                                                      // 1215
                                                                                                                       // 1216
            // Next, Prev, Index                                                                                       // 1217
            if (s.params.nextButton && s.nextButton && s.nextButton.length > 0) {                                      // 1218
                s.nextButton[actionDom]('click', s.onClickNext);                                                       // 1219
                if (s.params.a11y && s.a11y) s.nextButton[actionDom]('keydown', s.a11y.onEnterKey);                    // 1220
            }                                                                                                          // 1221
            if (s.params.prevButton && s.prevButton && s.prevButton.length > 0) {                                      // 1222
                s.prevButton[actionDom]('click', s.onClickPrev);                                                       // 1223
                if (s.params.a11y && s.a11y) s.prevButton[actionDom]('keydown', s.a11y.onEnterKey);                    // 1224
            }                                                                                                          // 1225
            if (s.params.pagination && s.params.paginationClickable) {                                                 // 1226
                s.paginationContainer[actionDom]('click', '.' + s.params.bulletClass, s.onClickIndex);                 // 1227
                if (s.params.a11y && s.a11y) s.paginationContainer[actionDom]('keydown', '.' + s.params.bulletClass, s.a11y.onEnterKey);
            }                                                                                                          // 1229
                                                                                                                       // 1230
            // Prevent Links Clicks                                                                                    // 1231
            if (s.params.preventClicks || s.params.preventClicksPropagation) touchEventsTarget[action]('click', s.preventClicks, true);
        };                                                                                                             // 1233
        s.attachEvents = function () {                                                                                 // 1234
            s.initEvents();                                                                                            // 1235
        };                                                                                                             // 1236
        s.detachEvents = function () {                                                                                 // 1237
            s.initEvents(true);                                                                                        // 1238
        };                                                                                                             // 1239
                                                                                                                       // 1240
        /*=========================                                                                                    // 1241
          Handle Clicks                                                                                                // 1242
          ===========================*/                                                                                // 1243
        // Prevent Clicks                                                                                              // 1244
        s.allowClick = true;                                                                                           // 1245
        s.preventClicks = function (e) {                                                                               // 1246
            if (!s.allowClick) {                                                                                       // 1247
                if (s.params.preventClicks) e.preventDefault();                                                        // 1248
                if (s.params.preventClicksPropagation && s.animating) {                                                // 1249
                    e.stopPropagation();                                                                               // 1250
                    e.stopImmediatePropagation();                                                                      // 1251
                }                                                                                                      // 1252
            }                                                                                                          // 1253
        };                                                                                                             // 1254
        // Clicks                                                                                                      // 1255
        s.onClickNext = function (e) {                                                                                 // 1256
            e.preventDefault();                                                                                        // 1257
            if (s.isEnd && !s.params.loop) return;                                                                     // 1258
            s.slideNext();                                                                                             // 1259
        };                                                                                                             // 1260
        s.onClickPrev = function (e) {                                                                                 // 1261
            e.preventDefault();                                                                                        // 1262
            if (s.isBeginning && !s.params.loop) return;                                                               // 1263
            s.slidePrev();                                                                                             // 1264
        };                                                                                                             // 1265
        s.onClickIndex = function (e) {                                                                                // 1266
            e.preventDefault();                                                                                        // 1267
            var index = $(this).index() * s.params.slidesPerGroup;                                                     // 1268
            if (s.params.loop) index = index + s.loopedSlides;                                                         // 1269
            s.slideTo(index);                                                                                          // 1270
        };                                                                                                             // 1271
                                                                                                                       // 1272
        /*=========================                                                                                    // 1273
          Handle Touches                                                                                               // 1274
          ===========================*/                                                                                // 1275
        function findElementInEvent(e, selector) {                                                                     // 1276
            var el = $(e.target);                                                                                      // 1277
            if (!el.is(selector)) {                                                                                    // 1278
                if (typeof selector === 'string') {                                                                    // 1279
                    el = el.parents(selector);                                                                         // 1280
                }                                                                                                      // 1281
                else if (selector.nodeType) {                                                                          // 1282
                    var found;                                                                                         // 1283
                    el.parents().each(function (index, _el) {                                                          // 1284
                        if (_el === selector) found = selector;                                                        // 1285
                    });                                                                                                // 1286
                    if (!found) return undefined;                                                                      // 1287
                    else return selector;                                                                              // 1288
                }                                                                                                      // 1289
            }                                                                                                          // 1290
            if (el.length === 0) {                                                                                     // 1291
                return undefined;                                                                                      // 1292
            }                                                                                                          // 1293
            return el[0];                                                                                              // 1294
        }                                                                                                              // 1295
        s.updateClickedSlide = function (e) {                                                                          // 1296
            var slide = findElementInEvent(e, '.' + s.params.slideClass);                                              // 1297
            var slideFound = false;                                                                                    // 1298
            if (slide) {                                                                                               // 1299
                for (var i = 0; i < s.slides.length; i++) {                                                            // 1300
                    if (s.slides[i] === slide) slideFound = true;                                                      // 1301
                }                                                                                                      // 1302
            }                                                                                                          // 1303
                                                                                                                       // 1304
            if (slide && slideFound) {                                                                                 // 1305
                s.clickedSlide = slide;                                                                                // 1306
                s.clickedIndex = $(slide).index();                                                                     // 1307
            }                                                                                                          // 1308
            else {                                                                                                     // 1309
                s.clickedSlide = undefined;                                                                            // 1310
                s.clickedIndex = undefined;                                                                            // 1311
                return;                                                                                                // 1312
            }                                                                                                          // 1313
            if (s.params.slideToClickedSlide && s.clickedIndex !== undefined && s.clickedIndex !== s.activeIndex) {    // 1314
                var slideToIndex = s.clickedIndex,                                                                     // 1315
                    realIndex,                                                                                         // 1316
                    duplicatedSlides;                                                                                  // 1317
                if (s.params.loop) {                                                                                   // 1318
                    if (s.animating) return;                                                                           // 1319
                    realIndex = $(s.clickedSlide).attr('data-swiper-slide-index');                                     // 1320
                    if (s.params.centeredSlides) {                                                                     // 1321
                        if ((slideToIndex < s.loopedSlides - s.params.slidesPerView/2) || (slideToIndex > s.slides.length - s.loopedSlides + s.params.slidesPerView/2)) {
                            s.fixLoop();                                                                               // 1323
                            slideToIndex = s.wrapper.children('.' + s.params.slideClass + '[data-swiper-slide-index="' + realIndex + '"]:not(.swiper-slide-duplicate)').eq(0).index();
                            setTimeout(function () {                                                                   // 1325
                                s.slideTo(slideToIndex);                                                               // 1326
                            }, 0);                                                                                     // 1327
                        }                                                                                              // 1328
                        else {                                                                                         // 1329
                            s.slideTo(slideToIndex);                                                                   // 1330
                        }                                                                                              // 1331
                    }                                                                                                  // 1332
                    else {                                                                                             // 1333
                        if (slideToIndex > s.slides.length - s.params.slidesPerView) {                                 // 1334
                            s.fixLoop();                                                                               // 1335
                            slideToIndex = s.wrapper.children('.' + s.params.slideClass + '[data-swiper-slide-index="' + realIndex + '"]:not(.swiper-slide-duplicate)').eq(0).index();
                            setTimeout(function () {                                                                   // 1337
                                s.slideTo(slideToIndex);                                                               // 1338
                            }, 0);                                                                                     // 1339
                        }                                                                                              // 1340
                        else {                                                                                         // 1341
                            s.slideTo(slideToIndex);                                                                   // 1342
                        }                                                                                              // 1343
                    }                                                                                                  // 1344
                }                                                                                                      // 1345
                else {                                                                                                 // 1346
                    s.slideTo(slideToIndex);                                                                           // 1347
                }                                                                                                      // 1348
            }                                                                                                          // 1349
        };                                                                                                             // 1350
                                                                                                                       // 1351
        var isTouched,                                                                                                 // 1352
            isMoved,                                                                                                   // 1353
            allowTouchCallbacks,                                                                                       // 1354
            touchStartTime,                                                                                            // 1355
            isScrolling,                                                                                               // 1356
            currentTranslate,                                                                                          // 1357
            startTranslate,                                                                                            // 1358
            allowThresholdMove,                                                                                        // 1359
            // Form elements to match                                                                                  // 1360
            formElements = 'input, select, textarea, button',                                                          // 1361
            // Last click time                                                                                         // 1362
            lastClickTime = Date.now(), clickTimeout,                                                                  // 1363
            //Velocities                                                                                               // 1364
            velocities = [],                                                                                           // 1365
            allowMomentumBounce;                                                                                       // 1366
                                                                                                                       // 1367
        // Animating Flag                                                                                              // 1368
        s.animating = false;                                                                                           // 1369
                                                                                                                       // 1370
        // Touches information                                                                                         // 1371
        s.touches = {                                                                                                  // 1372
            startX: 0,                                                                                                 // 1373
            startY: 0,                                                                                                 // 1374
            currentX: 0,                                                                                               // 1375
            currentY: 0,                                                                                               // 1376
            diff: 0                                                                                                    // 1377
        };                                                                                                             // 1378
                                                                                                                       // 1379
        // Touch handlers                                                                                              // 1380
        var isTouchEvent, startMoving;                                                                                 // 1381
        s.onTouchStart = function (e) {                                                                                // 1382
            if (e.originalEvent) e = e.originalEvent;                                                                  // 1383
            isTouchEvent = e.type === 'touchstart';                                                                    // 1384
            if (!isTouchEvent && 'which' in e && e.which === 3) return;                                                // 1385
            if (s.params.noSwiping && findElementInEvent(e, '.' + s.params.noSwipingClass)) {                          // 1386
                s.allowClick = true;                                                                                   // 1387
                return;                                                                                                // 1388
            }                                                                                                          // 1389
            if (s.params.swipeHandler) {                                                                               // 1390
                if (!findElementInEvent(e, s.params.swipeHandler)) return;                                             // 1391
            }                                                                                                          // 1392
                                                                                                                       // 1393
            var startX = s.touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;            // 1394
            var startY = s.touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;            // 1395
                                                                                                                       // 1396
            // Do NOT start if iOS edge swipe is detected. Otherwise iOS app (UIWebView) cannot swipe-to-go-back anymore
            if(s.device.ios && s.params.iOSEdgeSwipeDetection && startX <= s.params.iOSEdgeSwipeThreshold) {           // 1398
                return;                                                                                                // 1399
            }                                                                                                          // 1400
                                                                                                                       // 1401
            isTouched = true;                                                                                          // 1402
            isMoved = false;                                                                                           // 1403
            allowTouchCallbacks = true;                                                                                // 1404
            isScrolling = undefined;                                                                                   // 1405
            startMoving = undefined;                                                                                   // 1406
            s.touches.startX = startX;                                                                                 // 1407
            s.touches.startY = startY;                                                                                 // 1408
            touchStartTime = Date.now();                                                                               // 1409
            s.allowClick = true;                                                                                       // 1410
            s.updateContainerSize();                                                                                   // 1411
            s.swipeDirection = undefined;                                                                              // 1412
            if (s.params.threshold > 0) allowThresholdMove = false;                                                    // 1413
            if (e.type !== 'touchstart') {                                                                             // 1414
                var preventDefault = true;                                                                             // 1415
                if ($(e.target).is(formElements)) preventDefault = false;                                              // 1416
                if (document.activeElement && $(document.activeElement).is(formElements)) {                            // 1417
                    document.activeElement.blur();                                                                     // 1418
                }                                                                                                      // 1419
                if (preventDefault) {                                                                                  // 1420
                    e.preventDefault();                                                                                // 1421
                }                                                                                                      // 1422
            }                                                                                                          // 1423
            s.emit('onTouchStart', s, e);                                                                              // 1424
        };                                                                                                             // 1425
                                                                                                                       // 1426
        s.onTouchMove = function (e) {                                                                                 // 1427
            if (e.originalEvent) e = e.originalEvent;                                                                  // 1428
            if (isTouchEvent && e.type === 'mousemove') return;                                                        // 1429
            if (e.preventedByNestedSwiper) {                                                                           // 1430
                s.touches.startX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;                        // 1431
                s.touches.startY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;                        // 1432
                return;                                                                                                // 1433
            }                                                                                                          // 1434
            if (s.params.onlyExternal) {                                                                               // 1435
                // isMoved = true;                                                                                     // 1436
                s.allowClick = false;                                                                                  // 1437
                if (isTouched) {                                                                                       // 1438
                    s.touches.startX = s.touches.currentX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
                    s.touches.startY = s.touches.currentY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
                    touchStartTime = Date.now();                                                                       // 1441
                }                                                                                                      // 1442
                return;                                                                                                // 1443
            }                                                                                                          // 1444
            if (isTouchEvent && document.activeElement) {                                                              // 1445
                if (e.target === document.activeElement && $(e.target).is(formElements)) {                             // 1446
                    isMoved = true;                                                                                    // 1447
                    s.allowClick = false;                                                                              // 1448
                    return;                                                                                            // 1449
                }                                                                                                      // 1450
            }                                                                                                          // 1451
            if (allowTouchCallbacks) {                                                                                 // 1452
                s.emit('onTouchMove', s, e);                                                                           // 1453
            }                                                                                                          // 1454
            if (e.targetTouches && e.targetTouches.length > 1) return;                                                 // 1455
                                                                                                                       // 1456
            s.touches.currentX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;                          // 1457
            s.touches.currentY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;                          // 1458
                                                                                                                       // 1459
            if (typeof isScrolling === 'undefined') {                                                                  // 1460
                var touchAngle = Math.atan2(Math.abs(s.touches.currentY - s.touches.startY), Math.abs(s.touches.currentX - s.touches.startX)) * 180 / Math.PI;
                isScrolling = s.isHorizontal() ? touchAngle > s.params.touchAngle : (90 - touchAngle > s.params.touchAngle);
            }                                                                                                          // 1463
            if (isScrolling) {                                                                                         // 1464
                s.emit('onTouchMoveOpposite', s, e);                                                                   // 1465
            }                                                                                                          // 1466
            if (typeof startMoving === 'undefined' && s.browser.ieTouch) {                                             // 1467
                if (s.touches.currentX !== s.touches.startX || s.touches.currentY !== s.touches.startY) {              // 1468
                    startMoving = true;                                                                                // 1469
                }                                                                                                      // 1470
            }                                                                                                          // 1471
            if (!isTouched) return;                                                                                    // 1472
            if (isScrolling)  {                                                                                        // 1473
                isTouched = false;                                                                                     // 1474
                return;                                                                                                // 1475
            }                                                                                                          // 1476
            if (!startMoving && s.browser.ieTouch) {                                                                   // 1477
                return;                                                                                                // 1478
            }                                                                                                          // 1479
            s.allowClick = false;                                                                                      // 1480
            s.emit('onSliderMove', s, e);                                                                              // 1481
            e.preventDefault();                                                                                        // 1482
            if (s.params.touchMoveStopPropagation && !s.params.nested) {                                               // 1483
                e.stopPropagation();                                                                                   // 1484
            }                                                                                                          // 1485
                                                                                                                       // 1486
            if (!isMoved) {                                                                                            // 1487
                if (params.loop) {                                                                                     // 1488
                    s.fixLoop();                                                                                       // 1489
                }                                                                                                      // 1490
                startTranslate = s.getWrapperTranslate();                                                              // 1491
                s.setWrapperTransition(0);                                                                             // 1492
                if (s.animating) {                                                                                     // 1493
                    s.wrapper.trigger('webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd');
                }                                                                                                      // 1495
                if (s.params.autoplay && s.autoplaying) {                                                              // 1496
                    if (s.params.autoplayDisableOnInteraction) {                                                       // 1497
                        s.stopAutoplay();                                                                              // 1498
                    }                                                                                                  // 1499
                    else {                                                                                             // 1500
                        s.pauseAutoplay();                                                                             // 1501
                    }                                                                                                  // 1502
                }                                                                                                      // 1503
                allowMomentumBounce = false;                                                                           // 1504
                //Grab Cursor                                                                                          // 1505
                if (s.params.grabCursor) {                                                                             // 1506
                    s.container[0].style.cursor = 'move';                                                              // 1507
                    s.container[0].style.cursor = '-webkit-grabbing';                                                  // 1508
                    s.container[0].style.cursor = '-moz-grabbin';                                                      // 1509
                    s.container[0].style.cursor = 'grabbing';                                                          // 1510
                }                                                                                                      // 1511
            }                                                                                                          // 1512
            isMoved = true;                                                                                            // 1513
                                                                                                                       // 1514
            var diff = s.touches.diff = s.isHorizontal() ? s.touches.currentX - s.touches.startX : s.touches.currentY - s.touches.startY;
                                                                                                                       // 1516
            diff = diff * s.params.touchRatio;                                                                         // 1517
            if (s.rtl) diff = -diff;                                                                                   // 1518
                                                                                                                       // 1519
            s.swipeDirection = diff > 0 ? 'prev' : 'next';                                                             // 1520
            currentTranslate = diff + startTranslate;                                                                  // 1521
                                                                                                                       // 1522
            var disableParentSwiper = true;                                                                            // 1523
            if ((diff > 0 && currentTranslate > s.minTranslate())) {                                                   // 1524
                disableParentSwiper = false;                                                                           // 1525
                if (s.params.resistance) currentTranslate = s.minTranslate() - 1 + Math.pow(-s.minTranslate() + startTranslate + diff, s.params.resistanceRatio);
            }                                                                                                          // 1527
            else if (diff < 0 && currentTranslate < s.maxTranslate()) {                                                // 1528
                disableParentSwiper = false;                                                                           // 1529
                if (s.params.resistance) currentTranslate = s.maxTranslate() + 1 - Math.pow(s.maxTranslate() - startTranslate - diff, s.params.resistanceRatio);
            }                                                                                                          // 1531
                                                                                                                       // 1532
            if (disableParentSwiper) {                                                                                 // 1533
                e.preventedByNestedSwiper = true;                                                                      // 1534
            }                                                                                                          // 1535
                                                                                                                       // 1536
            // Directions locks                                                                                        // 1537
            if (!s.params.allowSwipeToNext && s.swipeDirection === 'next' && currentTranslate < startTranslate) {      // 1538
                currentTranslate = startTranslate;                                                                     // 1539
            }                                                                                                          // 1540
            if (!s.params.allowSwipeToPrev && s.swipeDirection === 'prev' && currentTranslate > startTranslate) {      // 1541
                currentTranslate = startTranslate;                                                                     // 1542
            }                                                                                                          // 1543
                                                                                                                       // 1544
            if (!s.params.followFinger) return;                                                                        // 1545
                                                                                                                       // 1546
            // Threshold                                                                                               // 1547
            if (s.params.threshold > 0) {                                                                              // 1548
                if (Math.abs(diff) > s.params.threshold || allowThresholdMove) {                                       // 1549
                    if (!allowThresholdMove) {                                                                         // 1550
                        allowThresholdMove = true;                                                                     // 1551
                        s.touches.startX = s.touches.currentX;                                                         // 1552
                        s.touches.startY = s.touches.currentY;                                                         // 1553
                        currentTranslate = startTranslate;                                                             // 1554
                        s.touches.diff = s.isHorizontal() ? s.touches.currentX - s.touches.startX : s.touches.currentY - s.touches.startY;
                        return;                                                                                        // 1556
                    }                                                                                                  // 1557
                }                                                                                                      // 1558
                else {                                                                                                 // 1559
                    currentTranslate = startTranslate;                                                                 // 1560
                    return;                                                                                            // 1561
                }                                                                                                      // 1562
            }                                                                                                          // 1563
            // Update active index in free mode                                                                        // 1564
            if (s.params.freeMode || s.params.watchSlidesProgress) {                                                   // 1565
                s.updateActiveIndex();                                                                                 // 1566
            }                                                                                                          // 1567
            if (s.params.freeMode) {                                                                                   // 1568
                //Velocity                                                                                             // 1569
                if (velocities.length === 0) {                                                                         // 1570
                    velocities.push({                                                                                  // 1571
                        position: s.touches[s.isHorizontal() ? 'startX' : 'startY'],                                   // 1572
                        time: touchStartTime                                                                           // 1573
                    });                                                                                                // 1574
                }                                                                                                      // 1575
                velocities.push({                                                                                      // 1576
                    position: s.touches[s.isHorizontal() ? 'currentX' : 'currentY'],                                   // 1577
                    time: (new window.Date()).getTime()                                                                // 1578
                });                                                                                                    // 1579
            }                                                                                                          // 1580
            // Update progress                                                                                         // 1581
            s.updateProgress(currentTranslate);                                                                        // 1582
            // Update translate                                                                                        // 1583
            s.setWrapperTranslate(currentTranslate);                                                                   // 1584
        };                                                                                                             // 1585
        s.onTouchEnd = function (e) {                                                                                  // 1586
            if (e.originalEvent) e = e.originalEvent;                                                                  // 1587
            if (allowTouchCallbacks) {                                                                                 // 1588
                s.emit('onTouchEnd', s, e);                                                                            // 1589
            }                                                                                                          // 1590
            allowTouchCallbacks = false;                                                                               // 1591
            if (!isTouched) return;                                                                                    // 1592
            //Return Grab Cursor                                                                                       // 1593
            if (s.params.grabCursor && isMoved && isTouched) {                                                         // 1594
                s.container[0].style.cursor = 'move';                                                                  // 1595
                s.container[0].style.cursor = '-webkit-grab';                                                          // 1596
                s.container[0].style.cursor = '-moz-grab';                                                             // 1597
                s.container[0].style.cursor = 'grab';                                                                  // 1598
            }                                                                                                          // 1599
                                                                                                                       // 1600
            // Time diff                                                                                               // 1601
            var touchEndTime = Date.now();                                                                             // 1602
            var timeDiff = touchEndTime - touchStartTime;                                                              // 1603
                                                                                                                       // 1604
            // Tap, doubleTap, Click                                                                                   // 1605
            if (s.allowClick) {                                                                                        // 1606
                s.updateClickedSlide(e);                                                                               // 1607
                s.emit('onTap', s, e);                                                                                 // 1608
                if (timeDiff < 300 && (touchEndTime - lastClickTime) > 300) {                                          // 1609
                    if (clickTimeout) clearTimeout(clickTimeout);                                                      // 1610
                    clickTimeout = setTimeout(function () {                                                            // 1611
                        if (!s) return;                                                                                // 1612
                        if (s.params.paginationHide && s.paginationContainer.length > 0 && !$(e.target).hasClass(s.params.bulletClass)) {
                            s.paginationContainer.toggleClass(s.params.paginationHiddenClass);                         // 1614
                        }                                                                                              // 1615
                        s.emit('onClick', s, e);                                                                       // 1616
                    }, 300);                                                                                           // 1617
                                                                                                                       // 1618
                }                                                                                                      // 1619
                if (timeDiff < 300 && (touchEndTime - lastClickTime) < 300) {                                          // 1620
                    if (clickTimeout) clearTimeout(clickTimeout);                                                      // 1621
                    s.emit('onDoubleTap', s, e);                                                                       // 1622
                }                                                                                                      // 1623
            }                                                                                                          // 1624
                                                                                                                       // 1625
            lastClickTime = Date.now();                                                                                // 1626
            setTimeout(function () {                                                                                   // 1627
                if (s) s.allowClick = true;                                                                            // 1628
            }, 0);                                                                                                     // 1629
                                                                                                                       // 1630
            if (!isTouched || !isMoved || !s.swipeDirection || s.touches.diff === 0 || currentTranslate === startTranslate) {
                isTouched = isMoved = false;                                                                           // 1632
                return;                                                                                                // 1633
            }                                                                                                          // 1634
            isTouched = isMoved = false;                                                                               // 1635
                                                                                                                       // 1636
            var currentPos;                                                                                            // 1637
            if (s.params.followFinger) {                                                                               // 1638
                currentPos = s.rtl ? s.translate : -s.translate;                                                       // 1639
            }                                                                                                          // 1640
            else {                                                                                                     // 1641
                currentPos = -currentTranslate;                                                                        // 1642
            }                                                                                                          // 1643
            if (s.params.freeMode) {                                                                                   // 1644
                if (currentPos < -s.minTranslate()) {                                                                  // 1645
                    s.slideTo(s.activeIndex);                                                                          // 1646
                    return;                                                                                            // 1647
                }                                                                                                      // 1648
                else if (currentPos > -s.maxTranslate()) {                                                             // 1649
                    if (s.slides.length < s.snapGrid.length) {                                                         // 1650
                        s.slideTo(s.snapGrid.length - 1);                                                              // 1651
                    }                                                                                                  // 1652
                    else {                                                                                             // 1653
                        s.slideTo(s.slides.length - 1);                                                                // 1654
                    }                                                                                                  // 1655
                    return;                                                                                            // 1656
                }                                                                                                      // 1657
                                                                                                                       // 1658
                if (s.params.freeModeMomentum) {                                                                       // 1659
                    if (velocities.length > 1) {                                                                       // 1660
                        var lastMoveEvent = velocities.pop(), velocityEvent = velocities.pop();                        // 1661
                                                                                                                       // 1662
                        var distance = lastMoveEvent.position - velocityEvent.position;                                // 1663
                        var time = lastMoveEvent.time - velocityEvent.time;                                            // 1664
                        s.velocity = distance / time;                                                                  // 1665
                        s.velocity = s.velocity / 2;                                                                   // 1666
                        if (Math.abs(s.velocity) < s.params.freeModeMinimumVelocity) {                                 // 1667
                            s.velocity = 0;                                                                            // 1668
                        }                                                                                              // 1669
                        // this implies that the user stopped moving a finger then released.                           // 1670
                        // There would be no events with distance zero, so the last event is stale.                    // 1671
                        if (time > 150 || (new window.Date().getTime() - lastMoveEvent.time) > 300) {                  // 1672
                            s.velocity = 0;                                                                            // 1673
                        }                                                                                              // 1674
                    } else {                                                                                           // 1675
                        s.velocity = 0;                                                                                // 1676
                    }                                                                                                  // 1677
                                                                                                                       // 1678
                    velocities.length = 0;                                                                             // 1679
                    var momentumDuration = 1000 * s.params.freeModeMomentumRatio;                                      // 1680
                    var momentumDistance = s.velocity * momentumDuration;                                              // 1681
                                                                                                                       // 1682
                    var newPosition = s.translate + momentumDistance;                                                  // 1683
                    if (s.rtl) newPosition = - newPosition;                                                            // 1684
                    var doBounce = false;                                                                              // 1685
                    var afterBouncePosition;                                                                           // 1686
                    var bounceAmount = Math.abs(s.velocity) * 20 * s.params.freeModeMomentumBounceRatio;               // 1687
                    if (newPosition < s.maxTranslate()) {                                                              // 1688
                        if (s.params.freeModeMomentumBounce) {                                                         // 1689
                            if (newPosition + s.maxTranslate() < -bounceAmount) {                                      // 1690
                                newPosition = s.maxTranslate() - bounceAmount;                                         // 1691
                            }                                                                                          // 1692
                            afterBouncePosition = s.maxTranslate();                                                    // 1693
                            doBounce = true;                                                                           // 1694
                            allowMomentumBounce = true;                                                                // 1695
                        }                                                                                              // 1696
                        else {                                                                                         // 1697
                            newPosition = s.maxTranslate();                                                            // 1698
                        }                                                                                              // 1699
                    }                                                                                                  // 1700
                    else if (newPosition > s.minTranslate()) {                                                         // 1701
                        if (s.params.freeModeMomentumBounce) {                                                         // 1702
                            if (newPosition - s.minTranslate() > bounceAmount) {                                       // 1703
                                newPosition = s.minTranslate() + bounceAmount;                                         // 1704
                            }                                                                                          // 1705
                            afterBouncePosition = s.minTranslate();                                                    // 1706
                            doBounce = true;                                                                           // 1707
                            allowMomentumBounce = true;                                                                // 1708
                        }                                                                                              // 1709
                        else {                                                                                         // 1710
                            newPosition = s.minTranslate();                                                            // 1711
                        }                                                                                              // 1712
                    }                                                                                                  // 1713
                    else if (s.params.freeModeSticky) {                                                                // 1714
                        var j = 0,                                                                                     // 1715
                            nextSlide;                                                                                 // 1716
                        for (j = 0; j < s.snapGrid.length; j += 1) {                                                   // 1717
                            if (s.snapGrid[j] > -newPosition) {                                                        // 1718
                                nextSlide = j;                                                                         // 1719
                                break;                                                                                 // 1720
                            }                                                                                          // 1721
                                                                                                                       // 1722
                        }                                                                                              // 1723
                        if (Math.abs(s.snapGrid[nextSlide] - newPosition) < Math.abs(s.snapGrid[nextSlide - 1] - newPosition) || s.swipeDirection === 'next') {
                            newPosition = s.snapGrid[nextSlide];                                                       // 1725
                        } else {                                                                                       // 1726
                            newPosition = s.snapGrid[nextSlide - 1];                                                   // 1727
                        }                                                                                              // 1728
                        if (!s.rtl) newPosition = - newPosition;                                                       // 1729
                    }                                                                                                  // 1730
                    //Fix duration                                                                                     // 1731
                    if (s.velocity !== 0) {                                                                            // 1732
                        if (s.rtl) {                                                                                   // 1733
                            momentumDuration = Math.abs((-newPosition - s.translate) / s.velocity);                    // 1734
                        }                                                                                              // 1735
                        else {                                                                                         // 1736
                            momentumDuration = Math.abs((newPosition - s.translate) / s.velocity);                     // 1737
                        }                                                                                              // 1738
                    }                                                                                                  // 1739
                    else if (s.params.freeModeSticky) {                                                                // 1740
                        s.slideReset();                                                                                // 1741
                        return;                                                                                        // 1742
                    }                                                                                                  // 1743
                                                                                                                       // 1744
                    if (s.params.freeModeMomentumBounce && doBounce) {                                                 // 1745
                        s.updateProgress(afterBouncePosition);                                                         // 1746
                        s.setWrapperTransition(momentumDuration);                                                      // 1747
                        s.setWrapperTranslate(newPosition);                                                            // 1748
                        s.onTransitionStart();                                                                         // 1749
                        s.animating = true;                                                                            // 1750
                        s.wrapper.transitionEnd(function () {                                                          // 1751
                            if (!s || !allowMomentumBounce) return;                                                    // 1752
                            s.emit('onMomentumBounce', s);                                                             // 1753
                                                                                                                       // 1754
                            s.setWrapperTransition(s.params.speed);                                                    // 1755
                            s.setWrapperTranslate(afterBouncePosition);                                                // 1756
                            s.wrapper.transitionEnd(function () {                                                      // 1757
                                if (!s) return;                                                                        // 1758
                                s.onTransitionEnd();                                                                   // 1759
                            });                                                                                        // 1760
                        });                                                                                            // 1761
                    } else if (s.velocity) {                                                                           // 1762
                        s.updateProgress(newPosition);                                                                 // 1763
                        s.setWrapperTransition(momentumDuration);                                                      // 1764
                        s.setWrapperTranslate(newPosition);                                                            // 1765
                        s.onTransitionStart();                                                                         // 1766
                        if (!s.animating) {                                                                            // 1767
                            s.animating = true;                                                                        // 1768
                            s.wrapper.transitionEnd(function () {                                                      // 1769
                                if (!s) return;                                                                        // 1770
                                s.onTransitionEnd();                                                                   // 1771
                            });                                                                                        // 1772
                        }                                                                                              // 1773
                                                                                                                       // 1774
                    } else {                                                                                           // 1775
                        s.updateProgress(newPosition);                                                                 // 1776
                    }                                                                                                  // 1777
                                                                                                                       // 1778
                    s.updateActiveIndex();                                                                             // 1779
                }                                                                                                      // 1780
                if (!s.params.freeModeMomentum || timeDiff >= s.params.longSwipesMs) {                                 // 1781
                    s.updateProgress();                                                                                // 1782
                    s.updateActiveIndex();                                                                             // 1783
                }                                                                                                      // 1784
                return;                                                                                                // 1785
            }                                                                                                          // 1786
                                                                                                                       // 1787
            // Find current slide                                                                                      // 1788
            var i, stopIndex = 0, groupSize = s.slidesSizesGrid[0];                                                    // 1789
            for (i = 0; i < s.slidesGrid.length; i += s.params.slidesPerGroup) {                                       // 1790
                if (typeof s.slidesGrid[i + s.params.slidesPerGroup] !== 'undefined') {                                // 1791
                    if (currentPos >= s.slidesGrid[i] && currentPos < s.slidesGrid[i + s.params.slidesPerGroup]) {     // 1792
                        stopIndex = i;                                                                                 // 1793
                        groupSize = s.slidesGrid[i + s.params.slidesPerGroup] - s.slidesGrid[i];                       // 1794
                    }                                                                                                  // 1795
                }                                                                                                      // 1796
                else {                                                                                                 // 1797
                    if (currentPos >= s.slidesGrid[i]) {                                                               // 1798
                        stopIndex = i;                                                                                 // 1799
                        groupSize = s.slidesGrid[s.slidesGrid.length - 1] - s.slidesGrid[s.slidesGrid.length - 2];     // 1800
                    }                                                                                                  // 1801
                }                                                                                                      // 1802
            }                                                                                                          // 1803
                                                                                                                       // 1804
            // Find current slide size                                                                                 // 1805
            var ratio = (currentPos - s.slidesGrid[stopIndex]) / groupSize;                                            // 1806
                                                                                                                       // 1807
            if (timeDiff > s.params.longSwipesMs) {                                                                    // 1808
                // Long touches                                                                                        // 1809
                if (!s.params.longSwipes) {                                                                            // 1810
                    s.slideTo(s.activeIndex);                                                                          // 1811
                    return;                                                                                            // 1812
                }                                                                                                      // 1813
                if (s.swipeDirection === 'next') {                                                                     // 1814
                    if (ratio >= s.params.longSwipesRatio) s.slideTo(stopIndex + s.params.slidesPerGroup);             // 1815
                    else s.slideTo(stopIndex);                                                                         // 1816
                                                                                                                       // 1817
                }                                                                                                      // 1818
                if (s.swipeDirection === 'prev') {                                                                     // 1819
                    if (ratio > (1 - s.params.longSwipesRatio)) s.slideTo(stopIndex + s.params.slidesPerGroup);        // 1820
                    else s.slideTo(stopIndex);                                                                         // 1821
                }                                                                                                      // 1822
            }                                                                                                          // 1823
            else {                                                                                                     // 1824
                // Short swipes                                                                                        // 1825
                if (!s.params.shortSwipes) {                                                                           // 1826
                    s.slideTo(s.activeIndex);                                                                          // 1827
                    return;                                                                                            // 1828
                }                                                                                                      // 1829
                if (s.swipeDirection === 'next') {                                                                     // 1830
                    s.slideTo(stopIndex + s.params.slidesPerGroup);                                                    // 1831
                                                                                                                       // 1832
                }                                                                                                      // 1833
                if (s.swipeDirection === 'prev') {                                                                     // 1834
                    s.slideTo(stopIndex);                                                                              // 1835
                }                                                                                                      // 1836
            }                                                                                                          // 1837
        };                                                                                                             // 1838
        /*=========================                                                                                    // 1839
          Transitions                                                                                                  // 1840
          ===========================*/                                                                                // 1841
        s._slideTo = function (slideIndex, speed) {                                                                    // 1842
            return s.slideTo(slideIndex, speed, true, true);                                                           // 1843
        };                                                                                                             // 1844
        s.slideTo = function (slideIndex, speed, runCallbacks, internal) {                                             // 1845
            if (typeof runCallbacks === 'undefined') runCallbacks = true;                                              // 1846
            if (typeof slideIndex === 'undefined') slideIndex = 0;                                                     // 1847
            if (slideIndex < 0) slideIndex = 0;                                                                        // 1848
            s.snapIndex = Math.floor(slideIndex / s.params.slidesPerGroup);                                            // 1849
            if (s.snapIndex >= s.snapGrid.length) s.snapIndex = s.snapGrid.length - 1;                                 // 1850
                                                                                                                       // 1851
            var translate = - s.snapGrid[s.snapIndex];                                                                 // 1852
            // Stop autoplay                                                                                           // 1853
            if (s.params.autoplay && s.autoplaying) {                                                                  // 1854
                if (internal || !s.params.autoplayDisableOnInteraction) {                                              // 1855
                    s.pauseAutoplay(speed);                                                                            // 1856
                }                                                                                                      // 1857
                else {                                                                                                 // 1858
                    s.stopAutoplay();                                                                                  // 1859
                }                                                                                                      // 1860
            }                                                                                                          // 1861
            // Update progress                                                                                         // 1862
            s.updateProgress(translate);                                                                               // 1863
                                                                                                                       // 1864
            // Normalize slideIndex                                                                                    // 1865
            for (var i = 0; i < s.slidesGrid.length; i++) {                                                            // 1866
                if (- Math.floor(translate * 100) >= Math.floor(s.slidesGrid[i] * 100)) {                              // 1867
                    slideIndex = i;                                                                                    // 1868
                }                                                                                                      // 1869
            }                                                                                                          // 1870
                                                                                                                       // 1871
            // Directions locks                                                                                        // 1872
            if (!s.params.allowSwipeToNext && translate < s.translate && translate < s.minTranslate()) {               // 1873
                return false;                                                                                          // 1874
            }                                                                                                          // 1875
            if (!s.params.allowSwipeToPrev && translate > s.translate && translate > s.maxTranslate()) {               // 1876
                if ((s.activeIndex || 0) !== slideIndex ) return false;                                                // 1877
            }                                                                                                          // 1878
                                                                                                                       // 1879
            // Update Index                                                                                            // 1880
            if (typeof speed === 'undefined') speed = s.params.speed;                                                  // 1881
            s.previousIndex = s.activeIndex || 0;                                                                      // 1882
            s.activeIndex = slideIndex;                                                                                // 1883
                                                                                                                       // 1884
            if ((s.rtl && -translate === s.translate) || (!s.rtl && translate === s.translate)) {                      // 1885
                // Update Height                                                                                       // 1886
                if (s.params.autoHeight) {                                                                             // 1887
                    s.updateAutoHeight();                                                                              // 1888
                }                                                                                                      // 1889
                s.updateClasses();                                                                                     // 1890
                if (s.params.effect !== 'slide') {                                                                     // 1891
                    s.setWrapperTranslate(translate);                                                                  // 1892
                }                                                                                                      // 1893
                return false;                                                                                          // 1894
            }                                                                                                          // 1895
            s.updateClasses();                                                                                         // 1896
            s.onTransitionStart(runCallbacks);                                                                         // 1897
                                                                                                                       // 1898
            if (speed === 0) {                                                                                         // 1899
                s.setWrapperTranslate(translate);                                                                      // 1900
                s.setWrapperTransition(0);                                                                             // 1901
                s.onTransitionEnd(runCallbacks);                                                                       // 1902
            }                                                                                                          // 1903
            else {                                                                                                     // 1904
                s.setWrapperTranslate(translate);                                                                      // 1905
                s.setWrapperTransition(speed);                                                                         // 1906
                if (!s.animating) {                                                                                    // 1907
                    s.animating = true;                                                                                // 1908
                    s.wrapper.transitionEnd(function () {                                                              // 1909
                        if (!s) return;                                                                                // 1910
                        s.onTransitionEnd(runCallbacks);                                                               // 1911
                    });                                                                                                // 1912
                }                                                                                                      // 1913
                                                                                                                       // 1914
            }                                                                                                          // 1915
                                                                                                                       // 1916
            return true;                                                                                               // 1917
        };                                                                                                             // 1918
                                                                                                                       // 1919
        s.onTransitionStart = function (runCallbacks) {                                                                // 1920
            if (typeof runCallbacks === 'undefined') runCallbacks = true;                                              // 1921
            if (s.params.autoHeight) {                                                                                 // 1922
                s.updateAutoHeight();                                                                                  // 1923
            }                                                                                                          // 1924
            if (s.lazy) s.lazy.onTransitionStart();                                                                    // 1925
            if (runCallbacks) {                                                                                        // 1926
                s.emit('onTransitionStart', s);                                                                        // 1927
                if (s.activeIndex !== s.previousIndex) {                                                               // 1928
                    s.emit('onSlideChangeStart', s);                                                                   // 1929
                    if (s.activeIndex > s.previousIndex) {                                                             // 1930
                        s.emit('onSlideNextStart', s);                                                                 // 1931
                    }                                                                                                  // 1932
                    else {                                                                                             // 1933
                        s.emit('onSlidePrevStart', s);                                                                 // 1934
                    }                                                                                                  // 1935
                }                                                                                                      // 1936
                                                                                                                       // 1937
            }                                                                                                          // 1938
        };                                                                                                             // 1939
        s.onTransitionEnd = function (runCallbacks) {                                                                  // 1940
            s.animating = false;                                                                                       // 1941
            s.setWrapperTransition(0);                                                                                 // 1942
            if (typeof runCallbacks === 'undefined') runCallbacks = true;                                              // 1943
            if (s.lazy) s.lazy.onTransitionEnd();                                                                      // 1944
            if (runCallbacks) {                                                                                        // 1945
                s.emit('onTransitionEnd', s);                                                                          // 1946
                if (s.activeIndex !== s.previousIndex) {                                                               // 1947
                    s.emit('onSlideChangeEnd', s);                                                                     // 1948
                    if (s.activeIndex > s.previousIndex) {                                                             // 1949
                        s.emit('onSlideNextEnd', s);                                                                   // 1950
                    }                                                                                                  // 1951
                    else {                                                                                             // 1952
                        s.emit('onSlidePrevEnd', s);                                                                   // 1953
                    }                                                                                                  // 1954
                }                                                                                                      // 1955
            }                                                                                                          // 1956
            if (s.params.hashnav && s.hashnav) {                                                                       // 1957
                s.hashnav.setHash();                                                                                   // 1958
            }                                                                                                          // 1959
                                                                                                                       // 1960
        };                                                                                                             // 1961
        s.slideNext = function (runCallbacks, speed, internal) {                                                       // 1962
            if (s.params.loop) {                                                                                       // 1963
                if (s.animating) return false;                                                                         // 1964
                s.fixLoop();                                                                                           // 1965
                var clientLeft = s.container[0].clientLeft;                                                            // 1966
                return s.slideTo(s.activeIndex + s.params.slidesPerGroup, speed, runCallbacks, internal);              // 1967
            }                                                                                                          // 1968
            else return s.slideTo(s.activeIndex + s.params.slidesPerGroup, speed, runCallbacks, internal);             // 1969
        };                                                                                                             // 1970
        s._slideNext = function (speed) {                                                                              // 1971
            return s.slideNext(true, speed, true);                                                                     // 1972
        };                                                                                                             // 1973
        s.slidePrev = function (runCallbacks, speed, internal) {                                                       // 1974
            if (s.params.loop) {                                                                                       // 1975
                if (s.animating) return false;                                                                         // 1976
                s.fixLoop();                                                                                           // 1977
                var clientLeft = s.container[0].clientLeft;                                                            // 1978
                return s.slideTo(s.activeIndex - 1, speed, runCallbacks, internal);                                    // 1979
            }                                                                                                          // 1980
            else return s.slideTo(s.activeIndex - 1, speed, runCallbacks, internal);                                   // 1981
        };                                                                                                             // 1982
        s._slidePrev = function (speed) {                                                                              // 1983
            return s.slidePrev(true, speed, true);                                                                     // 1984
        };                                                                                                             // 1985
        s.slideReset = function (runCallbacks, speed, internal) {                                                      // 1986
            return s.slideTo(s.activeIndex, speed, runCallbacks);                                                      // 1987
        };                                                                                                             // 1988
                                                                                                                       // 1989
        /*=========================                                                                                    // 1990
          Translate/transition helpers                                                                                 // 1991
          ===========================*/                                                                                // 1992
        s.setWrapperTransition = function (duration, byController) {                                                   // 1993
            s.wrapper.transition(duration);                                                                            // 1994
            if (s.params.effect !== 'slide' && s.effects[s.params.effect]) {                                           // 1995
                s.effects[s.params.effect].setTransition(duration);                                                    // 1996
            }                                                                                                          // 1997
            if (s.params.parallax && s.parallax) {                                                                     // 1998
                s.parallax.setTransition(duration);                                                                    // 1999
            }                                                                                                          // 2000
            if (s.params.scrollbar && s.scrollbar) {                                                                   // 2001
                s.scrollbar.setTransition(duration);                                                                   // 2002
            }                                                                                                          // 2003
            if (s.params.control && s.controller) {                                                                    // 2004
                s.controller.setTransition(duration, byController);                                                    // 2005
            }                                                                                                          // 2006
            s.emit('onSetTransition', s, duration);                                                                    // 2007
        };                                                                                                             // 2008
        s.setWrapperTranslate = function (translate, updateActiveIndex, byController) {                                // 2009
            var x = 0, y = 0, z = 0;                                                                                   // 2010
            if (s.isHorizontal()) {                                                                                    // 2011
                x = s.rtl ? -translate : translate;                                                                    // 2012
            }                                                                                                          // 2013
            else {                                                                                                     // 2014
                y = translate;                                                                                         // 2015
            }                                                                                                          // 2016
                                                                                                                       // 2017
            if (s.params.roundLengths) {                                                                               // 2018
                x = round(x);                                                                                          // 2019
                y = round(y);                                                                                          // 2020
            }                                                                                                          // 2021
                                                                                                                       // 2022
            if (!s.params.virtualTranslate) {                                                                          // 2023
                if (s.support.transforms3d) s.wrapper.transform('translate3d(' + x + 'px, ' + y + 'px, ' + z + 'px)');
                else s.wrapper.transform('translate(' + x + 'px, ' + y + 'px)');                                       // 2025
            }                                                                                                          // 2026
                                                                                                                       // 2027
            s.translate = s.isHorizontal() ? x : y;                                                                    // 2028
                                                                                                                       // 2029
            // Check if we need to update progress                                                                     // 2030
            var progress;                                                                                              // 2031
            var translatesDiff = s.maxTranslate() - s.minTranslate();                                                  // 2032
            if (translatesDiff === 0) {                                                                                // 2033
                progress = 0;                                                                                          // 2034
            }                                                                                                          // 2035
            else {                                                                                                     // 2036
                progress = (translate - s.minTranslate()) / (translatesDiff);                                          // 2037
            }                                                                                                          // 2038
            if (progress !== s.progress) {                                                                             // 2039
                s.updateProgress(translate);                                                                           // 2040
            }                                                                                                          // 2041
                                                                                                                       // 2042
            if (updateActiveIndex) s.updateActiveIndex();                                                              // 2043
            if (s.params.effect !== 'slide' && s.effects[s.params.effect]) {                                           // 2044
                s.effects[s.params.effect].setTranslate(s.translate);                                                  // 2045
            }                                                                                                          // 2046
            if (s.params.parallax && s.parallax) {                                                                     // 2047
                s.parallax.setTranslate(s.translate);                                                                  // 2048
            }                                                                                                          // 2049
            if (s.params.scrollbar && s.scrollbar) {                                                                   // 2050
                s.scrollbar.setTranslate(s.translate);                                                                 // 2051
            }                                                                                                          // 2052
            if (s.params.control && s.controller) {                                                                    // 2053
                s.controller.setTranslate(s.translate, byController);                                                  // 2054
            }                                                                                                          // 2055
            s.emit('onSetTranslate', s, s.translate);                                                                  // 2056
        };                                                                                                             // 2057
                                                                                                                       // 2058
        s.getTranslate = function (el, axis) {                                                                         // 2059
            var matrix, curTransform, curStyle, transformMatrix;                                                       // 2060
                                                                                                                       // 2061
            // automatic axis detection                                                                                // 2062
            if (typeof axis === 'undefined') {                                                                         // 2063
                axis = 'x';                                                                                            // 2064
            }                                                                                                          // 2065
                                                                                                                       // 2066
            if (s.params.virtualTranslate) {                                                                           // 2067
                return s.rtl ? -s.translate : s.translate;                                                             // 2068
            }                                                                                                          // 2069
                                                                                                                       // 2070
            curStyle = window.getComputedStyle(el, null);                                                              // 2071
            if (window.WebKitCSSMatrix) {                                                                              // 2072
                curTransform = curStyle.transform || curStyle.webkitTransform;                                         // 2073
                if (curTransform.split(',').length > 6) {                                                              // 2074
                    curTransform = curTransform.split(', ').map(function(a){                                           // 2075
                        return a.replace(',','.');                                                                     // 2076
                    }).join(', ');                                                                                     // 2077
                }                                                                                                      // 2078
                // Some old versions of Webkit choke when 'none' is passed; pass                                       // 2079
                // empty string instead in this case                                                                   // 2080
                transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);             // 2081
            }                                                                                                          // 2082
            else {                                                                                                     // 2083
                transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform  || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
                matrix = transformMatrix.toString().split(',');                                                        // 2085
            }                                                                                                          // 2086
                                                                                                                       // 2087
            if (axis === 'x') {                                                                                        // 2088
                //Latest Chrome and webkits Fix                                                                        // 2089
                if (window.WebKitCSSMatrix)                                                                            // 2090
                    curTransform = transformMatrix.m41;                                                                // 2091
                //Crazy IE10 Matrix                                                                                    // 2092
                else if (matrix.length === 16)                                                                         // 2093
                    curTransform = parseFloat(matrix[12]);                                                             // 2094
                //Normal Browsers                                                                                      // 2095
                else                                                                                                   // 2096
                    curTransform = parseFloat(matrix[4]);                                                              // 2097
            }                                                                                                          // 2098
            if (axis === 'y') {                                                                                        // 2099
                //Latest Chrome and webkits Fix                                                                        // 2100
                if (window.WebKitCSSMatrix)                                                                            // 2101
                    curTransform = transformMatrix.m42;                                                                // 2102
                //Crazy IE10 Matrix                                                                                    // 2103
                else if (matrix.length === 16)                                                                         // 2104
                    curTransform = parseFloat(matrix[13]);                                                             // 2105
                //Normal Browsers                                                                                      // 2106
                else                                                                                                   // 2107
                    curTransform = parseFloat(matrix[5]);                                                              // 2108
            }                                                                                                          // 2109
            if (s.rtl && curTransform) curTransform = -curTransform;                                                   // 2110
            return curTransform || 0;                                                                                  // 2111
        };                                                                                                             // 2112
        s.getWrapperTranslate = function (axis) {                                                                      // 2113
            if (typeof axis === 'undefined') {                                                                         // 2114
                axis = s.isHorizontal() ? 'x' : 'y';                                                                   // 2115
            }                                                                                                          // 2116
            return s.getTranslate(s.wrapper[0], axis);                                                                 // 2117
        };                                                                                                             // 2118
                                                                                                                       // 2119
        /*=========================                                                                                    // 2120
          Observer                                                                                                     // 2121
          ===========================*/                                                                                // 2122
        s.observers = [];                                                                                              // 2123
        function initObserver(target, options) {                                                                       // 2124
            options = options || {};                                                                                   // 2125
            // create an observer instance                                                                             // 2126
            var ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;                               // 2127
            var observer = new ObserverFunc(function (mutations) {                                                     // 2128
                mutations.forEach(function (mutation) {                                                                // 2129
                    s.onResize(true);                                                                                  // 2130
                    s.emit('onObserverUpdate', s, mutation);                                                           // 2131
                });                                                                                                    // 2132
            });                                                                                                        // 2133
                                                                                                                       // 2134
            observer.observe(target, {                                                                                 // 2135
                attributes: typeof options.attributes === 'undefined' ? true : options.attributes,                     // 2136
                childList: typeof options.childList === 'undefined' ? true : options.childList,                        // 2137
                characterData: typeof options.characterData === 'undefined' ? true : options.characterData             // 2138
            });                                                                                                        // 2139
                                                                                                                       // 2140
            s.observers.push(observer);                                                                                // 2141
        }                                                                                                              // 2142
        s.initObservers = function () {                                                                                // 2143
            if (s.params.observeParents) {                                                                             // 2144
                var containerParents = s.container.parents();                                                          // 2145
                for (var i = 0; i < containerParents.length; i++) {                                                    // 2146
                    initObserver(containerParents[i]);                                                                 // 2147
                }                                                                                                      // 2148
            }                                                                                                          // 2149
                                                                                                                       // 2150
            // Observe container                                                                                       // 2151
            initObserver(s.container[0], {childList: false});                                                          // 2152
                                                                                                                       // 2153
            // Observe wrapper                                                                                         // 2154
            initObserver(s.wrapper[0], {attributes: false});                                                           // 2155
        };                                                                                                             // 2156
        s.disconnectObservers = function () {                                                                          // 2157
            for (var i = 0; i < s.observers.length; i++) {                                                             // 2158
                s.observers[i].disconnect();                                                                           // 2159
            }                                                                                                          // 2160
            s.observers = [];                                                                                          // 2161
        };                                                                                                             // 2162
        /*=========================                                                                                    // 2163
          Loop                                                                                                         // 2164
          ===========================*/                                                                                // 2165
        // Create looped slides                                                                                        // 2166
        s.createLoop = function () {                                                                                   // 2167
            // Remove duplicated slides                                                                                // 2168
            s.wrapper.children('.' + s.params.slideClass + '.' + s.params.slideDuplicateClass).remove();               // 2169
                                                                                                                       // 2170
            var slides = s.wrapper.children('.' + s.params.slideClass);                                                // 2171
                                                                                                                       // 2172
            if(s.params.slidesPerView === 'auto' && !s.params.loopedSlides) s.params.loopedSlides = slides.length;     // 2173
                                                                                                                       // 2174
            s.loopedSlides = parseInt(s.params.loopedSlides || s.params.slidesPerView, 10);                            // 2175
            s.loopedSlides = s.loopedSlides + s.params.loopAdditionalSlides;                                           // 2176
            if (s.loopedSlides > slides.length) {                                                                      // 2177
                s.loopedSlides = slides.length;                                                                        // 2178
            }                                                                                                          // 2179
                                                                                                                       // 2180
            var prependSlides = [], appendSlides = [], i;                                                              // 2181
            slides.each(function (index, el) {                                                                         // 2182
                var slide = $(this);                                                                                   // 2183
                if (index < s.loopedSlides) appendSlides.push(el);                                                     // 2184
                if (index < slides.length && index >= slides.length - s.loopedSlides) prependSlides.push(el);          // 2185
                slide.attr('data-swiper-slide-index', index);                                                          // 2186
            });                                                                                                        // 2187
            for (i = 0; i < appendSlides.length; i++) {                                                                // 2188
                s.wrapper.append($(appendSlides[i].cloneNode(true)).addClass(s.params.slideDuplicateClass));           // 2189
            }                                                                                                          // 2190
            for (i = prependSlides.length - 1; i >= 0; i--) {                                                          // 2191
                s.wrapper.prepend($(prependSlides[i].cloneNode(true)).addClass(s.params.slideDuplicateClass));         // 2192
            }                                                                                                          // 2193
        };                                                                                                             // 2194
        s.destroyLoop = function () {                                                                                  // 2195
            s.wrapper.children('.' + s.params.slideClass + '.' + s.params.slideDuplicateClass).remove();               // 2196
            s.slides.removeAttr('data-swiper-slide-index');                                                            // 2197
        };                                                                                                             // 2198
        s.reLoop = function (updatePosition) {                                                                         // 2199
            var oldIndex = s.activeIndex - s.loopedSlides;                                                             // 2200
            s.destroyLoop();                                                                                           // 2201
            s.createLoop();                                                                                            // 2202
            s.updateSlidesSize();                                                                                      // 2203
            if (updatePosition) {                                                                                      // 2204
                s.slideTo(oldIndex + s.loopedSlides, 0, false);                                                        // 2205
            }                                                                                                          // 2206
                                                                                                                       // 2207
        };                                                                                                             // 2208
        s.fixLoop = function () {                                                                                      // 2209
            var newIndex;                                                                                              // 2210
            //Fix For Negative Oversliding                                                                             // 2211
            if (s.activeIndex < s.loopedSlides) {                                                                      // 2212
                newIndex = s.slides.length - s.loopedSlides * 3 + s.activeIndex;                                       // 2213
                newIndex = newIndex + s.loopedSlides;                                                                  // 2214
                s.slideTo(newIndex, 0, false, true);                                                                   // 2215
            }                                                                                                          // 2216
            //Fix For Positive Oversliding                                                                             // 2217
            else if ((s.params.slidesPerView === 'auto' && s.activeIndex >= s.loopedSlides * 2) || (s.activeIndex > s.slides.length - s.params.slidesPerView * 2)) {
                newIndex = -s.slides.length + s.activeIndex + s.loopedSlides;                                          // 2219
                newIndex = newIndex + s.loopedSlides;                                                                  // 2220
                s.slideTo(newIndex, 0, false, true);                                                                   // 2221
            }                                                                                                          // 2222
        };                                                                                                             // 2223
        /*=========================                                                                                    // 2224
          Append/Prepend/Remove Slides                                                                                 // 2225
          ===========================*/                                                                                // 2226
        s.appendSlide = function (slides) {                                                                            // 2227
            if (s.params.loop) {                                                                                       // 2228
                s.destroyLoop();                                                                                       // 2229
            }                                                                                                          // 2230
            if (typeof slides === 'object' && slides.length) {                                                         // 2231
                for (var i = 0; i < slides.length; i++) {                                                              // 2232
                    if (slides[i]) s.wrapper.append(slides[i]);                                                        // 2233
                }                                                                                                      // 2234
            }                                                                                                          // 2235
            else {                                                                                                     // 2236
                s.wrapper.append(slides);                                                                              // 2237
            }                                                                                                          // 2238
            if (s.params.loop) {                                                                                       // 2239
                s.createLoop();                                                                                        // 2240
            }                                                                                                          // 2241
            if (!(s.params.observer && s.support.observer)) {                                                          // 2242
                s.update(true);                                                                                        // 2243
            }                                                                                                          // 2244
        };                                                                                                             // 2245
        s.prependSlide = function (slides) {                                                                           // 2246
            if (s.params.loop) {                                                                                       // 2247
                s.destroyLoop();                                                                                       // 2248
            }                                                                                                          // 2249
            var newActiveIndex = s.activeIndex + 1;                                                                    // 2250
            if (typeof slides === 'object' && slides.length) {                                                         // 2251
                for (var i = 0; i < slides.length; i++) {                                                              // 2252
                    if (slides[i]) s.wrapper.prepend(slides[i]);                                                       // 2253
                }                                                                                                      // 2254
                newActiveIndex = s.activeIndex + slides.length;                                                        // 2255
            }                                                                                                          // 2256
            else {                                                                                                     // 2257
                s.wrapper.prepend(slides);                                                                             // 2258
            }                                                                                                          // 2259
            if (s.params.loop) {                                                                                       // 2260
                s.createLoop();                                                                                        // 2261
            }                                                                                                          // 2262
            if (!(s.params.observer && s.support.observer)) {                                                          // 2263
                s.update(true);                                                                                        // 2264
            }                                                                                                          // 2265
            s.slideTo(newActiveIndex, 0, false);                                                                       // 2266
        };                                                                                                             // 2267
        s.removeSlide = function (slidesIndexes) {                                                                     // 2268
            if (s.params.loop) {                                                                                       // 2269
                s.destroyLoop();                                                                                       // 2270
                s.slides = s.wrapper.children('.' + s.params.slideClass);                                              // 2271
            }                                                                                                          // 2272
            var newActiveIndex = s.activeIndex,                                                                        // 2273
                indexToRemove;                                                                                         // 2274
            if (typeof slidesIndexes === 'object' && slidesIndexes.length) {                                           // 2275
                for (var i = 0; i < slidesIndexes.length; i++) {                                                       // 2276
                    indexToRemove = slidesIndexes[i];                                                                  // 2277
                    if (s.slides[indexToRemove]) s.slides.eq(indexToRemove).remove();                                  // 2278
                    if (indexToRemove < newActiveIndex) newActiveIndex--;                                              // 2279
                }                                                                                                      // 2280
                newActiveIndex = Math.max(newActiveIndex, 0);                                                          // 2281
            }                                                                                                          // 2282
            else {                                                                                                     // 2283
                indexToRemove = slidesIndexes;                                                                         // 2284
                if (s.slides[indexToRemove]) s.slides.eq(indexToRemove).remove();                                      // 2285
                if (indexToRemove < newActiveIndex) newActiveIndex--;                                                  // 2286
                newActiveIndex = Math.max(newActiveIndex, 0);                                                          // 2287
            }                                                                                                          // 2288
                                                                                                                       // 2289
            if (s.params.loop) {                                                                                       // 2290
                s.createLoop();                                                                                        // 2291
            }                                                                                                          // 2292
                                                                                                                       // 2293
            if (!(s.params.observer && s.support.observer)) {                                                          // 2294
                s.update(true);                                                                                        // 2295
            }                                                                                                          // 2296
            if (s.params.loop) {                                                                                       // 2297
                s.slideTo(newActiveIndex + s.loopedSlides, 0, false);                                                  // 2298
            }                                                                                                          // 2299
            else {                                                                                                     // 2300
                s.slideTo(newActiveIndex, 0, false);                                                                   // 2301
            }                                                                                                          // 2302
                                                                                                                       // 2303
        };                                                                                                             // 2304
        s.removeAllSlides = function () {                                                                              // 2305
            var slidesIndexes = [];                                                                                    // 2306
            for (var i = 0; i < s.slides.length; i++) {                                                                // 2307
                slidesIndexes.push(i);                                                                                 // 2308
            }                                                                                                          // 2309
            s.removeSlide(slidesIndexes);                                                                              // 2310
        };                                                                                                             // 2311
                                                                                                                       // 2312
                                                                                                                       // 2313
        /*=========================                                                                                    // 2314
          Effects                                                                                                      // 2315
          ===========================*/                                                                                // 2316
        s.effects = {                                                                                                  // 2317
            fade: {                                                                                                    // 2318
                setTranslate: function () {                                                                            // 2319
                    for (var i = 0; i < s.slides.length; i++) {                                                        // 2320
                        var slide = s.slides.eq(i);                                                                    // 2321
                        var offset = slide[0].swiperSlideOffset;                                                       // 2322
                        var tx = -offset;                                                                              // 2323
                        if (!s.params.virtualTranslate) tx = tx - s.translate;                                         // 2324
                        var ty = 0;                                                                                    // 2325
                        if (!s.isHorizontal()) {                                                                       // 2326
                            ty = tx;                                                                                   // 2327
                            tx = 0;                                                                                    // 2328
                        }                                                                                              // 2329
                        var slideOpacity = s.params.fade.crossFade ?                                                   // 2330
                                Math.max(1 - Math.abs(slide[0].progress), 0) :                                         // 2331
                                1 + Math.min(Math.max(slide[0].progress, -1), 0);                                      // 2332
                        slide                                                                                          // 2333
                            .css({                                                                                     // 2334
                                opacity: slideOpacity                                                                  // 2335
                            })                                                                                         // 2336
                            .transform('translate3d(' + tx + 'px, ' + ty + 'px, 0px)');                                // 2337
                                                                                                                       // 2338
                    }                                                                                                  // 2339
                                                                                                                       // 2340
                },                                                                                                     // 2341
                setTransition: function (duration) {                                                                   // 2342
                    s.slides.transition(duration);                                                                     // 2343
                    if (s.params.virtualTranslate && duration !== 0) {                                                 // 2344
                        var eventTriggered = false;                                                                    // 2345
                        s.slides.transitionEnd(function () {                                                           // 2346
                            if (eventTriggered) return;                                                                // 2347
                            if (!s) return;                                                                            // 2348
                            eventTriggered = true;                                                                     // 2349
                            s.animating = false;                                                                       // 2350
                            var triggerEvents = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'];
                            for (var i = 0; i < triggerEvents.length; i++) {                                           // 2352
                                s.wrapper.trigger(triggerEvents[i]);                                                   // 2353
                            }                                                                                          // 2354
                        });                                                                                            // 2355
                    }                                                                                                  // 2356
                }                                                                                                      // 2357
            },                                                                                                         // 2358
            flip: {                                                                                                    // 2359
                setTranslate: function () {                                                                            // 2360
                    for (var i = 0; i < s.slides.length; i++) {                                                        // 2361
                        var slide = s.slides.eq(i);                                                                    // 2362
                        var progress = slide[0].progress;                                                              // 2363
                        if (s.params.flip.limitRotation) {                                                             // 2364
                            progress = Math.max(Math.min(slide[0].progress, 1), -1);                                   // 2365
                        }                                                                                              // 2366
                        var offset = slide[0].swiperSlideOffset;                                                       // 2367
                        var rotate = -180 * progress,                                                                  // 2368
                            rotateY = rotate,                                                                          // 2369
                            rotateX = 0,                                                                               // 2370
                            tx = -offset,                                                                              // 2371
                            ty = 0;                                                                                    // 2372
                        if (!s.isHorizontal()) {                                                                       // 2373
                            ty = tx;                                                                                   // 2374
                            tx = 0;                                                                                    // 2375
                            rotateX = -rotateY;                                                                        // 2376
                            rotateY = 0;                                                                               // 2377
                        }                                                                                              // 2378
                        else if (s.rtl) {                                                                              // 2379
                            rotateY = -rotateY;                                                                        // 2380
                        }                                                                                              // 2381
                                                                                                                       // 2382
                        slide[0].style.zIndex = -Math.abs(Math.round(progress)) + s.slides.length;                     // 2383
                                                                                                                       // 2384
                        if (s.params.flip.slideShadows) {                                                              // 2385
                            //Set shadows                                                                              // 2386
                            var shadowBefore = s.isHorizontal() ? slide.find('.swiper-slide-shadow-left') : slide.find('.swiper-slide-shadow-top');
                            var shadowAfter = s.isHorizontal() ? slide.find('.swiper-slide-shadow-right') : slide.find('.swiper-slide-shadow-bottom');
                            if (shadowBefore.length === 0) {                                                           // 2389
                                shadowBefore = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'left' : 'top') + '"></div>');
                                slide.append(shadowBefore);                                                            // 2391
                            }                                                                                          // 2392
                            if (shadowAfter.length === 0) {                                                            // 2393
                                shadowAfter = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'right' : 'bottom') + '"></div>');
                                slide.append(shadowAfter);                                                             // 2395
                            }                                                                                          // 2396
                            if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);           // 2397
                            if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);              // 2398
                        }                                                                                              // 2399
                                                                                                                       // 2400
                        slide                                                                                          // 2401
                            .transform('translate3d(' + tx + 'px, ' + ty + 'px, 0px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)');
                    }                                                                                                  // 2403
                },                                                                                                     // 2404
                setTransition: function (duration) {                                                                   // 2405
                    s.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
                    if (s.params.virtualTranslate && duration !== 0) {                                                 // 2407
                        var eventTriggered = false;                                                                    // 2408
                        s.slides.eq(s.activeIndex).transitionEnd(function () {                                         // 2409
                            if (eventTriggered) return;                                                                // 2410
                            if (!s) return;                                                                            // 2411
                            if (!$(this).hasClass(s.params.slideActiveClass)) return;                                  // 2412
                            eventTriggered = true;                                                                     // 2413
                            s.animating = false;                                                                       // 2414
                            var triggerEvents = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'];
                            for (var i = 0; i < triggerEvents.length; i++) {                                           // 2416
                                s.wrapper.trigger(triggerEvents[i]);                                                   // 2417
                            }                                                                                          // 2418
                        });                                                                                            // 2419
                    }                                                                                                  // 2420
                }                                                                                                      // 2421
            },                                                                                                         // 2422
            cube: {                                                                                                    // 2423
                setTranslate: function () {                                                                            // 2424
                    var wrapperRotate = 0, cubeShadow;                                                                 // 2425
                    if (s.params.cube.shadow) {                                                                        // 2426
                        if (s.isHorizontal()) {                                                                        // 2427
                            cubeShadow = s.wrapper.find('.swiper-cube-shadow');                                        // 2428
                            if (cubeShadow.length === 0) {                                                             // 2429
                                cubeShadow = $('<div class="swiper-cube-shadow"></div>');                              // 2430
                                s.wrapper.append(cubeShadow);                                                          // 2431
                            }                                                                                          // 2432
                            cubeShadow.css({height: s.width + 'px'});                                                  // 2433
                        }                                                                                              // 2434
                        else {                                                                                         // 2435
                            cubeShadow = s.container.find('.swiper-cube-shadow');                                      // 2436
                            if (cubeShadow.length === 0) {                                                             // 2437
                                cubeShadow = $('<div class="swiper-cube-shadow"></div>');                              // 2438
                                s.container.append(cubeShadow);                                                        // 2439
                            }                                                                                          // 2440
                        }                                                                                              // 2441
                    }                                                                                                  // 2442
                    for (var i = 0; i < s.slides.length; i++) {                                                        // 2443
                        var slide = s.slides.eq(i);                                                                    // 2444
                        var slideAngle = i * 90;                                                                       // 2445
                        var round = Math.floor(slideAngle / 360);                                                      // 2446
                        if (s.rtl) {                                                                                   // 2447
                            slideAngle = -slideAngle;                                                                  // 2448
                            round = Math.floor(-slideAngle / 360);                                                     // 2449
                        }                                                                                              // 2450
                        var progress = Math.max(Math.min(slide[0].progress, 1), -1);                                   // 2451
                        var tx = 0, ty = 0, tz = 0;                                                                    // 2452
                        if (i % 4 === 0) {                                                                             // 2453
                            tx = - round * 4 * s.size;                                                                 // 2454
                            tz = 0;                                                                                    // 2455
                        }                                                                                              // 2456
                        else if ((i - 1) % 4 === 0) {                                                                  // 2457
                            tx = 0;                                                                                    // 2458
                            tz = - round * 4 * s.size;                                                                 // 2459
                        }                                                                                              // 2460
                        else if ((i - 2) % 4 === 0) {                                                                  // 2461
                            tx = s.size + round * 4 * s.size;                                                          // 2462
                            tz = s.size;                                                                               // 2463
                        }                                                                                              // 2464
                        else if ((i - 3) % 4 === 0) {                                                                  // 2465
                            tx = - s.size;                                                                             // 2466
                            tz = 3 * s.size + s.size * 4 * round;                                                      // 2467
                        }                                                                                              // 2468
                        if (s.rtl) {                                                                                   // 2469
                            tx = -tx;                                                                                  // 2470
                        }                                                                                              // 2471
                                                                                                                       // 2472
                        if (!s.isHorizontal()) {                                                                       // 2473
                            ty = tx;                                                                                   // 2474
                            tx = 0;                                                                                    // 2475
                        }                                                                                              // 2476
                                                                                                                       // 2477
                        var transform = 'rotateX(' + (s.isHorizontal() ? 0 : -slideAngle) + 'deg) rotateY(' + (s.isHorizontal() ? slideAngle : 0) + 'deg) translate3d(' + tx + 'px, ' + ty + 'px, ' + tz + 'px)';
                        if (progress <= 1 && progress > -1) {                                                          // 2479
                            wrapperRotate = i * 90 + progress * 90;                                                    // 2480
                            if (s.rtl) wrapperRotate = -i * 90 - progress * 90;                                        // 2481
                        }                                                                                              // 2482
                        slide.transform(transform);                                                                    // 2483
                        if (s.params.cube.slideShadows) {                                                              // 2484
                            //Set shadows                                                                              // 2485
                            var shadowBefore = s.isHorizontal() ? slide.find('.swiper-slide-shadow-left') : slide.find('.swiper-slide-shadow-top');
                            var shadowAfter = s.isHorizontal() ? slide.find('.swiper-slide-shadow-right') : slide.find('.swiper-slide-shadow-bottom');
                            if (shadowBefore.length === 0) {                                                           // 2488
                                shadowBefore = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'left' : 'top') + '"></div>');
                                slide.append(shadowBefore);                                                            // 2490
                            }                                                                                          // 2491
                            if (shadowAfter.length === 0) {                                                            // 2492
                                shadowAfter = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'right' : 'bottom') + '"></div>');
                                slide.append(shadowAfter);                                                             // 2494
                            }                                                                                          // 2495
                            if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);           // 2496
                            if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);              // 2497
                        }                                                                                              // 2498
                    }                                                                                                  // 2499
                    s.wrapper.css({                                                                                    // 2500
                        '-webkit-transform-origin': '50% 50% -' + (s.size / 2) + 'px',                                 // 2501
                        '-moz-transform-origin': '50% 50% -' + (s.size / 2) + 'px',                                    // 2502
                        '-ms-transform-origin': '50% 50% -' + (s.size / 2) + 'px',                                     // 2503
                        'transform-origin': '50% 50% -' + (s.size / 2) + 'px'                                          // 2504
                    });                                                                                                // 2505
                                                                                                                       // 2506
                    if (s.params.cube.shadow) {                                                                        // 2507
                        if (s.isHorizontal()) {                                                                        // 2508
                            cubeShadow.transform('translate3d(0px, ' + (s.width / 2 + s.params.cube.shadowOffset) + 'px, ' + (-s.width / 2) + 'px) rotateX(90deg) rotateZ(0deg) scale(' + (s.params.cube.shadowScale) + ')');
                        }                                                                                              // 2510
                        else {                                                                                         // 2511
                            var shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
                            var multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
                            var scale1 = s.params.cube.shadowScale,                                                    // 2514
                                scale2 = s.params.cube.shadowScale / multiplier,                                       // 2515
                                offset = s.params.cube.shadowOffset;                                                   // 2516
                            cubeShadow.transform('scale3d(' + scale1 + ', 1, ' + scale2 + ') translate3d(0px, ' + (s.height / 2 + offset) + 'px, ' + (-s.height / 2 / scale2) + 'px) rotateX(-90deg)');
                        }                                                                                              // 2518
                    }                                                                                                  // 2519
                    var zFactor = (s.isSafari || s.isUiWebView) ? (-s.size / 2) : 0;                                   // 2520
                    s.wrapper.transform('translate3d(0px,0,' + zFactor + 'px) rotateX(' + (s.isHorizontal() ? 0 : wrapperRotate) + 'deg) rotateY(' + (s.isHorizontal() ? -wrapperRotate : 0) + 'deg)');
                },                                                                                                     // 2522
                setTransition: function (duration) {                                                                   // 2523
                    s.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
                    if (s.params.cube.shadow && !s.isHorizontal()) {                                                   // 2525
                        s.container.find('.swiper-cube-shadow').transition(duration);                                  // 2526
                    }                                                                                                  // 2527
                }                                                                                                      // 2528
            },                                                                                                         // 2529
            coverflow: {                                                                                               // 2530
                setTranslate: function () {                                                                            // 2531
                    var transform = s.translate;                                                                       // 2532
                    var center = s.isHorizontal() ? -transform + s.width / 2 : -transform + s.height / 2;              // 2533
                    var rotate = s.isHorizontal() ? s.params.coverflow.rotate: -s.params.coverflow.rotate;             // 2534
                    var translate = s.params.coverflow.depth;                                                          // 2535
                    //Each slide offset from center                                                                    // 2536
                    for (var i = 0, length = s.slides.length; i < length; i++) {                                       // 2537
                        var slide = s.slides.eq(i);                                                                    // 2538
                        var slideSize = s.slidesSizesGrid[i];                                                          // 2539
                        var slideOffset = slide[0].swiperSlideOffset;                                                  // 2540
                        var offsetMultiplier = (center - slideOffset - slideSize / 2) / slideSize * s.params.coverflow.modifier;
                                                                                                                       // 2542
                        var rotateY = s.isHorizontal() ? rotate * offsetMultiplier : 0;                                // 2543
                        var rotateX = s.isHorizontal() ? 0 : rotate * offsetMultiplier;                                // 2544
                        // var rotateZ = 0                                                                             // 2545
                        var translateZ = -translate * Math.abs(offsetMultiplier);                                      // 2546
                                                                                                                       // 2547
                        var translateY = s.isHorizontal() ? 0 : s.params.coverflow.stretch * (offsetMultiplier);       // 2548
                        var translateX = s.isHorizontal() ? s.params.coverflow.stretch * (offsetMultiplier) : 0;       // 2549
                                                                                                                       // 2550
                        //Fix for ultra small values                                                                   // 2551
                        if (Math.abs(translateX) < 0.001) translateX = 0;                                              // 2552
                        if (Math.abs(translateY) < 0.001) translateY = 0;                                              // 2553
                        if (Math.abs(translateZ) < 0.001) translateZ = 0;                                              // 2554
                        if (Math.abs(rotateY) < 0.001) rotateY = 0;                                                    // 2555
                        if (Math.abs(rotateX) < 0.001) rotateX = 0;                                                    // 2556
                                                                                                                       // 2557
                        var slideTransform = 'translate3d(' + translateX + 'px,' + translateY + 'px,' + translateZ + 'px)  rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)';
                                                                                                                       // 2559
                        slide.transform(slideTransform);                                                               // 2560
                        slide[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;                           // 2561
                        if (s.params.coverflow.slideShadows) {                                                         // 2562
                            //Set shadows                                                                              // 2563
                            var shadowBefore = s.isHorizontal() ? slide.find('.swiper-slide-shadow-left') : slide.find('.swiper-slide-shadow-top');
                            var shadowAfter = s.isHorizontal() ? slide.find('.swiper-slide-shadow-right') : slide.find('.swiper-slide-shadow-bottom');
                            if (shadowBefore.length === 0) {                                                           // 2566
                                shadowBefore = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'left' : 'top') + '"></div>');
                                slide.append(shadowBefore);                                                            // 2568
                            }                                                                                          // 2569
                            if (shadowAfter.length === 0) {                                                            // 2570
                                shadowAfter = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'right' : 'bottom') + '"></div>');
                                slide.append(shadowAfter);                                                             // 2572
                            }                                                                                          // 2573
                            if (shadowBefore.length) shadowBefore[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
                            if (shadowAfter.length) shadowAfter[0].style.opacity = (-offsetMultiplier) > 0 ? -offsetMultiplier : 0;
                        }                                                                                              // 2576
                    }                                                                                                  // 2577
                                                                                                                       // 2578
                    //Set correct perspective for IE10                                                                 // 2579
                    if (s.browser.ie) {                                                                                // 2580
                        var ws = s.wrapper[0].style;                                                                   // 2581
                        ws.perspectiveOrigin = center + 'px 50%';                                                      // 2582
                    }                                                                                                  // 2583
                },                                                                                                     // 2584
                setTransition: function (duration) {                                                                   // 2585
                    s.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
                }                                                                                                      // 2587
            }                                                                                                          // 2588
        };                                                                                                             // 2589
                                                                                                                       // 2590
        /*=========================                                                                                    // 2591
          Images Lazy Loading                                                                                          // 2592
          ===========================*/                                                                                // 2593
        s.lazy = {                                                                                                     // 2594
            initialImageLoaded: false,                                                                                 // 2595
            loadImageInSlide: function (index, loadInDuplicate) {                                                      // 2596
                if (typeof index === 'undefined') return;                                                              // 2597
                if (typeof loadInDuplicate === 'undefined') loadInDuplicate = true;                                    // 2598
                if (s.slides.length === 0) return;                                                                     // 2599
                                                                                                                       // 2600
                var slide = s.slides.eq(index);                                                                        // 2601
                var img = slide.find('.swiper-lazy:not(.swiper-lazy-loaded):not(.swiper-lazy-loading)');               // 2602
                if (slide.hasClass('swiper-lazy') && !slide.hasClass('swiper-lazy-loaded') && !slide.hasClass('swiper-lazy-loading')) {
                    img = img.add(slide[0]);                                                                           // 2604
                }                                                                                                      // 2605
                if (img.length === 0) return;                                                                          // 2606
                                                                                                                       // 2607
                img.each(function () {                                                                                 // 2608
                    var _img = $(this);                                                                                // 2609
                    _img.addClass('swiper-lazy-loading');                                                              // 2610
                    var background = _img.attr('data-background');                                                     // 2611
                    var src = _img.attr('data-src'),                                                                   // 2612
                        srcset = _img.attr('data-srcset');                                                             // 2613
                    s.loadImage(_img[0], (src || background), srcset, false, function () {                             // 2614
                        if (background) {                                                                              // 2615
                            _img.css('background-image', 'url("' + background + '")');                                 // 2616
                            _img.removeAttr('data-background');                                                        // 2617
                        }                                                                                              // 2618
                        else {                                                                                         // 2619
                            if (srcset) {                                                                              // 2620
                                _img.attr('srcset', srcset);                                                           // 2621
                                _img.removeAttr('data-srcset');                                                        // 2622
                            }                                                                                          // 2623
                            if (src) {                                                                                 // 2624
                                _img.attr('src', src);                                                                 // 2625
                                _img.removeAttr('data-src');                                                           // 2626
                            }                                                                                          // 2627
                                                                                                                       // 2628
                        }                                                                                              // 2629
                                                                                                                       // 2630
                        _img.addClass('swiper-lazy-loaded').removeClass('swiper-lazy-loading');                        // 2631
                        slide.find('.swiper-lazy-preloader, .preloader').remove();                                     // 2632
                        if (s.params.loop && loadInDuplicate) {                                                        // 2633
                            var slideOriginalIndex = slide.attr('data-swiper-slide-index');                            // 2634
                            if (slide.hasClass(s.params.slideDuplicateClass)) {                                        // 2635
                                var originalSlide = s.wrapper.children('[data-swiper-slide-index="' + slideOriginalIndex + '"]:not(.' + s.params.slideDuplicateClass + ')');
                                s.lazy.loadImageInSlide(originalSlide.index(), false);                                 // 2637
                            }                                                                                          // 2638
                            else {                                                                                     // 2639
                                var duplicatedSlide = s.wrapper.children('.' + s.params.slideDuplicateClass + '[data-swiper-slide-index="' + slideOriginalIndex + '"]');
                                s.lazy.loadImageInSlide(duplicatedSlide.index(), false);                               // 2641
                            }                                                                                          // 2642
                        }                                                                                              // 2643
                        s.emit('onLazyImageReady', s, slide[0], _img[0]);                                              // 2644
                    });                                                                                                // 2645
                                                                                                                       // 2646
                    s.emit('onLazyImageLoad', s, slide[0], _img[0]);                                                   // 2647
                });                                                                                                    // 2648
                                                                                                                       // 2649
            },                                                                                                         // 2650
            load: function () {                                                                                        // 2651
                var i;                                                                                                 // 2652
                if (s.params.watchSlidesVisibility) {                                                                  // 2653
                    s.wrapper.children('.' + s.params.slideVisibleClass).each(function () {                            // 2654
                        s.lazy.loadImageInSlide($(this).index());                                                      // 2655
                    });                                                                                                // 2656
                }                                                                                                      // 2657
                else {                                                                                                 // 2658
                    if (s.params.slidesPerView > 1) {                                                                  // 2659
                        for (i = s.activeIndex; i < s.activeIndex + s.params.slidesPerView ; i++) {                    // 2660
                            if (s.slides[i]) s.lazy.loadImageInSlide(i);                                               // 2661
                        }                                                                                              // 2662
                    }                                                                                                  // 2663
                    else {                                                                                             // 2664
                        s.lazy.loadImageInSlide(s.activeIndex);                                                        // 2665
                    }                                                                                                  // 2666
                }                                                                                                      // 2667
                if (s.params.lazyLoadingInPrevNext) {                                                                  // 2668
                    if (s.params.slidesPerView > 1 || (s.params.lazyLoadingInPrevNextAmount && s.params.lazyLoadingInPrevNextAmount > 1)) {
                        var amount = s.params.lazyLoadingInPrevNextAmount;                                             // 2670
                        var spv = s.params.slidesPerView;                                                              // 2671
                        var maxIndex = Math.min(s.activeIndex + spv + Math.max(amount, spv), s.slides.length);         // 2672
                        var minIndex = Math.max(s.activeIndex - Math.max(spv, amount), 0);                             // 2673
                        // Next Slides                                                                                 // 2674
                        for (i = s.activeIndex + s.params.slidesPerView; i < maxIndex; i++) {                          // 2675
                            if (s.slides[i]) s.lazy.loadImageInSlide(i);                                               // 2676
                        }                                                                                              // 2677
                        // Prev Slides                                                                                 // 2678
                        for (i = minIndex; i < s.activeIndex ; i++) {                                                  // 2679
                            if (s.slides[i]) s.lazy.loadImageInSlide(i);                                               // 2680
                        }                                                                                              // 2681
                    }                                                                                                  // 2682
                    else {                                                                                             // 2683
                        var nextSlide = s.wrapper.children('.' + s.params.slideNextClass);                             // 2684
                        if (nextSlide.length > 0) s.lazy.loadImageInSlide(nextSlide.index());                          // 2685
                                                                                                                       // 2686
                        var prevSlide = s.wrapper.children('.' + s.params.slidePrevClass);                             // 2687
                        if (prevSlide.length > 0) s.lazy.loadImageInSlide(prevSlide.index());                          // 2688
                    }                                                                                                  // 2689
                }                                                                                                      // 2690
            },                                                                                                         // 2691
            onTransitionStart: function () {                                                                           // 2692
                if (s.params.lazyLoading) {                                                                            // 2693
                    if (s.params.lazyLoadingOnTransitionStart || (!s.params.lazyLoadingOnTransitionStart && !s.lazy.initialImageLoaded)) {
                        s.lazy.load();                                                                                 // 2695
                    }                                                                                                  // 2696
                }                                                                                                      // 2697
            },                                                                                                         // 2698
            onTransitionEnd: function () {                                                                             // 2699
                if (s.params.lazyLoading && !s.params.lazyLoadingOnTransitionStart) {                                  // 2700
                    s.lazy.load();                                                                                     // 2701
                }                                                                                                      // 2702
            }                                                                                                          // 2703
        };                                                                                                             // 2704
                                                                                                                       // 2705
                                                                                                                       // 2706
        /*=========================                                                                                    // 2707
          Scrollbar                                                                                                    // 2708
          ===========================*/                                                                                // 2709
        s.scrollbar = {                                                                                                // 2710
            isTouched: false,                                                                                          // 2711
            setDragPosition: function (e) {                                                                            // 2712
                var sb = s.scrollbar;                                                                                  // 2713
                var x = 0, y = 0;                                                                                      // 2714
                var translate;                                                                                         // 2715
                var pointerPosition = s.isHorizontal() ?                                                               // 2716
                    ((e.type === 'touchstart' || e.type === 'touchmove') ? e.targetTouches[0].pageX : e.pageX || e.clientX) :
                    ((e.type === 'touchstart' || e.type === 'touchmove') ? e.targetTouches[0].pageY : e.pageY || e.clientY) ;
                var position = (pointerPosition) - sb.track.offset()[s.isHorizontal() ? 'left' : 'top'] - sb.dragSize / 2;
                var positionMin = -s.minTranslate() * sb.moveDivider;                                                  // 2720
                var positionMax = -s.maxTranslate() * sb.moveDivider;                                                  // 2721
                if (position < positionMin) {                                                                          // 2722
                    position = positionMin;                                                                            // 2723
                }                                                                                                      // 2724
                else if (position > positionMax) {                                                                     // 2725
                    position = positionMax;                                                                            // 2726
                }                                                                                                      // 2727
                position = -position / sb.moveDivider;                                                                 // 2728
                s.updateProgress(position);                                                                            // 2729
                s.setWrapperTranslate(position, true);                                                                 // 2730
            },                                                                                                         // 2731
            dragStart: function (e) {                                                                                  // 2732
                var sb = s.scrollbar;                                                                                  // 2733
                sb.isTouched = true;                                                                                   // 2734
                e.preventDefault();                                                                                    // 2735
                e.stopPropagation();                                                                                   // 2736
                                                                                                                       // 2737
                sb.setDragPosition(e);                                                                                 // 2738
                clearTimeout(sb.dragTimeout);                                                                          // 2739
                                                                                                                       // 2740
                sb.track.transition(0);                                                                                // 2741
                if (s.params.scrollbarHide) {                                                                          // 2742
                    sb.track.css('opacity', 1);                                                                        // 2743
                }                                                                                                      // 2744
                s.wrapper.transition(100);                                                                             // 2745
                sb.drag.transition(100);                                                                               // 2746
                s.emit('onScrollbarDragStart', s);                                                                     // 2747
            },                                                                                                         // 2748
            dragMove: function (e) {                                                                                   // 2749
                var sb = s.scrollbar;                                                                                  // 2750
                if (!sb.isTouched) return;                                                                             // 2751
                if (e.preventDefault) e.preventDefault();                                                              // 2752
                else e.returnValue = false;                                                                            // 2753
                sb.setDragPosition(e);                                                                                 // 2754
                s.wrapper.transition(0);                                                                               // 2755
                sb.track.transition(0);                                                                                // 2756
                sb.drag.transition(0);                                                                                 // 2757
                s.emit('onScrollbarDragMove', s);                                                                      // 2758
            },                                                                                                         // 2759
            dragEnd: function (e) {                                                                                    // 2760
                var sb = s.scrollbar;                                                                                  // 2761
                if (!sb.isTouched) return;                                                                             // 2762
                sb.isTouched = false;                                                                                  // 2763
                if (s.params.scrollbarHide) {                                                                          // 2764
                    clearTimeout(sb.dragTimeout);                                                                      // 2765
                    sb.dragTimeout = setTimeout(function () {                                                          // 2766
                        sb.track.css('opacity', 0);                                                                    // 2767
                        sb.track.transition(400);                                                                      // 2768
                    }, 1000);                                                                                          // 2769
                                                                                                                       // 2770
                }                                                                                                      // 2771
                s.emit('onScrollbarDragEnd', s);                                                                       // 2772
                if (s.params.scrollbarSnapOnRelease) {                                                                 // 2773
                    s.slideReset();                                                                                    // 2774
                }                                                                                                      // 2775
            },                                                                                                         // 2776
            enableDraggable: function () {                                                                             // 2777
                var sb = s.scrollbar;                                                                                  // 2778
                var target = s.support.touch ? sb.track : document;                                                    // 2779
                $(sb.track).on(s.touchEvents.start, sb.dragStart);                                                     // 2780
                $(target).on(s.touchEvents.move, sb.dragMove);                                                         // 2781
                $(target).on(s.touchEvents.end, sb.dragEnd);                                                           // 2782
            },                                                                                                         // 2783
            disableDraggable: function () {                                                                            // 2784
                var sb = s.scrollbar;                                                                                  // 2785
                var target = s.support.touch ? sb.track : document;                                                    // 2786
                $(sb.track).off(s.touchEvents.start, sb.dragStart);                                                    // 2787
                $(target).off(s.touchEvents.move, sb.dragMove);                                                        // 2788
                $(target).off(s.touchEvents.end, sb.dragEnd);                                                          // 2789
            },                                                                                                         // 2790
            set: function () {                                                                                         // 2791
                if (!s.params.scrollbar) return;                                                                       // 2792
                var sb = s.scrollbar;                                                                                  // 2793
                sb.track = $(s.params.scrollbar);                                                                      // 2794
                if (s.params.uniqueNavElements && typeof s.params.scrollbar === 'string' && sb.track.length > 1 && s.container.find(s.params.scrollbar).length === 1) {
                    sb.track = s.container.find(s.params.scrollbar);                                                   // 2796
                }                                                                                                      // 2797
                sb.drag = sb.track.find('.swiper-scrollbar-drag');                                                     // 2798
                if (sb.drag.length === 0) {                                                                            // 2799
                    sb.drag = $('<div class="swiper-scrollbar-drag"></div>');                                          // 2800
                    sb.track.append(sb.drag);                                                                          // 2801
                }                                                                                                      // 2802
                sb.drag[0].style.width = '';                                                                           // 2803
                sb.drag[0].style.height = '';                                                                          // 2804
                sb.trackSize = s.isHorizontal() ? sb.track[0].offsetWidth : sb.track[0].offsetHeight;                  // 2805
                                                                                                                       // 2806
                sb.divider = s.size / s.virtualSize;                                                                   // 2807
                sb.moveDivider = sb.divider * (sb.trackSize / s.size);                                                 // 2808
                sb.dragSize = sb.trackSize * sb.divider;                                                               // 2809
                                                                                                                       // 2810
                if (s.isHorizontal()) {                                                                                // 2811
                    sb.drag[0].style.width = sb.dragSize + 'px';                                                       // 2812
                }                                                                                                      // 2813
                else {                                                                                                 // 2814
                    sb.drag[0].style.height = sb.dragSize + 'px';                                                      // 2815
                }                                                                                                      // 2816
                                                                                                                       // 2817
                if (sb.divider >= 1) {                                                                                 // 2818
                    sb.track[0].style.display = 'none';                                                                // 2819
                }                                                                                                      // 2820
                else {                                                                                                 // 2821
                    sb.track[0].style.display = '';                                                                    // 2822
                }                                                                                                      // 2823
                if (s.params.scrollbarHide) {                                                                          // 2824
                    sb.track[0].style.opacity = 0;                                                                     // 2825
                }                                                                                                      // 2826
            },                                                                                                         // 2827
            setTranslate: function () {                                                                                // 2828
                if (!s.params.scrollbar) return;                                                                       // 2829
                var diff;                                                                                              // 2830
                var sb = s.scrollbar;                                                                                  // 2831
                var translate = s.translate || 0;                                                                      // 2832
                var newPos;                                                                                            // 2833
                                                                                                                       // 2834
                var newSize = sb.dragSize;                                                                             // 2835
                newPos = (sb.trackSize - sb.dragSize) * s.progress;                                                    // 2836
                if (s.rtl && s.isHorizontal()) {                                                                       // 2837
                    newPos = -newPos;                                                                                  // 2838
                    if (newPos > 0) {                                                                                  // 2839
                        newSize = sb.dragSize - newPos;                                                                // 2840
                        newPos = 0;                                                                                    // 2841
                    }                                                                                                  // 2842
                    else if (-newPos + sb.dragSize > sb.trackSize) {                                                   // 2843
                        newSize = sb.trackSize + newPos;                                                               // 2844
                    }                                                                                                  // 2845
                }                                                                                                      // 2846
                else {                                                                                                 // 2847
                    if (newPos < 0) {                                                                                  // 2848
                        newSize = sb.dragSize + newPos;                                                                // 2849
                        newPos = 0;                                                                                    // 2850
                    }                                                                                                  // 2851
                    else if (newPos + sb.dragSize > sb.trackSize) {                                                    // 2852
                        newSize = sb.trackSize - newPos;                                                               // 2853
                    }                                                                                                  // 2854
                }                                                                                                      // 2855
                if (s.isHorizontal()) {                                                                                // 2856
                    if (s.support.transforms3d) {                                                                      // 2857
                        sb.drag.transform('translate3d(' + (newPos) + 'px, 0, 0)');                                    // 2858
                    }                                                                                                  // 2859
                    else {                                                                                             // 2860
                        sb.drag.transform('translateX(' + (newPos) + 'px)');                                           // 2861
                    }                                                                                                  // 2862
                    sb.drag[0].style.width = newSize + 'px';                                                           // 2863
                }                                                                                                      // 2864
                else {                                                                                                 // 2865
                    if (s.support.transforms3d) {                                                                      // 2866
                        sb.drag.transform('translate3d(0px, ' + (newPos) + 'px, 0)');                                  // 2867
                    }                                                                                                  // 2868
                    else {                                                                                             // 2869
                        sb.drag.transform('translateY(' + (newPos) + 'px)');                                           // 2870
                    }                                                                                                  // 2871
                    sb.drag[0].style.height = newSize + 'px';                                                          // 2872
                }                                                                                                      // 2873
                if (s.params.scrollbarHide) {                                                                          // 2874
                    clearTimeout(sb.timeout);                                                                          // 2875
                    sb.track[0].style.opacity = 1;                                                                     // 2876
                    sb.timeout = setTimeout(function () {                                                              // 2877
                        sb.track[0].style.opacity = 0;                                                                 // 2878
                        sb.track.transition(400);                                                                      // 2879
                    }, 1000);                                                                                          // 2880
                }                                                                                                      // 2881
            },                                                                                                         // 2882
            setTransition: function (duration) {                                                                       // 2883
                if (!s.params.scrollbar) return;                                                                       // 2884
                s.scrollbar.drag.transition(duration);                                                                 // 2885
            }                                                                                                          // 2886
        };                                                                                                             // 2887
                                                                                                                       // 2888
        /*=========================                                                                                    // 2889
          Controller                                                                                                   // 2890
          ===========================*/                                                                                // 2891
        s.controller = {                                                                                               // 2892
            LinearSpline: function (x, y) {                                                                            // 2893
                this.x = x;                                                                                            // 2894
                this.y = y;                                                                                            // 2895
                this.lastIndex = x.length - 1;                                                                         // 2896
                // Given an x value (x2), return the expected y2 value:                                                // 2897
                // (x1,y1) is the known point before given value,                                                      // 2898
                // (x3,y3) is the known point after given value.                                                       // 2899
                var i1, i3;                                                                                            // 2900
                var l = this.x.length;                                                                                 // 2901
                                                                                                                       // 2902
                this.interpolate = function (x2) {                                                                     // 2903
                    if (!x2) return 0;                                                                                 // 2904
                                                                                                                       // 2905
                    // Get the indexes of x1 and x3 (the array indexes before and after given x2):                     // 2906
                    i3 = binarySearch(this.x, x2);                                                                     // 2907
                    i1 = i3 - 1;                                                                                       // 2908
                                                                                                                       // 2909
                    // We have our indexes i1 & i3, so we can calculate already:                                       // 2910
                    // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1                                                        // 2911
                    return ((x2 - this.x[i1]) * (this.y[i3] - this.y[i1])) / (this.x[i3] - this.x[i1]) + this.y[i1];   // 2912
                };                                                                                                     // 2913
                                                                                                                       // 2914
                var binarySearch = (function() {                                                                       // 2915
                    var maxIndex, minIndex, guess;                                                                     // 2916
                    return function(array, val) {                                                                      // 2917
                        minIndex = -1;                                                                                 // 2918
                        maxIndex = array.length;                                                                       // 2919
                        while (maxIndex - minIndex > 1)                                                                // 2920
                            if (array[guess = maxIndex + minIndex >> 1] <= val) {                                      // 2921
                                minIndex = guess;                                                                      // 2922
                            } else {                                                                                   // 2923
                                maxIndex = guess;                                                                      // 2924
                            }                                                                                          // 2925
                        return maxIndex;                                                                               // 2926
                    };                                                                                                 // 2927
                })();                                                                                                  // 2928
            },                                                                                                         // 2929
            //xxx: for now i will just save one spline function to to                                                  // 2930
            getInterpolateFunction: function(c){                                                                       // 2931
                if(!s.controller.spline) s.controller.spline = s.params.loop ?                                         // 2932
                    new s.controller.LinearSpline(s.slidesGrid, c.slidesGrid) :                                        // 2933
                    new s.controller.LinearSpline(s.snapGrid, c.snapGrid);                                             // 2934
            },                                                                                                         // 2935
            setTranslate: function (translate, byController) {                                                         // 2936
               var controlled = s.params.control;                                                                      // 2937
               var multiplier, controlledTranslate;                                                                    // 2938
               function setControlledTranslate(c) {                                                                    // 2939
                    // this will create an Interpolate function based on the snapGrids                                 // 2940
                    // x is the Grid of the scrolled scroller and y will be the controlled scroller                    // 2941
                    // it makes sense to create this only once and recall it for the interpolation                     // 2942
                    // the function does a lot of value caching for performance                                        // 2943
                    translate = c.rtl && c.params.direction === 'horizontal' ? -s.translate : s.translate;             // 2944
                    if (s.params.controlBy === 'slide') {                                                              // 2945
                        s.controller.getInterpolateFunction(c);                                                        // 2946
                        // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
                        // but it did not work out                                                                     // 2948
                        controlledTranslate = -s.controller.spline.interpolate(-translate);                            // 2949
                    }                                                                                                  // 2950
                                                                                                                       // 2951
                    if(!controlledTranslate || s.params.controlBy === 'container'){                                    // 2952
                        multiplier = (c.maxTranslate() - c.minTranslate()) / (s.maxTranslate() - s.minTranslate());    // 2953
                        controlledTranslate = (translate - s.minTranslate()) * multiplier + c.minTranslate();          // 2954
                    }                                                                                                  // 2955
                                                                                                                       // 2956
                    if (s.params.controlInverse) {                                                                     // 2957
                        controlledTranslate = c.maxTranslate() - controlledTranslate;                                  // 2958
                    }                                                                                                  // 2959
                    c.updateProgress(controlledTranslate);                                                             // 2960
                    c.setWrapperTranslate(controlledTranslate, false, s);                                              // 2961
                    c.updateActiveIndex();                                                                             // 2962
               }                                                                                                       // 2963
               if (s.isArray(controlled)) {                                                                            // 2964
                   for (var i = 0; i < controlled.length; i++) {                                                       // 2965
                       if (controlled[i] !== byController && controlled[i] instanceof Swiper) {                        // 2966
                           setControlledTranslate(controlled[i]);                                                      // 2967
                       }                                                                                               // 2968
                   }                                                                                                   // 2969
               }                                                                                                       // 2970
               else if (controlled instanceof Swiper && byController !== controlled) {                                 // 2971
                                                                                                                       // 2972
                   setControlledTranslate(controlled);                                                                 // 2973
               }                                                                                                       // 2974
            },                                                                                                         // 2975
            setTransition: function (duration, byController) {                                                         // 2976
                var controlled = s.params.control;                                                                     // 2977
                var i;                                                                                                 // 2978
                function setControlledTransition(c) {                                                                  // 2979
                    c.setWrapperTransition(duration, s);                                                               // 2980
                    if (duration !== 0) {                                                                              // 2981
                        c.onTransitionStart();                                                                         // 2982
                        c.wrapper.transitionEnd(function(){                                                            // 2983
                            if (!controlled) return;                                                                   // 2984
                            if (c.params.loop && s.params.controlBy === 'slide') {                                     // 2985
                                c.fixLoop();                                                                           // 2986
                            }                                                                                          // 2987
                            c.onTransitionEnd();                                                                       // 2988
                                                                                                                       // 2989
                        });                                                                                            // 2990
                    }                                                                                                  // 2991
                }                                                                                                      // 2992
                if (s.isArray(controlled)) {                                                                           // 2993
                    for (i = 0; i < controlled.length; i++) {                                                          // 2994
                        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {                       // 2995
                            setControlledTransition(controlled[i]);                                                    // 2996
                        }                                                                                              // 2997
                    }                                                                                                  // 2998
                }                                                                                                      // 2999
                else if (controlled instanceof Swiper && byController !== controlled) {                                // 3000
                    setControlledTransition(controlled);                                                               // 3001
                }                                                                                                      // 3002
            }                                                                                                          // 3003
        };                                                                                                             // 3004
                                                                                                                       // 3005
        /*=========================                                                                                    // 3006
          Hash Navigation                                                                                              // 3007
          ===========================*/                                                                                // 3008
        s.hashnav = {                                                                                                  // 3009
            init: function () {                                                                                        // 3010
                if (!s.params.hashnav) return;                                                                         // 3011
                s.hashnav.initialized = true;                                                                          // 3012
                var hash = document.location.hash.replace('#', '');                                                    // 3013
                if (!hash) return;                                                                                     // 3014
                var speed = 0;                                                                                         // 3015
                for (var i = 0, length = s.slides.length; i < length; i++) {                                           // 3016
                    var slide = s.slides.eq(i);                                                                        // 3017
                    var slideHash = slide.attr('data-hash');                                                           // 3018
                    if (slideHash === hash && !slide.hasClass(s.params.slideDuplicateClass)) {                         // 3019
                        var index = slide.index();                                                                     // 3020
                        s.slideTo(index, speed, s.params.runCallbacksOnInit, true);                                    // 3021
                    }                                                                                                  // 3022
                }                                                                                                      // 3023
            },                                                                                                         // 3024
            setHash: function () {                                                                                     // 3025
                if (!s.hashnav.initialized || !s.params.hashnav) return;                                               // 3026
                document.location.hash = s.slides.eq(s.activeIndex).attr('data-hash') || '';                           // 3027
            }                                                                                                          // 3028
        };                                                                                                             // 3029
                                                                                                                       // 3030
        /*=========================                                                                                    // 3031
          Keyboard Control                                                                                             // 3032
          ===========================*/                                                                                // 3033
        function handleKeyboard(e) {                                                                                   // 3034
            if (e.originalEvent) e = e.originalEvent; //jquery fix                                                     // 3035
            var kc = e.keyCode || e.charCode;                                                                          // 3036
            // Directions locks                                                                                        // 3037
            if (!s.params.allowSwipeToNext && (s.isHorizontal() && kc === 39 || !s.isHorizontal() && kc === 40)) {     // 3038
                return false;                                                                                          // 3039
            }                                                                                                          // 3040
            if (!s.params.allowSwipeToPrev && (s.isHorizontal() && kc === 37 || !s.isHorizontal() && kc === 38)) {     // 3041
                return false;                                                                                          // 3042
            }                                                                                                          // 3043
            if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {                                                    // 3044
                return;                                                                                                // 3045
            }                                                                                                          // 3046
            if (document.activeElement && document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === 'input' || document.activeElement.nodeName.toLowerCase() === 'textarea')) {
                return;                                                                                                // 3048
            }                                                                                                          // 3049
            if (kc === 37 || kc === 39 || kc === 38 || kc === 40) {                                                    // 3050
                var inView = false;                                                                                    // 3051
                //Check that swiper should be inside of visible area of window                                         // 3052
                if (s.container.parents('.swiper-slide').length > 0 && s.container.parents('.swiper-slide-active').length === 0) {
                    return;                                                                                            // 3054
                }                                                                                                      // 3055
                var windowScroll = {                                                                                   // 3056
                    left: window.pageXOffset,                                                                          // 3057
                    top: window.pageYOffset                                                                            // 3058
                };                                                                                                     // 3059
                var windowWidth = window.innerWidth;                                                                   // 3060
                var windowHeight = window.innerHeight;                                                                 // 3061
                var swiperOffset = s.container.offset();                                                               // 3062
                if (s.rtl) swiperOffset.left = swiperOffset.left - s.container[0].scrollLeft;                          // 3063
                var swiperCoord = [                                                                                    // 3064
                    [swiperOffset.left, swiperOffset.top],                                                             // 3065
                    [swiperOffset.left + s.width, swiperOffset.top],                                                   // 3066
                    [swiperOffset.left, swiperOffset.top + s.height],                                                  // 3067
                    [swiperOffset.left + s.width, swiperOffset.top + s.height]                                         // 3068
                ];                                                                                                     // 3069
                for (var i = 0; i < swiperCoord.length; i++) {                                                         // 3070
                    var point = swiperCoord[i];                                                                        // 3071
                    if (                                                                                               // 3072
                        point[0] >= windowScroll.left && point[0] <= windowScroll.left + windowWidth &&                // 3073
                        point[1] >= windowScroll.top && point[1] <= windowScroll.top + windowHeight                    // 3074
                    ) {                                                                                                // 3075
                        inView = true;                                                                                 // 3076
                    }                                                                                                  // 3077
                                                                                                                       // 3078
                }                                                                                                      // 3079
                if (!inView) return;                                                                                   // 3080
            }                                                                                                          // 3081
            if (s.isHorizontal()) {                                                                                    // 3082
                if (kc === 37 || kc === 39) {                                                                          // 3083
                    if (e.preventDefault) e.preventDefault();                                                          // 3084
                    else e.returnValue = false;                                                                        // 3085
                }                                                                                                      // 3086
                if ((kc === 39 && !s.rtl) || (kc === 37 && s.rtl)) s.slideNext();                                      // 3087
                if ((kc === 37 && !s.rtl) || (kc === 39 && s.rtl)) s.slidePrev();                                      // 3088
            }                                                                                                          // 3089
            else {                                                                                                     // 3090
                if (kc === 38 || kc === 40) {                                                                          // 3091
                    if (e.preventDefault) e.preventDefault();                                                          // 3092
                    else e.returnValue = false;                                                                        // 3093
                }                                                                                                      // 3094
                if (kc === 40) s.slideNext();                                                                          // 3095
                if (kc === 38) s.slidePrev();                                                                          // 3096
            }                                                                                                          // 3097
        }                                                                                                              // 3098
        s.disableKeyboardControl = function () {                                                                       // 3099
            s.params.keyboardControl = false;                                                                          // 3100
            $(document).off('keydown', handleKeyboard);                                                                // 3101
        };                                                                                                             // 3102
        s.enableKeyboardControl = function () {                                                                        // 3103
            s.params.keyboardControl = true;                                                                           // 3104
            $(document).on('keydown', handleKeyboard);                                                                 // 3105
        };                                                                                                             // 3106
                                                                                                                       // 3107
                                                                                                                       // 3108
        /*=========================                                                                                    // 3109
          Mousewheel Control                                                                                           // 3110
          ===========================*/                                                                                // 3111
        s.mousewheel = {                                                                                               // 3112
            event: false,                                                                                              // 3113
            lastScrollTime: (new window.Date()).getTime()                                                              // 3114
        };                                                                                                             // 3115
        if (s.params.mousewheelControl) {                                                                              // 3116
            try {                                                                                                      // 3117
                new window.WheelEvent('wheel');                                                                        // 3118
                s.mousewheel.event = 'wheel';                                                                          // 3119
            } catch (e) {                                                                                              // 3120
                if (window.WheelEvent || (s.container[0] && 'wheel' in s.container[0])) {                              // 3121
                    s.mousewheel.event = 'wheel';                                                                      // 3122
                }                                                                                                      // 3123
            }                                                                                                          // 3124
            if (!s.mousewheel.event && window.WheelEvent) {                                                            // 3125
                                                                                                                       // 3126
            }                                                                                                          // 3127
            if (!s.mousewheel.event && document.onmousewheel !== undefined) {                                          // 3128
                s.mousewheel.event = 'mousewheel';                                                                     // 3129
            }                                                                                                          // 3130
            if (!s.mousewheel.event) {                                                                                 // 3131
                s.mousewheel.event = 'DOMMouseScroll';                                                                 // 3132
            }                                                                                                          // 3133
        }                                                                                                              // 3134
        function handleMousewheel(e) {                                                                                 // 3135
            if (e.originalEvent) e = e.originalEvent; //jquery fix                                                     // 3136
            var we = s.mousewheel.event;                                                                               // 3137
            var delta = 0;                                                                                             // 3138
            var rtlFactor = s.rtl ? -1 : 1;                                                                            // 3139
                                                                                                                       // 3140
            //WebKits                                                                                                  // 3141
            if (we === 'mousewheel') {                                                                                 // 3142
                if (s.params.mousewheelForceToAxis) {                                                                  // 3143
                    if (s.isHorizontal()) {                                                                            // 3144
                        if (Math.abs(e.wheelDeltaX) > Math.abs(e.wheelDeltaY)) delta = e.wheelDeltaX * rtlFactor;      // 3145
                        else return;                                                                                   // 3146
                    }                                                                                                  // 3147
                    else {                                                                                             // 3148
                        if (Math.abs(e.wheelDeltaY) > Math.abs(e.wheelDeltaX)) delta = e.wheelDeltaY;                  // 3149
                        else return;                                                                                   // 3150
                    }                                                                                                  // 3151
                }                                                                                                      // 3152
                else {                                                                                                 // 3153
                    delta = Math.abs(e.wheelDeltaX) > Math.abs(e.wheelDeltaY) ? - e.wheelDeltaX * rtlFactor : - e.wheelDeltaY;
                }                                                                                                      // 3155
            }                                                                                                          // 3156
            //Old FireFox                                                                                              // 3157
            else if (we === 'DOMMouseScroll') delta = -e.detail;                                                       // 3158
            //New FireFox                                                                                              // 3159
            else if (we === 'wheel') {                                                                                 // 3160
                if (s.params.mousewheelForceToAxis) {                                                                  // 3161
                    if (s.isHorizontal()) {                                                                            // 3162
                        if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) delta = -e.deltaX * rtlFactor;                    // 3163
                        else return;                                                                                   // 3164
                    }                                                                                                  // 3165
                    else {                                                                                             // 3166
                        if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) delta = -e.deltaY;                                // 3167
                        else return;                                                                                   // 3168
                    }                                                                                                  // 3169
                }                                                                                                      // 3170
                else {                                                                                                 // 3171
                    delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? - e.deltaX * rtlFactor : - e.deltaY;             // 3172
                }                                                                                                      // 3173
            }                                                                                                          // 3174
            if (delta === 0) return;                                                                                   // 3175
                                                                                                                       // 3176
            if (s.params.mousewheelInvert) delta = -delta;                                                             // 3177
                                                                                                                       // 3178
            if (!s.params.freeMode) {                                                                                  // 3179
                if ((new window.Date()).getTime() - s.mousewheel.lastScrollTime > 60) {                                // 3180
                    if (delta < 0) {                                                                                   // 3181
                        if ((!s.isEnd || s.params.loop) && !s.animating) s.slideNext();                                // 3182
                        else if (s.params.mousewheelReleaseOnEdges) return true;                                       // 3183
                    }                                                                                                  // 3184
                    else {                                                                                             // 3185
                        if ((!s.isBeginning || s.params.loop) && !s.animating) s.slidePrev();                          // 3186
                        else if (s.params.mousewheelReleaseOnEdges) return true;                                       // 3187
                    }                                                                                                  // 3188
                }                                                                                                      // 3189
                s.mousewheel.lastScrollTime = (new window.Date()).getTime();                                           // 3190
                                                                                                                       // 3191
            }                                                                                                          // 3192
            else {                                                                                                     // 3193
                //Freemode or scrollContainer:                                                                         // 3194
                var position = s.getWrapperTranslate() + delta * s.params.mousewheelSensitivity;                       // 3195
                var wasBeginning = s.isBeginning,                                                                      // 3196
                    wasEnd = s.isEnd;                                                                                  // 3197
                                                                                                                       // 3198
                if (position >= s.minTranslate()) position = s.minTranslate();                                         // 3199
                if (position <= s.maxTranslate()) position = s.maxTranslate();                                         // 3200
                                                                                                                       // 3201
                s.setWrapperTransition(0);                                                                             // 3202
                s.setWrapperTranslate(position);                                                                       // 3203
                s.updateProgress();                                                                                    // 3204
                s.updateActiveIndex();                                                                                 // 3205
                                                                                                                       // 3206
                if (!wasBeginning && s.isBeginning || !wasEnd && s.isEnd) {                                            // 3207
                    s.updateClasses();                                                                                 // 3208
                }                                                                                                      // 3209
                                                                                                                       // 3210
                if (s.params.freeModeSticky) {                                                                         // 3211
                    clearTimeout(s.mousewheel.timeout);                                                                // 3212
                    s.mousewheel.timeout = setTimeout(function () {                                                    // 3213
                        s.slideReset();                                                                                // 3214
                    }, 300);                                                                                           // 3215
                }                                                                                                      // 3216
                else {                                                                                                 // 3217
                    if (s.params.lazyLoading && s.lazy) {                                                              // 3218
                        s.lazy.load();                                                                                 // 3219
                    }                                                                                                  // 3220
                }                                                                                                      // 3221
                                                                                                                       // 3222
                // Return page scroll on edge positions                                                                // 3223
                if (position === 0 || position === s.maxTranslate()) return;                                           // 3224
            }                                                                                                          // 3225
            if (s.params.autoplay) s.stopAutoplay();                                                                   // 3226
                                                                                                                       // 3227
            if (e.preventDefault) e.preventDefault();                                                                  // 3228
            else e.returnValue = false;                                                                                // 3229
            return false;                                                                                              // 3230
        }                                                                                                              // 3231
        s.disableMousewheelControl = function () {                                                                     // 3232
            if (!s.mousewheel.event) return false;                                                                     // 3233
            s.container.off(s.mousewheel.event, handleMousewheel);                                                     // 3234
            return true;                                                                                               // 3235
        };                                                                                                             // 3236
                                                                                                                       // 3237
        s.enableMousewheelControl = function () {                                                                      // 3238
            if (!s.mousewheel.event) return false;                                                                     // 3239
            s.container.on(s.mousewheel.event, handleMousewheel);                                                      // 3240
            return true;                                                                                               // 3241
        };                                                                                                             // 3242
                                                                                                                       // 3243
                                                                                                                       // 3244
        /*=========================                                                                                    // 3245
          Parallax                                                                                                     // 3246
          ===========================*/                                                                                // 3247
        function setParallaxTransform(el, progress) {                                                                  // 3248
            el = $(el);                                                                                                // 3249
            var p, pX, pY;                                                                                             // 3250
            var rtlFactor = s.rtl ? -1 : 1;                                                                            // 3251
                                                                                                                       // 3252
            p = el.attr('data-swiper-parallax') || '0';                                                                // 3253
            pX = el.attr('data-swiper-parallax-x');                                                                    // 3254
            pY = el.attr('data-swiper-parallax-y');                                                                    // 3255
            if (pX || pY) {                                                                                            // 3256
                pX = pX || '0';                                                                                        // 3257
                pY = pY || '0';                                                                                        // 3258
            }                                                                                                          // 3259
            else {                                                                                                     // 3260
                if (s.isHorizontal()) {                                                                                // 3261
                    pX = p;                                                                                            // 3262
                    pY = '0';                                                                                          // 3263
                }                                                                                                      // 3264
                else {                                                                                                 // 3265
                    pY = p;                                                                                            // 3266
                    pX = '0';                                                                                          // 3267
                }                                                                                                      // 3268
            }                                                                                                          // 3269
                                                                                                                       // 3270
            if ((pX).indexOf('%') >= 0) {                                                                              // 3271
                pX = parseInt(pX, 10) * progress * rtlFactor + '%';                                                    // 3272
            }                                                                                                          // 3273
            else {                                                                                                     // 3274
                pX = pX * progress * rtlFactor + 'px' ;                                                                // 3275
            }                                                                                                          // 3276
            if ((pY).indexOf('%') >= 0) {                                                                              // 3277
                pY = parseInt(pY, 10) * progress + '%';                                                                // 3278
            }                                                                                                          // 3279
            else {                                                                                                     // 3280
                pY = pY * progress + 'px' ;                                                                            // 3281
            }                                                                                                          // 3282
                                                                                                                       // 3283
            el.transform('translate3d(' + pX + ', ' + pY + ',0px)');                                                   // 3284
        }                                                                                                              // 3285
        s.parallax = {                                                                                                 // 3286
            setTranslate: function () {                                                                                // 3287
                s.container.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function(){
                    setParallaxTransform(this, s.progress);                                                            // 3289
                                                                                                                       // 3290
                });                                                                                                    // 3291
                s.slides.each(function () {                                                                            // 3292
                    var slide = $(this);                                                                               // 3293
                    slide.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function () {
                        var progress = Math.min(Math.max(slide[0].progress, -1), 1);                                   // 3295
                        setParallaxTransform(this, progress);                                                          // 3296
                    });                                                                                                // 3297
                });                                                                                                    // 3298
            },                                                                                                         // 3299
            setTransition: function (duration) {                                                                       // 3300
                if (typeof duration === 'undefined') duration = s.params.speed;                                        // 3301
                s.container.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function(){
                    var el = $(this);                                                                                  // 3303
                    var parallaxDuration = parseInt(el.attr('data-swiper-parallax-duration'), 10) || duration;         // 3304
                    if (duration === 0) parallaxDuration = 0;                                                          // 3305
                    el.transition(parallaxDuration);                                                                   // 3306
                });                                                                                                    // 3307
            }                                                                                                          // 3308
        };                                                                                                             // 3309
                                                                                                                       // 3310
                                                                                                                       // 3311
        /*=========================                                                                                    // 3312
          Plugins API. Collect all and init all plugins                                                                // 3313
          ===========================*/                                                                                // 3314
        s._plugins = [];                                                                                               // 3315
        for (var plugin in s.plugins) {                                                                                // 3316
            var p = s.plugins[plugin](s, s.params[plugin]);                                                            // 3317
            if (p) s._plugins.push(p);                                                                                 // 3318
        }                                                                                                              // 3319
        // Method to call all plugins event/method                                                                     // 3320
        s.callPlugins = function (eventName) {                                                                         // 3321
            for (var i = 0; i < s._plugins.length; i++) {                                                              // 3322
                if (eventName in s._plugins[i]) {                                                                      // 3323
                    s._plugins[i][eventName](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);    // 3324
                }                                                                                                      // 3325
            }                                                                                                          // 3326
        };                                                                                                             // 3327
                                                                                                                       // 3328
        /*=========================                                                                                    // 3329
          Events/Callbacks/Plugins Emitter                                                                             // 3330
          ===========================*/                                                                                // 3331
        function normalizeEventName (eventName) {                                                                      // 3332
            if (eventName.indexOf('on') !== 0) {                                                                       // 3333
                if (eventName[0] !== eventName[0].toUpperCase()) {                                                     // 3334
                    eventName = 'on' + eventName[0].toUpperCase() + eventName.substring(1);                            // 3335
                }                                                                                                      // 3336
                else {                                                                                                 // 3337
                    eventName = 'on' + eventName;                                                                      // 3338
                }                                                                                                      // 3339
            }                                                                                                          // 3340
            return eventName;                                                                                          // 3341
        }                                                                                                              // 3342
        s.emitterEventListeners = {                                                                                    // 3343
                                                                                                                       // 3344
        };                                                                                                             // 3345
        s.emit = function (eventName) {                                                                                // 3346
            // Trigger callbacks                                                                                       // 3347
            if (s.params[eventName]) {                                                                                 // 3348
                s.params[eventName](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);             // 3349
            }                                                                                                          // 3350
            var i;                                                                                                     // 3351
            // Trigger events                                                                                          // 3352
            if (s.emitterEventListeners[eventName]) {                                                                  // 3353
                for (i = 0; i < s.emitterEventListeners[eventName].length; i++) {                                      // 3354
                    s.emitterEventListeners[eventName][i](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                }                                                                                                      // 3356
            }                                                                                                          // 3357
            // Trigger plugins                                                                                         // 3358
            if (s.callPlugins) s.callPlugins(eventName, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
        };                                                                                                             // 3360
        s.on = function (eventName, handler) {                                                                         // 3361
            eventName = normalizeEventName(eventName);                                                                 // 3362
            if (!s.emitterEventListeners[eventName]) s.emitterEventListeners[eventName] = [];                          // 3363
            s.emitterEventListeners[eventName].push(handler);                                                          // 3364
            return s;                                                                                                  // 3365
        };                                                                                                             // 3366
        s.off = function (eventName, handler) {                                                                        // 3367
            var i;                                                                                                     // 3368
            eventName = normalizeEventName(eventName);                                                                 // 3369
            if (typeof handler === 'undefined') {                                                                      // 3370
                // Remove all handlers for such event                                                                  // 3371
                s.emitterEventListeners[eventName] = [];                                                               // 3372
                return s;                                                                                              // 3373
            }                                                                                                          // 3374
            if (!s.emitterEventListeners[eventName] || s.emitterEventListeners[eventName].length === 0) return;        // 3375
            for (i = 0; i < s.emitterEventListeners[eventName].length; i++) {                                          // 3376
                if(s.emitterEventListeners[eventName][i] === handler) s.emitterEventListeners[eventName].splice(i, 1);
            }                                                                                                          // 3378
            return s;                                                                                                  // 3379
        };                                                                                                             // 3380
        s.once = function (eventName, handler) {                                                                       // 3381
            eventName = normalizeEventName(eventName);                                                                 // 3382
            var _handler = function () {                                                                               // 3383
                handler(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);                         // 3384
                s.off(eventName, _handler);                                                                            // 3385
            };                                                                                                         // 3386
            s.on(eventName, _handler);                                                                                 // 3387
            return s;                                                                                                  // 3388
        };                                                                                                             // 3389
                                                                                                                       // 3390
        // Accessibility tools                                                                                         // 3391
        s.a11y = {                                                                                                     // 3392
            makeFocusable: function ($el) {                                                                            // 3393
                $el.attr('tabIndex', '0');                                                                             // 3394
                return $el;                                                                                            // 3395
            },                                                                                                         // 3396
            addRole: function ($el, role) {                                                                            // 3397
                $el.attr('role', role);                                                                                // 3398
                return $el;                                                                                            // 3399
            },                                                                                                         // 3400
                                                                                                                       // 3401
            addLabel: function ($el, label) {                                                                          // 3402
                $el.attr('aria-label', label);                                                                         // 3403
                return $el;                                                                                            // 3404
            },                                                                                                         // 3405
                                                                                                                       // 3406
            disable: function ($el) {                                                                                  // 3407
                $el.attr('aria-disabled', true);                                                                       // 3408
                return $el;                                                                                            // 3409
            },                                                                                                         // 3410
                                                                                                                       // 3411
            enable: function ($el) {                                                                                   // 3412
                $el.attr('aria-disabled', false);                                                                      // 3413
                return $el;                                                                                            // 3414
            },                                                                                                         // 3415
                                                                                                                       // 3416
            onEnterKey: function (event) {                                                                             // 3417
                if (event.keyCode !== 13) return;                                                                      // 3418
                if ($(event.target).is(s.params.nextButton)) {                                                         // 3419
                    s.onClickNext(event);                                                                              // 3420
                    if (s.isEnd) {                                                                                     // 3421
                        s.a11y.notify(s.params.lastSlideMessage);                                                      // 3422
                    }                                                                                                  // 3423
                    else {                                                                                             // 3424
                        s.a11y.notify(s.params.nextSlideMessage);                                                      // 3425
                    }                                                                                                  // 3426
                }                                                                                                      // 3427
                else if ($(event.target).is(s.params.prevButton)) {                                                    // 3428
                    s.onClickPrev(event);                                                                              // 3429
                    if (s.isBeginning) {                                                                               // 3430
                        s.a11y.notify(s.params.firstSlideMessage);                                                     // 3431
                    }                                                                                                  // 3432
                    else {                                                                                             // 3433
                        s.a11y.notify(s.params.prevSlideMessage);                                                      // 3434
                    }                                                                                                  // 3435
                }                                                                                                      // 3436
                if ($(event.target).is('.' + s.params.bulletClass)) {                                                  // 3437
                    $(event.target)[0].click();                                                                        // 3438
                }                                                                                                      // 3439
            },                                                                                                         // 3440
                                                                                                                       // 3441
            liveRegion: $('<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>'),       // 3442
                                                                                                                       // 3443
            notify: function (message) {                                                                               // 3444
                var notification = s.a11y.liveRegion;                                                                  // 3445
                if (notification.length === 0) return;                                                                 // 3446
                notification.html('');                                                                                 // 3447
                notification.html(message);                                                                            // 3448
            },                                                                                                         // 3449
            init: function () {                                                                                        // 3450
                // Setup accessibility                                                                                 // 3451
                if (s.params.nextButton && s.nextButton && s.nextButton.length > 0) {                                  // 3452
                    s.a11y.makeFocusable(s.nextButton);                                                                // 3453
                    s.a11y.addRole(s.nextButton, 'button');                                                            // 3454
                    s.a11y.addLabel(s.nextButton, s.params.nextSlideMessage);                                          // 3455
                }                                                                                                      // 3456
                if (s.params.prevButton && s.prevButton && s.prevButton.length > 0) {                                  // 3457
                    s.a11y.makeFocusable(s.prevButton);                                                                // 3458
                    s.a11y.addRole(s.prevButton, 'button');                                                            // 3459
                    s.a11y.addLabel(s.prevButton, s.params.prevSlideMessage);                                          // 3460
                }                                                                                                      // 3461
                                                                                                                       // 3462
                $(s.container).append(s.a11y.liveRegion);                                                              // 3463
            },                                                                                                         // 3464
            initPagination: function () {                                                                              // 3465
                if (s.params.pagination && s.params.paginationClickable && s.bullets && s.bullets.length) {            // 3466
                    s.bullets.each(function () {                                                                       // 3467
                        var bullet = $(this);                                                                          // 3468
                        s.a11y.makeFocusable(bullet);                                                                  // 3469
                        s.a11y.addRole(bullet, 'button');                                                              // 3470
                        s.a11y.addLabel(bullet, s.params.paginationBulletMessage.replace(/{{index}}/, bullet.index() + 1));
                    });                                                                                                // 3472
                }                                                                                                      // 3473
            },                                                                                                         // 3474
            destroy: function () {                                                                                     // 3475
                if (s.a11y.liveRegion && s.a11y.liveRegion.length > 0) s.a11y.liveRegion.remove();                     // 3476
            }                                                                                                          // 3477
        };                                                                                                             // 3478
                                                                                                                       // 3479
                                                                                                                       // 3480
        /*=========================                                                                                    // 3481
          Init/Destroy                                                                                                 // 3482
          ===========================*/                                                                                // 3483
        s.init = function () {                                                                                         // 3484
            if (s.params.loop) s.createLoop();                                                                         // 3485
            s.updateContainerSize();                                                                                   // 3486
            s.updateSlidesSize();                                                                                      // 3487
            s.updatePagination();                                                                                      // 3488
            if (s.params.scrollbar && s.scrollbar) {                                                                   // 3489
                s.scrollbar.set();                                                                                     // 3490
                if (s.params.scrollbarDraggable) {                                                                     // 3491
                    s.scrollbar.enableDraggable();                                                                     // 3492
                }                                                                                                      // 3493
            }                                                                                                          // 3494
            if (s.params.effect !== 'slide' && s.effects[s.params.effect]) {                                           // 3495
                if (!s.params.loop) s.updateProgress();                                                                // 3496
                s.effects[s.params.effect].setTranslate();                                                             // 3497
            }                                                                                                          // 3498
            if (s.params.loop) {                                                                                       // 3499
                s.slideTo(s.params.initialSlide + s.loopedSlides, 0, s.params.runCallbacksOnInit);                     // 3500
            }                                                                                                          // 3501
            else {                                                                                                     // 3502
                s.slideTo(s.params.initialSlide, 0, s.params.runCallbacksOnInit);                                      // 3503
                if (s.params.initialSlide === 0) {                                                                     // 3504
                    if (s.parallax && s.params.parallax) s.parallax.setTranslate();                                    // 3505
                    if (s.lazy && s.params.lazyLoading) {                                                              // 3506
                        s.lazy.load();                                                                                 // 3507
                        s.lazy.initialImageLoaded = true;                                                              // 3508
                    }                                                                                                  // 3509
                }                                                                                                      // 3510
            }                                                                                                          // 3511
            s.attachEvents();                                                                                          // 3512
            if (s.params.observer && s.support.observer) {                                                             // 3513
                s.initObservers();                                                                                     // 3514
            }                                                                                                          // 3515
            if (s.params.preloadImages && !s.params.lazyLoading) {                                                     // 3516
                s.preloadImages();                                                                                     // 3517
            }                                                                                                          // 3518
            if (s.params.autoplay) {                                                                                   // 3519
                s.startAutoplay();                                                                                     // 3520
            }                                                                                                          // 3521
            if (s.params.keyboardControl) {                                                                            // 3522
                if (s.enableKeyboardControl) s.enableKeyboardControl();                                                // 3523
            }                                                                                                          // 3524
            if (s.params.mousewheelControl) {                                                                          // 3525
                if (s.enableMousewheelControl) s.enableMousewheelControl();                                            // 3526
            }                                                                                                          // 3527
            if (s.params.hashnav) {                                                                                    // 3528
                if (s.hashnav) s.hashnav.init();                                                                       // 3529
            }                                                                                                          // 3530
            if (s.params.a11y && s.a11y) s.a11y.init();                                                                // 3531
            s.emit('onInit', s);                                                                                       // 3532
        };                                                                                                             // 3533
                                                                                                                       // 3534
        // Cleanup dynamic styles                                                                                      // 3535
        s.cleanupStyles = function () {                                                                                // 3536
            // Container                                                                                               // 3537
            s.container.removeClass(s.classNames.join(' ')).removeAttr('style');                                       // 3538
                                                                                                                       // 3539
            // Wrapper                                                                                                 // 3540
            s.wrapper.removeAttr('style');                                                                             // 3541
                                                                                                                       // 3542
            // Slides                                                                                                  // 3543
            if (s.slides && s.slides.length) {                                                                         // 3544
                s.slides                                                                                               // 3545
                    .removeClass([                                                                                     // 3546
                      s.params.slideVisibleClass,                                                                      // 3547
                      s.params.slideActiveClass,                                                                       // 3548
                      s.params.slideNextClass,                                                                         // 3549
                      s.params.slidePrevClass                                                                          // 3550
                    ].join(' '))                                                                                       // 3551
                    .removeAttr('style')                                                                               // 3552
                    .removeAttr('data-swiper-column')                                                                  // 3553
                    .removeAttr('data-swiper-row');                                                                    // 3554
            }                                                                                                          // 3555
                                                                                                                       // 3556
            // Pagination/Bullets                                                                                      // 3557
            if (s.paginationContainer && s.paginationContainer.length) {                                               // 3558
                s.paginationContainer.removeClass(s.params.paginationHiddenClass);                                     // 3559
            }                                                                                                          // 3560
            if (s.bullets && s.bullets.length) {                                                                       // 3561
                s.bullets.removeClass(s.params.bulletActiveClass);                                                     // 3562
            }                                                                                                          // 3563
                                                                                                                       // 3564
            // Buttons                                                                                                 // 3565
            if (s.params.prevButton) $(s.params.prevButton).removeClass(s.params.buttonDisabledClass);                 // 3566
            if (s.params.nextButton) $(s.params.nextButton).removeClass(s.params.buttonDisabledClass);                 // 3567
                                                                                                                       // 3568
            // Scrollbar                                                                                               // 3569
            if (s.params.scrollbar && s.scrollbar) {                                                                   // 3570
                if (s.scrollbar.track && s.scrollbar.track.length) s.scrollbar.track.removeAttr('style');              // 3571
                if (s.scrollbar.drag && s.scrollbar.drag.length) s.scrollbar.drag.removeAttr('style');                 // 3572
            }                                                                                                          // 3573
        };                                                                                                             // 3574
                                                                                                                       // 3575
        // Destroy                                                                                                     // 3576
        s.destroy = function (deleteInstance, cleanupStyles) {                                                         // 3577
            // Detach evebts                                                                                           // 3578
            s.detachEvents();                                                                                          // 3579
            // Stop autoplay                                                                                           // 3580
            s.stopAutoplay();                                                                                          // 3581
            // Disable draggable                                                                                       // 3582
            if (s.params.scrollbar && s.scrollbar) {                                                                   // 3583
                if (s.params.scrollbarDraggable) {                                                                     // 3584
                    s.scrollbar.disableDraggable();                                                                    // 3585
                }                                                                                                      // 3586
            }                                                                                                          // 3587
            // Destroy loop                                                                                            // 3588
            if (s.params.loop) {                                                                                       // 3589
                s.destroyLoop();                                                                                       // 3590
            }                                                                                                          // 3591
            // Cleanup styles                                                                                          // 3592
            if (cleanupStyles) {                                                                                       // 3593
                s.cleanupStyles();                                                                                     // 3594
            }                                                                                                          // 3595
            // Disconnect observer                                                                                     // 3596
            s.disconnectObservers();                                                                                   // 3597
            // Disable keyboard/mousewheel                                                                             // 3598
            if (s.params.keyboardControl) {                                                                            // 3599
                if (s.disableKeyboardControl) s.disableKeyboardControl();                                              // 3600
            }                                                                                                          // 3601
            if (s.params.mousewheelControl) {                                                                          // 3602
                if (s.disableMousewheelControl) s.disableMousewheelControl();                                          // 3603
            }                                                                                                          // 3604
            // Disable a11y                                                                                            // 3605
            if (s.params.a11y && s.a11y) s.a11y.destroy();                                                             // 3606
            // Destroy callback                                                                                        // 3607
            s.emit('onDestroy');                                                                                       // 3608
            // Delete instance                                                                                         // 3609
            if (deleteInstance !== false) s = null;                                                                    // 3610
        };                                                                                                             // 3611
                                                                                                                       // 3612
        s.init();                                                                                                      // 3613
                                                                                                                       // 3614
                                                                                                                       // 3615
                                                                                                                       // 3616
        // Return swiper instance                                                                                      // 3617
        return s;                                                                                                      // 3618
    };                                                                                                                 // 3619
                                                                                                                       // 3620
                                                                                                                       // 3621
    /*==================================================                                                               // 3622
        Prototype                                                                                                      // 3623
    ====================================================*/                                                             // 3624
    Swiper.prototype = {                                                                                               // 3625
        isSafari: (function () {                                                                                       // 3626
            var ua = navigator.userAgent.toLowerCase();                                                                // 3627
            return (ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0);               // 3628
        })(),                                                                                                          // 3629
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),                         // 3630
        isArray: function (arr) {                                                                                      // 3631
            return Object.prototype.toString.apply(arr) === '[object Array]';                                          // 3632
        },                                                                                                             // 3633
        /*==================================================                                                           // 3634
        Browser                                                                                                        // 3635
        ====================================================*/                                                         // 3636
        browser: {                                                                                                     // 3637
            ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,                                  // 3638
            ieTouch: (window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1) || (window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1)
        },                                                                                                             // 3640
        /*==================================================                                                           // 3641
        Devices                                                                                                        // 3642
        ====================================================*/                                                         // 3643
        device: (function () {                                                                                         // 3644
            var ua = navigator.userAgent;                                                                              // 3645
            var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);                                                     // 3646
            var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);                                                               // 3647
            var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);                                                            // 3648
            var iphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/);                                                  // 3649
            return {                                                                                                   // 3650
                ios: ipad || iphone || ipod,                                                                           // 3651
                android: android                                                                                       // 3652
            };                                                                                                         // 3653
        })(),                                                                                                          // 3654
        /*==================================================                                                           // 3655
        Feature Detection                                                                                              // 3656
        ====================================================*/                                                         // 3657
        support: {                                                                                                     // 3658
            touch : (window.Modernizr && Modernizr.touch === true) || (function () {                                   // 3659
                return !!(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch);    // 3660
            })(),                                                                                                      // 3661
                                                                                                                       // 3662
            transforms3d : (window.Modernizr && Modernizr.csstransforms3d === true) || (function () {                  // 3663
                var div = document.createElement('div').style;                                                         // 3664
                return ('webkitPerspective' in div || 'MozPerspective' in div || 'OPerspective' in div || 'MsPerspective' in div || 'perspective' in div);
            })(),                                                                                                      // 3666
                                                                                                                       // 3667
            flexbox: (function () {                                                                                    // 3668
                var div = document.createElement('div').style;                                                         // 3669
                var styles = ('alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient').split(' ');
                for (var i = 0; i < styles.length; i++) {                                                              // 3671
                    if (styles[i] in div) return true;                                                                 // 3672
                }                                                                                                      // 3673
            })(),                                                                                                      // 3674
                                                                                                                       // 3675
            observer: (function () {                                                                                   // 3676
                return ('MutationObserver' in window || 'WebkitMutationObserver' in window);                           // 3677
            })()                                                                                                       // 3678
        },                                                                                                             // 3679
        /*==================================================                                                           // 3680
        Plugins                                                                                                        // 3681
        ====================================================*/                                                         // 3682
        plugins: {}                                                                                                    // 3683
    };                                                                                                                 // 3684
                                                                                                                       // 3685
                                                                                                                       // 3686
    /*===========================                                                                                      // 3687
    Dom7 Library                                                                                                       // 3688
    ===========================*/                                                                                      // 3689
    var Dom7 = (function () {                                                                                          // 3690
        var Dom7 = function (arr) {                                                                                    // 3691
            var _this = this, i = 0;                                                                                   // 3692
            // Create array-like object                                                                                // 3693
            for (i = 0; i < arr.length; i++) {                                                                         // 3694
                _this[i] = arr[i];                                                                                     // 3695
            }                                                                                                          // 3696
            _this.length = arr.length;                                                                                 // 3697
            // Return collection with methods                                                                          // 3698
            return this;                                                                                               // 3699
        };                                                                                                             // 3700
        var $ = function (selector, context) {                                                                         // 3701
            var arr = [], i = 0;                                                                                       // 3702
            if (selector && !context) {                                                                                // 3703
                if (selector instanceof Dom7) {                                                                        // 3704
                    return selector;                                                                                   // 3705
                }                                                                                                      // 3706
            }                                                                                                          // 3707
            if (selector) {                                                                                            // 3708
                // String                                                                                              // 3709
                if (typeof selector === 'string') {                                                                    // 3710
                    var els, tempParent, html = selector.trim();                                                       // 3711
                    if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {                                            // 3712
                        var toCreate = 'div';                                                                          // 3713
                        if (html.indexOf('<li') === 0) toCreate = 'ul';                                                // 3714
                        if (html.indexOf('<tr') === 0) toCreate = 'tbody';                                             // 3715
                        if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) toCreate = 'tr';                   // 3716
                        if (html.indexOf('<tbody') === 0) toCreate = 'table';                                          // 3717
                        if (html.indexOf('<option') === 0) toCreate = 'select';                                        // 3718
                        tempParent = document.createElement(toCreate);                                                 // 3719
                        tempParent.innerHTML = selector;                                                               // 3720
                        for (i = 0; i < tempParent.childNodes.length; i++) {                                           // 3721
                            arr.push(tempParent.childNodes[i]);                                                        // 3722
                        }                                                                                              // 3723
                    }                                                                                                  // 3724
                    else {                                                                                             // 3725
                        if (!context && selector[0] === '#' && !selector.match(/[ .<>:~]/)) {                          // 3726
                            // Pure ID selector                                                                        // 3727
                            els = [document.getElementById(selector.split('#')[1])];                                   // 3728
                        }                                                                                              // 3729
                        else {                                                                                         // 3730
                            // Other selectors                                                                         // 3731
                            els = (context || document).querySelectorAll(selector);                                    // 3732
                        }                                                                                              // 3733
                        for (i = 0; i < els.length; i++) {                                                             // 3734
                            if (els[i]) arr.push(els[i]);                                                              // 3735
                        }                                                                                              // 3736
                    }                                                                                                  // 3737
                }                                                                                                      // 3738
                // Node/element                                                                                        // 3739
                else if (selector.nodeType || selector === window || selector === document) {                          // 3740
                    arr.push(selector);                                                                                // 3741
                }                                                                                                      // 3742
                //Array of elements or instance of Dom                                                                 // 3743
                else if (selector.length > 0 && selector[0].nodeType) {                                                // 3744
                    for (i = 0; i < selector.length; i++) {                                                            // 3745
                        arr.push(selector[i]);                                                                         // 3746
                    }                                                                                                  // 3747
                }                                                                                                      // 3748
            }                                                                                                          // 3749
            return new Dom7(arr);                                                                                      // 3750
        };                                                                                                             // 3751
        Dom7.prototype = {                                                                                             // 3752
            // Classes and attriutes                                                                                   // 3753
            addClass: function (className) {                                                                           // 3754
                if (typeof className === 'undefined') {                                                                // 3755
                    return this;                                                                                       // 3756
                }                                                                                                      // 3757
                var classes = className.split(' ');                                                                    // 3758
                for (var i = 0; i < classes.length; i++) {                                                             // 3759
                    for (var j = 0; j < this.length; j++) {                                                            // 3760
                        this[j].classList.add(classes[i]);                                                             // 3761
                    }                                                                                                  // 3762
                }                                                                                                      // 3763
                return this;                                                                                           // 3764
            },                                                                                                         // 3765
            removeClass: function (className) {                                                                        // 3766
                var classes = className.split(' ');                                                                    // 3767
                for (var i = 0; i < classes.length; i++) {                                                             // 3768
                    for (var j = 0; j < this.length; j++) {                                                            // 3769
                        this[j].classList.remove(classes[i]);                                                          // 3770
                    }                                                                                                  // 3771
                }                                                                                                      // 3772
                return this;                                                                                           // 3773
            },                                                                                                         // 3774
            hasClass: function (className) {                                                                           // 3775
                if (!this[0]) return false;                                                                            // 3776
                else return this[0].classList.contains(className);                                                     // 3777
            },                                                                                                         // 3778
            toggleClass: function (className) {                                                                        // 3779
                var classes = className.split(' ');                                                                    // 3780
                for (var i = 0; i < classes.length; i++) {                                                             // 3781
                    for (var j = 0; j < this.length; j++) {                                                            // 3782
                        this[j].classList.toggle(classes[i]);                                                          // 3783
                    }                                                                                                  // 3784
                }                                                                                                      // 3785
                return this;                                                                                           // 3786
            },                                                                                                         // 3787
            attr: function (attrs, value) {                                                                            // 3788
                if (arguments.length === 1 && typeof attrs === 'string') {                                             // 3789
                    // Get attr                                                                                        // 3790
                    if (this[0]) return this[0].getAttribute(attrs);                                                   // 3791
                    else return undefined;                                                                             // 3792
                }                                                                                                      // 3793
                else {                                                                                                 // 3794
                    // Set attrs                                                                                       // 3795
                    for (var i = 0; i < this.length; i++) {                                                            // 3796
                        if (arguments.length === 2) {                                                                  // 3797
                            // String                                                                                  // 3798
                            this[i].setAttribute(attrs, value);                                                        // 3799
                        }                                                                                              // 3800
                        else {                                                                                         // 3801
                            // Object                                                                                  // 3802
                            for (var attrName in attrs) {                                                              // 3803
                                this[i][attrName] = attrs[attrName];                                                   // 3804
                                this[i].setAttribute(attrName, attrs[attrName]);                                       // 3805
                            }                                                                                          // 3806
                        }                                                                                              // 3807
                    }                                                                                                  // 3808
                    return this;                                                                                       // 3809
                }                                                                                                      // 3810
            },                                                                                                         // 3811
            removeAttr: function (attr) {                                                                              // 3812
                for (var i = 0; i < this.length; i++) {                                                                // 3813
                    this[i].removeAttribute(attr);                                                                     // 3814
                }                                                                                                      // 3815
                return this;                                                                                           // 3816
            },                                                                                                         // 3817
            data: function (key, value) {                                                                              // 3818
                if (typeof value === 'undefined') {                                                                    // 3819
                    // Get value                                                                                       // 3820
                    if (this[0]) {                                                                                     // 3821
                        var dataKey = this[0].getAttribute('data-' + key);                                             // 3822
                        if (dataKey) return dataKey;                                                                   // 3823
                        else if (this[0].dom7ElementDataStorage && (key in this[0].dom7ElementDataStorage)) return this[0].dom7ElementDataStorage[key];
                        else return undefined;                                                                         // 3825
                    }                                                                                                  // 3826
                    else return undefined;                                                                             // 3827
                }                                                                                                      // 3828
                else {                                                                                                 // 3829
                    // Set value                                                                                       // 3830
                    for (var i = 0; i < this.length; i++) {                                                            // 3831
                        var el = this[i];                                                                              // 3832
                        if (!el.dom7ElementDataStorage) el.dom7ElementDataStorage = {};                                // 3833
                        el.dom7ElementDataStorage[key] = value;                                                        // 3834
                    }                                                                                                  // 3835
                    return this;                                                                                       // 3836
                }                                                                                                      // 3837
            },                                                                                                         // 3838
            // Transforms                                                                                              // 3839
            transform : function (transform) {                                                                         // 3840
                for (var i = 0; i < this.length; i++) {                                                                // 3841
                    var elStyle = this[i].style;                                                                       // 3842
                    elStyle.webkitTransform = elStyle.MsTransform = elStyle.msTransform = elStyle.MozTransform = elStyle.OTransform = elStyle.transform = transform;
                }                                                                                                      // 3844
                return this;                                                                                           // 3845
            },                                                                                                         // 3846
            transition: function (duration) {                                                                          // 3847
                if (typeof duration !== 'string') {                                                                    // 3848
                    duration = duration + 'ms';                                                                        // 3849
                }                                                                                                      // 3850
                for (var i = 0; i < this.length; i++) {                                                                // 3851
                    var elStyle = this[i].style;                                                                       // 3852
                    elStyle.webkitTransitionDuration = elStyle.MsTransitionDuration = elStyle.msTransitionDuration = elStyle.MozTransitionDuration = elStyle.OTransitionDuration = elStyle.transitionDuration = duration;
                }                                                                                                      // 3854
                return this;                                                                                           // 3855
            },                                                                                                         // 3856
            //Events                                                                                                   // 3857
            on: function (eventName, targetSelector, listener, capture) {                                              // 3858
                function handleLiveEvent(e) {                                                                          // 3859
                    var target = e.target;                                                                             // 3860
                    if ($(target).is(targetSelector)) listener.call(target, e);                                        // 3861
                    else {                                                                                             // 3862
                        var parents = $(target).parents();                                                             // 3863
                        for (var k = 0; k < parents.length; k++) {                                                     // 3864
                            if ($(parents[k]).is(targetSelector)) listener.call(parents[k], e);                        // 3865
                        }                                                                                              // 3866
                    }                                                                                                  // 3867
                }                                                                                                      // 3868
                var events = eventName.split(' ');                                                                     // 3869
                var i, j;                                                                                              // 3870
                for (i = 0; i < this.length; i++) {                                                                    // 3871
                    if (typeof targetSelector === 'function' || targetSelector === false) {                            // 3872
                        // Usual events                                                                                // 3873
                        if (typeof targetSelector === 'function') {                                                    // 3874
                            listener = arguments[1];                                                                   // 3875
                            capture = arguments[2] || false;                                                           // 3876
                        }                                                                                              // 3877
                        for (j = 0; j < events.length; j++) {                                                          // 3878
                            this[i].addEventListener(events[j], listener, capture);                                    // 3879
                        }                                                                                              // 3880
                    }                                                                                                  // 3881
                    else {                                                                                             // 3882
                        //Live events                                                                                  // 3883
                        for (j = 0; j < events.length; j++) {                                                          // 3884
                            if (!this[i].dom7LiveListeners) this[i].dom7LiveListeners = [];                            // 3885
                            this[i].dom7LiveListeners.push({listener: listener, liveListener: handleLiveEvent});       // 3886
                            this[i].addEventListener(events[j], handleLiveEvent, capture);                             // 3887
                        }                                                                                              // 3888
                    }                                                                                                  // 3889
                }                                                                                                      // 3890
                                                                                                                       // 3891
                return this;                                                                                           // 3892
            },                                                                                                         // 3893
            off: function (eventName, targetSelector, listener, capture) {                                             // 3894
                var events = eventName.split(' ');                                                                     // 3895
                for (var i = 0; i < events.length; i++) {                                                              // 3896
                    for (var j = 0; j < this.length; j++) {                                                            // 3897
                        if (typeof targetSelector === 'function' || targetSelector === false) {                        // 3898
                            // Usual events                                                                            // 3899
                            if (typeof targetSelector === 'function') {                                                // 3900
                                listener = arguments[1];                                                               // 3901
                                capture = arguments[2] || false;                                                       // 3902
                            }                                                                                          // 3903
                            this[j].removeEventListener(events[i], listener, capture);                                 // 3904
                        }                                                                                              // 3905
                        else {                                                                                         // 3906
                            // Live event                                                                              // 3907
                            if (this[j].dom7LiveListeners) {                                                           // 3908
                                for (var k = 0; k < this[j].dom7LiveListeners.length; k++) {                           // 3909
                                    if (this[j].dom7LiveListeners[k].listener === listener) {                          // 3910
                                        this[j].removeEventListener(events[i], this[j].dom7LiveListeners[k].liveListener, capture);
                                    }                                                                                  // 3912
                                }                                                                                      // 3913
                            }                                                                                          // 3914
                        }                                                                                              // 3915
                    }                                                                                                  // 3916
                }                                                                                                      // 3917
                return this;                                                                                           // 3918
            },                                                                                                         // 3919
            once: function (eventName, targetSelector, listener, capture) {                                            // 3920
                var dom = this;                                                                                        // 3921
                if (typeof targetSelector === 'function') {                                                            // 3922
                    targetSelector = false;                                                                            // 3923
                    listener = arguments[1];                                                                           // 3924
                    capture = arguments[2];                                                                            // 3925
                }                                                                                                      // 3926
                function proxy(e) {                                                                                    // 3927
                    listener(e);                                                                                       // 3928
                    dom.off(eventName, targetSelector, proxy, capture);                                                // 3929
                }                                                                                                      // 3930
                dom.on(eventName, targetSelector, proxy, capture);                                                     // 3931
            },                                                                                                         // 3932
            trigger: function (eventName, eventData) {                                                                 // 3933
                for (var i = 0; i < this.length; i++) {                                                                // 3934
                    var evt;                                                                                           // 3935
                    try {                                                                                              // 3936
                        evt = new window.CustomEvent(eventName, {detail: eventData, bubbles: true, cancelable: true});
                    }                                                                                                  // 3938
                    catch (e) {                                                                                        // 3939
                        evt = document.createEvent('Event');                                                           // 3940
                        evt.initEvent(eventName, true, true);                                                          // 3941
                        evt.detail = eventData;                                                                        // 3942
                    }                                                                                                  // 3943
                    this[i].dispatchEvent(evt);                                                                        // 3944
                }                                                                                                      // 3945
                return this;                                                                                           // 3946
            },                                                                                                         // 3947
            transitionEnd: function (callback) {                                                                       // 3948
                var events = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'],
                    i, j, dom = this;                                                                                  // 3950
                function fireCallBack(e) {                                                                             // 3951
                    /*jshint validthis:true */                                                                         // 3952
                    if (e.target !== this) return;                                                                     // 3953
                    callback.call(this, e);                                                                            // 3954
                    for (i = 0; i < events.length; i++) {                                                              // 3955
                        dom.off(events[i], fireCallBack);                                                              // 3956
                    }                                                                                                  // 3957
                }                                                                                                      // 3958
                if (callback) {                                                                                        // 3959
                    for (i = 0; i < events.length; i++) {                                                              // 3960
                        dom.on(events[i], fireCallBack);                                                               // 3961
                    }                                                                                                  // 3962
                }                                                                                                      // 3963
                return this;                                                                                           // 3964
            },                                                                                                         // 3965
            // Sizing/Styles                                                                                           // 3966
            width: function () {                                                                                       // 3967
                if (this[0] === window) {                                                                              // 3968
                    return window.innerWidth;                                                                          // 3969
                }                                                                                                      // 3970
                else {                                                                                                 // 3971
                    if (this.length > 0) {                                                                             // 3972
                        return parseFloat(this.css('width'));                                                          // 3973
                    }                                                                                                  // 3974
                    else {                                                                                             // 3975
                        return null;                                                                                   // 3976
                    }                                                                                                  // 3977
                }                                                                                                      // 3978
            },                                                                                                         // 3979
            outerWidth: function (includeMargins) {                                                                    // 3980
                if (this.length > 0) {                                                                                 // 3981
                    if (includeMargins)                                                                                // 3982
                        return this[0].offsetWidth + parseFloat(this.css('margin-right')) + parseFloat(this.css('margin-left'));
                    else                                                                                               // 3984
                        return this[0].offsetWidth;                                                                    // 3985
                }                                                                                                      // 3986
                else return null;                                                                                      // 3987
            },                                                                                                         // 3988
            height: function () {                                                                                      // 3989
                if (this[0] === window) {                                                                              // 3990
                    return window.innerHeight;                                                                         // 3991
                }                                                                                                      // 3992
                else {                                                                                                 // 3993
                    if (this.length > 0) {                                                                             // 3994
                        return parseFloat(this.css('height'));                                                         // 3995
                    }                                                                                                  // 3996
                    else {                                                                                             // 3997
                        return null;                                                                                   // 3998
                    }                                                                                                  // 3999
                }                                                                                                      // 4000
            },                                                                                                         // 4001
            outerHeight: function (includeMargins) {                                                                   // 4002
                if (this.length > 0) {                                                                                 // 4003
                    if (includeMargins)                                                                                // 4004
                        return this[0].offsetHeight + parseFloat(this.css('margin-top')) + parseFloat(this.css('margin-bottom'));
                    else                                                                                               // 4006
                        return this[0].offsetHeight;                                                                   // 4007
                }                                                                                                      // 4008
                else return null;                                                                                      // 4009
            },                                                                                                         // 4010
            offset: function () {                                                                                      // 4011
                if (this.length > 0) {                                                                                 // 4012
                    var el = this[0];                                                                                  // 4013
                    var box = el.getBoundingClientRect();                                                              // 4014
                    var body = document.body;                                                                          // 4015
                    var clientTop  = el.clientTop  || body.clientTop  || 0;                                            // 4016
                    var clientLeft = el.clientLeft || body.clientLeft || 0;                                            // 4017
                    var scrollTop  = window.pageYOffset || el.scrollTop;                                               // 4018
                    var scrollLeft = window.pageXOffset || el.scrollLeft;                                              // 4019
                    return {                                                                                           // 4020
                        top: box.top  + scrollTop  - clientTop,                                                        // 4021
                        left: box.left + scrollLeft - clientLeft                                                       // 4022
                    };                                                                                                 // 4023
                }                                                                                                      // 4024
                else {                                                                                                 // 4025
                    return null;                                                                                       // 4026
                }                                                                                                      // 4027
            },                                                                                                         // 4028
            css: function (props, value) {                                                                             // 4029
                var i;                                                                                                 // 4030
                if (arguments.length === 1) {                                                                          // 4031
                    if (typeof props === 'string') {                                                                   // 4032
                        if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(props);            // 4033
                    }                                                                                                  // 4034
                    else {                                                                                             // 4035
                        for (i = 0; i < this.length; i++) {                                                            // 4036
                            for (var prop in props) {                                                                  // 4037
                                this[i].style[prop] = props[prop];                                                     // 4038
                            }                                                                                          // 4039
                        }                                                                                              // 4040
                        return this;                                                                                   // 4041
                    }                                                                                                  // 4042
                }                                                                                                      // 4043
                if (arguments.length === 2 && typeof props === 'string') {                                             // 4044
                    for (i = 0; i < this.length; i++) {                                                                // 4045
                        this[i].style[props] = value;                                                                  // 4046
                    }                                                                                                  // 4047
                    return this;                                                                                       // 4048
                }                                                                                                      // 4049
                return this;                                                                                           // 4050
            },                                                                                                         // 4051
                                                                                                                       // 4052
            //Dom manipulation                                                                                         // 4053
            each: function (callback) {                                                                                // 4054
                for (var i = 0; i < this.length; i++) {                                                                // 4055
                    callback.call(this[i], i, this[i]);                                                                // 4056
                }                                                                                                      // 4057
                return this;                                                                                           // 4058
            },                                                                                                         // 4059
            html: function (html) {                                                                                    // 4060
                if (typeof html === 'undefined') {                                                                     // 4061
                    return this[0] ? this[0].innerHTML : undefined;                                                    // 4062
                }                                                                                                      // 4063
                else {                                                                                                 // 4064
                    for (var i = 0; i < this.length; i++) {                                                            // 4065
                        this[i].innerHTML = html;                                                                      // 4066
                    }                                                                                                  // 4067
                    return this;                                                                                       // 4068
                }                                                                                                      // 4069
            },                                                                                                         // 4070
            text: function (text) {                                                                                    // 4071
                if (typeof text === 'undefined') {                                                                     // 4072
                    if (this[0]) {                                                                                     // 4073
                        return this[0].textContent.trim();                                                             // 4074
                    }                                                                                                  // 4075
                    else return null;                                                                                  // 4076
                }                                                                                                      // 4077
                else {                                                                                                 // 4078
                    for (var i = 0; i < this.length; i++) {                                                            // 4079
                        this[i].textContent = text;                                                                    // 4080
                    }                                                                                                  // 4081
                    return this;                                                                                       // 4082
                }                                                                                                      // 4083
            },                                                                                                         // 4084
            is: function (selector) {                                                                                  // 4085
                if (!this[0]) return false;                                                                            // 4086
                var compareWith, i;                                                                                    // 4087
                if (typeof selector === 'string') {                                                                    // 4088
                    var el = this[0];                                                                                  // 4089
                    if (el === document) return selector === document;                                                 // 4090
                    if (el === window) return selector === window;                                                     // 4091
                                                                                                                       // 4092
                    if (el.matches) return el.matches(selector);                                                       // 4093
                    else if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);                      // 4094
                    else if (el.mozMatchesSelector) return el.mozMatchesSelector(selector);                            // 4095
                    else if (el.msMatchesSelector) return el.msMatchesSelector(selector);                              // 4096
                    else {                                                                                             // 4097
                        compareWith = $(selector);                                                                     // 4098
                        for (i = 0; i < compareWith.length; i++) {                                                     // 4099
                            if (compareWith[i] === this[0]) return true;                                               // 4100
                        }                                                                                              // 4101
                        return false;                                                                                  // 4102
                    }                                                                                                  // 4103
                }                                                                                                      // 4104
                else if (selector === document) return this[0] === document;                                           // 4105
                else if (selector === window) return this[0] === window;                                               // 4106
                else {                                                                                                 // 4107
                    if (selector.nodeType || selector instanceof Dom7) {                                               // 4108
                        compareWith = selector.nodeType ? [selector] : selector;                                       // 4109
                        for (i = 0; i < compareWith.length; i++) {                                                     // 4110
                            if (compareWith[i] === this[0]) return true;                                               // 4111
                        }                                                                                              // 4112
                        return false;                                                                                  // 4113
                    }                                                                                                  // 4114
                    return false;                                                                                      // 4115
                }                                                                                                      // 4116
                                                                                                                       // 4117
            },                                                                                                         // 4118
            index: function () {                                                                                       // 4119
                if (this[0]) {                                                                                         // 4120
                    var child = this[0];                                                                               // 4121
                    var i = 0;                                                                                         // 4122
                    while ((child = child.previousSibling) !== null) {                                                 // 4123
                        if (child.nodeType === 1) i++;                                                                 // 4124
                    }                                                                                                  // 4125
                    return i;                                                                                          // 4126
                }                                                                                                      // 4127
                else return undefined;                                                                                 // 4128
            },                                                                                                         // 4129
            eq: function (index) {                                                                                     // 4130
                if (typeof index === 'undefined') return this;                                                         // 4131
                var length = this.length;                                                                              // 4132
                var returnIndex;                                                                                       // 4133
                if (index > length - 1) {                                                                              // 4134
                    return new Dom7([]);                                                                               // 4135
                }                                                                                                      // 4136
                if (index < 0) {                                                                                       // 4137
                    returnIndex = length + index;                                                                      // 4138
                    if (returnIndex < 0) return new Dom7([]);                                                          // 4139
                    else return new Dom7([this[returnIndex]]);                                                         // 4140
                }                                                                                                      // 4141
                return new Dom7([this[index]]);                                                                        // 4142
            },                                                                                                         // 4143
            append: function (newChild) {                                                                              // 4144
                var i, j;                                                                                              // 4145
                for (i = 0; i < this.length; i++) {                                                                    // 4146
                    if (typeof newChild === 'string') {                                                                // 4147
                        var tempDiv = document.createElement('div');                                                   // 4148
                        tempDiv.innerHTML = newChild;                                                                  // 4149
                        while (tempDiv.firstChild) {                                                                   // 4150
                            this[i].appendChild(tempDiv.firstChild);                                                   // 4151
                        }                                                                                              // 4152
                    }                                                                                                  // 4153
                    else if (newChild instanceof Dom7) {                                                               // 4154
                        for (j = 0; j < newChild.length; j++) {                                                        // 4155
                            this[i].appendChild(newChild[j]);                                                          // 4156
                        }                                                                                              // 4157
                    }                                                                                                  // 4158
                    else {                                                                                             // 4159
                        this[i].appendChild(newChild);                                                                 // 4160
                    }                                                                                                  // 4161
                }                                                                                                      // 4162
                return this;                                                                                           // 4163
            },                                                                                                         // 4164
            prepend: function (newChild) {                                                                             // 4165
                var i, j;                                                                                              // 4166
                for (i = 0; i < this.length; i++) {                                                                    // 4167
                    if (typeof newChild === 'string') {                                                                // 4168
                        var tempDiv = document.createElement('div');                                                   // 4169
                        tempDiv.innerHTML = newChild;                                                                  // 4170
                        for (j = tempDiv.childNodes.length - 1; j >= 0; j--) {                                         // 4171
                            this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);                        // 4172
                        }                                                                                              // 4173
                        // this[i].insertAdjacentHTML('afterbegin', newChild);                                         // 4174
                    }                                                                                                  // 4175
                    else if (newChild instanceof Dom7) {                                                               // 4176
                        for (j = 0; j < newChild.length; j++) {                                                        // 4177
                            this[i].insertBefore(newChild[j], this[i].childNodes[0]);                                  // 4178
                        }                                                                                              // 4179
                    }                                                                                                  // 4180
                    else {                                                                                             // 4181
                        this[i].insertBefore(newChild, this[i].childNodes[0]);                                         // 4182
                    }                                                                                                  // 4183
                }                                                                                                      // 4184
                return this;                                                                                           // 4185
            },                                                                                                         // 4186
            insertBefore: function (selector) {                                                                        // 4187
                var before = $(selector);                                                                              // 4188
                for (var i = 0; i < this.length; i++) {                                                                // 4189
                    if (before.length === 1) {                                                                         // 4190
                        before[0].parentNode.insertBefore(this[i], before[0]);                                         // 4191
                    }                                                                                                  // 4192
                    else if (before.length > 1) {                                                                      // 4193
                        for (var j = 0; j < before.length; j++) {                                                      // 4194
                            before[j].parentNode.insertBefore(this[i].cloneNode(true), before[j]);                     // 4195
                        }                                                                                              // 4196
                    }                                                                                                  // 4197
                }                                                                                                      // 4198
            },                                                                                                         // 4199
            insertAfter: function (selector) {                                                                         // 4200
                var after = $(selector);                                                                               // 4201
                for (var i = 0; i < this.length; i++) {                                                                // 4202
                    if (after.length === 1) {                                                                          // 4203
                        after[0].parentNode.insertBefore(this[i], after[0].nextSibling);                               // 4204
                    }                                                                                                  // 4205
                    else if (after.length > 1) {                                                                       // 4206
                        for (var j = 0; j < after.length; j++) {                                                       // 4207
                            after[j].parentNode.insertBefore(this[i].cloneNode(true), after[j].nextSibling);           // 4208
                        }                                                                                              // 4209
                    }                                                                                                  // 4210
                }                                                                                                      // 4211
            },                                                                                                         // 4212
            next: function (selector) {                                                                                // 4213
                if (this.length > 0) {                                                                                 // 4214
                    if (selector) {                                                                                    // 4215
                        if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) return new Dom7([this[0].nextElementSibling]);
                        else return new Dom7([]);                                                                      // 4217
                    }                                                                                                  // 4218
                    else {                                                                                             // 4219
                        if (this[0].nextElementSibling) return new Dom7([this[0].nextElementSibling]);                 // 4220
                        else return new Dom7([]);                                                                      // 4221
                    }                                                                                                  // 4222
                }                                                                                                      // 4223
                else return new Dom7([]);                                                                              // 4224
            },                                                                                                         // 4225
            nextAll: function (selector) {                                                                             // 4226
                var nextEls = [];                                                                                      // 4227
                var el = this[0];                                                                                      // 4228
                if (!el) return new Dom7([]);                                                                          // 4229
                while (el.nextElementSibling) {                                                                        // 4230
                    var next = el.nextElementSibling;                                                                  // 4231
                    if (selector) {                                                                                    // 4232
                        if($(next).is(selector)) nextEls.push(next);                                                   // 4233
                    }                                                                                                  // 4234
                    else nextEls.push(next);                                                                           // 4235
                    el = next;                                                                                         // 4236
                }                                                                                                      // 4237
                return new Dom7(nextEls);                                                                              // 4238
            },                                                                                                         // 4239
            prev: function (selector) {                                                                                // 4240
                if (this.length > 0) {                                                                                 // 4241
                    if (selector) {                                                                                    // 4242
                        if (this[0].previousElementSibling && $(this[0].previousElementSibling).is(selector)) return new Dom7([this[0].previousElementSibling]);
                        else return new Dom7([]);                                                                      // 4244
                    }                                                                                                  // 4245
                    else {                                                                                             // 4246
                        if (this[0].previousElementSibling) return new Dom7([this[0].previousElementSibling]);         // 4247
                        else return new Dom7([]);                                                                      // 4248
                    }                                                                                                  // 4249
                }                                                                                                      // 4250
                else return new Dom7([]);                                                                              // 4251
            },                                                                                                         // 4252
            prevAll: function (selector) {                                                                             // 4253
                var prevEls = [];                                                                                      // 4254
                var el = this[0];                                                                                      // 4255
                if (!el) return new Dom7([]);                                                                          // 4256
                while (el.previousElementSibling) {                                                                    // 4257
                    var prev = el.previousElementSibling;                                                              // 4258
                    if (selector) {                                                                                    // 4259
                        if($(prev).is(selector)) prevEls.push(prev);                                                   // 4260
                    }                                                                                                  // 4261
                    else prevEls.push(prev);                                                                           // 4262
                    el = prev;                                                                                         // 4263
                }                                                                                                      // 4264
                return new Dom7(prevEls);                                                                              // 4265
            },                                                                                                         // 4266
            parent: function (selector) {                                                                              // 4267
                var parents = [];                                                                                      // 4268
                for (var i = 0; i < this.length; i++) {                                                                // 4269
                    if (selector) {                                                                                    // 4270
                        if ($(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);                      // 4271
                    }                                                                                                  // 4272
                    else {                                                                                             // 4273
                        parents.push(this[i].parentNode);                                                              // 4274
                    }                                                                                                  // 4275
                }                                                                                                      // 4276
                return $($.unique(parents));                                                                           // 4277
            },                                                                                                         // 4278
            parents: function (selector) {                                                                             // 4279
                var parents = [];                                                                                      // 4280
                for (var i = 0; i < this.length; i++) {                                                                // 4281
                    var parent = this[i].parentNode;                                                                   // 4282
                    while (parent) {                                                                                   // 4283
                        if (selector) {                                                                                // 4284
                            if ($(parent).is(selector)) parents.push(parent);                                          // 4285
                        }                                                                                              // 4286
                        else {                                                                                         // 4287
                            parents.push(parent);                                                                      // 4288
                        }                                                                                              // 4289
                        parent = parent.parentNode;                                                                    // 4290
                    }                                                                                                  // 4291
                }                                                                                                      // 4292
                return $($.unique(parents));                                                                           // 4293
            },                                                                                                         // 4294
            find : function (selector) {                                                                               // 4295
                var foundElements = [];                                                                                // 4296
                for (var i = 0; i < this.length; i++) {                                                                // 4297
                    var found = this[i].querySelectorAll(selector);                                                    // 4298
                    for (var j = 0; j < found.length; j++) {                                                           // 4299
                        foundElements.push(found[j]);                                                                  // 4300
                    }                                                                                                  // 4301
                }                                                                                                      // 4302
                return new Dom7(foundElements);                                                                        // 4303
            },                                                                                                         // 4304
            children: function (selector) {                                                                            // 4305
                var children = [];                                                                                     // 4306
                for (var i = 0; i < this.length; i++) {                                                                // 4307
                    var childNodes = this[i].childNodes;                                                               // 4308
                                                                                                                       // 4309
                    for (var j = 0; j < childNodes.length; j++) {                                                      // 4310
                        if (!selector) {                                                                               // 4311
                            if (childNodes[j].nodeType === 1) children.push(childNodes[j]);                            // 4312
                        }                                                                                              // 4313
                        else {                                                                                         // 4314
                            if (childNodes[j].nodeType === 1 && $(childNodes[j]).is(selector)) children.push(childNodes[j]);
                        }                                                                                              // 4316
                    }                                                                                                  // 4317
                }                                                                                                      // 4318
                return new Dom7($.unique(children));                                                                   // 4319
            },                                                                                                         // 4320
            remove: function () {                                                                                      // 4321
                for (var i = 0; i < this.length; i++) {                                                                // 4322
                    if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);                                   // 4323
                }                                                                                                      // 4324
                return this;                                                                                           // 4325
            },                                                                                                         // 4326
            add: function () {                                                                                         // 4327
                var dom = this;                                                                                        // 4328
                var i, j;                                                                                              // 4329
                for (i = 0; i < arguments.length; i++) {                                                               // 4330
                    var toAdd = $(arguments[i]);                                                                       // 4331
                    for (j = 0; j < toAdd.length; j++) {                                                               // 4332
                        dom[dom.length] = toAdd[j];                                                                    // 4333
                        dom.length++;                                                                                  // 4334
                    }                                                                                                  // 4335
                }                                                                                                      // 4336
                return dom;                                                                                            // 4337
            }                                                                                                          // 4338
        };                                                                                                             // 4339
        $.fn = Dom7.prototype;                                                                                         // 4340
        $.unique = function (arr) {                                                                                    // 4341
            var unique = [];                                                                                           // 4342
            for (var i = 0; i < arr.length; i++) {                                                                     // 4343
                if (unique.indexOf(arr[i]) === -1) unique.push(arr[i]);                                                // 4344
            }                                                                                                          // 4345
            return unique;                                                                                             // 4346
        };                                                                                                             // 4347
                                                                                                                       // 4348
        return $;                                                                                                      // 4349
    })();                                                                                                              // 4350
                                                                                                                       // 4351
                                                                                                                       // 4352
    /*===========================                                                                                      // 4353
     Get Dom libraries                                                                                                 // 4354
     ===========================*/                                                                                     // 4355
    var swiperDomPlugins = ['jQuery', 'Zepto', 'Dom7'];                                                                // 4356
    for (var i = 0; i < swiperDomPlugins.length; i++) {                                                                // 4357
    	if (window[swiperDomPlugins[i]]) {                                                                                // 4358
    		addLibraryPlugin(window[swiperDomPlugins[i]]);                                                                   // 4359
    	}                                                                                                                 // 4360
    }                                                                                                                  // 4361
    // Required DOM Plugins                                                                                            // 4362
    var domLib;                                                                                                        // 4363
    if (typeof Dom7 === 'undefined') {                                                                                 // 4364
    	domLib = window.Dom7 || window.Zepto || window.jQuery;                                                            // 4365
    }                                                                                                                  // 4366
    else {                                                                                                             // 4367
    	domLib = Dom7;                                                                                                    // 4368
    }                                                                                                                  // 4369
                                                                                                                       // 4370
    /*===========================                                                                                      // 4371
    Add .swiper plugin from Dom libraries                                                                              // 4372
    ===========================*/                                                                                      // 4373
    function addLibraryPlugin(lib) {                                                                                   // 4374
        lib.fn.swiper = function (params) {                                                                            // 4375
            var firstInstance;                                                                                         // 4376
            lib(this).each(function () {                                                                               // 4377
                var s = new Swiper(this, params);                                                                      // 4378
                if (!firstInstance) firstInstance = s;                                                                 // 4379
            });                                                                                                        // 4380
            return firstInstance;                                                                                      // 4381
        };                                                                                                             // 4382
    }                                                                                                                  // 4383
                                                                                                                       // 4384
    if (domLib) {                                                                                                      // 4385
        if (!('transitionEnd' in domLib.fn)) {                                                                         // 4386
            domLib.fn.transitionEnd = function (callback) {                                                            // 4387
                var events = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'],
                    i, j, dom = this;                                                                                  // 4389
                function fireCallBack(e) {                                                                             // 4390
                    /*jshint validthis:true */                                                                         // 4391
                    if (e.target !== this) return;                                                                     // 4392
                    callback.call(this, e);                                                                            // 4393
                    for (i = 0; i < events.length; i++) {                                                              // 4394
                        dom.off(events[i], fireCallBack);                                                              // 4395
                    }                                                                                                  // 4396
                }                                                                                                      // 4397
                if (callback) {                                                                                        // 4398
                    for (i = 0; i < events.length; i++) {                                                              // 4399
                        dom.on(events[i], fireCallBack);                                                               // 4400
                    }                                                                                                  // 4401
                }                                                                                                      // 4402
                return this;                                                                                           // 4403
            };                                                                                                         // 4404
        }                                                                                                              // 4405
        if (!('transform' in domLib.fn)) {                                                                             // 4406
            domLib.fn.transform = function (transform) {                                                               // 4407
                for (var i = 0; i < this.length; i++) {                                                                // 4408
                    var elStyle = this[i].style;                                                                       // 4409
                    elStyle.webkitTransform = elStyle.MsTransform = elStyle.msTransform = elStyle.MozTransform = elStyle.OTransform = elStyle.transform = transform;
                }                                                                                                      // 4411
                return this;                                                                                           // 4412
            };                                                                                                         // 4413
        }                                                                                                              // 4414
        if (!('transition' in domLib.fn)) {                                                                            // 4415
            domLib.fn.transition = function (duration) {                                                               // 4416
                if (typeof duration !== 'string') {                                                                    // 4417
                    duration = duration + 'ms';                                                                        // 4418
                }                                                                                                      // 4419
                for (var i = 0; i < this.length; i++) {                                                                // 4420
                    var elStyle = this[i].style;                                                                       // 4421
                    elStyle.webkitTransitionDuration = elStyle.MsTransitionDuration = elStyle.msTransitionDuration = elStyle.MozTransitionDuration = elStyle.OTransitionDuration = elStyle.transitionDuration = duration;
                }                                                                                                      // 4423
                return this;                                                                                           // 4424
            };                                                                                                         // 4425
        }                                                                                                              // 4426
    }                                                                                                                  // 4427
                                                                                                                       // 4428
    window.Swiper = Swiper;                                                                                            // 4429
})();                                                                                                                  // 4430
/*===========================                                                                                          // 4431
Swiper AMD Export                                                                                                      // 4432
===========================*/                                                                                          // 4433
if (typeof(module) !== 'undefined')                                                                                    // 4434
{                                                                                                                      // 4435
    module.exports = window.Swiper;                                                                                    // 4436
}                                                                                                                      // 4437
else if (typeof define === 'function' && define.amd) {                                                                 // 4438
    define([], function () {                                                                                           // 4439
        'use strict';                                                                                                  // 4440
        return window.Swiper;                                                                                          // 4441
    });                                                                                                                // 4442
}                                                                                                                      // 4443
//# sourceMappingURL=maps/swiper.js.map                                                                                // 4444
                                                                                                                       // 4445
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['nolimits4web:swiper'] = {};

})();
