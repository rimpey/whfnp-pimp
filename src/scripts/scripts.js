$(document).foundation();

$(window).on("load", function() {
    
    // rotating the cubes on the front hero panel using a timer
    
    var x = true;
    
    var topLeft = $(".cube").eq(0);
    var topRight = $(".cube").eq(1);
    var bottomLeft = $(".cube").eq(2);
    var bottomRight = $(".cube").eq(3);
    
    setInterval(function () {
        
        if (x) {
            topLeft.toggleClass("active");
            bottomRight.toggleClass("active");
        } else {
            topRight.toggleClass("active");
            bottomLeft.toggleClass("active");
        }
        x = !x;

    }, 2000);
    
});

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