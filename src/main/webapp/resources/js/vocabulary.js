$(document).ready(function() {

    var translate = function(word, positionX, positionY) {
        var url = "http://mymemory.translated.net/api/get?langpair=en|pl&q=" + word;

        $.ajax({
            type: 'GET',
            url: url,
            dataType: 'json',
            success: function (data) {
                var result="";

                var divBeak = $("<div class='dziubek'></div>");
                divBeak.css({'margin-left':positionX});
                divBeak.css({'margin-top':positionY});
                divBeak.css({'z-index':1});
                divBeak.appendTo(document.body);
                var divTranslateArea = $("<div tabindex='-1' class='translatearea'></div>");
                divTranslateArea.css({'margin-left':(positionX+20)});
                divTranslateArea.css({'margin-top':(positionY-10)});
                divTranslateArea.css({'z-index':5});
                divTranslateArea.focusin(function() {
                    clearTimeout(timeout);
                });
                divTranslateArea.appendTo(document.body);

                result = "<span class='glyphicon glyphicon-remove' aria-hidden='true'></span>";
                for(var i=0; i<data.matches.length; i++) {
                    //result += data.matches[i].translation + "<br>";
                    result += "<div class='translatedWord'>" + data.matches[i].translation + "</div>";
                    $(".translatearea").html(result);
                }

                divBeak.fadeIn();
                divTranslateArea.fadeIn();
                $("#glyphicon-remove").bind("click", function() {
                   alert("remove");
                });
            }
        });
    };

    $("#textarea").mouseup(function(e) {
        var selectionStart = $(this)[0].selectionStart;
        var selectionEnd = $(this)[0].selectionEnd;

        if (selectionStart !== selectionEnd) {

            $(".dziubek").fadeOut("normal", function() {
                $(this).remove();
            });
            $(".translatearea").fadeOut("normal", function() {
                $(this).remove();
            });

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

        $(".dziubek").fadeOut("normal", function() {
            $(this).remove();
        });
        $(".translatearea").fadeOut("normal", function() {
            $(this).remove();
        });

        $(this).animate({'top':'150px', 'margin-top':'0'},"slow");
        setTimeout(function(){
            var height = $(document).height();
            var h = (height * 6)/10;
            $("#textarea").animate({'height': h},"slow");
        }, 1000);
        setTimeout(function(){
            $("#textarea").animate({'height': '60%'},"slow");
        }, 1100);
    });

    $("#textarea").focusout(function() {
        fadeOutBubbleWithTimeout();
    });

});

var timeout;
var fadeOutBubbleWithTimeout = function() {

    timeout = setTimeout(function() {
        $(".dziubek").fadeOut("normal", function() {
            $(this).remove();
        });
        $(".translatearea").fadeOut("normal", function() {
            $(this).remove();
        });
    },1000)

};