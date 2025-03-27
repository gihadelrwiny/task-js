var x=document.querySelector(".classes-to-add");
var y=document.querySelector(".classes-to-remove");
var k=document.querySelector(".classes-list")

x.addEventListener("blur",function(){
    if(x.value!==""){
       var arr=x.value.split(" ");
       for(var i=0;i<arr.length;i++){
        if (arr[i].trim() !== "") {            
            k.innerHTML+=`<span class="class-box">${arr[i]}</span>  `
        }
       }
    }
    x.value="";
})
y.addEventListener("blur",function(){
    if(y.value!==""){
       var arr=y.value.trim().split(" ");
       var spans = k.querySelectorAll("span"); 
       for(var i=0;i<arr.length;i++){
        if (arr[i].trim() !== "") {      
            
            for(var j=0;j<spans.length;j++){
                if(spans[j].textContent===arr[i]){
                    spans[j].remove();
                }
            }
        }
       }
    }
    y.value="";
})
