/**
 * Created by Web App Develop-PHP on 12/11/2017.
 */
// var btnElement = document.getElementById('btn');
// //alert(btnElement);
// btnElement.onclick = function () {
//     //alert('test test');
//
//     var FirstName = document.getElementById('firstName').value;
//     var LastName = document.getElementById('lastName').value;
//         var FullName = FirstName+LastName;
//
//     document.getElementById('fullName').value = FullName;
//
//  //   alert(FullName);
//
// };


var btnElement = document.getElementById('btn0');
//var btnElement = document.querySelectorAll('#btn0');
btnElement.onclick = function addition() {
     var FirstName = document.getElementById('firstName').value;
     var LastName = document.getElementById('lastName').value;
         var FullName = Number(FirstName)+Number(LastName);
        // var FullName = eval(FirstName+LastName);
       //  alert(FullName);
     document.getElementById('fullName').value = FullName;

};
var btnElement = document.getElementById('btn1');
btnElement.onclick = function subtraction () {
     var FirstName = document.getElementById('firstName').value;
     var LastName = document.getElementById('lastName').value;
         var FullName = FirstName - LastName;
     document.getElementById('fullName').value = FullName;

};
var btnElement = document.getElementById('btn2');
btnElement.onclick = function multiply () {
     var FirstName = document.getElementById('firstName').value;
     var LastName = document.getElementById('lastName').value;
         var FullName = FirstName * LastName;
     document.getElementById('fullName').value = FullName;

};var btnElement = document.getElementById('btn3');
btnElement.onclick = function division () {
     var FirstName = document.getElementById('firstName').value;
     var LastName = document.getElementById('lastName').value;
         var FullName = FirstName / LastName;
     document.getElementById('fullName').value = FullName;

};var btnElement = document.getElementById('btn4');
btnElement.onclick = function modulus () {
     var FirstName = document.getElementById('firstName').value;
     var LastName = document.getElementById('lastName').value;
         var FullName = FirstName % LastName;
     document.getElementById('fullName').value = FullName;

};
var btnElement = document.getElementById('res');
btnElement.onclick = function reset(){
    document.getElementById("firstName").value = ' ';
    document.getElementById("lastName").value = ' ';
    document.getElementById("fullName").value = ' ';
}
