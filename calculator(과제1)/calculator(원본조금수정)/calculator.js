function numberBtnHandler(number)
{
	setText(getText() + number); // numberBtnHandler 를 setText함수를 통해 불러드림

}

function setText(text)
{
	document.getElementById("textBox").value = text; // text를 textBox안에 넣음
	console.log(text);
}

function getText()
{
	return document.getElementById("textBox").value;
}

function reset()
{
	setText(""); // textBox 값을 초기화
}

function calculate()
{
	var textBox = document.getElementById('textBox');
	var result = eval(textBox.value);
	document.getElementById('textBox').value = result; // result 의 값을 textBox 안에 불러드림
	console.log(result);
}