var b = 2;
function a(){
    
    c();
    function c(){
        console.log(b);
    }
}
a();
console.log(b);