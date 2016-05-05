var require = meteorInstall({"client":{"templates":{"account.html":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
// client/templates/template.account.js                                                                     //
//                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            //
                                                                                                            // 1
Template.__checkName("account");                                                                            // 2
Template["account"] = new Template("Template.account", (function() {                                        // 3
  var view = this;                                                                                          // 4
  return [ Spacebars.include(view.lookupTemplate("header")), "\n	", HTML.MAIN("\n	", Spacebars.include(view.lookupTemplate("user_avatar")), "\n	", HTML.SECTION({
    "class": "container"                                                                                    // 6
  }, "\n		", HTML.DIV({                                                                                     // 7
    "class": "row"                                                                                          // 8
  }, "\n			", HTML.SECTION({                                                                                // 9
    "class": "col l7 offset-l2 m6 offset-m5 s10 offset-s1"                                                  // 10
  }, "\n				", HTML.Raw("<h4>Account</h4>"), "\n			\n				", HTML.SECTION({                                  // 11
    "class": "section"                                                                                      // 12
  }, "\n					", Blaze.Each(function() {                                                                     // 13
    return Spacebars.call(view.lookup("starCount"));                                                        // 14
  }, function() {                                                                                           // 15
    return [ "\n					", HTML.SPAN({                                                                         // 16
      "class": "stars"                                                                                      // 17
    }, HTML.I({                                                                                             // 18
      "class": "material-icons starIcon"                                                                    // 19
    }, "star_rate"), ": ", Blaze.View("lookup:stars", function() {                                          // 20
      return Spacebars.mustache(view.lookup("stars"));                                                      // 21
    })), "\n					" ];                                                                                       // 22
  }), "\n				"), "\n				", HTML.DIV({                                                                       // 23
    "class": "collection"                                                                                   // 24
  }, "\n		        	", HTML.A({                                                                              // 25
    href: function() {                                                                                      // 26
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({                                      // 27
        route: "levels"                                                                                     // 28
      }));                                                                                                  // 29
    },                                                                                                      // 30
    "class": "collection-item"                                                                              // 31
  }, HTML.Raw('<i class="material-icons accIcon">games</i>'), "Level Selection"), "\n			        ", HTML.A({
    href: function() {                                                                                      // 33
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({                                      // 34
        route: "customisation"                                                                              // 35
      }));                                                                                                  // 36
    },                                                                                                      // 37
    "class": "collection-item"                                                                              // 38
  }, HTML.Raw('<i class="material-icons accIcon">accessibility</i>'), "Customise Your CodeGirl"), "\n			        ", HTML.A({
    href: function() {                                                                                      // 40
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({                                      // 41
        route: "leaderboard"                                                                                // 42
      }));                                                                                                  // 43
    },                                                                                                      // 44
    "class": "collection-item"                                                                              // 45
  }, HTML.Raw('<i class="material-icons accIcon">line_weight</i>'), "Leaderboard"), "\n		     	"), "\n			"), "\n		"), "\n	"), "\n	") ];
}));                                                                                                        // 47
                                                                                                            // 48
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"avatar_hexabunnies.html":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
// client/templates/template.avatar_hexabunnies.js                                                          //
//                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            //
                                                                                                            // 1
Template.__checkName("customise_avatar");                                                                   // 2
Template["customise_avatar"] = new Template("Template.customise_avatar", (function() {                      // 3
  var view = this;                                                                                          // 4
  return Blaze.If(function() {                                                                              // 5
    return Spacebars.call(view.lookup("currentUser"));                                                      // 6
  }, function() {                                                                                           // 7
    return [ "\n		", Blaze.Each(function() {                                                                // 8
      return Spacebars.call(view.lookup("avatar"));                                                         // 9
    }, function() {                                                                                         // 10
      return [ "\n			", HTML.SECTION({                                                                      // 11
        "class": "avatar_customise"                                                                         // 12
      }, "			\n				", HTML.IMG({                                                                            // 13
        src: function() {                                                                                   // 14
          return [ "/images/dressup/skin/", Spacebars.mustache(view.lookup("skin")), ".svg" ];              // 15
        },                                                                                                  // 16
        "class": "base"                                                                                     // 17
      }), "\n				", HTML.IMG({                                                                              // 18
        src: function() {                                                                                   // 19
          return [ "/images/dressup/outfit/", Spacebars.mustache(view.lookup("outfit")), ".svg" ];          // 20
        },                                                                                                  // 21
        "class": "outfit"                                                                                   // 22
      }), "\n				", HTML.IMG({                                                                              // 23
        src: function() {                                                                                   // 24
          return [ "/images/dressup/hair/", Spacebars.mustache(view.lookup("hair")), ".svg" ];              // 25
        },                                                                                                  // 26
        "class": "hair"                                                                                     // 27
      }), "			\n			"), "\n			", HTML.SECTION({                                                              // 28
        "class": "avatar_customise_mobile"                                                                  // 29
      }, "			\n				", HTML.IMG({                                                                            // 30
        src: function() {                                                                                   // 31
          return [ "/images/dressup/skin/", Spacebars.mustache(view.lookup("skin")), ".svg" ];              // 32
        },                                                                                                  // 33
        "class": "base"                                                                                     // 34
      }), "\n				", HTML.IMG({                                                                              // 35
        src: function() {                                                                                   // 36
          return [ "/images/dressup/outfit/", Spacebars.mustache(view.lookup("outfit")), ".svg" ];          // 37
        },                                                                                                  // 38
        "class": "outfit"                                                                                   // 39
      }), "\n				", HTML.IMG({                                                                              // 40
        src: function() {                                                                                   // 41
          return [ "/images/dressup/hair/", Spacebars.mustache(view.lookup("hair")), ".svg" ];              // 42
        },                                                                                                  // 43
        "class": "hair"                                                                                     // 44
      }), "		\n			"), "\n		" ];                                                                             // 45
    }), "\n	" ];                                                                                            // 46
  }, function() {                                                                                           // 47
    return [ "\n	", HTML.SECTION({                                                                          // 48
      "class": "avatar_container"                                                                           // 49
    }, "\n		", HTML.IMG({                                                                                   // 50
      src: "/images/ava_base.svg",                                                                          // 51
      "class": "ava_base"                                                                                   // 52
    }), "\n		", HTML.IMG({                                                                                  // 53
      src: "/images/ava_outfit.svg",                                                                        // 54
      "class": "ava_outfit"                                                                                 // 55
    }), "\n		", HTML.IMG({                                                                                  // 56
      src: "/images/ava_hair.svg",                                                                          // 57
      "class": "ava_hair"                                                                                   // 58
    }), "\n	"), "\n	" ];                                                                                    // 59
  });                                                                                                       // 60
}));                                                                                                        // 61
                                                                                                            // 62
Template.__checkName("user_avatar");                                                                        // 63
Template["user_avatar"] = new Template("Template.user_avatar", (function() {                                // 64
  var view = this;                                                                                          // 65
  return Blaze.If(function() {                                                                              // 66
    return Spacebars.call(view.lookup("currentUser"));                                                      // 67
  }, function() {                                                                                           // 68
    return [ "\n		", Blaze.Each(function() {                                                                // 69
      return Spacebars.call(view.lookup("avatar"));                                                         // 70
    }, function() {                                                                                         // 71
      return [ "\n			", HTML.SECTION({                                                                      // 72
        "class": "avatar_container"                                                                         // 73
      }, "			\n				", HTML.IMG({                                                                            // 74
        src: function() {                                                                                   // 75
          return [ "/images/dressup/skin/", Spacebars.mustache(view.lookup("skin")), ".svg" ];              // 76
        },                                                                                                  // 77
        "class": "base"                                                                                     // 78
      }), "\n				", HTML.IMG({                                                                              // 79
        src: function() {                                                                                   // 80
          return [ "/images/dressup/outfit/", Spacebars.mustache(view.lookup("outfit")), ".svg" ];          // 81
        },                                                                                                  // 82
        "class": "outfit"                                                                                   // 83
      }), "\n				", HTML.IMG({                                                                              // 84
        src: function() {                                                                                   // 85
          return [ "/images/dressup/hair/", Spacebars.mustache(view.lookup("hair")), ".svg" ];              // 86
        },                                                                                                  // 87
        "class": "hair"                                                                                     // 88
      }), "			\n			"), "\n		" ];                                                                            // 89
    }), "\n	" ];                                                                                            // 90
  }, function() {                                                                                           // 91
    return [ "\n	", HTML.SECTION({                                                                          // 92
      "class": "avatar_container"                                                                           // 93
    }, "\n		", HTML.IMG({                                                                                   // 94
      src: "/images/ava_base.svg",                                                                          // 95
      "class": "ava_base"                                                                                   // 96
    }), "\n		", HTML.IMG({                                                                                  // 97
      src: "/images/ava_outfit.svg",                                                                        // 98
      "class": "ava_outfit"                                                                                 // 99
    }), "\n		", HTML.IMG({                                                                                  // 100
      src: "/images/ava_hair.svg",                                                                          // 101
      "class": "ava_hair"                                                                                   // 102
    }), "\n	"), "\n	" ];                                                                                    // 103
  });                                                                                                       // 104
}));                                                                                                        // 105
                                                                                                            // 106
Template.__checkName("hexabunnies");                                                                        // 107
Template["hexabunnies"] = new Template("Template.hexabunnies", (function() {                                // 108
  var view = this;                                                                                          // 109
  return HTML.Raw('<section class="hexabunnies">\n		<img src="/images/hexabunnies.svg" class="ava_base">\n	</section>');
}));                                                                                                        // 111
                                                                                                            // 112
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"custom_slider.html":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
// client/templates/template.custom_slider.js                                                               //
//                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            //
                                                                                                            // 1
Template.__checkName("custom_slider");                                                                      // 2
Template["custom_slider"] = new Template("Template.custom_slider", (function() {                            // 3
  var view = this;                                                                                          // 4
  return [ HTML.Raw('<div class="col s12">\n      <ul class="tabs">\n        <li class="tab col s3"><a class="active" href="#Skin">Skin</a></li>\n        <li class="tab col s3"><a href="#Hair">Hair</a></li>\n        <li class="tab col s3"><a href="#Outfit">Outfit</a></li>\n      </ul>\n    </div>\n        '), Spacebars.include(view.lookupTemplate("skin")), "\n        ", Spacebars.include(view.lookupTemplate("hair")), "\n        ", Spacebars.include(view.lookupTemplate("outfit")) ];
}));                                                                                                        // 6
                                                                                                            // 7
Template.__checkName("skin");                                                                               // 8
Template["skin"] = new Template("Template.skin", (function() {                                              // 9
  var view = this;                                                                                          // 10
  return HTML.Raw('<div id="Skin" class="swiper-container">\n        <div class="swiper-wrapper">\n            <!-- Slides -->\n            <div class="swiper-slide">\n                <img src="/images/dressup_display/skin/skin_1.svg" class="ava_base">\n                <input type="radio" class="radio_item" value="skin_1" name="skin" id="skin1"> \n                \n            </div>\n            <div class="swiper-slide">\n                <img src="/images/dressup_display/skin/skin_2.svg" class="ava_base">\n                <input type="radio" class="radio_item" value="skin_2" name="skin" id="skin2"> \n                \n            </div>\n            <div class="swiper-slide">\n                <img src="/images/dressup_display/skin/skin_3.svg" class="ava_base">\n                <input type="radio" class="radio_item" value="skin_3" name="skin" id="skin3"> \n                \n            </div>\n            <div class="swiper-slide">\n                <img src="/images/dressup_display/skin/skin_4.svg" class="ava_base">\n                <input type="radio" class="radio_item" value="skin_4" name="skin" id="skin4">\n                \n            </div>\n            <div class="swiper-slide">\n                <img src="/images/dressup_display/skin/skin_5.svg" class="ava_base">\n                <input type="radio" class="radio_item" value="skin_5" name="skin" id="skin5">            \n            </div>\n        </div>\n        <!-- If we need pagination -->\n        <div class="swiper-pagination"></div>\n        \n        <!-- If we need navigation buttons -->\n        <div class="swiper-button-prev"></div>\n        <div class="swiper-button-next"></div>\n        \n    </div>');
}));                                                                                                        // 12
                                                                                                            // 13
Template.__checkName("hair");                                                                               // 14
Template["hair"] = new Template("Template.hair", (function() {                                              // 15
  var view = this;                                                                                          // 16
  return HTML.Raw('<div id="Hair" class="swiper-container">\n        <div class="swiper-wrapper">\n            <!-- Slides -->\n            <!-- first set of hair -->\n            <div class="swiper-slide hair-slider">\n                <img src="/images/dressup_display/hair/hair_1_black.svg" class="ava_hair">\n                <input type="radio" class="radio_item" value="hair_1_black" name="hair" id="hair1"> \n                \n            </div>\n            <div class="swiper-slide hair-slider">\n                <img src="/images/dressup_display/hair/hair_1_blonde.svg" class="ava_hair">\n                <input type="radio" class="radio_item" value="hair_1_blonde" name="hair" id="hair2"> \n                \n            </div>\n            <div class="swiper-slide hair-slider">\n                <img src="/images/dressup_display/hair/hair_1_brown.svg" class="ava_hair">\n                <input type="radio" class="radio_item" value="hair_1_brown" name="hair" id="hair3"> \n                \n            </div>\n            <div class="swiper-slide hair-slider">\n                <img src="/images/dressup_display/hair/hair_1_red.svg" class="ava_hair">\n                <input type="radio" class="radio_item" value="hair_1_red" name="hair" id="hair4">            \n            </div>\n            <!-- first set ends -->\n            <!-- Second set of hair -->\n            <div class="swiper-slide hair-slider">\n                <img src="/images/dressup_display/hair/hair_2_black.svg" class="ava_hair">\n                <input type="radio" class="radio_item" value="hair_2_black" name="hair" id="hair5"> \n                \n            </div>\n            <div class="swiper-slide hair-slider">\n                <img src="/images/dressup_display/hair/hair_2_blonde.svg" class="ava_hair">\n                <input type="radio" class="radio_item" value="hair_2_blonde" name="hair" id="hair6"> \n                \n            </div>\n            <div class="swiper-slide hair-slider">\n                <img src="/images/dressup_display/hair/hair_2_brown.svg" class="ava_hair">\n                <input type="radio" class="radio_item" value="hair_2_brown" name="hair" id="hair7"> \n                \n            </div>\n            <div class="swiper-slide hair-slider">\n                <img src="/images/dressup_display/hair/hair_3_red.svg" class="ava_hair">\n                <input type="radio" class="radio_item" value="hair_3_red" name="hair" id="hair8">            \n            </div>\n            <!-- second set ends -->\n            <!-- Third set of hair -->\n            <div class="swiper-slide hair-slider">\n                <img src="/images/dressup_display/hair/hair_3_black.svg" class="ava_hair">\n                <input type="radio" class="radio_item" value="hair_3_black" name="hair" id="hair9"> \n                \n            </div>\n            <div class="swiper-slide hair-slider">\n                <img src="/images/dressup_display/hair/hair_3_blonde.svg" class="ava_hair">\n                <input type="radio" class="radio_item" value="hair_3_blonde" name="hair" id="hair10"> \n                \n            </div>\n            <div class="swiper-slide hair-slider">\n                <img src="/images/dressup_display/hair/hair_3_brown.svg" class="ava_hair">\n                <input type="radio" class="radio_item" value="hair_3_brown" name="hair" id="hair11"> \n                \n            </div>\n            <div class="swiper-slide hair-slider">\n                <img src="/images/dressup_display/hair/hair_3_red.svg" class="ava_hair">\n                <input type="radio" class="radio_item" value="hair_3_red" name="hair" id="hair12">         \n            </div>\n            <!-- Third set ends -->\n            <!-- Fourth set of hair -->\n            <div class="swiper-slide hair-slider">\n                <img src="/images/dressup_display/hair/hair_4_black.svg" class="ava_hair">\n                <input type="radio" class="radio_item" value="hair_4_black" name="hair" id="hair13"> \n                \n            </div>\n            <div class="swiper-slide hair-slider">\n                <img src="/images/dressup_display/hair/hair_4_blonde.svg" class="ava_hair">\n                <input type="radio" class="radio_item" value="hair_4_blonde" name="hair" id="hair14"> \n                \n            </div>\n            <div class="swiper-slide hair-slider">\n                <img src="/images/dressup_display/hair/hair_4_brown.svg" class="ava_hair">\n                <input type="radio" class="radio_item" value="hair_4_brown" name="hair" id="hair15"> \n                \n            </div>\n            <div class="swiper-slide hair-slider">\n                <img src="/images/dressup_display/hair/hair_4_red.svg" class="ava_hair">\n                <input type="radio" class="radio_item" value="hair_4_red" name="hair" id="hair16">         \n            </div>\n            <!-- Fourth set ends -->\n            <!-- Fifth set of hair -->\n            <div class="swiper-slide hair-slider">\n                <img src="/images/dressup_display/hair/hair_5_black.svg" class="ava_hair">\n                <input type="radio" class="radio_item" value="hair_5_black" name="hair" id="hair17"> \n                \n            </div>\n            <div class="swiper-slide hair-slider">\n                <img src="/images/dressup_display/hair/hair_5_blonde.svg" class="ava_hair">\n                <input type="radio" class="radio_item" value="hair_5_blonde" name="hair" id="hair18"> \n                \n            </div>\n            <div class="swiper-slide hair-slider">\n                <img src="/images/dressup_display/hair/hair_5_brown.svg" class="ava_hair">\n                <input type="radio" class="radio_item" value="hair_5_brown" name="hair" id="hair19"> \n                \n            </div>\n            <div class="swiper-slide hair-slider">\n                <img src="/images/dressup_display/hair/hair_5_red.svg" class="ava_hair">\n                <input type="radio" class="radio_item" value="hair_5_red" name="hair" id="hair20">         \n            </div>\n            <!-- Fifth set ends -->\n            <!-- Sixth set of hair -->\n            <div class="swiper-slide hair-slider">\n                <img src="/images/dressup_display/hair/hair_6_black.svg" class="ava_hair">\n                <input type="radio" class="radio_item" value="hair_6_black" name="hair" id="hair21"> \n                \n            </div>\n            <div class="swiper-slide hair-slider">\n                <img src="/images/dressup_display/hair/hair_6_blonde.svg" class="ava_hair">\n                <input type="radio" class="radio_item" value="hair_6_blonde" name="hair" id="hair22"> \n                \n            </div>\n            <div class="swiper-slide hair-slider">\n                <img src="/images/dressup_display/hair/hair_6_brown.svg" class="ava_hair">\n                <input type="radio" class="radio_item" value="hair_6_brown" name="hair" id="hair23"> \n                \n            </div>\n            <div class="swiper-slide hair-slider">\n                <img src="/images/dressup_display/hair/hair_6_red.svg" class="ava_hair">\n                <input type="radio" class="radio_item" value="hair_6_red" name="hair" id="hair24">         \n            </div>\n            <!-- Sixth set ends -->\n            <!-- Seventh set of hair -->\n            <div class="swiper-slide hair-slider">\n                <img src="/images/dressup_display/hair/hair_7_black.svg" class="ava_hair">\n                <input type="radio" class="radio_item" value="hair_7_black" name="hair" id="hair25"> \n                \n            </div>\n            <div class="swiper-slide hair-slider">\n                <img src="/images/dressup_display/hair/hair_7_blonde.svg" class="ava_hair">\n                <input type="radio" class="radio_item" value="hair_7_blonde" name="hair" id="hair26"> \n                \n            </div>\n            <div class="swiper-slide hair-slider">\n                <img src="/images/dressup_display/hair/hair_7_brown.svg" class="ava_hair">\n                <input type="radio" class="radio_item" value="hair_7_brown" name="hair" id="hair27"> \n                \n            </div>\n            <div class="swiper-slide hair-slider">\n                <img src="/images/dressup_display/hair/hair_7_red.svg" class="ava_hair">\n                <input type="radio" class="radio_item" value="hair_7_red" name="hair" id="hair28">         \n            </div>\n            <!-- Seventh set ends -->\n        </div>\n        <!-- If we need pagination -->\n        <div class="swiper-pagination"></div>\n        \n        <!-- If we need navigation buttons -->\n        <div class="swiper-button-prev"></div>\n        <div class="swiper-button-next"></div>\n    </div>');
}));                                                                                                        // 18
                                                                                                            // 19
Template.__checkName("outfit");                                                                             // 20
Template["outfit"] = new Template("Template.outfit", (function() {                                          // 21
  var view = this;                                                                                          // 22
  return HTML.Raw('<div id="Outfit" class="swiper-container">\n        <div class="swiper-wrapper">\n            <!-- Slides -->\n            <div class="swiper-slide">\n                <img src="/images/dressup_display/outfit/dress_1.svg" class="ava_outfit">\n                <input type="radio" class="radio_item" value="dress_1" name="outfit" id="outfit1"> \n            </div>\n            <div class="swiper-slide">\n                <img src="/images/dressup_display/outfit/dress_2.svg" class="ava_outfit">\n                <input type="radio" class="radio_item" value="dress_2" name="outfit" id="outfit2"> \n            </div>\n            <div class="swiper-slide">\n                <img src="/images/dressup_display/outfit/dress_3.svg" class="ava_outfit">\n                <input type="radio" class="radio_item" value="dress_3" name="outfit" id="outfit3"> \n            </div>\n            <div class="swiper-slide">\n                <img src="/images/dressup_display/outfit/dress_4.svg" class="ava_outfit">\n                <input type="radio" class="radio_item" value="dress_4" name="outfit" id="outfit4">\n            </div>\n            <div class="swiper-slide">\n                <img src="/images/dressup_display/outfit/dress_5.svg" class="ava_outfit">\n                <input type="radio" class="radio_item" value="dress_5" name="outfit" id="outfit5">\n            </div>\n            <div class="swiper-slide">\n                <img src="/images/dressup_display/outfit/dress_6.svg" class="ava_outfit">\n                <input type="radio" class="radio_item" value="dress_6" name="outfit" id="outfit6">\n            </div>\n            <div class="swiper-slide">\n                <img src="/images/dressup_display/outfit/dress_7.svg" class="ava_outfit">\n                <input type="radio" class="radio_item" value="dress_7" name="outfit" id="outfit7">\n            </div>\n            <div class="swiper-slide">\n                <img src="/images/dressup_display/outfit/dress_8.svg" class="ava_outfit">\n                <input type="radio" class="radio_item" value="dress_8" name="outfit" id="outfit8">\n            </div>\n            <div class="swiper-slide">\n                <img src="/images/dressup_display/outfit/dress_9.svg" class="ava_outfit">\n                <input type="radio" class="radio_item" value="dress_9" name="outfit" id="outfit9">\n            </div>\n            <div class="swiper-slide">\n                <img src="/images/dressup_display/outfit/dress_10.svg" class="ava_outfit">\n                <input type="radio" class="radio_item" value="dress_10" name="outfit" id="outfit10">\n            </div>\n            <div class="swiper-slide">\n                <img src="/images/dressup_display/outfit/dress_11.svg" class="ava_outfit">\n                <input type="radio" class="radio_item" value="dress_11" name="outfit" id="outfit11">\n            </div>\n            <div class="swiper-slide">\n                <img src="/images/dressup_display/outfit/dress_12.svg" class="ava_outfit">\n                <input type="radio" class="radio_item" value="dress_12" name="outfit" id="outfit12">\n            </div>\n        </div>\n        <!-- If we need pagination -->\n        <div class="swiper-pagination"></div>\n        \n        <!-- If we need navigation buttons -->\n        <div class="swiper-button-prev"></div>\n        <div class="swiper-button-next"></div>\n        \n    </div>');
}));                                                                                                        // 24
                                                                                                            // 25
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"customisation.html":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
// client/templates/template.customisation.js                                                               //
//                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            //
                                                                                                            // 1
Template.__checkName("customisation");                                                                      // 2
Template["customisation"] = new Template("Template.customisation", (function() {                            // 3
  var view = this;                                                                                          // 4
  return [ Spacebars.include(view.lookupTemplate("header")), "\n	", HTML.MAIN("\n	", Spacebars.include(view.lookupTemplate("customise_avatar")), "\n		", HTML.DIV({
    "class": "row"                                                                                          // 6
  }, "\n			", HTML.FORM({                                                                                   // 7
    "class": "changeAvatar"                                                                                 // 8
  }, "\n				", Blaze.Each(function() {                                                                      // 9
    return Spacebars.call(view.lookup("avatar"));                                                           // 10
  }, function() {                                                                                           // 11
    return [ "\n					", HTML.INPUT({                                                                        // 12
      type: "hidden",                                                                                       // 13
      value: function() {                                                                                   // 14
        return Spacebars.mustache(view.lookup("skin"));                                                     // 15
      },                                                                                                    // 16
      name: "altskin"                                                                                       // 17
    }), "\n					", HTML.INPUT({                                                                             // 18
      type: "hidden",                                                                                       // 19
      value: function() {                                                                                   // 20
        return Spacebars.mustache(view.lookup("outfit"));                                                   // 21
      },                                                                                                    // 22
      name: "altoutfit"                                                                                     // 23
    }), "\n					", HTML.INPUT({                                                                             // 24
      type: "hidden",                                                                                       // 25
      value: function() {                                                                                   // 26
        return Spacebars.mustache(view.lookup("hair"));                                                     // 27
      },                                                                                                    // 28
      name: "althair"                                                                                       // 29
    }), "\n				" ];                                                                                         // 30
  }), "\n				", HTML.Raw('<section class="custom_intro col l7 offset-l4 m6 offset-m5 s10 offset-s1 ">\n					<p class="right-align">A hero needs a cool outfit to fight some alien bunnies.</p>\n				</section>'), "\n				", HTML.SECTION({
    "class": "custom_slide col l7 offset-l4 m6 offset-m5 s10 offset-s1"                                     // 32
  }, "\n				", Spacebars.include(view.lookupTemplate("custom_slider")), "\n				"), "\n				", HTML.SECTION({
    "class": "avatar_btns col l7 offset-l4 m6 offset-m5 s10 offset-s1 right-align"                          // 34
  }, "\n					", HTML.A({                                                                                    // 35
    href: function() {                                                                                      // 36
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({                                      // 37
        route: "account"                                                                                    // 38
      }));                                                                                                  // 39
    },                                                                                                      // 40
    "class": "cancel btn waves-effect waves-light"                                                          // 41
  }, "Cancel", HTML.Raw('<i class="material-icons right">cancel</i>')), "\n					", HTML.Raw('<button id="saveAvatar" class="btn waves-effect waves-light " type="submit" name="action">Save<i class="material-icons right">send</i></button>'), "\n				"), "\n			"), "\n			\n		"), "\n	") ];
}));                                                                                                        // 43
                                                                                                            // 44
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"header_footers.html":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
// client/templates/template.header_footers.js                                                              //
//                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            //
                                                                                                            // 1
