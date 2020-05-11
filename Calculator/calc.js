var text="";
$(".numbers div:not(.clear),.operations div").on("click",function()
{
    
    text+=$(this).text();
    $("input[type='text'").val(text);

})
$("#clear").on("click",function()
{
    text="";
    $("input[type='text'").val(text);
})
var inputString=  $("input[type='text'").val(text);

$("#result").on("click",function()
{
  var numbers=text.split(/\+|\-|\×|\÷/g);
  var operators=text.replace(/[0-9]|\./g, "").split("");
  
  var divide = operators.indexOf("÷");
  while (divide != -1) {
    numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
    operators.splice(divide, 1);
    divide = operators.indexOf("÷");
  }

  var multiply = operators.indexOf("×");
  while (multiply != -1) {
    numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
    operators.splice(multiply, 1);
    multiply = operators.indexOf("×");
  }

  var subtract = operators.indexOf("-");
  while (subtract != -1) {
    numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
    operators.splice(subtract, 1);
    subtract = operators.indexOf("-");
  }

  var add = operators.indexOf("+");
  while (add != -1) {
    
    numbers.splice(add, 2, parseFloat(numbers[add]) + parseFloat(numbers[add + 1]));
    operators.splice(add, 1);
    add = operators.indexOf("+");
  }
  text=numbers[0];
  $("input[type='text'").val(text);
 

    
})