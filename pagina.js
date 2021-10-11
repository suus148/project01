function telop(eerste,tweede){
    //alert('Telop is aangeroepen met de waarde ' + eerste + ' en ' + tweede)
    var resultaat = eerste + tweede;
    //alert(resultaat)
    return resultaat
}

function delen(arg1,arg2){
    var arg3 = arg1/arg2;
    return arg3;
}

var a = 9;
var b = 12;

console.log("a = " + a);
console.log("b = " + b);
var c = a + b;
console.log("c = " + c);
b = 50;
console.log("b = " + b);

var resultaattelop= telop(80,53);

//alert (resultaattelop)

//alert(delen(15,5));
var pTekst = document.getElementById('mijnid').innerText;
//alert(pTekst)

document.getElementById('mijnid').innerText = 'mijn naam is Suzanne'
//alert(pTekst)

document.getElementById('mijnid').style.color = 'red'
//alert(pTekst)


function reageerOpButton(){
    document.getElementById('inevoer1').value;
    alert(invoer1);
}