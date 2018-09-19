$(document).ready(function () {
    $('#button').click(function () {
        $.get('./download', function (data) {
            $('#content').text(data)
        })
    })
})
