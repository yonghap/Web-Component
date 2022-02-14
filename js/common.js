(function ($) {
	/**
	 * 탭, 아코디언
	 * @param {object} x - 옵션 (상위 요소, 효과, 기본 탭)
	 */
	$.fn.tab = function (options) {
		const opts = $.extend({
			parentElement : '#tab',
			effect : 'tab',
			opened : null
		}, options || {});
		return this.each(function () {
			$(this).find('[data-target]').click(function (e) {
				e.preventDefault();
				const target = $($(this).data('target')),
					effect = opts.effect,
					parent = $(opts.parentElement);
				switch (effect) {
					case "tab" :
						target.show();
						$(parent).find('.tab-content').not(target).hide();
						break;
					case "accordion" :
						target.stop().slideDown();
						parent.find('.tab-content').not(target).stop().slideUp();
						break;
				}
			});
			if (opts.opened !== null) {
				$('[data-target='+ opts.opened +']').trigger('click');
			}
		})
	}
}(jQuery));