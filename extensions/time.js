
window.extensions_initializer.time = function() {
    if (this.nodeName.toLowerCase() == 'input') {
        var current_element = $(this);
        element_id = current_element.attr('id');
        if (current_element.hasClass('hasWickedpicker')) {
            data = current_element.data();
            current_value = current_element.val();
            current_element.replaceWith(current_element.data('original'));
            var current_element = $('#'+element_id);
            current_element.val(current_value);
            $.each(data, function(key, value) {
               current_element.data(key, value);
            });
            $.data($('#'+element_id)[0], "plugin_wickedpicker", null);
        } else {
            current_element.data('original', $("<div />").append(current_element.clone()).html());
        }
        
        var options = {};

        [
            'now',
            'twentyFour',
            'upArrow',
            'downArrow',
            'close',
            'hoverState',
            'title',
            'showSeconds',
            'secondsInterval',
            'minutesInterval',
            'beforeShow',
            'show',
            'clearable'
        ].forEach(function(key) {
            if (current_element.data('time_'+key)) {
                options[key] = current_element.data('time_'+key);
            }
        });

        $(current_element).wickedpicker(options);
    }
}