Template.__checkName("header");                                                                             // 2
Template["header"] = new Template("Template.header", (function() {                                          // 3
  var view = this;                                                                                          // 4
  return HTML.HEADER({                                                                                      // 5
    "class": "user_header"                                                                                  // 6
  }, "\n		", HTML.DIV({                                                                                     // 7
    "class": "row"                                                                                          // 8
  }, "\n			", HTML.Raw('<section class="col l2 offset-l1 m3 offset-m1 s6 offset-s1">\n				<img src="/images/logo.svg" class="logo">	\n			</section>'), "\n			", HTML.SECTION({
    "class": "col l3 offset-l5 m4 offset-m3 s4 "                                                            // 10
  }, "\n				", Blaze.If(function() {                                                                        // 11
    return Spacebars.call(view.lookup("currentUser"));                                                      // 12
  }, function() {                                                                                           // 13
    return [ "\n				", HTML.DIV({                                                                           // 14
      "class": "right-align col s12"                                                                        // 15
    }, "\n						Welcome, ", Blaze.View("lookup:currentUser.username", function() {                          // 16
      return Spacebars.mustache(Spacebars.dot(view.lookup("currentUser"), "username"));                     // 17
    }), Blaze.View("lookup:currentUser.profile.name", function() {                                          // 18
      return Spacebars.mustache(Spacebars.dot(view.lookup("currentUser"), "profile", "name"));              // 19
    }), "		\n				"), "\n				", Spacebars.include(view.lookupTemplate("dropdown_nav")), "\n				" ];          // 20
  }, function() {                                                                                           // 21
    return [ "\n					", HTML.A({                                                                            // 22
      href: "/"                                                                                             // 23
    }, "Sign In"), "\n		    	" ];                                                                           // 24
  }), "\n\n			"), "\n		"), "\n	");                                                                          // 25
}));                                                                                                        // 26
                                                                                                            // 27
