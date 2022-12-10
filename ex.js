function A(){
    console.log ("A- você chamou o procedimento A");
}
function B(){ 
    console.log("B- procedimento B presente chamou " );
C();

}
function C(){ 
    console.log ("C- oi, sou o procedimento c, o B que me chamou aqui");


}
 function D(){ 
    console.log("D- Sou o procedimento D e chamo todo mundo,veja")
    A();
    B();

}
 A ();
 B ();
 D ();
