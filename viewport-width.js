$(function(){
	var win = $(window);
	var widthSpan = $('<span/>');
	widthSpan.css({
		backgroundColor: '#999',
		position: 'fixed',
		top: 0,
		right: 0
	});
	widthSpan.appendTo($('body'));

	var correctedViewportW = (function (win, docElem) {
        var matchMedia = win['matchMedia'] || win['msMatchMedia'];
        var client = docElem['clientWidth'];
        var inner = win['innerWidth'];
        return matchMedia && client < inner && true === matchMedia('(min-width:' + inner + 'px)')['matches']
            ? function () { return win['innerWidth'] }
            : function () { return docElem['clientWidth'] }
    }(window, document.documentElement));

	var update = function() {
		widthSpan.html('' + correctedViewportW() + 'px');
	};
	update();
	win.on('resize', update);
});
