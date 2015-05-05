$(document).ready(function() {

    var translate = function(word) {
        var url = "http://mymemory.translated.net/api/get?langpair=en|pl&q=" + word;

        $.ajax({
            type: 'GET',
            url: url,
            dataType: 'json',
            success: function (data) {
                var translation = data.matches[0].translation;
                var result="";
                for(var i=0; i<data.matches.length; i++) {
                    result += data.matches[i].translation + "\n";
                    $("#textarea2").val(result);
                }
            }
        });
    };

    $("#textarea").mouseup(function() {
        var selectionStart = $(this)[0].selectionStart;
        var selectionEnd = $(this)[0].selectionEnd;

        if (selectionStart !== selectionEnd) {
            var wholeText = $(this).val();

            //alert(wholeText.substring(selectionStart,selectionEnd));
            translate(wholeText.substring(selectionStart,selectionEnd));
        }
    });

});