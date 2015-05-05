
/** Yet another tabs plugin
 *
 * @param {object|string} options - Settings for the tabs or name of public method
 * @param {number} id - id of tab to show
 *
 * @this {object} - jQuery Element
 * @return {object} - Same as this
 *
 */
;(function($) {
	$.fn.wabs = function(options, id) {
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

			if(e) {
				e.preventDefault();
			}

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

		/**
		 * Facade for private show tab method
		 *
		 * @public
		 * @param {number} id - id of tab to show
		 */
		self.showTab = function(id) {
			_.showTab.call(self.$tabHeader.eq(id));
		};

		/** Initialize tabs
		 *
		 * @constructor
		 * @return {object} $that - this
		 */
		self.init = function() {
			var hash = window.location.hash.substr(1);

			if(typeof options === 'object' && options.length !== 0) {
				$.extend(self, options);
				//$.extend(self.$that.options);
				self.$that.data('wabs', options);

				self.$tabHeader.each(function(i) {
					var $that = $(this);


					if($that.attr('id') === hash) {
						self.initActive = i;
					}
				});

				self.$tabHeader.on('click', _.showTab);

				if(self.initActive !== false){
					_.showTab.call(self.$tabHeader.eq(self.initActive));
				}
			} else {
				if(self.$that.data('wabs')) {
					$.extend(self, self.$that.data('wabs'));

					try {
						self[options].call(null, id);
					} catch (error) {
						console.warn('wabs: missing parameter OR wrong method name', error, self);
					}
				} else {
					console.warn('wabs: wabs not intialized');
				}
			}

			return self.$that;
		};

		self.init();
	};
})(jQuery);
