    $(document).ready(function () {
        $(".searchh").click(function (e) {
            e.preventDefault();
            var html = "";
            $.getJSON("https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + $("#searchValue").val() + "&utf8=&format=json", function (data) {
                var help = data.query.search;
                for (var i = 0; i < 10; i++) {
                    $.getJSON("https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=" + help[i].title + "&indexpageids=&exsentences=1", function (data2) {
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
