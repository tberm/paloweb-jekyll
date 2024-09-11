function adjust_bg_height() {
    console.log('Adjusting background height')
    const re = /([\d\.]+)(.+)/
    const pageHeight = $('.page').css('height');
    const matches = pageHeight.match(re);

    if (matches === null || Number(matches[1]) === null) {
        console.error('Could not parse page height:' + pageHeight);
        return;
    }

    if (matches[2] !== 'px') {
        console.error('Expected page height in px; got ' + matches[2]);
        return;
    }

    const newBgHeight = +matches[1] + 200 + 'px';
    $('.background').css('min-height', newBgHeight);
}

$(window).on('load', () => {

    const pageObserver = new ResizeObserver(adjust_bg_height);

    pageObserver.observe($('.page')[0]);
});