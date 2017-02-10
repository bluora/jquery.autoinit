
window.extensions_initializer.icheck = function() {
    if ($(this).parent().hasClass('icheckbox_flat-green')
        || $(this).parent().hasClass('iradio_flat-green')) {
        $(this).parent().replaceWith($(this));
    }

    $(this).iCheck({
        checkboxClass: 'icheckbox_flat-green',
        radioClass: 'iradio_flat-green'
    });
}