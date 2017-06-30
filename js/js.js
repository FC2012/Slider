function Slider( element ) {
	this.el = document.querySelector( element );
	this.init();
}

Slider.prototype = {
	init: function() {
		this.links = this.el.querySelectorAll( "#slider-nav a" );
		this.wrapper = this.el.querySelector( "#container" );
		this.navigate();
	},


	animate: function( slide ) {
		var parent = slide.parentNode;
		var section = slide.querySelector( ".section" );
		var sections = parent.querySelectorAll( ".section" );
		for( var k = 0; k < sections.length; ++k ) {
			var cap = sections[k];
			if( cap !== section  ) {
				cap.classList.remove( "seen" );
			}
		}
		section.classList.add( "seen" );
	},



	slide: function( element ) {
		var self = this;
		element.addEventListener( "click", function( e ) {
			e.preventDefault();
			var a = this;
			self.setCurrentLink( a  );
			var index = parseInt( a.getAttribute( "data-slide" ), 10 ) + 1;
			var currentSlide = self.el.querySelector( ".slide:nth-child(" + index +  ")" );
			self.wrapper.style.left = "-" + currentSlide.offsetLeft + "px";
			self.animate( currentSlide );
		}, false);


	},
	navigate: function() {
		for( var i = 0; i < this.links.length; ++i ) {
			var link = this.links[i];
			this.slide( link );
		}
	},

	setCurrentLink: function( link ) {
		var parent = link.parentNode;
		var a = parent.querySelectorAll( "a" );
		link.className = "current";
		for( var j = 0; j < a.length; j++ ) {
			var cur = a[j];
			if( cur !== link  ) {
				cur.className = "";
			}
		}
	}
};

document.addEventListener( "DOMContentLoaded", function() {
	var aSlider = new Slider( "#slider" );

});
