$(document).foundation();

$(document).ready(function() {
    
    $('.tile-wrapper').hover(
        function(){
            $(this).find('.tile').addClass('the-flip');
        },
        function(){
            $(this).find('.tile').removeClass('the-flip');
        }
    );
});