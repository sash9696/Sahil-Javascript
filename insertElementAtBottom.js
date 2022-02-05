class Stack{
    constructor(){

        this.items = [] //to store data
        this.count = 0 //to check the position of the element
    }
    push(element){
        //add elements to the top of the stack
        this.items[this.count] = element
        console.log(`${element} is added to ${this.count}`)
        this.count += 1
        return
        
    }
    

    pop(){
        //remove elements from top
        if(this.isEmpty()){
            throw new Error("Stack Underflow")
        }
            let deleteItem = this.items[this.count - 1]
            this.count -= 1
            console.log(`${deleteItem} is deleted`)
            // return this.items.pop()
        
    }
    peek(){
        //check the top element in the stack
        return (this.items[this.count - 1])
    }
    isEmpty(){
        //stack is empty or not
        return this.count == 0
    }
    size(){
        return this.count
    }
    print(){
        let str = ''
        for(let i = 0; i < this.count; i++){
            str += this.items[i] + " "
        }
        console.log(str)
    }
    clear(){
        this.items = []
        this.count = 0
        console.log("Stack is Cleared")
    }
}

let stack = new Stack()

stack.push(100)
stack.push(200)
stack.push(300)



function insertElementAtBottom(stack, value) {
  
    if (stack.isEmpty()) {
        stack.push(value);
        return;
      }
    
      const tmp = stack.peek();
    //   console.log('tmp',tmp)
    //   console.log(tmp)
      stack.pop();
      insertElementAtBottom(stack, value);
      stack.push(tmp);
      return;
    }
insertElementAtBottom(stack, 0)
console.log(stack)

//O(n) Time complexity
   