window.extensions_initializer.multiemail = function() {
    if (!$(this).hasClass('multiemail-applied')) {
        $(this).multiEmail();
        $(this).addClass('multiemail-applied');
    }
}
