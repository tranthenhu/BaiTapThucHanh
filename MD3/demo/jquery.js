$(function () {
    var state = true;
    $("#showImage").on("click", function () {
        if (state) {

            $("div#anh").show()
        } else {

            $("div#anh").hide()
        }
        state = !state;
    });
});

$(function () {
    var state = true;
    $("#bt1").on("click", function () {
        if (state) {
            $("#inf1").animate({
                height: 300
            }, 100);
            $("#more1").show()
        } else {
            $("#inf1").animate({

                height: 240
            }, 100);
            $("#more1").hide()
        }
        state = !state;
    });
});
$(function () {
    var state = true;
    $("#bt2").on("click", function () {
        if (state) {
            $("#inf2").animate({
                height: 300
            }, 100);
            $("#more2").show()
        } else {
            $("#inf2").animate({

                height: 240
            }, 100);
            $("#more2").hide()
        }
        state = !state;
    });
});
$(function () {
    var state = true;
    $("#bt3").on("click", function () {
        if (state) {
            $("#inf3").animate({
                height: 300
            }, 100);
            $("#more3").show()
        } else {
            $("#inf3").animate({

                height: 240
            }, 100);
            $("#more3").hide()
        }
        state = !state;
    });
});
$(function () {
    $("#sortable").sortable();
    $("#sortable").disableSelection();
});