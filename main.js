$(function() {
    var now = new Date();
    setInterval(function() {
        $("._timestamp.js-short-timestamp").each(function() {
            var timestamp = $(this).attr("data-time");
            var dt = new Date(timestamp * 1000);
            var time = dt.toLocaleTimeString();

            if (now.toLocaleDateString() != dt.toLocaleDateString()) {
                if (now.getFullYear() == dt.getFullYear()) {
                    var date = [dt.getMonth() + 1, dt.getDate()].join('/');
                } else {
                    var date = [dt.getFullYear(), dt.getMonth() + 1, dt.getDate()].join('/');
                }
                time = date + ' ' + time;
            }
            $(this).text(time);
        });
    }, 1000);
});
