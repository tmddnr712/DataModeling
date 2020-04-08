var numberClicked = false;
function numberBtnHandler (char) {
    if(numberClicked == false) {
        if(isNaN(char) == true) {
            alert('error');
        }
        else {
            document.getElementById('textBox').value += char;
        }
    }
    else {
        document.getElementById('textBox').value += char;
    }
 
     if(isNaN(char) == true) {
        numberClicked = false;
    }
    else {
        numberClicked = true;
    }
}

function calculate() {
	var display = document.getElementById('textBox');
	var result = eval(textBox.value);
	document.getElementById('textBox').value = result;
}

function reset() {
    document.getElementById('textBox').value = "0";
}