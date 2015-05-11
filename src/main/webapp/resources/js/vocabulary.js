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

    $("#textarea").mouseup(function(e) {
        var selectionStart = $(this)[0].selectionStart;
        var selectionEnd = $(this)[0].selectionEnd;

        var y = e.pageY;
        var position = $(this).position();

        var positionX = position.left - 500; //500 polowa szerokosci textboxa
        var positionY =  y - 46; //46 wysokosc gornego diva

        var div = $("<div style='width:20px; height:20px; background-color: red; margin-left:"+ positionX +"px; margin-top:"+ positionY +"px; position: fixed;'></div>");
        div.appendTo(document.body);

        if (selectionStart !== selectionEnd) {
            var wholeText = $(this).val();

            //alert(wholeText.substring(selectionStart,selectionEnd));
            translate(wholeText.substring(selectionStart,selectionEnd));
        }
    });

    $("#showmenu").click(function() {
        var menu = $(".menu");
        if (menu.attr("val") == "wysuniety") {
            menu.animate({right: '-10%'});
            menu.attr("val","schowany");
        } else {
            menu.animate({right: '0%'});
            menu.attr("val","wysuniety");
        }
    });

});