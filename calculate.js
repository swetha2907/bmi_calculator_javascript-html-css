var bmi;
var height1,weight1;
var hei,wei;
var result;
var state;

function calculatefun(){
    // hei=document.querySelector(".height");
    // wei=document.querySelector(".weight");
    // result=document.querySelector(".result");
    // state=document.querySelector(".state");
    height1=document.getElementsByClassName("height").value;
    weight1=document.getElementsByClassName("weight").value;
    bmi=weight1/(height1**2);
    // result.innerText=bmi;
    document.getElementsByClassName("state").innerHTML="your bmi";
    // state.innerText="your bmi";


  //  document.write(bmi);

}