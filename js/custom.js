baseUrl = 'http://127.0.0.1:8000'

function loadModal(pageId) {
    requestUrl = baseUrl.concat('/event-pages/', pageId, '.html');
    console.log(requestUrl)
    jQuery.get(requestUrl, function(data) {
        jQuery('.modal-content').html(data);
        jQuery('#modal').modal({
            show: true
        });
    });
}
