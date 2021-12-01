
var a = 10;
{
    var a = 20;
    console.log(a);//a inside blocked has shadowed outside a
}
//a inside block has also modified outside a
console.log(a);