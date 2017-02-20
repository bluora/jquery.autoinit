window.extensions_initializer.redactor = function() {
    if (!$(this).hasClass('redactor-applied')) {
        $(this).redactor();
        $(this).addClass('redactor-applied');
    }
}