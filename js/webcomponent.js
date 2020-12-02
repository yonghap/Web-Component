$(function () {
	var Modal = {
		modalOpen: function (ele) {
			$(ele.data('modalopen')).show();
		},
		modalClose: function (ele) {
			if (ele.data('modalclose') === 'all') {
				$('.modal').hide();
				return;
			}
			$(ele.data('modalclose')).hide();
		},
		bind: function () {
			$('[data-modalopen]').bind('click', function () {
				Modal.modalOpen($(this))
			})
			$('[data-modalclose]').bind('click', function () {
				Modal.modalClose($(this))
			})
		}
	}
	Modal.bind();
});