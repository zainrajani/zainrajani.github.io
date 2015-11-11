// Sticky
$(function($){
    $(document).ready(function() {
        $('#navbar-wrap').stickUp({
            parts: {
                0:'home',
                1:'about',
                2:'portfolio',
                3:'work',
                4:'skills',
                5:'contact'
            },
            itemClass: 'nav-item',
            itemHover: 'active',
            stickCallback: function() {$('#arrow').hide();console.log('hi')},
            unstickCallback: function() {$('#arrow').show();console.log('bye')}
        })
    })
})

// Switchy
;(function($) {
    var sets = [
        {button: $('#portfolio-b0'), set: $('#portfolio-s0')},
        {button: $('#portfolio-b1'), set: $('#portfolio-s1')},
        {button: $('#portfolio-b2'), set: $('#portfolio-s2')},
    ]
    var current = 0

    sets.forEach(function(set, i, a) {
        set.button.click(function(){
            if(current === i)
                return

            a[current].set.hide()
            a[current].button.removeClass('active')

            set.set.show()
            set.button.addClass('active')

            current = i
        })
    })
})($)

// Clicky
;(function($) {
    $('#nav-links a').click(function(event) {
        event.preventDefault()

        $("html, body").stop().animate({
            scrollTop: $($(this).attr("href")).offset().top - 45
        }, 500, 'swing')
    })
})($)
