/**************************************
Text Parser
**************************************/


var textFile = $.get('http://localhost/~jamescarney/thoroughbred/assets/pedigree.rtf'); //Get the file that needs to be parsed

/*

Might need to change this to an input field later on. Need to make it work flawlessly before we do that.

*/

$(".pedigree").hide();




$("#run").click( function(){

	var textString = textFile.responseText;
	//var newDiv = document.createElement("div");
	console.log("Begin");
	$(".pedigree").show();
	//$(".pedigreeAlt").append(textString);

	var lines = textString.split('\\' | "\n");
	var bold = textString.split("\b" | "\n");
	for(var line = 0; line < lines.length; line++){

		var l = lines[line];
	console.log(l); //Puts one line of the source

	




	$('.pedigree').append("<p>" + l + "</p>"); //Writes every line in a <p> tag by itself
	// Need to make some if then statements and logic to pull out the bold codes and the endent codes, etc.
	} //Enddfd for loop



	console.log("End");


});

$("#runAlt").click( function(){

	var fr = new FileReader();
	fr.onload = function(e) {
		// e.target.result should contain the text
	};
	fr.readAsText(textFile);
});


