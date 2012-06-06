/*
 * dropdown plugin
 */
(function($) {
	$.fn.dropdown=function(){
		$(this).find('.down-target').hide();
		this.click(function(){
			$(this).toggleClass('droped');
			$(this).find('.down-target').slideToggle(200);
		});
	}
})(jQuery);
