window.extensions_initializer['popup-picture'] = function() {
    if ($(this).parent().find('.expanded-popup-picture').length == 0) {
        $(this).css({'cursor': 'pointer'});
        if ($(this).data('popup-source') != '') {
            popup_source = $(this).data('popup-source');
        } else {
            popup_source = $(this).attr('src');
        }
        $(this).after('<div class="expanded-popup-picture" style="z-index:1000;position:absolute;opacity: 0.8;display:none;"><img src="'+  popup_source + '" width="' + ($(document).width()/5) + '"></div>');
    }

    $(this).on('click', function(event) {
        is_visible = $(this).parent().find('.expanded-popup-picture').is(':visible');
        $('.expanded-popup-picture').hide();
        if (!is_visible) {
            $(this).parent().find('.expanded-popup-picture').show().css({'marginTop': '-'+($(this).height() / 2 + 31) + 'px', 'marginLeft': ($(this).width() + 8) + 'px'});
        }
        event.stopPropagation();
    });

    $(document).on('scroll click', function() {
        $('.expanded-popup-picture').fadeOut(1000);
    })
}