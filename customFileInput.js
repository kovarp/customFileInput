/*!
 * Custom File Input for Bootstrap 4 (https://github.com/kovarp/customFileInput)
 * Version 1.0.0
 *
 * Copyright 2017 Pavel Kovář - Frontend developer [www.pavelkovar.cz]
 * Licensed under MIT (https://github.com/kovarp/customFileInput/blob/master/LICENSE)
 */

;( function( $, window, document, undefined ) {

	"use strict";

	// Create the defaults once
	var pluginName = "customFileInput",
		defaults = {
			wrapper: '.custom-file',
			label: '.custom-file-control'
		};

	// The actual plugin constructor
	function Plugin ( element, options ) {
		this.element = element;
		this.settings = $.extend( {}, defaults, options );
		this._defaults = defaults;
		this._name = pluginName;
		this.init();
	}

	// Avoid Plugin.prototype conflicts
	$.extend( Plugin.prototype, {
		init: function() {
			var _this = this;

			$(this.element).change(function() {
				_this.setInputFileName();
			});
		},
		setInputFileName: function() {
			var fileInput = $(this.element);
			var label = $(this.settings.label, fileInput.closest(this.settings.wrapper));

			var filename = fileInput.val().split('\\').pop();

			label.text(filename);
		}
	} );

	$.fn[ pluginName ] = function( options ) {
		return this.each( function() {
			if ( !$.data( this, "plugin_" + pluginName ) ) {
				$.data( this, "plugin_" +
					pluginName, new Plugin( this, options ) );
			}
		} );
	};

} )( jQuery, window, document );