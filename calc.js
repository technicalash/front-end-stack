let a = document.getElementById("btn1");
a.addEventListener('click',function(){
    const element = document.querySelector('.screen');
    element.innerHTML += a.innerHTML;
})
let b = document.getElementById("btn2");
b.addEventListener('click',function(){
    const element = document.querySelector('.screen');
    element.innerHTML += b.innerHTML;
})
let c = document.getElementById("btn3");
c.addEventListener('click',function(){
    const element = document.querySelector('.screen');
    element.innerHTML += c.innerHTML;
})
let d = document.getElementById("btn4");
d.addEventListener('click',function(){
    const element = document.querySelector('.screen');
    element.innerHTML += d.innerHTML;
})
let e = document.getElementById("btn5");
e.addEventListener('click',function(){
    const element = document.querySelector('.screen');
    element.innerHTML += e.innerHTML;
})
let f = document.getElementById("btn6");
f.addEventListener('click',function(){
    const element = document.querySelector('.screen');
    element.innerHTML += f.innerHTML;
})
let g = document.getElementById("btn7");
g.addEventListener('click',function(){
    const element = document.querySelector('.screen');
    element.innerHTML += g.innerHTML;
})
let h = document.getElementById("btn8");
h.addEventListener('click',function(){
    const element = document.querySelector('.screen');
    element.innerHTML += h.innerHTML;
})
let i = document.getElementById("btn9");
i.addEventListener('click',function(){
    const element = document.querySelector('.screen');
    element.innerHTML += i.innerHTML;
})
let j = document.getElementById("btn0");
j.addEventListener('click',function(){
    const element = document.querySelector('.screen');
    element.innerHTML += j.innerHTML;
})
let ml = document.getElementById("btn_mul");
ml.addEventListener('click',function(){
    const element = document.querySelector('.screen');
    element.innerHTML += ml.innerHTML;
})
let ad = document.getElementById("btn_add");
ad.addEventListener('click',function(){
    const element = document.querySelector('.screen');
    element.innerHTML += ad.innerHTML;
})
let sb = document.getElementById("btn_sub");
sb.addEventListener('click',function(){
    const element = document.querySelector('.screen');
    element.innerHTML += sb.innerHTML;
})
let dv = document.getElementById("btn_div");
dv.addEventListener('click',function(){
    const element = document.querySelector('.screen');
    element.innerHTML += dv.innerHTML;
})
let dc = document.getElementById("btn_dec");
dc.addEventListener('click',function(){
    const element = document.querySelector('.screen');
    element.innerHTML += dc.innerHTML;
})
//operations//
let ans=document.getElementById("btn_answr");
ans.addEventListener('click',function(){
    let strr="";
    const element = document.querySelector('.screen');
    let convert_strr=String(element.innerHTML);
    strr=strr+convert_strr;
    try {element.innerHTML=eval(strr)}
    catch (error){
        element.textContent=error.message;
    }
})
let cl=document.getElementById("btn_clr");
cl.addEventListener('click',function(){
    const element = document.querySelector('.screen');
    element.innerHTML="";
})

