$(document).ready(function() {

    $(".jjenglish").click(function() {
        $('#modaljjenglish').modal('toggle');

        showButtons();
    });


    $("#btnOne").click(function() {
        var wordsList = $("#textarea").val().split(" ");
        var list = [];
        list = createCTList(wordsList, list);
        createTable(list);
    });

});

function createCTList(wordsList, list) {
    for (var i=0; i<wordsList.length; i++) {
        var word = wordsList[i];
        var CT = getCT(word);
        var obj = {
            text: word,
            ct: CT
        }
        list.push(obj);
    }
    return list;
}

function getCT(word) {
    return Math.floor((Math.random() * 10));;
}

function showButtons() {
    var btnOne = $("#btnOne");
    var btnTwo = $("#btnTwo");
    var btnThree = $("#btnThree");

    btnOne.attr('disabled', 'disabled');
    btnTwo.attr('disabled', 'disabled');
    btnThree.attr('disabled', 'disabled');

    var text = $("#textarea").val();
    var wordCount = text.split(" ").length;

    if (wordCount < 10) {
        ;
    } else if (wordCount <20) {
        btnOne.removeAttr('disabled');
    } else if (wordCount <30) {
        btnOne.removeAttr('disabled');
        btnTwo.removeAttr('disabled');
    } else {
        btnOne.removeAttr('disabled');
        btnTwo.removeAttr('disabled');
        btnThree.removeAttr('disabled');
    }
}

function createTable(list) {
    var table  = $("<table></table>");
    table.attr('border', '2');
    for (var i=0; i<list.length; i++) {
        var tr = $("<tr></tr>");
        var td1 = $("<td>"+ list[i].text+"</td>");
        var td2 = $("<td>"+ list[i].ct+"</td>");
        tr.append(td1);
        tr.append(td2);
        table.append(tr);
    }
    $(".modal-body").append(table);
}