Template.__checkName("dropdown_nav");                                                                       // 28
Template["dropdown_nav"] = new Template("Template.dropdown_nav", (function() {                              // 29
  var view = this;                                                                                          // 30
  return HTML.DIV({                                                                                         // 31
    "class": "right"                                                                                        // 32
  }, HTML.Raw('\n		<a href="#" class="dropdown-button col s12" data-activates="dropdown-nav">\n			<i class="material-icons right">settings</i>Explore\n		</a>\n		'), HTML.UL({
    id: "dropdown-nav",                                                                                     // 34
    "class": "dropdown-content"                                                                             // 35
  }, "\n		    ", HTML.LI(HTML.A({                                                                           // 36
    href: function() {                                                                                      // 37
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({                                      // 38
        route: "account"                                                                                    // 39
      }));                                                                                                  // 40
    }                                                                                                       // 41
  }, "Account")), "\n		    ", HTML.LI(HTML.A({                                                              // 42
    href: function() {                                                                                      // 43
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({                                      // 44
        route: "levels"                                                                                     // 45
      }));                                                                                                  // 46
    }                                                                                                       // 47
  }, "Levels")), "\n		    ", HTML.LI(HTML.A({                                                               // 48
    href: function() {                                                                                      // 49
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({                                      // 50
        route: "customisation"                                                                              // 51
      }));                                                                                                  // 52
    }                                                                                                       // 53
  }, "Customise")), "\n		    ", HTML.LI(HTML.A({                                                            // 54
    href: function() {                                                                                      // 55
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({                                      // 56
        route: "leaderboard"                                                                                // 57
      }));                                                                                                  // 58
    }                                                                                                       // 59
  }, "Leaderboard")), "\n		    ", HTML.Raw('<li class="divider"></li>'), "\n			", HTML.Raw('<li><a href="#" class="logout">Log Out</a></li>'), "\n		"), "\n	");
}));                                                                                                        // 61
                                                                                                            // 62
Template.__checkName("header_hm");                                                                          // 63
Template["header_hm"] = new Template("Template.header_hm", (function() {                                    // 64
  var view = this;                                                                                          // 65
  return HTML.Raw('<div class="row">\n		<section class="col l6 offset-l3 m8 offset-m2 s8 offset-s2">\n			<img src="/images/logo.svg" class="logo">	\n		</section>\n	</div>');
}));                                                                                                        // 67
                                                                                                            // 68
Template.__checkName("footer");                                                                             // 69
Template["footer"] = new Template("Template.footer", (function() {                                          // 70
  var view = this;                                                                                          // 71
  return HTML.Raw('<footer class="container">\n		<div class="row">\n			<section class="col l8 offset-l2 m8 offset-m2 s8 offset-s2">\n				<section class="social col l6 m7 s12 center-align">\n					<span>Follow Us @</span>\n					<a href="https://www.facebook.com/codegirlvsthehexabunnies/" title="Follow as on Facebook"><i class="fa fa-facebook-square"></i></a> \n					<a href="https://twitter.com/CodevsHexa" title="Follow as on Twitter"><i class="fa fa-twitter-square"></i></a>\n				</section>\n				<span class="sign col l6  m5 s12 center-align">Lovingly Designed By Sian Finlay</span>\n			</section>\n		</div>\n		\n	</footer>');
}));                                                                                                        // 73
                                                                                                            // 74
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"home.html":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
// client/templates/template.home.js                                                                        //
//                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            //
                                                                                                            // 1
Template.__checkName("Home");                                                                               // 2
Template["Home"] = new Template("Template.Home", (function() {                                              // 3
  var view = this;                                                                                          // 4
  return HTML.MAIN({                                                                                        // 5
    "class": "container"                                                                                    // 6
  }, "\n		", Spacebars.include(view.lookupTemplate("header_hm")), "\n		", Spacebars.include(view.lookupTemplate("login_sign")), "\n		", Spacebars.include(view.lookupTemplate("Signup")), "\n		", Spacebars.include(view.lookupTemplate("Login")), HTML.Raw("\n		<div class=\"row\">\n			<section class=\"intro col l8 offset-l2 m8 offset-m2 s8 offset-s2\">\n				<p>Welcome Friend, we need your help! A bunch of alien bunnies calling themselves the HexaBunnies have taken control of SourceCity. They've captured anyone who could stop them, but they've underestimated YOU!</p>\n				<p>You, a young 'developer', you can learn the language of websites, the one thing that can stop the HexaBunnies!</p>\n			</section>\n		</div>\n		"), Spacebars.include(view.lookupTemplate("user_avatar")), "\n		", Spacebars.include(view.lookupTemplate("hexabunnies")), "\n	");
}));                                                                                                        // 8
                                                                                                            // 9
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"leaderboard.html":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
// client/templates/template.leaderboard.js                                                                 //
//                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            //
                                                                                                            // 1
Template.__checkName("leaderboard");                                                                        // 2
Template["leaderboard"] = new Template("Template.leaderboard", (function() {                                // 3
  var view = this;                                                                                          // 4
  return [ Spacebars.include(view.lookupTemplate("header")), "\n	", HTML.MAIN("\n	", Spacebars.include(view.lookupTemplate("user_avatar")), "\n	", HTML.SECTION({
    "class": "container"                                                                                    // 6
  }, "\n		", HTML.DIV({                                                                                     // 7
    "class": "row"                                                                                          // 8
  }, "\n			", HTML.SECTION({                                                                                // 9
    "class": "col l7 offset-l2 m6 offset-m5 s10 offset-s1"                                                  // 10
  }, "\n				", HTML.Raw("<h4>leaderboard</h4>"), "\n				", Blaze.Each(function() {                          // 11
    return Spacebars.call(view.lookup("leaderboard"));                                                      // 12
  }, function() {                                                                                           // 13
    return [ "\n				", HTML.SECTION({                                                                       // 14
      "class": "col l4  m6  s12"                                                                            // 15
    }, "\n					", HTML.SECTION({                                                                            // 16
      "class": "card"                                                                                       // 17
    }, "\n						", Blaze.Each(function() {                                                                  // 18
      return Spacebars.call(view.lookup("avatarObj"));                                                      // 19
    }, function() {                                                                                         // 20
      return [ "\n			            ", HTML.DIV({                                                              // 21
        "class": "card-image avatarLead"                                                                    // 22
      }, "\n			              	", HTML.IMG({                                                                 // 23
        src: function() {                                                                                   // 24
          return [ "/images/dressup/skin/", Spacebars.mustache(view.lookup("skin")), ".svg" ];              // 25
        },                                                                                                  // 26
        "class": "base"                                                                                     // 27
      }), "\n							", HTML.IMG({                                                                           // 28
        src: function() {                                                                                   // 29
          return [ "/images/dressup/outfit/", Spacebars.mustache(view.lookup("outfit")), ".svg" ];          // 30
        },                                                                                                  // 31
        "class": "outfit"                                                                                   // 32
      }), "\n							", HTML.IMG({                                                                           // 33
        src: function() {                                                                                   // 34
          return [ "/images/dressup/hair/", Spacebars.mustache(view.lookup("hair")), ".svg" ];              // 35
        },                                                                                                  // 36
        "class": "hair"                                                                                     // 37
      }), "    \n			            "), "\n			            " ];                                                  // 38
    }), "\n			            ", HTML.DIV({                                                                     // 39
      "class": "card-content"                                                                               // 40
    }, "\n			              ", HTML.P({                                                                      // 41
      "class": "center-align"                                                                               // 42
    }, HTML.SPAN(HTML.I({                                                                                   // 43
      "class": "material-icons starLeader"                                                                  // 44
    }, "star_rate"), ": ", Blaze.View("lookup:stars", function() {                                          // 45
      return Spacebars.mustache(view.lookup("stars"));                                                      // 46
    }))), "\n			            "), "\n		        	"), "\n				"), "\n				" ];                                    // 47
  }), "\n			"), "\n		"), "\n	"), "\n	", Spacebars.include(view.lookupTemplate("hexabunnies")), "\n	") ];    // 48
}));                                                                                                        // 49
                                                                                                            // 50
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"level_intros.html":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
// client/templates/template.level_intros.js                                                                //
//                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            //
                                                                                                            // 1
Template.__checkName("level1Modal");                                                                        // 2
Template["level1Modal"] = new Template("Template.level1Modal", (function() {                                // 3
  var view = this;                                                                                          // 4
  return HTML.Raw('<div id="level1Hint" class="signup_login_modal modal modal-fixed-footer">\n		<form>\n			<div class="modal-content">\n		      <h4 class="center-align">Level 1: P-P-Paragraphs</h4>\n		      <div class="row">\n		      	<article class="col s8 offset-s2">\n		      		<section class="section">\n			      		<p><strong>Okay, let\'s get started...</strong></p>\n			      		<p>We need to use <em>\'elements\'</em> to fight off the HexaBunnies. Elements are a part of the language of websites called <em>\'HTML\'</em>. They create what we see when we visited a website, like friend\'s post of Facebook!</p>\n			      		<p>Elements have two important parts to them. an opening and closing <em>\'tag\'</em>.</p>\n			      		<p>Opening tag looks like this: <code>&lt;tag&gt;</code></p>\n			      		<p>Whilst Closing tag is like this: <code>&lt;/tag&gt;</code></p>\n			      		<p>Put them both together and you get:</p>\n			      		<blockquote><code>&lt;tag&gt;</code> an element <code>&lt;/tag&gt;</code></blockquote>\n			      	</section>\n			      	<div class="divider"></div>\n			      	<section class="section">\n			      		<p>Let\'s blast a <em>\'paragraph\'</em> element at those HexaBunnies:</p>\n			      		<blockquote><code>&lt;p&gt;</code> Paragraphs use the letter <strong>\'p\'</strong> in their tags, inside them is always a block of sentences like in a storybook. <code>&lt;/p&gt;</code></blockquote>\n			      		<p>Drag the paragraph tags in the correct place to complete the Element.</p>\n			      	</section>\n		      	</article>\n		      	\n		      </div>\n		    </div>\n\n		    <div class="modal-footer">\n		      <a href="" class="modal-action modal-close waves-effect waves-gree btn-flat">Okay!</a>\n		    </div>\n	    </form>\n	</div>\n	<div id="level1Submit" class="signup_login_modal modal modal-fixed-footer">\n		<form class="Level1form">\n			<div class="modal-content">\n		      <h4 class="center-align">Level 1: Results!</h4>\n		      <div class="row">\n		      	<div class="scoreResult"><i class="material-icons">star_rate</i><span class="score"></span> / 2</div>\n		      	<p class="scoreMessage col s8 offset-s2"></p>\n		      </div>\n		    </div>\n\n		    <input type="hidden" id="newScore" name="newScore">\n		    <div class="modal-footer">\n		      <button class="sumbitScore modal-action modal-close waves-effect waves-gree btn-flat" type="submit" name="action">Done!</button>\n		    </div>\n	    </form>\n	</div>');
}));                                                                                                        // 6
                                                                                                            // 7
