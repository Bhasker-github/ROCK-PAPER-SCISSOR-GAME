userscore=0;
compscore=0;
const a=document.querySelectorAll("button");
const e=document.querySelector(".r");
const f=document.querySelector("#res");
const g=document.querySelector("#res1");
a.forEach((l)=>{
    l.onclick=()=>{
        const t1=l.getAttribute("id");
        userchoice(t1);
    }
})
const b=userchoice=(t1)=>{
    let t=["rock","paper","scissor"];
    const c=Math.floor((Math.random())*3);
    const compchoice=t[c];
    if(t1===compchoice){
        e.innerText="Match is draw";
        e.style.background="orange";
    }
    else{
        user=true;
        if(t1==="rock"){
             user=compchoice==="paper"?false:true;
             
        }
        else if(t1=="paper"){
            user=compchoice==="rock"?true:false;
        }else{
            user=compchoice==="paper"?false:true;
        }
        showres(user,t1,compchoice);
    }
    
}
const d=showres=(user,t1,compchoice)=>{
if(user==true){
    userscore++;
    f.innerText=userscore;
    e.innerText=`You win! ${t1} beats ${compchoice}`;
    e.style.background="green";
}
else{
    compscore++;
    g.innerText=compscore;
    e.innerText=`You lost! ${compchoice} beats ${t1}`;
    e.style.background="red";
}
}