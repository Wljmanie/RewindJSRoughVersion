function getValues(){
    let s = document.getElementById("inputString").value;

    //alert(`pop my shit: ${s.length}`);
    if(s.length == 0){
        alert("Please enter content to rewind.");
    }
    else if(s.length == 1){
        alert("A rewind on one character stays the same. Please enter more.");
    }
    else{
        reverseString(s);
    }
}

function reverseString(s){
    let reverse = "";

    for(let i = s.length-1; i >= 0; i--){
        reverse += s.charAt(i);
    }

    displayHtml(reverse);
}

function displayHtml(result){
    document.getElementById("results").innerHTML = result;
}