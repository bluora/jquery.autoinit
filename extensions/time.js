
window.extensions_initializer.time = function() {
    var current_element = $(this);
    element_id = current_element.attr('id');
    if (this.nodeName.toLowerCase() == 'input') {
        if (current_element.hasClass('ui-timepicker-input')) {
            data = current_element.data();
            current_value = current_element.val();
            current_element.replaceWith(current_element.data('original'));
            var current_element = $('#'+element_id);
            current_element.val(current_value);
            $.each(data, function(key, value) {
               current_element.data(key, value);
            });
            $.data($('#'+element_id)[0], "plugin_timepicker", null);
        } else {
            current_element.data('original', $("<div />").append(current_element.clone()).html());
        }
        $(current_element).timepicker({});
    }
}