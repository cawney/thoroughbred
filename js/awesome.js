

/**************************************
Example Json
**************************************/


(function() {
	var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
	$.getJSON( flickerAPI, {
		tags: "mount rainier",
		tagmode: "any",
		format: "json"
	})
	.done(function( data ) {
		$.each( data.items, function( i, item ) {
			$( "<img>" ).attr( "src", item.media.m ).appendTo( "#images" );
			if ( i === 3 ) {
				return false;
			}
		});
	});
})();



/**************************************
Keeneland JSON
**************************************/



$.get( 'https://www.tvg.com/horse-race-results', function(data){
	//$('.result').html(data);
	console.log("Load Performed");
	console.log(data);
	$('.results').append(data);
});




/**************************************
Pedigree Reducer
**************************************/


		var reader = new FileReader();

		function readText(that){

			if(that.files && that.files[0]){
				var reader = new FileReader();
				reader.onload = function (e) {  
					var output=e.target.result;
				
					//process text to show only lines with "@":				
					output=output.split("\n").filter(/./.test, /\@/).join("\n");

					document.getElementById('main').innerHTML= output;
				};//end onload()
				reader.readAsText(that.files[0]);
			}//end if html5 filelist support
		} 





