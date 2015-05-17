$(document).ready(function() {

    var translate = function(word, positionX, positionY) {
        var url = "http://mymemory.translated.net/api/get?langpair=en|pl&q=" + word;

        $.ajax({
            type: 'GET',
            url: url,
            dataType: 'json',
            success: function (data) {
                var translation = data.matches[0].translation;
                var result="";

                //var div = $("<div style='width:20px; height:20px; background-color: red; margin-left:"+ positionX +"px; margin-top:"+ positionY +"px; position: fixed;'></div>");
                var div = $("<div class='dziubek' style='margin-left:"+ positionX +"px; margin-top:"+ positionY +"px;'></div>");
                div.appendTo(document.body);
                //var div2 = $("<div style='width:200px; height:100px; background-color: white; margin-left:"+ (positionX+20) +"px; margin-top:"+ (positionY-10) +"px; position: fixed;'></div>");
                var div2 = $("<div class='translatearea' style='margin-left:"+ (positionX+20) +"px; margin-top:"+ (positionY-10) +"px;'></div>");
                div2.appendTo(document.body);

                for(var i=0; i<data.matches.length; i++) {
                    //result += data.matches[i].translation + "\n";
                    result += data.matches[i].translation + "<br>";
                    //$(".translatearea").val(result);
                    $(".translatearea").html(result);
                }

                div.fadeIn();
                div2.fadeIn();
            }
        });
    };

    $("#textarea").mouseup(function(e) {
        var selectionStart = $(this)[0].selectionStart;
        var selectionEnd = $(this)[0].selectionEnd;

        if (selectionStart !== selectionEnd) {

            $(".dziubek").fadeOut();
            $(".translatearea").fadeOut();

            var positionX = $(this).position().left + 405; //500 polowa szerokosci textboxa
            var positionY =  e.pageY - 53; //46 wysokosc gornego diva

            var wholeText = $(this).val();
            translate(wholeText.substring(selectionStart,selectionEnd),  positionX, positionY);
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


    $("#textarea").on('paste', function() {
        $(this).animate({'top':'150px', 'margin-top':'0'},"slow");
        setTimeout(function(){
            $("#textarea").animate({'height':'300'},"slow");
        }, 1000);
    });
});