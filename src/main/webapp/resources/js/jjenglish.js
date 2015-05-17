$(document).ready(function() {

    $(".jjenglish").click(function() {
        $('#modaljjenglish').modal('toggle');

        showButtons();
    });


    $("#btnOne").click(function() {
        var firstTable = $(".firstTable");
        if (firstTable.length == 0) {
            createTable(prepareVocabulary(), 0, "firstTable");
        } else {
            var secondTable = $(".secondTable");
            if (secondTable.length) {
                secondTable.fadeOut();
            }
            var thirdTable = $(".thirdTable");
            if (thirdTable.length) {
                thirdTable.fadeOut();
            }
        }
    });

    $("#btnTwo").click(function() {
        var secondTable = $(".secondTable");
        if (secondTable.length == 0) {
            createTwoTable(prepareVocabulary());
        } else {
            secondTable.fadeIn();
            var thirdTable = $(".thirdTable");
            if (thirdTable.length) {
                thirdTable.fadeOut();
            }
        }
    });

    $("#btnThree").click(function() {
        createThreeTable(prepareVocabulary());
    });
});

function prepareVocabulary() {
    var wordsList = $("#textarea").val().split(" ");
    var list = [];
    list = createCTList(wordsList, list);
    //filter;
    list = filterEmptyWords(list);
    list.sort(function(a, b) { return b.ct - a.ct; });
    return list;
}

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
    return Math.floor((Math.random() * 10));
}

function showButtons() {
    //additionally
    $(".resultsTable").remove();
    //to move to another function

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

function createTable(list, startIndex, clazz) {
    var table  = $("<table class='resultsTable " + clazz +"'></table>");
    table.attr('border', '2');
    table.append($("<tr><th>Word</th><th>C/t</th></tr>"));
    var max;
    if( list.length > 10+startIndex) {
        max=10+startIndex;
    } else {
        max=list.length;
    }
    for (var i=startIndex; i<max; i++) {
        var tr = $("<tr></tr>");
        var td1 = $("<td>"+ list[i].text+"</td>");
        var td2 = $("<td>"+ list[i].ct+"</td>");
        tr.append(td1);
        tr.append(td2);
        table.append(tr);
    }
    $(".tablesdiv").append(table);
}

function createTwoTable(list) {
    var firstTable = $(".firstTable");
    if (firstTable.length == 0) {
        createTable(list, 0, "firstTable");
    }
    var secondTable = $(".secondTable");
    if (secondTable.length == 0) {
        createTable(list, 10, "secondTable");
    } else {
        secondTable.fadeIn();
    }
}

function createThreeTable(list) {
    var firstTable = $(".firstTable");
    if (firstTable.length == 0) {
        createTable(list, 0, "firstTable");
    }
    var secondTable = $(".secondTable");
    if (secondTable.length == 0) {
        createTable(list, 10, "secondTable");
    } else {
        secondTable.fadeIn();
    }
    var thirdTable = $(".thirdTable");
    if (thirdTable.length == 0) {
        createTable(list, 20, "thirdTable");
    } else {
        thirdTable.fadeIn();
    }
}

function filterEmptyWords(list){
    var newArray = [];
    for (var i=0; i<list.length; i++) {
        if (list[i].word !== "") {
            newArray.push(list[i]);
        }
    }
    return newArray;
}