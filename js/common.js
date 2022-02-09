(function ($) {
	/**
	 * 탭,아코디언
	 * @param e
	 * @returns {*}
	 */
	$.fn.tab = function (e) {
		return this.each(function () {
			const type = $(this).data('toggle'),
				target = $(this).data('target'),
				parent = $(this).data('parent');

			switch (type) {
				case "tab" :
					var currentTab = $(target);
					currentTab.show();
					$(parent).find('.tab-content').not(currentTab).hide();
					break;
				case "accordion" :
					var currentTab = $(target);
					currentTab.stop().slideDown();
					$(parent).find('.tab-content').not(currentTab).stop().slideUp();
					break;
			}
		})
	}

}(jQuery));

$(function () {
	$('[data-toggle]').click(function (e) {
		e.preventDefault();
		$(this).tab();
	});
});