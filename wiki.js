    $(document).ready(function () {
        $(".searchh").click(function (e) {
            e.preventDefault();
            var html = "";
            var div = "<div id='info'><img alt='loading' src='https://media.giphy.com/media/y1ZBcOGOOtlpC/giphy.gif'></div>";
            $(".addWiki").html(div);
            $.getJSON("https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + $("#searchValue").val() + "&utf8=&format=json&callback=?", function (data) {
                var help = data.query.search;
                for (var i = 0; i < 10; i++) {
                    $.getJSON("https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=" + help[i].title + "&indexpageids=&exsentences=1&callback=?", function (data2) {
                        var id = data2.query.pageids[0];
                        var title = data2.query.pages[id].title;
                        var titleLink = "<a href = 'https://en.wikipedia.org/wiki/" + title + "'>" + title + "</a>";
                        html += "<div class='card'><h5 class='card-header'>" + titleLink + "</h5><div class='card-block'><p class='card-text'>" + data2.query.pages[id].extract + "</p></div></div>";
                        $(".addWiki").html(html);
                    });
                }

            });
        });
    });