Template.__checkName("level2Modal");                                                                        // 8
Template["level2Modal"] = new Template("Template.level2Modal", (function() {                                // 9
  var view = this;                                                                                          // 10
  return HTML.Raw('<div id="level2Hint" class="signup_login_modal modal modal-fixed-footer">\n		<form>\n			<div class="modal-content">\n		      <h4 class="center-align">Level 2: Strong and Important!</h4>\n		      <div class="row">\n		      	<article class="col s8 offset-s2">\n		      		<section class="section">\n			      		<p>Now you know how to use an element it\'s time to learn some more, something to make your paragraph elements <strong>stronger</strong> and hit <em>important</em> weak points on the HexaBunnies!</p>\n			      	</section>\n			      	<div class="divider"></div>\n			      	<section class="section">\n			      		<p>The <strong>Strong</strong> element is used when you want make some words stand out:</p>\n			      		<blockquote><code>&lt;strong&gt;</code> <strong>Any words placed inside a \'strong\' element will look bolder.</strong> <code>&lt;/strong&gt;</code></blockquote>\n			      		<p>The <em>em</em> element is used to make words important or to \'emphasis\' them:</p>\n			      		<blockquote><code>&lt;em&gt;</code> <em>Any words placed inside a \'em\' element will look slanted, or italicized.</em> <code>&lt;/em&gt;</code></blockquote>\n			      		<p>Now try to use them on the HexaBunnies!</p>\n			      	</section>\n		      	</article>\n		      	\n		      </div>\n		    </div>\n\n		    <div class="modal-footer">\n		      <a href="" class="modal-action modal-close waves-effect waves-gree btn-flat">Okay!</a>\n		    </div>\n	    </form>\n	</div>\n	<div id="level2Submit" class="signup_login_modal modal modal-fixed-footer">\n		<form class="Level2form">\n			<div class="modal-content">\n		      <h4 class="center-align">Level 2: Results!</h4>\n		      <div class="row">\n		      	<div class="scoreResult"><i class="material-icons">star_rate</i><span class="score"></span> / 4</div>\n		      	<p class="scoreMessage col s8 offset-s2"></p>\n		      </div>\n		    </div>\n\n		    <input type="hidden" id="newScore" name="newScore">\n		    <div class="modal-footer">\n		      <button class="sumbitScore modal-action modal-close waves-effect waves-gree btn-flat" type="submit" name="action">Done!</button>\n		    </div>\n	    </form>\n	</div>');
}));                                                                                                        // 12
                                                                                                            // 13
Template.__checkName("level3Modal");                                                                        // 14
Template["level3Modal"] = new Template("Template.level3Modal", (function() {                                // 15
  var view = this;                                                                                          // 16
  return HTML.Raw('<div id="level3Hint" class="signup_login_modal modal modal-fixed-footer">\n		<form>\n			<div class="modal-content">\n		      <h4 class="center-align">Level 3: List after list after list</h4>\n		      <div class="row">\n		      	<article class="col s8 offset-s2">\n		      		<section class="section">\n			      		<p>We\'re fighting more than just one HexaBunny here; let\'s see there\'s:</p>\n			      		<ol>\n			      			<li>Ginger</li>\n			      			<li>Mint</li>\n			      			<li>Twilight</li>\n			      		</ol>\n			      		<p>That\'s 3 HexaBunnies, we gotta create some <strong>\'lists\'</strong> to help us!</p>\n			      	</section>\n			      	<div class="divider"></div>\n			      	<section class="section">\n			      		<p>There are 3 elements used to create lists; <code>&lt;li&gt;</code>, <code>&lt;ul&gt;</code> and <code>&lt;ol&gt;</code>.</p>\n			      		<p>let\'s start with <code>&lt;ul&gt;</code> and <code>&lt;li&gt;</code>, you combine these 2 elements to create an <strong>\'unordered list\'</strong>, which looks like:</p>\n			      		<div class="row">\n			      			<section class="col s6">\n				      			<ul class="forShow">\n				      				<li>Ginger</li>\n				      				<li>Mint</li>\n				      				<li>Twilight</li>\n				      			</ul>\n				      		</section>\n				      		<section class="col s6">\n				      			<p><code>&lt;ul&gt;</code></p>\n				      				<p><code>&lt;li&gt;</code> Ginger <code>&lt;/li&gt;</code></p>\n				      				<p><code>&lt;li&gt;</code> Mint <code>&lt;/li&gt;</code></p>\n				      				<p><code>&lt;li&gt;</code> Twilight <code>&lt;/li&gt;</code></p>\n				      			<p><code>&lt;/ul&gt;</code></p>\n				      		</section>\n			      		</div>\n			      		<p>Next we\'ll use <code>&lt;ol&gt;</code> and again <code>&lt;li&gt;</code>. This will create an ordered list going from 1,2,3...:</p>\n			      		<div class="row">\n			      			<section class="col s6">\n				      			<ol>\n				      				<li>Ginger</li>\n				      				<li>Mint</li>\n				      				<li>Twilight</li>\n				      			</ol>\n				      		</section>\n				      		<section class="col s6">\n				      			<p><code>&lt;ol&gt;</code></p>\n				      				<p><code>&lt;li&gt;</code> Ginger <code>&lt;/li&gt;</code></p>\n				      				<p><code>&lt;li&gt;</code> Mint <code>&lt;/li&gt;</code></p>\n				      				<p><code>&lt;li&gt;</code> Twilight <code>&lt;/li&gt;</code></p>\n				      			<p><code>&lt;/ol&gt;</code></p>\n				      		</section>\n			      		</div>\n			      		<p>Show those HexaBunnies that you know your list types!</p>\n			      	</section>\n		      	</article>\n		      	\n		      </div>\n		    </div>\n\n		    <div class="modal-footer">\n		      <a href="" class="modal-action modal-close waves-effect waves-gree btn-flat">Okay!</a>\n		    </div>\n	    </form>\n	</div>\n	<div id="level3Submit" class="signup_login_modal modal modal-fixed-footer">\n		<form class="Level3form">\n			<div class="modal-content">\n		      <h4 class="center-align">Level 3: Results!</h4>\n		      <div class="row">\n		      	<div class="scoreResult"><i class="material-icons">star_rate</i><span class="score"></span> / 6</div>\n		      	<p class="scoreMessage col s8 offset-s2"></p>\n		      </div>\n		    </div>\n\n		    <input type="hidden" id="newScore" name="newScore">\n		    <div class="modal-footer">\n		      <button class="sumbitScore modal-action modal-close waves-effect waves-gree btn-flat" type="submit" name="action">Done!</button>\n		    </div>\n	    </form>\n	</div>');
}));                                                                                                        // 18
                                                                                                            // 19
Template.__checkName("level4Modal");                                                                        // 20
Template["level4Modal"] = new Template("Template.level4Modal", (function() {                                // 21
  var view = this;                                                                                          // 22
  return HTML.Raw('<div id="level4Hint" class="signup_login_modal modal modal-fixed-footer">\n		<form>\n			<div class="modal-content">\n		      <h4 class="center-align">Level 4: Get a head-ing the Game</h4>\n		      <div class="row">\n		      	<article class="col s8 offset-s2">\n		      		<section class="section">\n			      		<p>So what\'s this fight all about? We can\'t just start our attack with just a paragraph element, we need a subject, a point, a <strong>\'heading\'</strong>.</p>\n			      		<p>So let\'s learn the heading, there are several heading elements which differ on how <strong>\'important\'</strong> it and the content of the element below it are going to be!</p>\n			      	</section>\n			      	<div class="divider"></div>\n			      	<section class="section">\n			      		<p>The heading element are; <code>&lt;h1&gt;</code>, <code>&lt;h2&gt;</code>, <code>&lt;h3&gt;</code>, <code>&lt;h4&gt;</code>, <code>&lt;h5&gt;</code> and <code>&lt;h6&gt;</code>. <code>&lt;h1&gt;</code> being the most important and biggest, and <code>&lt;h6&gt;</code> being the least important and smallest. Inside a heading element is a title.</p>\n			      		<blockquote>\n			      			<p><code>&lt;h1&gt;</code> Important Title<code>&lt;/h1&gt;</code></p>\n			      			<p><code>&lt;p&gt;</code> the content <code>&lt;/p&gt;</code></p>\n			      			<p>...</p>\n			      			<p><code>&lt;h2&gt;</code>Less Important Title<code>&lt;/h2&gt;</code></p>\n			      		</blockquote>\n			      		<p>Try to put the titles in the right heading element: from biggest to smallest.</p>\n\n			      	</section>\n		      	</article>\n		      	\n		      </div>\n		    </div>\n\n		    <div class="modal-footer">\n		      <a href="" class="modal-action modal-close waves-effect waves-gree btn-flat">Okay!</a>\n		    </div>\n	    </form>\n	</div>\n	<div id="level4Submit" class="signup_login_modal modal modal-fixed-footer">\n		<form class="Level4form">\n			<div class="modal-content">\n		      <h4 class="center-align">Level 4: Results!</h4>\n		      <div class="row">\n		      	<div class="scoreResult"><i class="material-icons">star_rate</i><span class="score"></span> / 6</div>\n		      	<p class="scoreMessage col s8 offset-s2"></p>\n		      </div>\n		    </div>\n\n		    <input type="hidden" id="newScore" name="newScore">\n		    <div class="modal-footer">\n		      <button class="sumbitScore modal-action modal-close waves-effect waves-gree btn-flat" type="submit" name="action">Done!</button>\n		    </div>\n	    </form>\n	</div>');
}));                                                                                                        // 24
                                                                                                            // 25
Template.__checkName("level5Modal");                                                                        // 26
Template["level5Modal"] = new Template("Template.level5Modal", (function() {                                // 27
  var view = this;                                                                                          // 28
  return HTML.Raw('<div id="level5Hint" class="signup_login_modal modal modal-fixed-footer">\n		<form>\n			<div class="modal-content">\n		      <h4 class="center-align">Level 5: An Image can say a 1000 words</h4>\n		      <div class="row">\n		      	<article class="col s8 offset-s2">\n		      		<section class="section">\n			      		<p>Ugh! so many words! They might be working against the HexaBunnies but is there something else you can do. You know, with some colour and maybe throw some fun into the fight!</p>\n			      		<p>Like cute pictures of puppies. Yeah! get an army of puppies!</p>\n			      		<p>Let\'s learn about the power of the <strong>\'image\'</strong> element, <code>&lt;img /&gt;</code>.</p>\n			      	</section>\n			      	<div class="divider"></div>\n			      	<section class="section">      		\n			      		<p>The image element is a special element. Not only does it not need a closing tag, but it has hidden abilities from inside the tag, called attritubes!</p>\n			      		<p>First is the <code>src</code> attritube, this \'summons\' the image of our puppy army to us by using several <code>/</code> to get it from its source.</p>\n			      		<blockquote>\n			      			<code>&lt;img </code><code>src="images/puppy_army.jpg"</code><code>/&gt;</code>\n			      		</blockquote>\n			      		<p>Next attritube, <code>alt</code>, helps to power up our image by describing the image, like "cute puppy army". This means the image can affect more special types of HexaBunnies that aren\'t affected by an image normally. On website, <code>alt</code> is a force of good! Letting people who can\'t see an image still enjoy it, like our puppy army!</p>\n			      		<blockquote>\n			      			<code>&lt;img </code><code>alt="cute puppy army"</code><code>/&gt;</code>\n			      		</blockquote>\n			      		<p>Let\'s see if you can use the image elements\' special attributes!</p>\n			      	</section>\n		      	</article>\n		      	\n		      </div>\n		    </div>\n\n		    <div class="modal-footer">\n		      <a href="" class="modal-action modal-close waves-effect waves-gree btn-flat">Okay!</a>\n		    </div>\n	    </form>\n	</div>\n	<div id="level5Submit" class="signup_login_modal modal modal-fixed-footer">\n		<form class="Level5form">\n			<div class="modal-content">\n		      <h4 class="center-align">Level 5: Results!</h4>\n		      <div class="row">\n		      	<div class="scoreResult"><i class="material-icons">star_rate</i><span class="score"></span> / 2</div>\n		      	<p class="scoreMessage col s8 offset-s2"></p>\n		      </div>\n		    </div>\n\n		    <input type="hidden" id="newScore" name="newScore">\n		    <div class="modal-footer">\n		      <button class="sumbitScore modal-action modal-close waves-effect waves-gree btn-flat" type="submit" name="action">Done!</button>\n		    </div>\n	    </form>\n	</div>');
}));                                                                                                        // 30
                                                                                                            // 31
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"level_select.html":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
// client/templates/template.level_select.js                                                                //
//                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            //
                                                                                                            // 1
