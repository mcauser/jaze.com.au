$extend( Page, {
	
	initSlides: function()
	{
		Page._slide = 'first';
		Page._stopSlides = false;
		
		var switchSlides = (function() {
		
			if ( Page._stopSlides )
				return;
			
			var slide = Page._slide;
			
			switch( slide )
			{
				case 'first': Page.switchSlide( 'second' ); break;
				case 'second': Page.switchSlide( 'third' ); break;
				case 'third': Page.switchSlide( 'first' ); break;
			}
		
		}).periodical( 5000 );
		
		$( 'first_slide' ).addEvent( 'mouseenter', (function() { $clear( switchSlides ); Page.switchSlide( 'first' ) }) );
		$( 'second_slide' ).addEvent( 'mouseenter', (function() { $clear( switchSlides ); Page.switchSlide( 'second' ) }) );
		$( 'third_slide' ).addEvent( 'mouseenter', (function() { $clear( switchSlides ); Page.switchSlide( 'third' ) }) );
	},
	
	switchSlide: function( slide )
	{
		if ( Page._slide == slide )
			return;
		
		// Handle Info
		var $info = $( slide + '_slide_info' );
		
		$$( '.website' ).hide();
		
		$info.show().setOpacity(0);
		$info.get( 'morph' ).setOptions({ transition: 'quad:in:out', duration: 500 }).start({ 'opacity': '1' });
		
		// Handle Slides
		Page._slide = slide;
		
		switch( slide )
		{
			case 'first':
				$( 'second_slide' ).get( 'morph' ).setOptions({ transition: 'quad:in:out', duration: 250 }).start({ 'right': '-455px' });
				$( 'third_slide' ).get( 'morph' ).setOptions({ transition: 'quad:in:out', duration: 250 }).start({ 'right': '-540px' });
			break;
			
			case 'second':
				$( 'second_slide' ).get( 'morph' ).setOptions({ transition: 'quad:in:out', duration: 250 }).start({ 'right': '-85px' });
				$( 'third_slide' ).get( 'morph' ).setOptions({ transition: 'quad:in:out', duration: 250 }).start({ 'right': '-540px' });
			break;
			
			case 'third':
				$( 'second_slide' ).get( 'morph' ).setOptions({ transition: 'quad:in:out', duration: 250 }).start({ 'right': '-85px' });
				$( 'third_slide' ).get( 'morph' ).setOptions({ transition: 'quad:in:out', duration: 250 }).start({ 'right': '-170px' });
			break;
		}
	}

});

whenReady( Page.initSlides );