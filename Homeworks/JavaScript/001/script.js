
var firstname = prompt("First name");
var lastName = prompt("Second Name");
var age = prompt("Enter your Age");
var date = prompt("Date");
var month = prompt("Month")

var num1 = parseInt(age);
var num2 = parseInt(date);
var num3 = parseInt(month);

rez = num1 + num2;


var sum = num1 + num2 + num3;
var res = sum / 3;



document.write("<div style='width:100%; margin: 0 auto; text-transform:capitalize'>");
    document.write("<div style='width:80%; margin:0 auto;height:200px; border: 2px solid black; display: flex; justify-content: center; align-items: center;'>header</div>");
    document.write("<nav style='width:19%; height:400px; border: 2px solid black; float: left; display: flex; justify-content: center; align-items: center;'>nav</nav>");
    document.write("<section style='width:80%; height:400px; border: 2px solid black; float: left; display: flex; justify-content: center; align-items: center;'>block");
    document.write("<br/>");

    document.write("RESULT age + date= " + rez + "<br/>");
    document.write("Name: " + firstname + "<br/>");
    document.write("Last Name: " + lastName + "<br/>");
    document.write("Age: " + age + "<br/>");

    document.write("result: age + date + month/3 = " + res);

    document.write("</section>");
    document.write("<div class='footer' style='width:100%; height:200px; border: 2px solid red; float: left; display: flex; justify-content: center; align-items: center;'>footer</div>");
    document.write("</div>");
    document.write("</div>");



//=================================================

document.write("<div style='width:100%; display:flex; align-items:center; flex-direction:column'><h1>Operations</h1>");

var x = 6;
var y = 14;
var z = 4;
var res1, res2, res3, res4, res5;
document.write("<div class='calc' style='margin:0 auto;'>");

res1 = (x += y - x++ * z);
document.write("x += y - x++ * z = " + res1 + '<br/>');
// Постфікс інкремент, multiplication, substraction, operator +=
//result = -4
// 6 * 4 = 24
// 6 + 14 = 20
// 20 - 24 = 4

res2 = (z = --x - y * 5);
document.write("z = --x - y * 5 = " + res2 + '<br/>');
// Префікс декремент, multiplication, substraction
//result = -65
//14 * 5 = 70
//5 - 70 = -65

res3 = (y /= x + 5 % z);
document.write("y /= x + 5 % z = " + res3 + '<br/>');
// Оператор взяття залишку (modulo), operator /=, multiplication
//result = 3.33
// 14/6 = 2.33
// 5/4 = 1
// 2.33 + 1 = 3.33

res4 = (z - x++ + y * 5);
document.write("z - x++ + y * 5 = " + res4 + '<br/>');
//substraction, Постфікс інкремент, multiplication, addition
//result = 68
// 14 *5 = 70
//4 - 6 = -2
//70 - 2 = 68

res5 = (x = y - x++ * z);
document.write("x = y - x++ * z = " + res + '<br/>');
//substraction, Постфікс інкремент, multiplication
//result = -10
//6 * 4 = 24
// 14 - 24 = -10


document.write("</div>");
document.write("</div>");
  