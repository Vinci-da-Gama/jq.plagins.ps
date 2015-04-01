/*
 * name: 	LinkIt
 * author: 	Brad Traversy
 * version: 0.1.0
 * license: MIT
 */

(function ($) {
	$.fn.linkIt = function (options) {
		var optionDB = $.extend({
			href: null,
			text: null,
			target: '_self'}, options);

		if (optionDB.href == null) {
			console.log('NO href -- current href is: '+optionDB.href);
			return this;
		};
		
		return this.each(function() {
			var theOBJ = $(this);

			if (optionDB.text == null) {
				optionDB.text = theOBJ.text();
			}
			theOBJ.wrap('<a href="'+optionDB.href+'" target="'+optionDB.target+'"></a>').text(optionDB.text);
		});

	}
})(jQuery);