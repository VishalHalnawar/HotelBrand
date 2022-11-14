function orderClick(){
document.getElementById("lblName").innerHTML=document.getElementById("txtName").value;
document.getElementById("lblMobile").innerHTML=document.getElementById("txtPasswd").value;
document.getElementById("lblAdhar").innerHTML=document.getElementById("txtAdhar").value;
document.getElementById("lblPan").innerHTML=document.getElementById("txtPan").value;
document.getElementById("lblPerson").innerHTML=document.getElementById("txtPerson").value;
document.getElementById("lblAmount").innerHTML=document.getElementById("advanceAmt").value;


}
var prize = 0;
function clickon() {
    prize = 4000;
}
function clickonn() {
    var order1 = document.getElementById("ordern");
    if (order1.checked) {
        order1.checked = false;
    }
    else {
        order1.checked = true;
    }
}
function clickon0() {

    var order1 = document.getElementById("order0");
    if (order1.checked) {
        order1.checked = false;
    }
    else {
        order1.checked = true;
    }
}
function clickon1() {

    var order1 = document.getElementById("order1");
    if (order1.checked) {
        order1.checked = false;
    }
    else {
        order1.checked = true;
    }
}
function clickon2() {
    var order1 = document.getElementById("order2");
    if (order1.checked) {
        order1.checked = false;
    }
    else {
        order1.checked = true;
    }
}
function clickon3() {

    var order1 = document.getElementById("order3");
    if (order1.checked) {
        order1.checked = false;
    }
    else {
        order1.checked = true;
    }
}
function clickon4() {
    var order1 = document.getElementById("order4");
    if (order1.checked) {
        order1.checked = false;
    }
    else {
        order1.checked = true;
    }
}
function clickon5() {
    var order1 = document.getElementById("order5");
    if (order1.checked) {
        order1.checked = false;
    }
    else {
        order1.checked = true;
    }
}
function clickon6() {
    var order1 = document.getElementById("order6");
    if (order1.checked) {
        order1.checked = false;
    }
    else {
        order1.checked = true;
    }
}

function clickon(getvalue) {
    switch (getvalue) {
        case getvalue:
            prize = getvalue;
            document.getElementById("lblPrize").innerHTML = getvalue;
            var order = document.getElementById("order");
    }
}
function OrderClick() {
    document.getElementById("lblPrize").innerHTML = prize;
}






