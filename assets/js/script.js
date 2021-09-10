$(function() {
    
var arrayFromStroage = JSON.parse(localStorage.getItem("test1"));
var arrayLength = arrayFromStroage.length;

$("#cardLength").text(arrayLength);

});