Template.__checkName("levelSelect");                                                                        // 2
Template["levelSelect"] = new Template("Template.levelSelect", (function() {                                // 3
  var view = this;                                                                                          // 4
  return [ Spacebars.include(view.lookupTemplate("header")), "\n	", HTML.MAIN("\n	", Spacebars.include(view.lookupTemplate("user_avatar")), "\n	", HTML.SECTION({
    "class": "container levels"                                                                             // 6
  }, "\n		", HTML.DIV({                                                                                     // 7
    "class": "row"                                                                                          // 8
  }, "\n			", HTML.Raw('<section class="col l6 offset-l2 m6 offset-m3 s10 offset-s1">\n				<h4>Levels</h4>\n			</section>'), "	\n			", HTML.SECTION({
    "class": "col l8 offset-l2 m8 offset-m3 level"                                                          // 10
  }, "\n				", HTML.DIV({                                                                                   // 11
    id: "levelSelection",                                                                                   // 12
    "class": "swiper-container"                                                                             // 13
  }, "\n        			", HTML.DIV({                                                                            // 14
    "class": "swiper-wrapper"                                                                               // 15
  }, "\n				    ", Blaze.If(function() {                                                                    // 16
    return Spacebars.call(view.lookup("currentUser"));                                                      // 17
  }, function() {                                                                                           // 18
    return [ "\n                        ", Blaze.Each(function() {                                          // 19
      return Spacebars.call(view.lookup("levels"));                                                         // 20
    }, function() {                                                                                         // 21
      return [ "\n                        ", HTML.DIV({                                                     // 22
        "class": "swiper-slide"                                                                             // 23
      }, "        \n    					", HTML.SECTION({                                                              // 24
        "class": "col s12"                                                                                  // 25
      }, "\n    						", HTML.A({                                                                           // 26
        href: function() {                                                                                  // 27
          return [ "/levels/", Spacebars.mustache(view.lookup("level")) ];                                  // 28
        }                                                                                                   // 29
      }, HTML.DIV({                                                                                         // 30
        "class": "levelNumber"                                                                              // 31
      }, Blaze.View("lookup:level", function() {                                                            // 32
        return Spacebars.mustache(view.lookup("level"));                                                    // 33
      })), "\n    						", HTML.DIV({                                                                       // 34
        "class": "levelStats"                                                                               // 35
      }, "\n    							", HTML.SPAN(HTML.I({                                                                // 36
        "class": "material-icons left"                                                                      // 37
      }, "star_rate"), Blaze.View("lookup:score", function() {                                              // 38
        return Spacebars.mustache(view.lookup("score"));                                                    // 39
      }), "/", Blaze.View("lookup:maxScore", function() {                                                   // 40
        return Spacebars.mustache(view.lookup("maxScore"));                                                 // 41
      })), "\n    						"), "\n    						", HTML.DIV({                                                      // 42
        "class": "levelStats"                                                                               // 43
      }, "\n                                ", Blaze.If(function() {                                        // 44
        return Spacebars.call(view.lookup("completed"));                                                    // 45
      }, function() {                                                                                       // 46
        return [ "\n                                  ", HTML.SPAN(HTML.I({                                 // 47
          "class": "material-icons left"                                                                    // 48
        }, "done"), "Done"), "\n                                " ];                                        // 49
      }, function() {                                                                                       // 50
        return [ "\n                                  ", HTML.SPAN(HTML.I({                                 // 51
          "class": "material-icons left"                                                                    // 52
        }, "clear"), "Not done"), "\n                                " ];                                   // 53
      }), "\n    						")), "\n    					"), "\n			            "), "\n                    	" ];              // 54
    }), "\n            		" ];                                                                               // 55
  }), "\n			            \n        			"), "\n        			", HTML.Raw("<!-- If we need pagination -->"), "\n			        ", HTML.Raw('<div class="swiper-pagination"></div>'), "\n			        \n			        ", HTML.Raw("<!-- If we need navigation buttons -->"), "\n			        ", HTML.Raw('<div class="swiper-button-prev"></div>'), "\n	        		", HTML.Raw('<div class="swiper-button-next"></div>'), "\n        		"), "\n			"), "\n			", HTML.SECTION({
    "class": "col l6 offset-l2 m6 offset-m3 s10 offset-s1 levelBigger"                                      // 57
  }, "\n				", HTML.Raw("<p> Please Rotate your screen. If you are on a Phone, This game can only played on Tablet or Computer</p>"), "\n				", HTML.A({
    href: function() {                                                                                      // 59
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({                                      // 60
        route: "account"                                                                                    // 61
      }));                                                                                                  // 62
    },                                                                                                      // 63
    "class": "col s12 levelBigger btn waves-effect waves-light goBack"                                      // 64
  }, "Go Back to account"), "\n			"), "\n		"), "\n\n	"), "\n	", Spacebars.include(view.lookupTemplate("hexabunnies")), "\n	") ];
}));                                                                                                        // 66
                                                                                                            // 67
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"levels.html":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
// client/templates/template.levels.js                                                                      //
//                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            //
                                                                                                            // 1
Template.__checkName("level1");                                                                             // 2
Template["level1"] = new Template("Template.level1", (function() {                                          // 3
  var view = this;                                                                                          // 4
  return [ Spacebars.include(view.lookupTemplate("header")), "\n	", HTML.MAIN("\n	", Spacebars.include(view.lookupTemplate("user_avatar")), "\n	", HTML.SECTION({
    "class": "container"                                                                                    // 6
  }, "\n		", HTML.DIV({                                                                                     // 7
    "class": "row"                                                                                          // 8
  }, "\n			", HTML.Raw('<section class="col l6 offset-l3 m6 offset-m3 level">\n				<div class="hint_Submit left">\n					<a href="#level1Hint" class="Hint waves-effect modal-trigger btn-flat col">See Hint</a>\n					<a href="#level1Submit" class="SubmitLevel waves-effect modal-trigger btn">Submit!</a>\n				</div>\n				\n			</section>'), "\n			", HTML.Raw('<section class="col l6 offset-l3 m6 offset-m3 level">\n				<div id="level1"></div>\n			</section>'), "\n			", HTML.SECTION({
    "class": "col l6 offset-l3 m6 offset-m3 s10 offset-s1 levelBigger"                                      // 10
  }, "\n				", HTML.Raw("<p> Please Rotate your screen. If you are on a Phone, This game can only played on Tablet or Computer</p>"), "\n				", HTML.A({
    href: function() {                                                                                      // 12
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({                                      // 13
        route: "account"                                                                                    // 14
      }));                                                                                                  // 15
    },                                                                                                      // 16
    "class": "goBack waves-effect modal-trigger btn col l5 m5 s12"                                          // 17
  }, "Go Back to account"), "\n			"), "\n		"), "\n		", Spacebars.include(view.lookupTemplate("level1Modal")), "\n	"), "\n	", Spacebars.include(view.lookupTemplate("hexabunnies")), "\n	"), "\n	", HTML.SCRIPT({
    type: "text/javascript",                                                                                // 19
    src: "/js/level_1.js"                                                                                   // 20
  }) ];                                                                                                     // 21
}));                                                                                                        // 22
                                                                                                            // 23
Template.__checkName("level2");                                                                             // 24
Template["level2"] = new Template("Template.level2", (function() {                                          // 25
  var view = this;                                                                                          // 26
  return [ Spacebars.include(view.lookupTemplate("header")), "\n	", HTML.MAIN("\n	", Spacebars.include(view.lookupTemplate("user_avatar")), "\n	", HTML.SECTION({
    "class": "container"                                                                                    // 28
  }, "\n		", HTML.DIV({                                                                                     // 29
    "class": "row"                                                                                          // 30
  }, "\n			", HTML.Raw('<section class="col l6 offset-l3 m6 offset-m3 level">\n				<div class="hint_Submit left">\n					<a href="#level2Hint" class="Hint waves-effect modal-trigger btn-flat col">See Hint</a>\n					<a href="#level2Submit" class="SubmitLevel waves-effect modal-trigger btn">Submit!</a>\n				</div>\n				\n			</section>'), "\n			", HTML.Raw('<section class="col l6 offset-l3 m6 offset-m3 level">\n				<div id="level2"></div>\n			</section>'), "\n			", HTML.SECTION({
    "class": "col l6 offset-l3 m6 offset-m3 s10 offset-s1 levelBigger"                                      // 32
  }, "\n				", HTML.Raw("<p> Please Rotate your screen. If you are on a Phone, This game can only played on Tablet or Computer</p>"), "\n				", HTML.A({
    href: function() {                                                                                      // 34
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({                                      // 35
        route: "account"                                                                                    // 36
      }));                                                                                                  // 37
    },                                                                                                      // 38
    "class": "goBack waves-effect modal-trigger btn col l5 m5 s12"                                          // 39
  }, "Go Back to account"), "\n			"), "\n		"), "\n		", Spacebars.include(view.lookupTemplate("level2Modal")), "\n	"), "\n	", Spacebars.include(view.lookupTemplate("hexabunnies")), "\n	"), "\n	", HTML.SCRIPT({
    type: "text/javascript",                                                                                // 41
    src: "/js/level_2.js"                                                                                   // 42
  }) ];                                                                                                     // 43
}));                                                                                                        // 44
                                                                                                            // 45
Template.__checkName("level3");                                                                             // 46
Template["level3"] = new Template("Template.level3", (function() {                                          // 47
  var view = this;                                                                                          // 48
  return [ Spacebars.include(view.lookupTemplate("header")), "\n	", HTML.MAIN("\n	", Spacebars.include(view.lookupTemplate("user_avatar")), "\n	", HTML.SECTION({
    "class": "container"                                                                                    // 50
  }, "\n		", HTML.DIV({                                                                                     // 51
    "class": "row"                                                                                          // 52
  }, "\n			", HTML.Raw('<section class="col l6 offset-l3 m6 offset-m3 level">\n				<div class="hint_Submit left">\n					<a href="#level3Hint" class="Hint waves-effect modal-trigger btn-flat col">See Hint</a>\n					<a href="#level3Submit" class="SubmitLevel waves-effect modal-trigger btn">Submit!</a>\n				</div>\n				\n			</section>'), "\n			", HTML.Raw('<section class="col l6 offset-l3 m6 offset-m3 level">\n				<div id="level3"></div>\n			</section>'), "\n			", HTML.SECTION({
    "class": "col l6 offset-l3 m6 offset-m3 s10 offset-s1 levelBigger"                                      // 54
  }, "\n				", HTML.Raw("<p> Please Rotate your screen. If you are on a Phone, This game can only played on Tablet or Computer</p>"), "\n				", HTML.A({
    href: function() {                                                                                      // 56
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({                                      // 57
        route: "account"                                                                                    // 58
      }));                                                                                                  // 59
    },                                                                                                      // 60
    "class": "goBack waves-effect modal-trigger btn col l5 m5 s12"                                          // 61
  }, "Go Back to account"), "\n			"), "\n		"), "\n		", Spacebars.include(view.lookupTemplate("level3Modal")), "\n	"), "\n	", Spacebars.include(view.lookupTemplate("hexabunnies")), "\n	"), "\n	", HTML.SCRIPT({
    type: "text/javascript",                                                                                // 63
    src: "/js/level_3.js"                                                                                   // 64
  }) ];                                                                                                     // 65
}));                                                                                                        // 66
                                                                                                            // 67
Template.__checkName("level4");                                                                             // 68
Template["level4"] = new Template("Template.level4", (function() {                                          // 69
  var view = this;                                                                                          // 70
  return [ Spacebars.include(view.lookupTemplate("header")), "\n	", HTML.MAIN("\n	", Spacebars.include(view.lookupTemplate("user_avatar")), "\n	", HTML.SECTION({
    "class": "container"                                                                                    // 72
  }, "\n		", HTML.DIV({                                                                                     // 73
    "class": "row"                                                                                          // 74
  }, "\n			", HTML.Raw('<section class="col l6 offset-l3 m6 offset-m3 level">\n				<div class="hint_Submit left">\n					<a href="#level4Hint" class="Hint waves-effect modal-trigger btn-flat col">See Hint</a>\n					<a href="#level4Submit" class="SubmitLevel waves-effect modal-trigger btn">Submit!</a>\n				</div>\n				\n			</section>'), "\n			", HTML.Raw('<section class="col l6 offset-l3 m6 offset-m3 level">\n				<div id="level4"></div>\n			</section>'), "\n			", HTML.SECTION({
    "class": "col l6 offset-l3 m6 offset-m3 s10 offset-s1 levelBigger"                                      // 76
  }, "\n				", HTML.Raw("<p> Please Rotate your screen. If you are on a Phone, This game can only played on Tablet or Computer</p>"), "\n				", HTML.A({
    href: function() {                                                                                      // 78
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({                                      // 79
        route: "account"                                                                                    // 80
      }));                                                                                                  // 81
    },                                                                                                      // 82
    "class": "goBack waves-effect modal-trigger btn col l5 m5 s12"                                          // 83
  }, "Go Back to account"), "\n			"), "\n		"), "\n		", Spacebars.include(view.lookupTemplate("level4Modal")), "\n	"), "\n	", Spacebars.include(view.lookupTemplate("hexabunnies")), "\n	"), "\n	", HTML.SCRIPT({
    type: "text/javascript",                                                                                // 85
    src: "/js/level_4.js"                                                                                   // 86
  }) ];                                                                                                     // 87
}));                                                                                                        // 88
                                                                                                            // 89
