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
// var x = document.querySelector(".classes-to-add");
// var y = document.querySelector(".classes-to-remove");
// var k = document.querySelector(".classes-list");

// x.addEventListener("blur", function () {
//     if (x.value.trim() !== "") {
//         var arr = x.value.trim().split(" ");
//         for (var i = 0; i < arr.length; i++) {
//             if (arr[i].trim() !== "") {
//                 k.innerHTML += `<span class="class-box">${arr[i]}</span> `;
//             }
//         }
//     }
//     x.value = ""; // تصفير الإدخال بعد الإضافة
// });

// y.addEventListener("blur", function () {
//     if (y.value.trim() !== "") {
//         var arr = y.value.trim().split(" ");
//         var spans = k.querySelectorAll("span"); // جلب جميع عناصر `span`
        
//         for (var i = 0; i < arr.length; i++) {
//             if (arr[i].trim() !== "") {
//                 for (var j = 0; j < spans.length; j++) {
//                     if (spans[j].textContent.trim() === arr[i].trim()) {
//                         spans[j].remove(); // حذف العنصر إذا تطابق النص
//                     }
//                 }
//             }
//         }
//     }
//     y.value = ""; // تصفير الإدخال بعد الإزالة
// });