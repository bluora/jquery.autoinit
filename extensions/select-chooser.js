window.extensions_initializer['select-chooser'] = function() {
    $(this).on('change', function() {
        if ($(this).prop('selectedIndex') > 0) {
            window.location.href = $(this).data('url').replace('OPTION_VALUE', $(this).val());
        }
        return false;
    });
}
