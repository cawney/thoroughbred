/**************************************
Text Parser
**************************************/


var textFile = $.get('http://localhost/~jamescarney/thoroughbred/assets/pedigree.rtf'); //Get the file that needs to be parsed

/*

Might need to change this to an input field later on. Need to make it work flawlessly before we do that.

*/

$("#run").click( function(){

	var textString = textFile.responseText;
	//var newDiv = document.createElement("div");
	console.log("Begin");
	var lines = textString.split('\\' | "\n");
	/*
	This looks for the \ and splits it up into a line of itself.
	I need to do this for all the other sections or find a better
	way to split it up.
	*/
	
		
	for(var line = 0; line < lines.length; line++){
		var l = lines[line];	
		var listHTML = "<p>" + l + "</p>";
		

		console.log(l); //Puts one line of the source
		
		//$('.pedigree').append(listHTML); //Writes every line in a <p> tag by itself
		
		document.write(listHTML);

		
	// Need to make some if then statements and logic to pull out the bold codes and the endent codes, etc.
	} //End for loop


	//console.log(listHTML);


	console.log("End");


});


$("#runAlt").click( function(){

	var fr = new FileReader();
	fr.onload = function(e) {
		// e.target.result should contain the text
	};
	fr.readAsText(textFile);
});


