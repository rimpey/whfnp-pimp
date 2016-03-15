$(document).foundation();

$(window).on("load", function() {
    
    
//  ********** 
//  HERO PANEL 
//  ********** 
    
//  rotating the cubes on the front hero panel using a timer
    
    var loop_condition = true;
    
    var topLeft = $(".cube").eq(0);
    var topRight = $(".cube").eq(1);
    var bottomLeft = $(".cube").eq(2);
    var bottomRight = $(".cube").eq(3);
    
    setInterval(function () {
        
        if (loop_condition) {
            topLeft.toggleClass("active");
            bottomRight.toggleClass("active");
        } else {
            topRight.toggleClass("active");
            bottomLeft.toggleClass("active");
        }
        loop_condition = !loop_condition;

    }, 2000);
    
    
//  ******************************* 
//  SUMMARY - HAVE YOU SEEN - PANEL 
//  ******************************* 
    
//  toggle click-event class to element to perform slide up functionality displaying summary info on click
      
    $('.summary-title').on('click', function () {
        $(this).toggleClass('click-event');
    });
    

//  *******************************
//  FEATURED CAUSES/MARKETERS PANEL 
//  ******************************* 
        
// Fade Responsive Slider
    
    $('.fade').slick({
        autoplay: true,
        autoplaySpeed: 8000,
        pauseOnHover: true,
        pauseOnFocus: true,
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
    
});


// **************** 
// TALK ABOUT PANEL 
// **************** 
 
// Twitter widget

// Tweets from pimp my cause

!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");

// Tweets from whfnp

//!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");

// dynamically insert stylesheet

CustomizeTwitterWidget = function() {
    var timeout = 300; // check every 300ms to see if iFrame is loaded => 1sec = 1000ms
    var max = 10000;   // gives up checking for iFrame after 10000ms => 10 seconds
    
    var waitForTwitterFrame = function(timeSoFar) {
        var found = false;
        
        // keep looping until found twitter widget iFrame found - window.frames
        // loops every 300ms check frames been loaded in - timeout in 10 sec
        for (var i = 0; i < frames.length && !found; i++) {
            try {
                var frame = frames[i], doc = frame.document;
                if (frame.frameElement.id.indexOf('twitter-widget') >= 0 && doc.body) {
                    var link = doc.createElement("link");
                    link.href = '/styles/styles.css';
                    link.rel = "stylesheet";
                    link.type = "text/css";
                    doc.getElementsByTagName("head")[0].appendChild(link);
                    found = true;
                }
            } catch (err) {

            }
        }
        if (!found && timeSoFar < max) { 
            timeSoFar += timeout;
            setTimeout(function() { waitForTwitterFrame(timeSoFar); }, timeout);
        }
    }
    setTimeout(function() { waitForTwitterFrame(timeout); }, timeout);
};
// call function
CustomizeTwitterWidget();
    
    
    // Summary Panel - change colour on hover title to image colour - sibling prev
//    $("#child").height($("#parent").height());
//    $('.post').css('min-height', $('.entry-meta').outerHeight());
//    $( "td:eq( 2 )" ).css( "color", "red" );
//    $(this).siblings(".bar").eq(0).text();
    
//    // Colour Values
//    var $purple = '#3b1d4a';
//    // 59 29 74
//    var $pink = '#dc0e54';
//    // 220 14 84
//    var $green = '#809b29';
//    // 128 155 41
//    var $mustard = '#d7be01';
//    // 215 190 1
//    var $overlay = '#f2f4f5';
//    // 242 244 245
    
    // NOTE: this code worked in achieving the slide up summary-info however did not include the
    // colour change of the :before triangle.. wasn't sure how to get a psuedo element...
    
    
    // set background colour of Summary panels to then change the title accordingly
//    $('.summary-img:eq(0)').css('background-color', $pink);
//    $('.summary-img:eq(1)').css('background-color', $purple);
//    $('.summary-img:eq(2)').css('background-color', $green);
//    $('.summary-img:eq(3)').css('background-color', $mustard);
//    $('.summary-title').on('click', function () {
//        $(this).toggleClass('click-event');
//    })
//    $('.summary-title').on('click hover', 
//      $('.summary-title').hover(
//                             
//        function(){
//            // save current obj 'title' as with slide up event 'summary-info' becomes new current obj - hook is lost
////            var current_obj = $(this);
//            // mouse in title becomes same colour as summary tile background
//            var colour = $(this).prev().css('background-color');
//        
//        console.log(colour);
//        
//        
//            $(this).css('background-color', colour);
//            
//        }, function() {
//            // mouse out title becomes same established neutral overlay colour
//            $(this).css('background-color', $overlay);   
//        }
//    );
        
//    $(#foo).click(change() {
//        $(body).css("background-color":"blue");
//    });
    
//});

//$(document).ready(function() {
    
    // rotate the cube - both panels together 
//    $(".cube.flip-to-top")
//        .velocity({
//            //flip forward
//            transformStyle: "500px",
//            rotateX: "-90deg",
//            translateY: "10px",
//            transformStyle: "preserve-3d"
//        },{duration: "500"});
//        .velocity({
//            // flip back => upside/reverse why ?????
//            perspective: "500px",
//            rotateX: "90deg",
//            translateY: "-50%",
//            transformStyle: "preserve-3d"
//        
//        });
                  //,{ duration: 500, delay: 1000 });
                  
                  

    // jumping box test => this code works 
//    $(".box").velocity({
//        translateY: "10px"
//    }); 
                       
//       {
//        loop: true
//    }).velocity("reverse");
    
//});


/* Rotate the cube - both panels together */
//.cube.flip-to-top:hover {
//    // as you flip the cube back you need to move it forward fifty percent of height as rotation point is in the middle of the cube
//    transform: perspective(500px) rotateX(-90deg) translateY(50%);
//    z-index: 10;
//}
//
//.cube.flip-to-bottom:hover {
//    // as you flip the cube forward you need to move it back fifty percent of height as rotation point is in the middle of the cube
//    transform: perspective(500px) rotateX(90deg) translateY(-50%);
//    z-index: 10;
//}