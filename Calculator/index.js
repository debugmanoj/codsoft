var values = [];
var display = document.querySelector(".dis-text");

document.querySelectorAll(".clicked").forEach(function (button) {
    button.addEventListener("click", function (event) {
        var input = event.target.innerHTML;

        if (input === "=") {
     
            var expression = values.join("");
            var result = eval(expression);
            display.innerHTML = result;
            values = [result.toString()];
        } else if (input === "C") {
     
            display.innerHTML = "";
            values = [];
        } else {

            display.innerHTML += input;
            values.push(input);
            // document.querySelector(".display").classList.add("dynamic_text")
        }
    });
});
window.addEventListener('resize', function() {
    
if (window.innerWidth <= 196) { 
    var element = document.querySelector('.change'); 
    if (element) {
        element.textContent = 'Pocket calc'; 
    }
}
if (window.innerWidth >= 196 ) { 
    var element = document.querySelector('.change'); 
    if (element) {
        element.textContent = 'Calc'; 
    }
}
});




// var values=[];
// var len_btn=document.querySelectorAll(".clicked").length;
// for(var i=0;i<len_btn;i++){ 
//     console.log(document.querySelectorAll(".clicked")[i]);
// document.querySelectorAll(".clicked")[i].addEventListener("click",function(event){
//     var display=document.querySelector(".dis-text");
//     if(event.target.innerHTML!="="){
//         display.innerHTML=display.textContent+event.target.innerHTML;
//         values.push(event.target.innerHTML);
//     }
//     else{
//         result(values);
//     }
    
// });
// }
// function result(values){
//     var val=values.length;
//         for(vari=0;i<val;i++){
//         console.log(values[i]);
//         if(values[i]!="+"||values[i]!="-"||values[i]!="*"){
//             console.log(values[i]);
//         }
//         else{

//         }
//     }
  
// }