

function topla(){
   
    var a =5
    var b=10
    var c=a+b
    document.getElementById("demo").innerHTML=c

}
function cix(){
   
    var a ="Aytac"
    var b="Mensimova"
    document.getElementById("demo2").innerHTML=a+" "+b
   

}
function student(Name, surname, age, Status="Telebe"){
    document.getElementById("demo3").innerHTML="Menim adim"+Name+"menim soyadim "+surname+"."+"Menim "
+age+"yasim var "+"Menim statusum :"+Status
    console.log("Menim adim "+Name+"menim soyadim "+surname+"."+" Menim "
+age+"yasim var "+" Menim statusum :"+Status)
}
function no_student(){

    document.getElementById("demo2").innerHTML="?"
//     document.getElementById("demo3").innerHTML="Menim adim"+Name+"menim soyadim "+surname+"."+"Menim "
// +age+"yasim var "+"Menim statusum :"+Status
//     console.log("Menim adim "+Name+"menim soyadim "+surname+"."+" Menim "
// +age+"yasim var "+" Menim statusum :"+Status)
}

student("Aytac","Mensimova","31","Telebe")
student("Revan","Alizade","17")
student("Gultac","Mensimova","29","Mezun")



function cebr(a,b,c){
    console.log(
        a+b+c+(c-a)
    )
}
cebr(8,12,4)
