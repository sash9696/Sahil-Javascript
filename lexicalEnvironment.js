
var b = 4;

function a(){
    console.log(b); //a() is lexically inside Global Execution Context
    c();
    function c(){ //c() is lexically inside a function
        console.log(b);
        d();
        function d(){ //d() is lexically inside c()
            console.log(b);
        }
    }
}
a();
console.log(b);
// the whole chain from when b was looked inside d() till getting value of  b grom GEC is called scope chain