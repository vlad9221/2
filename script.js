function myFunction1() {
var txt;
if (confirm("Отправить данные?")) {
txt = "Ваши данные отправлены!";
} else {
txt = "Данные не отправлены!";
}
document.getElementById("index").innerHTML = txt;
}
function myFunction2(){
alert('Ваши данные отправлены!');
}