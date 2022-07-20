function addAutoLoadIFrame(ifid,ifsrc) {
	
	window.addEventListener('load',function(event) {
		Reveal.addEventListener( 'slidechanged', function( event ) {
			if (event.previousSlide.id===(ifid+"slide")) document.getElementById(ifid).src="";
			if ( event.currentSlide.id===(ifid+"slide")) document.getElementById(ifid).src=ifsrc;
		});
	});
}
