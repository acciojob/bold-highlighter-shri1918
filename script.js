function highlight() {
    //Write your code here
	var boldWords = document.querySelectorAll("strong");
    for (var i = 0; i < boldWords.length; i++) {
        boldWords[i].style.color = "green";
    }

}


function return_normal() {
    //Write your code here
	var blodOut= document.querySelectorAll("strong");
	for(var i=0;i<blodOut.length;i++){
		blodOut[i].style.color="black";
	}
    
}
