let passmatch =() => {
    let pass1=document.getElementById("paroli1").value;

    let pass2=document.getElementById("paroli2").value;
    console. log(pass1, pass2);
    if(pass1==""){
        console.log("ar shegivsia pirveli veli")
        document.getElementById("passanswer").innerHTML="თქვენ არ შეგივსიათ <b>პირველი ველი</b";
        document.getElementById("paroli1"). style.border ="3px solid#ff0000";
        document.getElementById("paroli2").style.border="3px solid #000000";
    }
    else if(pass2==""){
        console.log("ar Sshegivlis meore veli");
        document.getElementById("passanswer").innerHTML="თქვენ არ შეგივსიათ <b> მეორე ველი</b>";
        document.getElementById("paroli2").style.border="3px solid #ff0000";
        document.getElementById("paroli1").style.border="3px solid #000000";
    }
    else if(pass1== pass2){
        console.log("warmatebit gaiareT registracia");
        document.getElementById("passanswer").innerHTML="თქვენ <b>წარმატებით გაიარეთ რეგისტრაცია</b>";
        document.getElementById("paroli2").style.border="3px solid #000000";
        document.getElementById("paroli1").style.border="3px solid #000000";


    }
    else{
        console.log("parolebi ar emtxveva ertmanets");
        document.getElementById("passanswer").innerHTML="პაროლები<b><i>არ ემთხვევა ერთმანეთს</i></b>";
        document.getElementById("paroli1").style.border="3px solid #ff0000";
        document.getElementById("paroli2").style.border="3px solid #ff0000";

    }

}