Template.__checkName("level5");                                                                             // 90
Template["level5"] = new Template("Template.level5", (function() {                                          // 91
  var view = this;                                                                                          // 92
  return [ Spacebars.include(view.lookupTemplate("header")), "\n	", HTML.MAIN("\n	", Spacebars.include(view.lookupTemplate("user_avatar")), "\n	", HTML.SECTION({
    "class": "container"                                                                                    // 94
  }, "\n		", HTML.DIV({                                                                                     // 95
    "class": "row"                                                                                          // 96
  }, "\n			", HTML.Raw('<section class="col l6 offset-l3 m6 offset-m3 level">\n				<div class="hint_Submit left">\n					<a href="#level5Hint" class="Hint waves-effect modal-trigger btn-flat col">See Hint</a>\n					<a href="#level5Submit" class="SubmitLevel waves-effect modal-trigger btn">Submit!</a>\n				</div>\n				\n			</section>'), "\n			", HTML.Raw('<section class="col l6 offset-l3 m6 offset-m3 level">\n				<div id="level5"></div>\n			</section>'), "\n			", HTML.SECTION({
    "class": "col l6 offset-l3 m6 offset-m3 s10 offset-s1 levelBigger"                                      // 98
  }, "\n				", HTML.Raw("<p> Please Rotate your screen. If you are on a Phone, This game can only played on Tablet or Computer</p>"), "\n				", HTML.A({
    href: function() {                                                                                      // 100
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({                                      // 101
        route: "account"                                                                                    // 102
      }));                                                                                                  // 103
    },                                                                                                      // 104
    "class": "goBack waves-effect modal-trigger btn col l5 m5 s12"                                          // 105
  }, "Go Back to account"), "\n			"), "\n		"), "\n		", Spacebars.include(view.lookupTemplate("level5Modal")), "\n	"), "\n	", Spacebars.include(view.lookupTemplate("hexabunnies")), "\n	"), "\n	", HTML.SCRIPT({
    type: "text/javascript",                                                                                // 107
    src: "/js/level_5.js"                                                                                   // 108
  }) ];                                                                                                     // 109
}));                                                                                                        // 110
                                                                                                            // 111
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"login_signup.html":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
// client/templates/template.login_signup.js                                                                //
//                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            //
                                                                                                            // 1
Template.__checkName("login_sign");                                                                         // 2
Template["login_sign"] = new Template("Template.login_sign", (function() {                                  // 3
  var view = this;                                                                                          // 4
  return HTML.Raw('<div class="row">\n		<section class="register_login col l8 offset-l2 m8 offset-m2 s8 offset-s2">\n				<button data-target="modal-signup" class="signup waves-effect modal-trigger button col l5 m5 s12">Join Now</button>\n			<div class="or col l2 m2 s12">\n				<p>OR</p>\n			</div>\n				<button data-target="modal-login" class="login waves-effect modal-trigger button col l5 m5 s12">Continue The Fight</button>\n		</section>	\n	</div>');
}));                                                                                                        // 6
                                                                                                            // 7
Template.__checkName("Signup");                                                                             // 8
Template["Signup"] = new Template("Template.Signup", (function() {                                          // 9
  var view = this;                                                                                          // 10
  return HTML.Raw('<div id="modal-signup" class="signup_login_modal modal modal-fixed-footer">\n		<form class="signup">\n			<div class="modal-content">\n		      <h4 class="center-align">Join Now</h4>\n		      <div class="row">\n		      	<section class="normal_signup col s12 m12 l6">\n		      		<div class="input-field col s12">\n		      			<i class="material-icons prefix">face</i>\n			          	<input id="username" type="text" class="validate">\n			          	<label for="username" data-success="Good name!">Nickname(In game)</label>\n			        </div>\n			        <div class="input-field col s12">\n			        	<i class="material-icons prefix">mail_outline</i>\n			          	<input id="email" type="email" class="validate">\n			          	<label for="email" data-error="Try again?" data-success="Great Job!">Email Address</label>\n			        </div>\n			        <div class="input-field col s12">\n			        	<i class="material-icons prefix">lock</i>\n			          	<input id="password" type="password" class="validate">\n			          	<label for="password" data-success="Secure!">Password</label>\n			        </div>\n		      	</section>\n		      	<section class="social_signup col s12 m12 l6">\n		      		<h5 class="social_head col s12">Or With</h5>\n		      		<div class="social_space col s12">\n		      			<a class="social_btn face_btn modal-close waves-effect waves-light btn-large">Facebook SignUp</a>\n		      		</div>\n		      		<div class="col s12">\n		      			<a class="social_btn twitter_btn modal-close waves-effect waves-light btn-large">Twitter SignUp</a>\n		      		</div>	      		\n		      	</section>\n		      </div>\n		    </div>\n\n		    <div class="modal-footer">\n		      <button type="submit" name="action" class="modal-action modal-close waves-effect waves-gree btn-flat">SignUp</button>\n		      <a href="#!" class="modal-action modal-close waves-effect waves-oran btn-flat">Close</a>\n		    </div>\n	    </form>\n	</div>');
}));                                                                                                        // 12
                                                                                                            // 13
Template.__checkName("Login");                                                                              // 14
Template["Login"] = new Template("Template.Login", (function() {                                            // 15
  var view = this;                                                                                          // 16
  return HTML.Raw('<div id="modal-login" class="signup_login_modal modal modal-fixed-footer">\n		<form class="login">\n			<div class="modal-content">\n		      <h4 class="center-align">Login</h4>\n		      <div class="row">\n		      	<section class="normal_login col s12 m12 l6">\n			        <div class="input-field col s12">\n			        	<i class="material-icons prefix">mail_outline</i>\n			          	<input id="email_login" type="email" class="validate">\n			          	<label for="email_login" data-error="Try again?" data-success="Great Job!">Email Address</label>\n			        </div>\n			        <div class="input-field col s12">\n			        	<i class="material-icons prefix">lock</i>\n			          	<input id="password_login" type="password" class="validate">\n			          	<label for="password_login" data-success="Secure!">Password</label>\n			        </div>\n		      	</section>\n		      	<section class="social_login col s12 m12 l6">\n		      		<h5 class="social_head col s12">Or With</h5>\n		      		<div class="social_space col s12">\n		      			<a class="social_btn face_btn modal-close waves-effect waves-light btn-large">Facebook Login</a>\n		      		</div>\n		      		<div class="col s12">\n		      			<a class="social_btn twitter_btn modal-close waves-effect waves-light btn-large">Twitter login</a>\n		      		</div>	      		\n		      	</section>\n		      </div>\n		    </div>\n		    <div class="modal-footer">\n				<button type="submit" name="action" class="modal-action modal-close modal-close waves-effect waves-gree btn-flat">Login</button>\n		      <a href="#!" class="modal-action modal-close waves-effect waves-oran btn-flat">Close</a>\n		    </div>\n	    </form>\n	</div>');
}));                                                                                                        // 18
                                                                                                            // 19
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"app.html":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
// client/template.app.js                                                                                   //
//                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            //
                                                                                                            // 1
