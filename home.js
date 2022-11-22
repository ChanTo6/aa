 let a =1;
document.querySelector("#no") .addEventListener("mouseover", function f() {
    if (a==1){
    document.getElementById("no") .style.left = "100px";
    document.getElementById("no") .style.bottom = "-50px";
    a=2;

}else if (a==2){
    document.getElementById("no") .style.left = "-100px"
    document.getElementById("no") .style.bottom = "-150px"
     a=3;

} else if (a==3){
document.getElementById("no") .style.left ="400px"
document.getElementById("no") .style.bottom ="100px"
a=4

}else if (a==4){
document.getElementById("no") .style.left ="0px"
document.getElementById("no") .style.bottom ="0px"
a=1 }
})

function myfunction (){
    alert("ლექციის მერე მოვალ")
}

//.addEventListener("click", function r(){console.log("sdjfnkss")})




