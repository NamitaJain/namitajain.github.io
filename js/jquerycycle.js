$(function() {


    $('#box').cycle({
        fx:       'scrollHorz',
        speed:     200,
        timeout:   0,
        next:     '#snext',
        prev:     '#sprev',
        after:     onAfter
		
    });
    
    
});

function onAfter(curr,next,opts) {
    var caption = (opts.currSlide + 1) + ' / ' + opts.slideCount;
    $('#caption').html(caption);
}

