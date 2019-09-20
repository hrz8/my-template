$(".button-collapse").sideNav();

$(document).ready(function () {
    $('.select2').each(function () {
        $(this).select2({
            theme: 'bootstrap4',
            width: 'style',
            placeholder: 'Select an option',
            allowClear: Boolean($(this).data('allow-clear')),
        });
    });
    $('.select2-search__field').attr('placeholder', '');
});

$('select[multiple="multiple"]').on('select2:unselect', function() {
    $('.select2-search__field').attr('placeholder', '');
})

const agtDataTableAjax = config => {
    $(config.element).dataTable({
        'aaSorting': [],
        'responsive': true,
        'lengthChange': false,
        'aoColumnDefs': [{
            'bSortable': false,
            'aTargets': ['sorting_disabled']
        }],
        'ajax': config.ajax,
        'columns': config.columns,
        'drawCallback': settings => {
            $('.dataTables_length').addClass('bs-select');
            $('.dataTables_info').addClass('color-agt-default pl-2');
            $(config.element + ' thead').addClass('grey-text');
        },
    });
}