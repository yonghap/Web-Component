/**
 * 탭메뉴
 * @param e
 * @returns {*}
 */
$.fn.tab = function (e) {
	return this.each(function () {
		var target = $(this).attr('href');
		$(this).addClass('active').siblings().removeClass('active');
		$(target).addClass('active').siblings().removeClass('active');
	})
}