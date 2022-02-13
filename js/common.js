(function ($) {
	/**
	 * 탭,아코디언
	 * @param e
	 * @returns {*}
	 */
	$.fn.tab = function (options) {
		const opts = $.extend({
			parentElement : '#tab',
			effect : 'tab',
		}, options || {});

		return this.each(function () {
			$(this).find('[data-target]').click(function (e) {
				e.preventDefault();
				const type = opts.effect,
					target = $(this).data('target'),
					parent = $(opts.parentElement);

				switch (type) {
					case "tab" :
						var currentTab = $(target);
						currentTab.show();
						$(parent).find('.tab-content').not(currentTab).hide();
						break;
					case "accordion" :
						var currentTab = $(target);
						currentTab.stop().slideDown();
						parent.find('.tab-content').not(currentTab).stop().slideUp();
						break;
				}
			});
		})
	}

}(jQuery));
