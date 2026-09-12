let num=1;
document.getElementById("num").innerText = num;
document.getElementById("addbtn").addEventListener("click", function() {
    num=num+10;
    document.getElementById("num").style.marginLeft= num + "px";
}

);
document.getElementById("subbtn").addEventListener("click", function() {
    if(num>=1){
        num=num-10;
    }
    
    document.getElementById("num").style.marginLeft= num + "px";
    
}
);
