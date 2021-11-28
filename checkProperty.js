var myObj = {
  "name":"sahil",
  "sex":"male",
  "age":28
};
function toCheckObject(checkProperty){
    debugger;
   if(myObj.hasOwnProperty(checkProperty))
   {
       return myObj[checkProperty];
   }
   return "Not Found";
}

console.log(toCheckObject("age"));