var width = $(topic1).width(),
        html = '<span style="white-space:nowrap"></span>',
        line = $(topic1).wrapInner(html).children() [0],
        n = 100;

    $(topic1).css('font-size', n);

    while ($(line).width() > width) {
        $(topic1).css('font-size', --n);
    }

    $(topic1).text($(line).text());
