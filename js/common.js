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
						parent.find('[data-target]').not($(this)).removeClass('active');
						$(parent).find('.tab-content').not(target).hide();
						break;
					case "accordion" :
						$(this).addClass('active');
						target.stop().slideDown();
						parent.find('.tab-content').not(target).stop().slideUp();
						break;
				}
				$(this).addClass('active');
				parent.find('[data-target]').not($(this)).removeClass('active');
			});
			if (opts.opened !== null) {
				$('[data-target='+ opts.opened +']').trigger('click');
			}
		})
	}
	/**
	 * 모달창
	 */
	var modal = {
		modalOpen : function(e) {
			let target = $(e.currentTarget).data('modalopen');
			if(!$('.modalbg').is(':visible')) {
				$('.modalbg').show();
				$('body').addClass('modal-open');
			}
			$(target).show();
		},
		modalClose : function(e) {
			let target = $(e.currentTarget).data('modalclose');
			$('.modalbg').hide();
			$('body').removeClass('modal-open');
			$(target).hide();
		},
		bind : function() {
			$('[data-modalopen]').bind('click',modal.modalOpen);
			$('[data-modalclose]').bind('click',modal.modalClose);
		}
	}
	modal.bind();
}(jQuery));
