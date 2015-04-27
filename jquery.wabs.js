
/** Yet another tabs plugin
 *
 * @param {object} options - Settings for the tabs
 *
 * @this {object} - jQuery Element
 * @return {object} - Same as this
 *
 */
;(function($) {
	$.fn.wabs = function(options) {
		var self = {
				$that : $(this),
				$tabHeader : '',
				$tabContents : '',
				activeClass : 'active',
				offsetAnimation: false,
				offsetToTabHeader : 10,
				scrollDelay : 200,
				scrollSpeed : 200,
				initActive : 0
			},
			_ = {};

		if(self.$that.length === 0) {
			return;
		}

		/** Shows current tab
		 *
		 * @private
		 * @this {object} - Clicked tab header
		 * @param {object} e - Clickevent
		 * @return void
		 */
		_.showTab = function(e) {
			var $that = $(this);

			e.preventDefault();

			self.$tabHeader.not($that).removeClass(self.activeClass);
			$that.addClass(self.activeClass);

			if(self.offsetAnimation){
				_.moveToPosition.call($that);
			}
		};

		/** Scroll document to opened tab header
		 *
		 * @private
		 * @this {object} - Clicked tab header
		 * @return void
		 */
		_.moveToPosition = function() {
			var $that = $(this);

			setTimeout(function() {
				$('html, body').stop(true, true).animate({
					scrollTop : ($that.offset().top - self.offsetToTabHeader)
				}, self.scrollSpeed);
			}, self.scrollDelay);
		};

		/** Initialize tabs
		 *
		 * @constructor
		 * @return {object} $that - this
		 */
		self.init = function() {
			var hash = window.location.hash.substr(1);
			if(options.length !== 0) {
				$.extend(self, options);
			}

			self.$tabHeader.each(function(i) {
				var $that = $(this);


				if($that.attr('id') === hash) {
					self.initActive = i;
				}
			});

			self.$tabHeader.on('click', _.showTab);

			if(self.initActive !== false){
				self.$tabHeader.eq(self.initActive).addClass(self.activeClass);
			}

			return self.$that;
		};

		self.init();
	};
})(jQuery);
