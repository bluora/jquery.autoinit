window.extensions_initializer.redactor = function() {
    if (!$(this).hasClass('redactor-applied')) {
        options = {};
        if ($(this).data('toolbar-buttons')) {
            options['buttons'] = $(this).data('toolbar-buttons');
        }
        $(this).redactor(options);
        $(this).addClass('redactor-applied');
    }
}