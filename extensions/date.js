
window.extensions_initializer.date = function() {
    options = {};
    options['zIndexOffset'] = 1001;
    options['format'] = 'dd/mm/yyyy';
    options['todayHighlight'] = true;
    options['todayBtn'] = true;
    $(this).datepicker(options);
}