Template.__checkName("app_layout");                                                                         // 2
Template["app_layout"] = new Template("Template.app_layout", (function() {                                  // 3
  var view = this;                                                                                          // 4
  return [ Spacebars.include(view.lookupTemplate("yield")), "\n	\n\n", Spacebars.include(view.lookupTemplate("footer")) ];
}));                                                                                                        // 6
                                                                                                            // 7
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"lib":{"app.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
// client/lib/app.js                                                                                        //
//                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            //
// client side js                                                                                           //
// Mongo collections                                                                                        //
Avatar = new Mongo.Collection("avatar");                                                                    // 3
Levels = new Mongo.Collection("levels");                                                                    // 4
Leaderboard = new Mongo.Collection("leaderboard", {                                                         // 5
  //create join to avatar collection                                                                        //
  transform: function () {                                                                                  // 7
    function transform(doc) {                                                                               // 7
      doc.avatarObj = Avatar.find({                                                                         // 8
        owner: doc.owner                                                                                    // 9
      });                                                                                                   //
      return doc;                                                                                           // 11
    }                                                                                                       //
                                                                                                            //
    return transform;                                                                                       //
  }()                                                                                                       //
});                                                                                                         //
                                                                                                            //
// initialize dropdown menu                                                                                 //
Template.dropdown_nav.onRendered(function () {                                                              // 16
  $('.dropdown-button').dropdown({                                                                          // 17
    belowOrigin: true                                                                                       // 18
  });                                                                                                       //
});                                                                                                         //
// get user's avatar for handlebars                                                                         //
Template.user_avatar.helpers({                                                                              // 22
  avatar: function () {                                                                                     // 23
    function avatar() {                                                                                     // 23
      return Avatar.find({                                                                                  // 24
        owner: Meteor.userId()                                                                              // 25
      });                                                                                                   //
    }                                                                                                       //
                                                                                                            //
    return avatar;                                                                                          //
  }()                                                                                                       //
});                                                                                                         //
                                                                                                            //
// get collections for client side                                                                          //
if (Meteor.isClient) {                                                                                      // 31
  Meteor.subscribe("avatar_levels");                                                                        // 32
}                                                                                                           //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"customisation.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
// client/lib/customisation.js                                                                              //
//                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            //
// customisation                                                                                            //
                                                                                                            //
// create tabs for skin, hair and outfit                                                                    //
Template.custom_slider.onRendered(function () {                                                             // 4
    $('ul.tabs').tabs();                                                                                    // 5
});                                                                                                         //
// get avatar for customisation form                                                                        //
Template.customisation.helpers({                                                                            // 8
    avatar: function () {                                                                                   // 9
        function avatar() {                                                                                 // 9
            return Avatar.find({                                                                            // 10
                owner: Meteor.userId()                                                                      // 11
            });                                                                                             //
        }                                                                                                   //
                                                                                                            //
        return avatar;                                                                                      //
    }()                                                                                                     //
});                                                                                                         //
// get customised avatar to show changes                                                                    //
Template.customise_avatar.helpers({                                                                         // 16
    avatar: function () {                                                                                   // 17
        function avatar() {                                                                                 // 17
            return Avatar.find({                                                                            // 18
                owner: Meteor.userId()                                                                      // 19
            });                                                                                             //
        }                                                                                                   //
                                                                                                            //
        return avatar;                                                                                      //
    }()                                                                                                     //
});                                                                                                         //
// form to save avatar                                                                                      //
Template.customisation.events({                                                                             // 24
    "click #saveAvatar": function () {                                                                      // 25
        function clickSaveAvatar(event) {                                                                   // 25
            event.preventDefault();                                                                         // 26
                                                                                                            //
            var skin = $('input[name=skin]:checked').val();                                                 // 28
            var hair = $('input[name=hair]:checked').val();                                                 // 29
            var outfit = $('input[name=outfit]:checked').val();                                             // 30
                                                                                                            //
            if (skin == null) {                                                                             // 32
                skin = $('input[name=altskin]').val();                                                      // 33
            }                                                                                               //
            if (hair == null) {                                                                             // 35
                hair = $('input[name=althair]').val();                                                      // 36
            }                                                                                               //
            if (outfit == null) {                                                                           // 38
                outfit = $('input[name=altoutfit]').val();                                                  // 39
            }                                                                                               //
            // Insert avatar changes                                                                        //
            Meteor.call("updateAvatar", skin, hair, outfit);                                                // 25
            Router.go('/account');                                                                          // 43
        }                                                                                                   //
                                                                                                            //
        return clickSaveAvatar;                                                                             //
    }()                                                                                                     //
});                                                                                                         //
// skin swiper                                                                                              //
Template.skin.onRendered(function () {                                                                      // 47
    var mySwiper = new Swiper('#Skin', {                                                                    // 48
        // Optional parameters                                                                              //
        direction: 'horizontal',                                                                            // 50
        loop: true,                                                                                         // 51
        slidesPerView: 3,                                                                                   // 52
                                                                                                            //
        // Navigation arrows                                                                                //
        nextButton: '.swiper-button-next',                                                                  // 56
        prevButton: '.swiper-button-prev',                                                                  // 57
        grabCursor: true,                                                                                   // 58
        breakpoints: {                                                                                      // 59
            1200: {                                                                                         // 60
                slidesPerView: 3,                                                                           // 61
                spaceBetween: 30                                                                            // 62
            },                                                                                              //
            993: {                                                                                          // 64
                slidesPerView: 3,                                                                           // 65
                spaceBetween: 10                                                                            // 66
            },                                                                                              //
            600: {                                                                                          // 68
                slidesPerView: 2,                                                                           // 69
                spaceBetween: 10                                                                            // 70
            },                                                                                              //
            320: {                                                                                          // 72
                slidesPerView: 1,                                                                           // 73
                spaceBetween: 30                                                                            // 74
            }                                                                                               //
        }                                                                                                   //
                                                                                                            //
    });                                                                                                     //
    // change skin being display on avatar, this is not saved yet                                           //
    $("img.ava_base").click(function () {                                                                   // 47
        $('img').removeClass('img_active');                                                                 // 81
        $(this).addClass('img_active');                                                                     // 82
        $(this).next().prop("checked", "checked");                                                          // 83
        var checked_rad = $('input[name=skin]:checked').val();                                              // 84
        console.log(checked_rad + "radio is checked");                                                      // 85
                                                                                                            //
        var base_src = "/images/dressup/skin/" + checked_rad + ".svg";                                      // 87
        $('img.base').attr("src", base_src);                                                                // 88
    });                                                                                                     //
});                                                                                                         //
// hair swiper                                                                                              //
Template.hair.onRendered(function () {                                                                      // 92
    var mySwiper = new Swiper('#Hair', {                                                                    // 93
        // Optional parameters                                                                              //
        direction: 'horizontal',                                                                            // 95
        loop: true,                                                                                         // 96
        slidesPerView: 4,                                                                                   // 97
        slidesPerColumn: 2,                                                                                 // 98
                                                                                                            //
        // Navigation arrows                                                                                //
        nextButton: '.swiper-button-next',                                                                  // 101
        prevButton: '.swiper-button-prev',                                                                  // 102
        grabCursor: true,                                                                                   // 103
        breakpoints: {                                                                                      // 104
            1200: {                                                                                         // 105
                slidesPerView: 3,                                                                           // 106
                spaceBetween: 30                                                                            // 107
            },                                                                                              //
            993: {                                                                                          // 109
                slidesPerView: 3,                                                                           // 110
                spaceBetween: 10                                                                            // 111
            },                                                                                              //
            600: {                                                                                          // 113
                slidesPerView: 1,                                                                           // 114
                spaceBetween: 10                                                                            // 115
            },                                                                                              //
            320: {                                                                                          // 117
                slidesPerView: 1,                                                                           // 118
                spaceBetween: 30                                                                            // 119
            }                                                                                               //
        }                                                                                                   //
    });                                                                                                     //
    // change hair being display on avatar, this is not saved yet                                           //
    $("img.ava_hair").click(function () {                                                                   // 92
        $('img').removeClass('img_active');                                                                 // 125
        $(this).addClass('img_active');                                                                     // 126
        $(this).next().prop("checked", "checked");                                                          // 127
        var checked_rad = $('input[name=hair]:checked').val();                                              // 128
        console.log(checked_rad + "radio is checked");                                                      // 129
                                                                                                            //
        var hair_src = "/images/dressup/hair/" + checked_rad + ".svg";                                      // 131
        $('img.hair').attr("src", hair_src);                                                                // 132
    });                                                                                                     //
});                                                                                                         //
// outfit swiper                                                                                            //
Template.outfit.onRendered(function () {                                                                    // 136
    var mySwiper = new Swiper('#Outfit', {                                                                  // 137
        // Optional parameters                                                                              //
        direction: 'horizontal',                                                                            // 139
        loop: true,                                                                                         // 140
        slidesPerView: 3,                                                                                   // 141
                                                                                                            //
        // Navigation arrows                                                                                //
        nextButton: '.swiper-button-next',                                                                  // 145
        prevButton: '.swiper-button-prev',                                                                  // 146
        grabCursor: true,                                                                                   // 147
        breakpoints: {                                                                                      // 148
            1200: {                                                                                         // 149
                slidesPerView: 3,                                                                           // 150
                spaceBetween: 30                                                                            // 151
            },                                                                                              //
            993: {                                                                                          // 153
                slidesPerView: 3,                                                                           // 154
                spaceBetween: 10                                                                            // 155
            },                                                                                              //
            600: {                                                                                          // 157
                slidesPerView: 2,                                                                           // 158
                spaceBetween: 10                                                                            // 159
            },                                                                                              //
            320: {                                                                                          // 161
                slidesPerView: 1,                                                                           // 162
                spaceBetween: 30                                                                            // 163
            }                                                                                               //
        }                                                                                                   //
                                                                                                            //
    });                                                                                                     //
    // change outfit being display on avatar, this is not saved yet                                         //
    $("img.ava_outfit").click(function () {                                                                 // 136
        $('img').removeClass('img_active');                                                                 // 170
        $(this).addClass('img_active');                                                                     // 171
        $(this).next().prop("checked", "checked");                                                          // 172
        var checked_rad = $('input[name=outfit]:checked').val();                                            // 173
        console.log(checked_rad + "radio is checked");                                                      // 174
                                                                                                            //
        var outfit_src = "/images/dressup/outfit/" + checked_rad + ".svg";                                  // 176
        $('img.outfit').attr("src", outfit_src);                                                            // 177
    });                                                                                                     //
});                                                                                                         //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"leaderboard.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
// client/lib/leaderboard.js                                                                                //
//                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            //
Template.leaderboard.helpers({                                                                              // 1
    leaderboard: function () {                                                                              // 2
        function leaderboard() {                                                                            // 2
            // get leaderboard, and sort from ascending stars amount                                        //
            return Leaderboard.find({}, {                                                                   // 4
                sort: { stars: -1 }                                                                         // 5
            });                                                                                             //
        }                                                                                                   //
                                                                                                            //
        return leaderboard;                                                                                 //
    }()                                                                                                     //
});                                                                                                         //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"level.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
// client/lib/level.js                                                                                      //
//                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            //
// levels                                                                                                   //
/*===================                                                                                       //
	level modal intialiations                                                                                  //
==================*/                                                                                        //
Template.level1Modal.onRendered(function () {                                                               // 5
	$('#level1Hint').openModal();                                                                              // 6
	$('.modal-trigger').leanModal();                                                                           // 7
});                                                                                                         //
Template.level2Modal.onRendered(function () {                                                               // 9
	$('#level2Hint').openModal();                                                                              // 10
	$('.modal-trigger').leanModal();                                                                           // 11
});                                                                                                         //
Template.level3Modal.onRendered(function () {                                                               // 13
	$('#level3Hint').openModal();                                                                              // 14
	$('.modal-trigger').leanModal();                                                                           // 15
});                                                                                                         //
Template.level4Modal.onRendered(function () {                                                               // 17
	$('#level4Hint').openModal();                                                                              // 18
	$('.modal-trigger').leanModal();                                                                           // 19
});                                                                                                         //
Template.level5Modal.onRendered(function () {                                                               // 21
	$('#level5Hint').openModal();                                                                              // 22
	$('.modal-trigger').leanModal();                                                                           // 23
});                                                                                                         //
                                                                                                            //
// create level slider                                                                                      //
Template.levelSelect.onRendered(function () {                                                               // 27
	var mySwiper = new Swiper('#levelSelection', {                                                             // 28
		// Optional parameters                                                                                    //
		direction: 'horizontal',                                                                                  // 30
		loop: true,                                                                                               // 31
		slidesPerView: 3,                                                                                         // 32
		spaceBetween: 30,                                                                                         // 33
		// Navigation arrows                                                                                      //
		nextButton: '.swiper-button-next',                                                                        // 35
		prevButton: '.swiper-button-prev',                                                                        // 36
		grabCursor: true,                                                                                         // 37
		breakpoints: {                                                                                            // 38
			1200: {                                                                                                  // 39
				slidesPerView: 3,                                                                                       // 40
				spaceBetween: 30                                                                                        // 41
			},                                                                                                       //
			993: {                                                                                                   // 43
				slidesPerView: 3,                                                                                       // 44
				spaceBetween: 10                                                                                        // 45
			},                                                                                                       //
			600: {                                                                                                   // 47
				slidesPerView: 1,                                                                                       // 48
				spaceBetween: 10                                                                                        // 49
			},                                                                                                       //
			320: {                                                                                                   // 51
				slidesPerView: 1,                                                                                       // 52
				spaceBetween: 30                                                                                        // 53
			}                                                                                                        //
		}                                                                                                         //
	});                                                                                                        //
	function reinitSwiper(swiper) {                                                                            // 57
		setTimeout(function () {                                                                                  // 58
			swiper.onResize();                                                                                       // 59
		}, 500);                                                                                                  //
	};                                                                                                         //
	reinitSwiper(mySwiper);                                                                                    // 62
});                                                                                                         //
// get level collection for handlebars                                                                      //
Template.levelSelect.helpers({                                                                              // 65
	levels: function () {                                                                                      // 66
		function levels() {                                                                                       // 66
			var stars = 0;                                                                                           // 67
			Levels.find({ owner: Meteor.userId() }).map(function (doc) {                                             // 68
				stars += doc.score;                                                                                     // 69
			});                                                                                                      //
			Meteor.call("updateStars", stars);                                                                       // 71
			return Levels.find({ owner: Meteor.userId() });                                                          // 72
		}                                                                                                         //
                                                                                                            //
		return levels;                                                                                            //
	}()                                                                                                        //
});                                                                                                         //
// get stars, total from all levels                                                                         //
Template.account.helpers({                                                                                  // 76
	// total user's score                                                                                      //
	starCount: function () {                                                                                   // 78
		function starCount() {                                                                                    // 78
			return Leaderboard.find({ owner: Meteor.userId() });                                                     // 79
		}                                                                                                         //
                                                                                                            //
		return starCount;                                                                                         //
	}()                                                                                                        //
});                                                                                                         //
// level 1 form                                                                                             //
Template.level1Modal.events({                                                                               // 83
	"click .sumbitScore": function () {                                                                        // 84
		function clickSumbitScore(event) {                                                                        // 84
			event.preventDefault();                                                                                  // 85
                                                                                                            //
			var newScore = $('input[name=newScore]').val();                                                          // 87
			newScore = parseInt(newScore);                                                                           // 88
			// Insert avatar changes                                                                                 //
			Meteor.call("updateLevel", 1, newScore);                                                                 // 84
			Router.go('/levels');                                                                                    // 91
		}                                                                                                         //
                                                                                                            //
		return clickSumbitScore;                                                                                  //
	}()                                                                                                        //
});                                                                                                         //
// level 2 form                                                                                             //
Template.level2Modal.events({                                                                               // 96
	"click .sumbitScore": function () {                                                                        // 97
		function clickSumbitScore(event) {                                                                        // 97
			event.preventDefault();                                                                                  // 98
                                                                                                            //
			var newScore = $('input[name=newScore]').val();                                                          // 100
			newScore = parseInt(newScore);                                                                           // 101
			// Insert avatar changes                                                                                 //
			Meteor.call("updateLevel", 2, newScore);                                                                 // 97
			Router.go('/levels');                                                                                    // 104
		}                                                                                                         //
                                                                                                            //
		return clickSumbitScore;                                                                                  //
	}()                                                                                                        //
});                                                                                                         //
// level 3 form                                                                                             //
Template.level3Modal.events({                                                                               // 109
	"click .sumbitScore": function () {                                                                        // 110
		function clickSumbitScore(event) {                                                                        // 110
			event.preventDefault();                                                                                  // 111
                                                                                                            //
			var newScore = $('input[name=newScore]').val();                                                          // 113
			newScore = parseInt(newScore);                                                                           // 114
			// Insert avatar changes                                                                                 //
			Meteor.call("updateLevel", 3, newScore);                                                                 // 110
			Router.go('/levels');                                                                                    // 117
		}                                                                                                         //
                                                                                                            //
		return clickSumbitScore;                                                                                  //
	}()                                                                                                        //
});                                                                                                         //
// level 4 form                                                                                             //
Template.level4Modal.events({                                                                               // 122
	"click .sumbitScore": function () {                                                                        // 123
		function clickSumbitScore(event) {                                                                        // 123
			event.preventDefault();                                                                                  // 124
                                                                                                            //
			var newScore = $('input[name=newScore]').val();                                                          // 126
			newScore = parseInt(newScore);                                                                           // 127
			// Insert avatar changes                                                                                 //
			Meteor.call("updateLevel", 4, newScore);                                                                 // 123
			Router.go('/levels');                                                                                    // 130
		}                                                                                                         //
                                                                                                            //
		return clickSumbitScore;                                                                                  //
	}()                                                                                                        //
});                                                                                                         //
// level 5 form                                                                                             //
Template.level5Modal.events({                                                                               // 134
	"click .sumbitScore": function () {                                                                        // 135
		function clickSumbitScore(event) {                                                                        // 135
			event.preventDefault();                                                                                  // 136
                                                                                                            //
			var newScore = $('input[name=newScore]').val();                                                          // 138
			newScore = parseInt(newScore);                                                                           // 139
			// Insert avatar changes                                                                                 //
			Meteor.call("updateLevel", 5, newScore);                                                                 // 135
			Router.go('/levels');                                                                                    // 142
		}                                                                                                         //
                                                                                                            //
		return clickSumbitScore;                                                                                  //
	}()                                                                                                        //
});                                                                                                         //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"routes.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
// client/lib/routes.js                                                                                     //
//                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            //
// Routing                                                                                                  //
Router.configure({                                                                                          // 2
    layoutTemplate: 'app_layout'                                                                            // 3
});                                                                                                         //
// get home page                                                                                            //
Router.route('/', {                                                                                         // 6
    name: 'home',                                                                                           // 7
    template: 'Home',                                                                                       // 8
    title: 'Home',                                                                                          // 9
    onBeforeAction: function () {                                                                           // 10
        function onBeforeAction() {                                                                         // 10
            var currrentUser = Meteor.userId();                                                             // 11
            if (currrentUser) {                                                                             // 12
                this.render('account');                                                                     // 13
            } else {                                                                                        //
                this.next();                                                                                // 15
            }                                                                                               //
        }                                                                                                   //
                                                                                                            //
        return onBeforeAction;                                                                              //
    }()                                                                                                     //
});                                                                                                         //
// get account page                                                                                         //
Router.route('/account', {                                                                                  // 20
    name: 'account',                                                                                        // 21
    template: 'account',                                                                                    // 22
    title: 'Account',                                                                                       // 23
    onBeforeAction: function () {                                                                           // 24
        function onBeforeAction() {                                                                         // 24
            var currrentUser = Meteor.userId();                                                             // 25
            if (currrentUser) {                                                                             // 26
                this.next();                                                                                // 27
            } else {                                                                                        //
                this.redirect('/');                                                                         // 29
            }                                                                                               //
        }                                                                                                   //
                                                                                                            //
        return onBeforeAction;                                                                              //
    }()                                                                                                     //
});                                                                                                         //
// get leaderboard page                                                                                     //
Router.route('/leaderboard', {                                                                              // 34
    name: 'leaderboard',                                                                                    // 35
    template: 'leaderboard',                                                                                // 36
    title: 'Leaderboard',                                                                                   // 37
    onBeforeAction: function () {                                                                           // 38
        function onBeforeAction() {                                                                         // 38
            var currrentUser = Meteor.userId();                                                             // 39
            if (currrentUser) {                                                                             // 40
                this.next();                                                                                // 41
            } else {                                                                                        //
                this.redirect('/');                                                                         // 43
            }                                                                                               //
        }                                                                                                   //
                                                                                                            //
        return onBeforeAction;                                                                              //
    }()                                                                                                     //
});                                                                                                         //
// get levels page                                                                                          //
Router.route('/levels', {                                                                                   // 48
    name: 'levels',                                                                                         // 49
    template: 'levelSelect',                                                                                // 50
    title: 'Levels',                                                                                        // 51
    onBeforeAction: function () {                                                                           // 52
        function onBeforeAction() {                                                                         // 52
            var currrentUser = Meteor.userId();                                                             // 53
            if (currrentUser) {                                                                             // 54
                this.next();                                                                                // 55
            } else {                                                                                        //
                this.redirect('/');                                                                         // 57
            }                                                                                               //
        }                                                                                                   //
                                                                                                            //
        return onBeforeAction;                                                                              //
    }()                                                                                                     //
});                                                                                                         //
// level 1                                                                                                  //
Router.route('/levels/1', {                                                                                 // 62
    name: 'level1',                                                                                         // 63
    template: 'level1',                                                                                     // 64
    title: 'Levels | 1',                                                                                    // 65
    onBeforeAction: function () {                                                                           // 66
        function onBeforeAction() {                                                                         // 66
            var currrentUser = Meteor.userId();                                                             // 67
            if (currrentUser) {                                                                             // 68
                this.next();                                                                                // 69
            } else {                                                                                        //
                this.redirect('/');                                                                         // 71
            }                                                                                               //
        }                                                                                                   //
                                                                                                            //
        return onBeforeAction;                                                                              //
    }()                                                                                                     //
});                                                                                                         //
// level 2                                                                                                  //
Router.route('/levels/2', {                                                                                 // 76
    name: 'level2',                                                                                         // 77
    template: 'level2',                                                                                     // 78
    title: 'Levels | 2',                                                                                    // 79
    onBeforeAction: function () {                                                                           // 80
        function onBeforeAction() {                                                                         // 80
            var currrentUser = Meteor.userId();                                                             // 81
            if (currrentUser) {                                                                             // 82
                this.next();                                                                                // 83
            } else {                                                                                        //
                this.redirect('/');                                                                         // 85
            }                                                                                               //
        }                                                                                                   //
                                                                                                            //
        return onBeforeAction;                                                                              //
    }()                                                                                                     //
});                                                                                                         //
// level 3                                                                                                  //
Router.route('/levels/3', {                                                                                 // 90
    name: 'level3',                                                                                         // 91
    template: 'level3',                                                                                     // 92
    title: 'Levels | 3',                                                                                    // 93
    onBeforeAction: function () {                                                                           // 94
        function onBeforeAction() {                                                                         // 94
            var currrentUser = Meteor.userId();                                                             // 95
            if (currrentUser) {                                                                             // 96
                this.next();                                                                                // 97
            } else {                                                                                        //
                this.redirect('/');                                                                         // 99
            }                                                                                               //
        }                                                                                                   //
                                                                                                            //
        return onBeforeAction;                                                                              //
    }()                                                                                                     //
});                                                                                                         //
// level 4                                                                                                  //
Router.route('/levels/4', {                                                                                 // 104
    name: 'level4',                                                                                         // 105
    template: 'level4',                                                                                     // 106
    title: 'Levels | 4',                                                                                    // 107
    onBeforeAction: function () {                                                                           // 108
        function onBeforeAction() {                                                                         // 108
            var currrentUser = Meteor.userId();                                                             // 109
            if (currrentUser) {                                                                             // 110
                this.next();                                                                                // 111
            } else {                                                                                        //
                this.redirect('/');                                                                         // 113
            }                                                                                               //
        }                                                                                                   //
                                                                                                            //
        return onBeforeAction;                                                                              //
    }()                                                                                                     //
});                                                                                                         //
// level 5                                                                                                  //
Router.route('/levels/5', {                                                                                 // 118
    name: 'level5',                                                                                         // 119
    template: 'level5',                                                                                     // 120
    title: 'Levels | 5',                                                                                    // 121
    onBeforeAction: function () {                                                                           // 122
        function onBeforeAction() {                                                                         // 122
            var currrentUser = Meteor.userId();                                                             // 123
            if (currrentUser) {                                                                             // 124
                this.next();                                                                                // 125
            } else {                                                                                        //
                this.redirect('/');                                                                         // 127
            }                                                                                               //
        }                                                                                                   //
                                                                                                            //
        return onBeforeAction;                                                                              //
    }()                                                                                                     //
});                                                                                                         //
// get customisation page                                                                                   //
Router.route('/customisation', {                                                                            // 132
    name: 'customisation',                                                                                  // 133
    template: 'customisation',                                                                              // 134
    title: 'Customisation',                                                                                 // 135
    onBeforeAction: function () {                                                                           // 136
        function onBeforeAction() {                                                                         // 136
            var currrentUser = Meteor.userId();                                                             // 137
            if (currrentUser) {                                                                             // 138
                this.next();                                                                                // 139
            } else {                                                                                        //
                this.redirect('/');                                                                         // 141
            }                                                                                               //
        }                                                                                                   //
                                                                                                            //
        return onBeforeAction;                                                                              //
    }()                                                                                                     //
});                                                                                                         //
//create title                                                                                              //
Router.after(function () {                                                                                  // 146
    if (this.route.options.title) document.title = 'CvsH | ' + this.route.options.title;                    // 147
});                                                                                                         //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"signup_login.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
// client/lib/signup_login.js                                                                               //
//                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            //
//signup and login events                                                                                   //
/*===================                                                                                       //
    signup intialiations                                                                                    //
    ==================*/                                                                                    //
Template.Signup.onRendered(function () {                                                                    // 5
    $('.modal-trigger').leanModal();                                                                        // 6
});                                                                                                         //
//log out when clicked                                                                                      //
Template.dropdown_nav.events({                                                                              // 9
    'click .logout': function () {                                                                          // 10
        function clickLogout(event) {                                                                       // 10
            event.preventDefault();                                                                         // 11
            Meteor.logout(function (err) {                                                                  // 12
                if (!err) {                                                                                 // 13
                    Router.go('/');                                                                         // 14
                }                                                                                           //
            });                                                                                             //
        }                                                                                                   //
                                                                                                            //
        return clickLogout;                                                                                 //
    }()                                                                                                     //
});                                                                                                         //
                                                                                                            //
// create user                                                                                              //
Template.Signup.events({                                                                                    // 21
    'submit .signup': function () {                                                                         // 22
        function submitSignup(event) {                                                                      // 22
            event.preventDefault();                                                                         // 23
                                                                                                            //
            var username = event.target.username.value;                                                     // 25
            var email = event.target.email.value;                                                           // 26
            var password = event.target.password.value;                                                     // 27
                                                                                                            //
            var user = {                                                                                    // 29
                email: email,                                                                               // 30
                password: password,                                                                         // 31
                username: username,                                                                         // 32
                createdAt: new Date()                                                                       // 33
            };                                                                                              //
            Accounts.createUser(user, function (err) {                                                      // 35
                if (!err) {                                                                                 // 36
                    Router.go('/customisation');                                                            // 37
                }                                                                                           //
            });                                                                                             //
            //works!                                                                                        //
        }                                                                                                   // 22
                                                                                                            //
        return submitSignup;                                                                                //
    }(),                                                                                                    //
    'click .face_btn': function () {                                                                        // 42
        function clickFace_btn(event) {                                                                     // 42
            event.preventDefault();                                                                         // 43
                                                                                                            //
            Meteor.loginWithFacebook(function (err) {                                                       // 45
                if (!err) {                                                                                 // 46
                    Router.go('/customisation');                                                            // 47
                }                                                                                           //
            });                                                                                             //
        }                                                                                                   //
                                                                                                            //
        return clickFace_btn;                                                                               //
    }(),                                                                                                    //
    'click .twitter_btn': function () {                                                                     // 51
        function clickTwitter_btn(event) {                                                                  // 51
            event.preventDefault();                                                                         // 52
                                                                                                            //
            Meteor.loginWithTwitter(function (err) {                                                        // 54
                if (!err) {                                                                                 // 55
                    Router.go('/customisation');                                                            // 56
                }                                                                                           //
            });                                                                                             //
        }                                                                                                   //
                                                                                                            //
        return clickTwitter_btn;                                                                            //
    }()                                                                                                     //
});                                                                                                         //
// login                                                                                                    //
Template.Login.events({                                                                                     // 62
    'submit .login': function () {                                                                          // 63
        function submitLogin(event) {                                                                       // 63
            event.preventDefault();                                                                         // 64
            var email = event.target.email_login.value;                                                     // 65
            var password = event.target.password_login.value;                                               // 66
                                                                                                            //
            Meteor.loginWithPassword(email, password, function (err) {                                      // 68
                if (!err) {                                                                                 // 69
                    Router.go('/account');                                                                  // 70
                }                                                                                           //
            });                                                                                             //
        }                                                                                                   //
                                                                                                            //
        return submitLogin;                                                                                 //
    }(),                                                                                                    //
    'click .face_btn': function () {                                                                        // 74
        function clickFace_btn(event) {                                                                     // 74
            event.preventDefault();                                                                         // 75
            Meteor.loginWithFacebook(function (err) {                                                       // 76
                if (!err) {                                                                                 // 77
                    Router.go('/account');                                                                  // 78
                }                                                                                           //
            });                                                                                             //
        }                                                                                                   //
                                                                                                            //
        return clickFace_btn;                                                                               //
    }(),                                                                                                    //
    'click .twitter_btn': function () {                                                                     // 82
        function clickTwitter_btn(event) {                                                                  // 82
            event.preventDefault();                                                                         // 83
                                                                                                            //
            Meteor.loginWithTwitter(function (err) {                                                        // 85
                if (!err) {                                                                                 // 86
                    Router.go('/account');                                                                  // 87
                }                                                                                           //
            });                                                                                             //
        }                                                                                                   //
                                                                                                            //
        return clickTwitter_btn;                                                                            //
    }()                                                                                                     //
});                                                                                                         //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}},{"extensions":[".js",".json",".html",".scss"]});
require("./client/templates/account.html");
require("./client/templates/avatar_hexabunnies.html");
require("./client/templates/custom_slider.html");
require("./client/templates/customisation.html");
require("./client/templates/header_footers.html");
require("./client/templates/home.html");
require("./client/templates/leaderboard.html");
require("./client/templates/level_intros.html");
require("./client/templates/level_select.html");
require("./client/templates/levels.html");
require("./client/templates/login_signup.html");
require("./client/app.html");
require("./client/lib/app.js");
require("./client/lib/customisation.js");
require("./client/lib/leaderboard.js");
require("./client/lib/level.js");
require("./client/lib/routes.js");
require("./client/lib/signup_login.js");