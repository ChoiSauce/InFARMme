$(document).ready(function(){
    $(window).load(function(){
        var oldSSB = $.fn.modal.Constructor.prototype.setScrollbar;
        $.fn.modal.Constructor.prototype.setScrollbar = function ()
        {
            oldSSB.apply(this);
            if(this.bodyIsOverflowing && this.scrollbarWidth)
            {
                $('.navbar-fixed-top, .navbar-fixed-bottom').css('padding-right', this.scrollbarWidth);
            }
        }

        var oldRSB = $.fn.modal.Constructor.prototype.resetScrollbar;
        $.fn.modal.Constructor.prototype.resetScrollbar = function ()
        {
            oldRSB.apply(this);
            $('.navbar-fixed-top, .navbar-fixed-bottom').css('padding-right', '');
        }
    });
});

var $logo = $('#mobile-menu');
$(document).scroll(function() {
    if ($(this).scrollTop() > 10) {
        $logo.addClass('navbar-width-color');
    } else {
        $logo.removeClass('navbar-width-color');
    }
    // $logo.css({display: $(this).scrollTop()>10 ? "block":"none"});
});

$("#myBtn").modal("hide");
