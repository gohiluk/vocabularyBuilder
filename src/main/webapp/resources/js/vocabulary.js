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

                var div = $("<div class='dziubek' style='margin-left:"+ positionX +"px; margin-top:"+ positionY +"px;'></div>");
                div.appendTo(document.body);
                var div2 = $("<div tabindex='-1' class='translatearea' style='margin-left:"+ (positionX+20) +"px; margin-top:"+ (positionY-10) +"px;'></div>");
                div2.focusin(function() {
                    clearTimeout(timeout);
                });
                div2.appendTo(document.body);

                result = "<span class='glyphicon glyphicon-remove' aria-hidden='true' style='float:right; margin-right:-3px; margin-top:-3px'></span>";
                for(var i=0; i<data.matches.length; i++) {
                    result += data.matches[i].translation + "<br>";
                    $(".translatearea").html(result);
                }

                div.fadeIn();
                div2.fadeIn();
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
    },3000)

};